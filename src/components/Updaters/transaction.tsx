import { useEffect } from "react";

export interface SerializableTransactionReceipt {
  to: string;
  from: string;
  contractAddress: string;
  transactionIndex: number;
  blockHash: string;
  transactionHash: string;
  blockNumber: number;
  status?: number;
}

interface TxInterface {
  addedTime?: number;
  receipt?: SerializableTransactionReceipt;
  lastCheckedBlockNumber?: number;
}

export interface TransactionDetails extends TxInterface {
  chainId: number;
  hash: string;
  approval?: { tokenAddress: string; spender: string };
  summary?: string;
  claim?: { recipient: string };
  confirmedTime?: number;
  blockNumber?: number;
  from?: string;
}

export function shouldCheck(lastBlockNumber: number, tx: TxInterface): boolean {
  if (tx.receipt) return false;
  if (!tx.lastCheckedBlockNumber) return true;
  const blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber;
  if (blocksSinceCheck < 1) return false;
  const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;
  if (minutesPending > 60) {
    // every 10 blocks if pending for longer than an hour
    return blocksSinceCheck > 9;
  } else if (minutesPending > 5) {
    // every 3 blocks if pending more than 5 minutes
    return blocksSinceCheck > 2;
  } else {
    // otherwise every block
    return true;
  }
}

export interface ProviderLike {
  getTransactionReceipt: (
    hash: string
  ) => Promise<SerializableTransactionReceipt>;
}

export interface TransactionsUpdaterProps {
  /**
   * 在 交易 确认的时候调用
   */
  onTransactionConfirm: (response: TransactionDetails) => void;
  onTransactionChecked: (response: TransactionDetails) => void;
  onTransactionError: (error: Error) => void;
  transactions: Record<string, TransactionDetails>;
  lastBlockNumber?: number;
  chainId: number;
  library: ProviderLike;
}

export default function TransactionUpdater({
  onTransactionConfirm,
  onTransactionChecked,
  onTransactionError,
  transactions,
  lastBlockNumber,
  chainId,
  library,
}: TransactionsUpdaterProps): null {
  useEffect(() => {
    if (!chainId || !library || !lastBlockNumber) return;

    Object.keys(transactions)
      .filter((hash) => shouldCheck(lastBlockNumber, transactions[hash]))
      .forEach((hash) => {
        library
          .getTransactionReceipt(hash)
          .then((receipt) => {
            if (receipt) {
              onTransactionConfirm({
                chainId,
                hash,
                receipt: {
                  blockHash: receipt.blockHash,
                  blockNumber: receipt.blockNumber,
                  contractAddress: receipt.contractAddress,
                  from: receipt.from,
                  status: receipt.status,
                  to: receipt.to,
                  transactionHash: receipt.transactionHash,
                  transactionIndex: receipt.transactionIndex,
                },
              });
            } else {
              onTransactionChecked({
                chainId,
                hash,
                blockNumber: lastBlockNumber,
              });
            }
          })
          .catch((error) => {
            console.error(`failed to check transaction hash: ${hash}`, error);
            onTransactionError(error);
          });
      });
  }, [
    chainId,
    library,
    transactions,
    lastBlockNumber,
    onTransactionConfirm,
    onTransactionChecked,
    onTransactionError,
  ]);

  return null;
}

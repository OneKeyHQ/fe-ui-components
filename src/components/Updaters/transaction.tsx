import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

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
   * 在交易确认的时候调用
   */
  onTransactionConfirm: (response: TransactionDetails) => void;
  /**
   * 在检查交易未被确认的时候调用
   */
  onTransactionChecked: (response: TransactionDetails) => void;
  /**
   * 在检查交易记录发送错误的时候调用
   */
  onTransactionError: (error: Error) => void;
  /**
   * { [hash]: tx } 类型的交易记录
   */
  transactions: Record<string, TransactionDetails>;
  /**
   * 最新的区块高度
   */
  lastBlockNumber?: number;
}

export default function TransactionUpdater({
  onTransactionConfirm,
  onTransactionChecked,
  onTransactionError,
  transactions,
  lastBlockNumber,
}: TransactionsUpdaterProps): null {
  const { library, chainId } = useWeb3React();

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

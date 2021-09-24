import React, { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  ProviderLike,
  SerializableTransactionReceipt,
  TransactionDetails,
  TransactionUpdater,
} from "../components";

export default {
  title: "DAPP/TransactionUpdater",
  component: TransactionUpdater,
} as ComponentMeta<typeof TransactionUpdater>;

const mockTransaction: TransactionDetails = {
  chainId: 1,
  hash: "amockhash",
};
const mockTransactions = { [mockTransaction.hash]: mockTransaction };
const mockReceipt: SerializableTransactionReceipt = {
  to: "string",
  from: "string",
  contractAddress: "string",
  transactionIndex: 0,
  blockHash: "string",
  transactionHash: "string",
  blockNumber: 0,
  status: 0,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockProvider: ProviderLike = {
  getTransactionReceipt() {
    return new Promise((resolve, reject) => {
      return Math.random() > 0.5
        ? resolve(mockReceipt)
        : reject("Mock error message");
    });
  },
};

export const Default: ComponentStory<typeof TransactionUpdater> = (args) => {
  const onConfirm = (tx: TransactionDetails) => {
    console.log("onConfirm", tx);
  };
  const onChecked = (tx: TransactionDetails) => {
    console.log("onChecked", tx);
  };
  const onError = (error: Error) => {
    console.log("onError", error);
  };

  const [blockNumber, setBlockNumber] = useState(1);

  useEffect(() => {
    const id = setInterval(() => setBlockNumber((n) => n + 1), 2000);
    return () => clearInterval(id);
  });

  return (
    <>
      <p>打开控制台查看 TransactionUpdater 返回的内容</p>
      <TransactionUpdater
        lastBlockNumber={blockNumber}
        transactions={mockTransactions}
        onTransactionChecked={onConfirm}
        onTransactionConfirm={onChecked}
        onTransactionError={onError}
        {...args}
      />
    </>
  );
};

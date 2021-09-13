import React, { useCallback } from "react";
import { FC } from "react";
import { ReactNode } from "react";
import { useState } from "react";

import { Button, Card, Icon } from "../components";
import Modal from "../components/Modal/Modal";
import ConfigBar from "./Base";

export default {
  title: "Views/GrowthHistoryModal",
};

interface HistoryCardProps {
  title?: ReactNode;
  action?: ReactNode;
  subtitle?: ReactNode;
  experience?: ReactNode;
}

export const GrowthHistoryModal = () => {
  const [experiences] = useState(666.233);
  const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false);
  const handleCloseQuestModal = useCallback(
    () => setIsHistoryModalVisible(false),
    [setIsHistoryModalVisible]
  );

  const HistoryCard: FC<HistoryCardProps> = ({
    title,
    action,
    subtitle,
    experience,
  }) => (
    <Card>
      <div className="sm:okd--mx-1 okd--my-3">
        <div className="okd-flex okd-justify-between okd-items-center okd-text-sm ">
          <p className="okd-justify-self-start">{title}</p>
          <p className="okd-justify-self-end">{action}</p>
        </div>
        <div className="okd-flex okd-justify-between okd-items-center okd-text-sm okd-font-normal okd-text-gray-400">
          <p className="okd-justify-self-start">{subtitle}</p>
          <p className="okd-justify-self-end okd-px-1.5">{experience}</p>
        </div>
      </div>
    </Card>
  );

  return (
    <>
      <ConfigBar />
      <Button onClick={() => setIsHistoryModalVisible(true)}>
        Open History Modal
      </Button>

      <Modal
        className="okd-w-auto"
        onClose={handleCloseQuestModal}
        visible={isHistoryModalVisible}
      >
        <Modal.Header
          title="Growth Value History"
          actions={
            <div className="okd-flex okd-w-5 okd-h-5 okd-items-center okd-justify-center">
              <Button
                circular
                type="plain"
                leadingIcon="QuestionMarkCircleSolid"
                className="okd-py-0"
              />
            </div>
          }
          onClose={handleCloseQuestModal}
        />
        <div className="okd-space-y-6 okd-px-4 sm:okd-px-6 okd-py-6">
          <h5 className="okd-text-gray-700">Total: {experiences} XP</h5>
          <div className="okd-space-y-2">
            <HistoryCard
              title={
                <div className="okd-inline-flex okd-space-x-1.5 okd-items-center okd-text-gray-700">
                  <p>Swap 1 ETH</p>
                  <Icon
                    name="ArrowNarrowRightSolid"
                    className="okd-text-gray-400 okd-w-4"
                  />
                  <p>2981.21 USDT</p>
                </div>
              }
              action={
                <Button
                  leadingIcon="RefreshSolid"
                  type="plain"
                  size="xs"
                  circular
                />
              }
              subtitle="2021.08.20 15:32"
              experience="---"
            />
            <HistoryCard
              title={
                <div className="okd-inline-flex okd-space-x-1.5 okd-items-center okd-text-gray-700">
                  <p>Swap 1 BTC</p>
                  <Icon
                    name="ArrowNarrowRightSolid"
                    className="okd-text-gray-400 okd-w-4"
                  />
                  <p>12 ETH</p>
                </div>
              }
              action={
                <Button
                  leadingIcon="RefreshSolid"
                  type="plain"
                  size="xs"
                  circular
                />
              }
              subtitle="2021.08.20 15:32"
              experience="+233 XP"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

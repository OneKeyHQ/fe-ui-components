import React, { useCallback } from "react";
import { useState } from "react";

import {
  LevelBadge,
  Card,
  Avatar,
  Address,
  Button,
  Progress,
  NFTStackedCard,
  Tooltip,
  Icon,
} from "../components";
import Modal from "../components/Modal/Modal";
import ConfigBar from "./Base";

export default {
  title: "Views/QuestModal",
};

export const Default = () => {
  const address = "0x8260d4AaC59452c54f350047dCb67827C5cE715a";

  const [isQuestModalVisible, setIsQuestModalVisible] = useState(false);
  const handleCloseQuestModal = useCallback(
    () => setIsQuestModalVisible(false),
    [setIsQuestModalVisible]
  );

  return (
    <>
      <ConfigBar />
      <Button onClick={() => setIsQuestModalVisible(true)}>
        Open Quest Modal
      </Button>

      <Modal
        className="okd-w-auto"
        onClose={handleCloseQuestModal}
        visible={isQuestModalVisible}
      >
        <Modal.Header
          title="Quests"
          actions={
            <div className="okd-flex okd-space-x-6">
              <div className="okd-flex okd-w-5 okd-h-5 okd-items-center okd-justify-center">
                <Button
                  circular
                  type="plain"
                  leadingIcon="QuestionMarkCircleSolid"
                />
              </div>
              <div className="okd-flex okd-w-5 okd-h-5 okd-items-center okd-justify-center">
                <Button circular type="plain" leadingIcon="ClockSolid" />
              </div>
            </div>
          }
          onClose={handleCloseQuestModal}
        />
        <div className="okd-space-y-6 okd-px-4 sm:okd-px-6 okd-py-6">
          <div className="okd-space-y-2">
            <div className="okd-flex okd-items-center okd-justify-between">
              <div className="okd-flex-shrink-0 okd-flex okd-items-center okd-space-x-2 okd-h-8">
                <Avatar address={address} />
                <Address
                  className="okd-text-black okd-text-sm okd-font-normal"
                  address={address}
                  short
                />
              </div>
              <LevelBadge level={1} />
            </div>
            <Progress value={300} max={600} hint />
          </div>

          <div className="okd-space-y-4">
            <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
              NFT Addition
            </h5>

            <NFTStackedCard
              className="okd-h-[160px]"
              title={
                <div className="okd-flex okd-items-end">
                  <p className="okd-text-gray-900 okd-text-4xl okd-font-semibold">
                    75
                  </p>
                  <p className="okd-text-gray-700 okd-text-sm okd-font-medium okd-ml-2 okd-leading-7">
                    XP / DAY
                  </p>
                </div>
              }
              subTitle={
                <p className="okd-text-gray-500 okd-text-xs okd-font-normal">
                  Cumulative: 675 XP
                </p>
              }
              action={<Button size="xs">View New NFT Pets →</Button>}
              sources={[
                "https://images.unsplash.com/photo-1628620222388-6f607cd43878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTE4MTczNA&ixlib=rb-1.2.1&q=80&w=1080",
                "https://source.unsplash.com/random",
                "https://images.unsplash.com/photo-1629757107799-d350c82e1663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTE4MTc2MA&ixlib=rb-1.2.1&q=80&w=1080",
                "https://images.unsplash.com/photo-1629511617783-dc852a6e3768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTE4MjU3MQ&ixlib=rb-1.2.1&q=80&w=1080",
                "https://images.unsplash.com/photo-1628499139581-739194851413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTE4MjU4NA&ixlib=rb-1.2.1&q=80&w=1080",
              ]}
            />
          </div>

          <div className="okd-space-y-4">
            <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
              Daily Quests
            </h5>

            <div className="okd-space-y-2">
              <Card>
                <div className="okd-flex okd-justify-between okd-items-center">
                  <div>
                    <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
                      Daily check in
                    </h5>
                    <h5 className="okd-text-gray-400 okd-text-sm okd-font-normal okd-leading-5">
                      Rewards: +2 XP
                    </h5>
                  </div>
                  <Button type="primary">Check in</Button>
                </div>
              </Card>

              <Card>
                <div className="okd-flex okd-justify-between okd-items-center">
                  <div>
                    <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
                      Daily first swap
                    </h5>
                    <div className="okd-inline-flex okd-items-center okd-space-x-1">
                      <p className="okd-text-gray-400 okd-text-sm okd-font-normal okd-leading-5">
                        Rewards: +xx XP
                      </p>
                      <Tooltip content="Swap rewards help content">
                        <Icon
                          name="QuestionMarkCircleSolid"
                          className="okd-text-gray-300"
                        />
                      </Tooltip>
                    </div>
                  </div>
                  <Button type="primary" disabled>
                    Swaped
                  </Button>
                </div>
              </Card>

              <Card>
                <div className="okd-flex okd-justify-between okd-items-center">
                  <div>
                    <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
                      Swap Tokens
                    </h5>
                    <div className="okd-inline-flex okd-items-center okd-space-x-1">
                      <p className="okd-text-gray-400 okd-text-sm okd-font-normal okd-leading-5">
                        Rewards: +0.05% swap value{" "}
                      </p>
                      <Tooltip content="Swap rewards help content">
                        <Icon
                          name="QuestionMarkCircleSolid"
                          className="okd-text-gray-300"
                        />
                      </Tooltip>
                    </div>
                  </div>
                  <Button type="primary">Go to Swap</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export const EmptyCase = () => {
  const address = "0x8260d4AaC59452c54f350047dCb67827C5cE715a";

  const [isQuestModalVisible, setIsQuestModalVisible] = useState(false);
  const handleCloseQuestModal = useCallback(
    () => setIsQuestModalVisible(false),
    [setIsQuestModalVisible]
  );

  return (
    <>
      <ConfigBar />
      <Button onClick={() => setIsQuestModalVisible(true)}>
        Open Quest Modal
      </Button>

      <Modal
        className="okd-w-auto"
        onClose={handleCloseQuestModal}
        visible={isQuestModalVisible}
      >
        <Modal.Header
          title="Quests"
          actions={
            <div className="okd-flex okd-space-x-6">
              <div className="okd-flex okd-w-5 okd-h-5 okd-items-center okd-justify-center">
                <Button
                  circular
                  type="plain"
                  leadingIcon="QuestionMarkCircleSolid"
                />
              </div>
              <div className="okd-flex okd-w-5 okd-h-5 okd-items-center okd-justify-center">
                <Button circular type="plain" leadingIcon="ClockSolid" />
              </div>
            </div>
          }
          onClose={handleCloseQuestModal}
        />
        <div className="okd-space-y-6 okd-px-4 sm:okd-px-6 okd-py-6">
          <div className="okd-space-y-2">
            <div className="okd-flex okd-items-center okd-justify-between">
              <div className="okd-flex-shrink-0 okd-flex okd-items-center okd-space-x-2 okd-h-8">
                <Avatar address={address} />
                <Address
                  className="okd-text-black okd-text-sm okd-font-normal"
                  address={address}
                  short
                />
              </div>
              <LevelBadge level={1} />
            </div>
            <Progress value={300} max={600} hint />
          </div>

          <div className="okd-space-y-4">
            <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
              NFT Addition
            </h5>

            <NFTStackedCard
              className="okd-h-[160px]"
              title={
                <div className="okd-flex okd-items-end">
                  <p className="okd-text-gray-900 okd-text-4xl okd-font-semibold">
                    0
                  </p>
                  <p className="okd-text-gray-700 okd-text-sm okd-font-medium okd-ml-2 okd-leading-7">
                    XP / DAY
                  </p>
                </div>
              }
              subTitle={
                <p className="okd-text-gray-500 okd-text-xs okd-font-normal">
                  Cumulative: 0 XP
                </p>
              }
              action={<Button size="xs">View My NFTs</Button>}
            />
          </div>

          <div className="okd-space-y-4">
            <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
              Daily Quests
            </h5>

            <div className="okd-space-y-2">
              <Card>
                <div className="okd-flex okd-justify-between okd-items-center">
                  <div>
                    <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
                      Daily check in
                    </h5>
                    <h5 className="okd-text-gray-400 okd-text-sm okd-font-normal okd-leading-5">
                      Rewards: +2 XP
                    </h5>
                  </div>
                  <Button type="primary">Check in</Button>
                </div>
              </Card>

              <Card>
                <div className="okd-flex okd-justify-between okd-items-center">
                  <div>
                    <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
                      Daily first swap
                    </h5>
                    <div className="okd-inline-flex okd-items-center okd-space-x-1">
                      <p className="okd-text-gray-400 okd-text-sm okd-font-normal okd-leading-5">
                        Rewards: +xx XP
                      </p>
                      <Tooltip content="Swap rewards help content">
                        <Icon
                          name="QuestionMarkCircleSolid"
                          className="okd-text-gray-300"
                        />
                      </Tooltip>
                    </div>
                  </div>
                  <Button type="primary" disabled>
                    Swaped
                  </Button>
                </div>
              </Card>

              <Card>
                <div className="okd-flex okd-justify-between okd-items-center">
                  <div>
                    <h5 className="okd-text-gray-700 okd-text-sm okd-font-medium okd-leading-5">
                      Swap Tokens
                    </h5>
                    <div className="okd-inline-flex okd-items-center okd-space-x-1">
                      <p className="okd-text-gray-400 okd-text-sm okd-font-normal okd-leading-5">
                        Rewards: +0.05% swap value{" "}
                      </p>
                      <Tooltip content="Swap rewards help content">
                        <Icon
                          name="QuestionMarkCircleSolid"
                          className="okd-text-gray-300"
                        />
                      </Tooltip>
                    </div>
                  </div>
                  <Button type="primary">Go to Swap</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

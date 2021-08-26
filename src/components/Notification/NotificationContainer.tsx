import React, { FC, useCallback, useEffect, Key } from 'react'
import Notification from './Notification'
import { useNotification } from './useNotification'
import { emitter, notificationDispatcher } from './utils'
import { Events, Position } from './types'

interface INotificationContainer {
  position?: Position
  delay?: number
}

const NotificationContainer: FC<INotificationContainer> = ({ position = 'bottom-left', delay }) => {
  const { notifications, dispatch } = useNotification()

  useEffect(() => {
    notificationDispatcher({ dispatch, delay })

    return () => {
      emitter.off()
    }
  }, [dispatch, delay])

  const onClose = useCallback((noticeKey: Key) => {
    emitter.emit(Events.HIDE, noticeKey)
  }, [])

  return (
    <div
      aria-live="assertive"
      className="okd-fixed okd-inset-0 okd-flex okd-items-end okd-px-4 okd-py-6 okd-pointer-events-none sm:okd-p-6 sm:okd-items-start okd-space-y-4"
    >
      <div className="okd-w-full okd-flex okd-flex-col okd-items-center okd-space-y-4 sm:okd-items-end">
        {notifications.map(notification => (
          <Notification
            key={notification.noticeKey}
            noticeKey={notification.noticeKey}
            {...notification}
            // 覆盖方法
            onClose={onClose}
            // Container 设为 null
            container={null}
          />
        ))}
      </div>
    </div>
  )
}

export default NotificationContainer

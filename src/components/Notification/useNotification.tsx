import { Key, useReducer } from 'react'

import { NotificationProps } from './Notification'

export type NotificationAction =
  | { type: 'ADD'; notification: NotificationProps }
  | { type: 'REMOVE'; noticeKey: Key }
  | { type: 'REMOVE_ALL' }

interface IState {
  notifications: NotificationProps[]
}

const initialState: IState = {
  notifications: [],
}

const notificationReducer = (state: IState, action: NotificationAction): IState => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        notifications: [...state.notifications, action.notification],
      }
    case 'REMOVE': {
      return {
        ...state,
        notifications: [...state.notifications.filter(notification => notification.noticeKey !== action.noticeKey)],
      }
    }
    case 'REMOVE_ALL':
      return {
        ...state,
        notifications: [],
      }
    default:
      throw new Error()
  }
}

export const useNotification = () => {
  const [state, dispatch] = useReducer(notificationReducer, initialState)
  return { ...state, dispatch }
}

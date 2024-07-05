import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (_, action) => {
    switch (action.type) {
    case 'ADD':
        return `anecdote ${action.payload.content} added!`
    case 'VOTE':
        return `you voted ${action.payload.content}!`
    case 'ERROR':
        return 'too shor anecdote, must have lenght 5 or more'
    default:
        return null
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispach] = useReducer(notificationReducer, null)

    return (
        <NotificationContext.Provider value={[notification, notificationDispach]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

export default NotificationContext
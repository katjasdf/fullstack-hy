import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setMessage(_, action) {
            return action.payload
        }
    }
})

export const setNotification = (message, time) => {
    return dispatch => {
        dispatch(setMessage(message))
        setTimeout(() => {
            dispatch(setMessage(null))
        }, 1000 * time)
    }
}

export const { setMessage } = notificationSlice.actions
export default notificationSlice.reducer
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterinForm from './components/FilteringForm'
import Notification from './components/Notification'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [])

    return (
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            <FilterinForm />
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    )
}

export default App
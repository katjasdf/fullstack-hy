import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createAnecdote, getAnecdotes, updateAnecdote } from './requests'
import { useNotificationDispatch } from './NotificationContext'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
    const queryClient = useQueryClient()
    const dispatch = useNotificationDispatch()

    const newAnecdoteMutation = useMutation(createAnecdote, {
        onSuccess: (newAnecdote) => {
            const anecdotes = queryClient.getQueryData('anecdotes')
            queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
            dispatch({ type: 'ADD', payload: { content: newAnecdote.content } })
            setTimeout(() => {
                dispatch({ type: null })
            }, 5000)
        },
        onError: () => {
            dispatch({ type: 'ERROR' })
            setTimeout(() => {
                dispatch({ type: null })
            }, 5000)
        }
    })

    const updateAnecdoteMutation = useMutation(updateAnecdote, {
        onSuccess: (updatedAnecdote) => {
            const anecdotes = queryClient.getQueryData('anecdotes')
            queryClient.setQueryData('anecdotes',
                anecdotes.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote)
            )
            dispatch({ type: 'VOTE', payload: { content: updatedAnecdote.content } })
            setTimeout(() => {
                dispatch({ type: null })
            }, 5000)
        }
    })

    const handleVote = (anecdote) => {
        const votedAnecdote = data.find(n => n.id === anecdote.id)
        const updatedAnecdote = {
            ...votedAnecdote,
            votes: anecdote.votes + 1
        }
        updateAnecdoteMutation.mutate(updatedAnecdote)
    }

    const { isLoading, isError, data, error } = useQuery('anecdotes', getAnecdotes)

    if (isLoading) {
        return <div>loading data...</div>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h3>Anecdote app</h3>

            <Notification />
            <AnecdoteForm newAnecdoteMutation={newAnecdoteMutation} />

            {data.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App

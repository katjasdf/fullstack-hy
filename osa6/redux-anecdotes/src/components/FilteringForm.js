import { useDispatch } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const FilterinForm = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(filterAnecdotes(event.target.value))
    }

    return (
        <div style={{ marginBottom: 10 }}>
            filter: <input onChange={handleChange}/>
        </div>
    )
}

export default FilterinForm
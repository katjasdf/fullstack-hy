import React from 'react'

const FilterForm = ({keyword, handleFiltering}) => {
    return (
        <form>
            <div>
                filter shown with:
                <input value={keyword} onChange={handleFiltering}/>
            </div>
        </form>
    )
}

export default FilterForm
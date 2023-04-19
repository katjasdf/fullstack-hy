const SearchForm = ({ keyword, handleSearch }) => {
    return (
        <form>
            <div>
                find coutries:
                <input value={keyword} onChange={handleSearch}/>
            </div>
        </form>
    )
}

export default SearchForm
import { useState, useEffect } from 'react'
import axios from 'axios'

import SearchForm from "./components/SearchForm"
import Results from './components/Results'

const App = () => {
	const [keyword, setKeyword] = useState('')
	const [countries, setCountries] = useState([])
    const [selected, setSelected] = useState(null)

	useEffect(() => {
		axios
			.get('https://restcountries.com/v3.1/all')
			.then(res => setCountries(res.data))
	}, [])

	const handleSearch = (event) => {
        setKeyword(event.target.value)
        setSelected(null)
    }

    const countryList = keyword === ''
        ? countries
        : countries.filter(country => country.name.common.toLowerCase().includes(keyword.toLowerCase()))

	return (
		<div>
			<SearchForm
				keyword={keyword}
				handleSearch={handleSearch}
			/>
			<Results
				countryList={countryList}
                selected={selected}
                setSelected={setSelected}
			/>
		</div>
	)
}

export default App
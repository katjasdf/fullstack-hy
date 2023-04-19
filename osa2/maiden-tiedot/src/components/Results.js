import CurrentWeather from "./CurrentWeather"

const Results = ({ countryList, selected, setSelected }) => {

    if (countryList.length > 10) {
        return 'Too many matches, specify'
    } if (countryList.length <= 10 && countryList.length > 1 && !selected) {
        return (
            <div>
                {countryList.map(country =>
                    <div key={country.name.common}>
                        {country.name.common}
                        <button onClick={() => setSelected(country)}>show</button>
                    </div>
                )}
            </div>
        )
    } if (countryList.length === 1 || !!selected) {
        const country = selected || countryList[0]

        return (
            <div>
                <h2>{country.name.common}</h2>
                <div>capital: {country.capital}</div>
                <div>area: {country.area}</div>

                <h3>Languages</h3>
                {Object.values(country.languages).map((language, key) => (
                    <li key={key}>{language}</li>
                ))}

                <h3>Flag</h3>
                <img src={country.flags.png} alt={country.flags.alt} />

                <CurrentWeather latlng={country.latlng}/>
            </div>
        )
    } else return null

}

export default Results
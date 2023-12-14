// Uses Async Paginate package

// Search function

import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);
    
    const loadOptions = (inputValue) => {

        // Creates a GET request to the GEO API url (+ some filters) on the given inputValue (i.e. the user input into search bar)
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )

        // Parses response as json : Visible using Network -> Response on webpage
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,  // retrieves longitude and latitude from API's response
                label: `${city.name}, ${city.countryCode}`,   // ditto with city name & country identifer
              };
            }),
          };
        });
    };
    
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600} // timeout for search key press
            value={search}
            onChange={handleOnChange} // fetch weather data and pass to widgets
            loadOptions={loadOptions}
        />
    );
};

export default Search;
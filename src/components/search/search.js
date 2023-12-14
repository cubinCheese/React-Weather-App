// Uses Async Paginate package

// Search function

import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
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
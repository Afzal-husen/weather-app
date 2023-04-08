import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_URL, geoApiOptions } from "../../fetchAPI.js";

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);
  // console.log(search)

  const loadOptions = async (inputValue) => {
    const fetchedData = await fetch(
      `${GEO_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions,
    );
    const resJSON = await fetchedData.json();
    const cities = resJSON.data.map((city) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      };
    });

    return {
      options: cities,
    };
  };

  const handleChange = (searchData) => {
    onSearchChange(searchData)
    setSearch(searchData);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="search for the city..."
        onChange={handleChange}
        debounceTimeout={600}
        loadOptions={loadOptions}
        value={search}
      />
    </div>
  );
};

export default Search;

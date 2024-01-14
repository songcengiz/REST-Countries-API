import { useLoaderData } from 'react-router-dom';
import CountriesItem from './CountriesItem';

function Countries({ darkMode }) {
  const countries = useLoaderData();

  return (
    <>
      {countries.length ? (
        <ul className="grid grid-flow-row gap-16 px-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:px-0 xl:grid-cols-4">
          {countries.map((country) => (
            <CountriesItem
              key={country.cca3}
              country={country}
              darkMode={darkMode}
            />
          ))}
        </ul>
      ) : (
        <p>
          <i>No countries!!!</i>
        </p>
      )}
    </>
  );
}

export default Countries;

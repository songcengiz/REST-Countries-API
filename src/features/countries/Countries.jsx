import { redirect, useLoaderData } from 'react-router-dom';
import {
  getCountries,
  getCountry,
  getFilterCountries,
} from '../../services/apiRestCountries';

import CountriesItem from './CountriesItem';

function Countries({ darkMode }) {
  const countries = useLoaderData();

  return (
    <>
      {countries.length ? (
        <ul className="grid grid-flow-row gap-16 px-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
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
export async function loader({ request }) {
  const countries = await getCountries();
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get('name');
  let filterTerm = url.searchParams.get('region');

  if (searchTerm) return getCountry(searchTerm);
  if (filterTerm) return getFilterCountries(filterTerm);
  if (filterTerm === 'all') return redirect('/');
  if (!searchTerm || !filterTerm) return countries;
}

export default Countries;

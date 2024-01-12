import Countries from '../features/countries/Countries';
import FilterCountries from '../features/countries/FilterCountries';
import SearchCountries from '../features/countries/SearchCountries';

function Home({ darkMode }) {
  return (
    <div>
      <div className="m-auto md:my-14 px-9 lg:px-0">
        <div className="grid flex-1 grid-rows-2  justify-between gap-11 lg:flex">
          <SearchCountries darkMode={darkMode} />
          <FilterCountries darkMode={darkMode} />
        </div>
      </div>

      <Countries darkMode={darkMode} />
    </div>
  );
}

export default Home;

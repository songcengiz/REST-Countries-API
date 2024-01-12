import Countries from '../features/countries/Countries';
import FilterCountries from '../features/newOverview/FilterCountries';
import SearchCountries from '../features/newOverview/SearchCountries';

function Home({ darkMode }) {
  return (
    <div>
      <div className="m-auto px-9 md:my-14 lg:px-0">
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

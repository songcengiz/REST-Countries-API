import { Form } from 'react-router-dom';
import searchIcon from '../../img/icon-search.svg';
function SearchCountries({ darkMode }) {
  return (
    <Form method="GET">
      <div className="absolute">
        <img
          className="relative -bottom-7 left-6"
          src={searchIcon}
          alt="search"
        />
        <input
          className={`rounded-md px-14 py-2.5 pr-40 shadow-md ${
            darkMode
              ? 'border-slate-900 bg-slate-800  text-slate-300 valid:bg-slate-800 focus:bg-slate-900 '
              : 'border-2 bg-slate-100  text-slate-900'
          }`}
          aria-label="search products"
          type="text"
          name="name"
          placeholder="Search country name..."
        />
      </div>
    </Form>
  );
}

export default SearchCountries;

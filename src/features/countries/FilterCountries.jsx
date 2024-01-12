import { Form } from 'react-router-dom';

function FilterCountries({ darkMode }) {
  return (
    <Form method="get">
      <select
        name="region"
        className={`rounded-md px-2 py-2.5 shadow-md  ${
          darkMode
            ? 'border-slate-800 bg-slate-800 text-slate-300'
            : ' border-2 bg-slate-100 text-slate-900'
        }`}
      >
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <button
        className={`m-1 px-2 py-2.5 text-xs ${
          darkMode
            ? 'border-slate-800  text-slate-300 shadow-lg '
            : 'border-2 bg-slate-100 text-slate-800 shadow-sm'
        }`}
        type="submit"
      >
        Filter by Region
      </button>
    </Form>
  );
}

export default FilterCountries;

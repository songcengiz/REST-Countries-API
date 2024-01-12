import { Link } from 'react-router-dom';
import { formattedNumber } from '../../utils/helpers';

function CountriesItem({ country, darkMode }) {
  const { name, population, region, capital, flags, cca2, ccn3, cca3, cioc } =
    country;

  return (
    <li
      className={`my-8 rounded shadow-xl   hover:-translate-y-1 hover:duration-300  ${
        darkMode
          ? 'bg-slate-800 text-slate-300 '
          : 'bg-slate-100 text-slate-900 '
      }`}
    >
      <Link to={`/country/${ccn3 || cca2 || cca3 || cioc}`}>
        <img
          src={flags.png || flags.svg}
          alt={name.common}
          className=" h-fit w-full rounded-t-md object-fill lg:h-36"
        />

        <div className="m-6 p-3">
          <p className="pb-4 text-lg font-bold">{name.common}</p>
          <p>
            <span className="text-md ">Population: </span>
            <span className="text-xs">{formattedNumber(population)}</span>
          </p>
          <p>
            <span className="text-md  ">Region: </span>
            <span className="text-xs">{region}</span>
          </p>
          <p>
            <span className="text-md  ">Capital: </span>
            <span className="text-xs">{capital}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export default CountriesItem;

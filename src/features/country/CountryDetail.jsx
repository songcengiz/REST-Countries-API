import { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import {
  getCountries,
  getCountryDetail,
} from '../../services/apiRestCountries';
import {
  formatObject,
  formatObjectVal,
  formattedNumber,
} from '../../utils/helpers';
import CountryDetailItem from './CountryDetailItem';

function CountryDetail({ darkMode }) {
  const [countries, setCountries] = useState([]);
  const countryDetail = useLoaderData();
  const navigate = useNavigate();
  const {
    name: { nativeName, common },
    population,
    region,
    subregion,
    capital,
    flags: { png, svg, alt },
    tld,
    currencies,
    languages,
    borders,
  } = countryDetail.at(0);

  useEffect(() => {
    async function countries() {
      const data = await getCountries();
      setCountries(data);
    }
    countries();
  }, []);
  const borderCountries = countries.filter((c) =>
    borders?.includes(c.cioc || c.cca3),
  );
  const lang = () => {
    return (
      <ul className="inline-block ">
        {' '}
        {formatObjectVal(languages).map((lng, i) => (
          <li
            className="inline-block after:content-[','] last:after:content-none"
            key={i}
          >
            {lng}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div
      className={`p-9  lg:mt-1 lg:h-screen lg:px-0 lg:py-20  ${
        darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-100 text-slate-800'
      }`}
    >
      <button
        className={`mb-14  px-5 py-2 font-semibold shadow-xl ${
          darkMode
            ? 'border-slate-900 bg-slate-800 text-slate-300  hover:bg-slate-700 '
            : 'border-2 bg-slate-100 text-slate-900  hover:bg-slate-200'
        } `}
        onClick={() => navigate(-1)}
      >
        <span
          className={`pr-2 font-bold ${darkMode ? 'text-white' : 'text-black'}`}
        >
          &larr;
        </span>
        Back
      </button>
      {countryDetail ? (
        <div className="grid grid-rows-2  justify-between gap-20 lg:flex lg:justify-start lg:gap-20 ">
          <div className="shadow-lg">
            <img
              className="h-full w-full object-fill"
              src={png || svg}
              alt={alt}
            />
          </div>
          <div>
            <div>
              <h1
                className={`text-xl font-bold ${
                  darkMode ? 'text-slate-300' : 'text-black'
                }`}
              >
                {common}
              </h1>
              <div
                className={`justify-between gap-60 py-7  lg:flex ${
                  darkMode ? 'text-slate-300' : 'text-slate-800'
                }`}
              >
                <div>
                  <CountryDetailItem
                    subHeader="Native Name"
                    content={formatObject(nativeName).common}
                  />
                  <CountryDetailItem
                    subHeader="Population"
                    content={formattedNumber(population)}
                  />
                  <CountryDetailItem subHeader="Region" content={region} />
                  <CountryDetailItem
                    subHeader="Sub Region"
                    content={subregion}
                  />
                  <CountryDetailItem subHeader="Capital" content={capital} />
                </div>
                <div>
                  <CountryDetailItem
                    subHeader="Top Level Domain"
                    content={tld.at(0)}
                  />
                  <CountryDetailItem
                    subHeader="Currencies"
                    content={formatObject(currencies).name}
                  />
                  <CountryDetailItem subHeader="Languages" content={lang()} />
                </div>
              </div>
            </div>
            <div className="flex text-sm">
              <span
                className={`pr-2  font-semibold ${
                  darkMode ? 'text-slate-300' : 'text-slate-800'
                }`}
              >
                Border Countries:
              </span>
              {borderCountries.length > 0 ? (
                <ul className="flex gap-4">
                  {borderCountries.map((border) => (
                    <Link
                      key={border.cca3}
                      to={`/country/${
                        border.cioc || border.cca3 || border.ccn3
                      }`}
                    >
                      <li
                        className={`size-full  px-4 py-0.5    ${
                          darkMode
                            ? 'border-slate-900 bg-slate-800 text-slate-50  hover:bg-slate-700 '
                            : ' border-4 bg-slate-100 text-slate-800  hover:bg-slate-300 '
                        }}`}
                        key={border.cca3}
                      >
                        {border.name.common}
                      </li>
                    </Link>
                  ))}
                </ul>
              ) : (
                <p>
                  No country bordering <strong>{`${common}`}</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Couldnot find country😥</p>
      )}
    </div>
  );
}
export default CountryDetail;



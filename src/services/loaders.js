import {
  getCountries,
  getCountry,
  getCountryDetail,
  getFilterCountries,
} from './apiRestCountries';

export async function loaderCountries({ request }) {
  const countries = await getCountries();
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get('name');
  let filterTerm = url.searchParams.get('region');

  if (searchTerm) return getCountry(searchTerm);
  if (filterTerm) return getFilterCountries(filterTerm);
  if (!searchTerm || !filterTerm) return countries;
}
export async function loaderCountryDetail({ params }) {
  const countryDetail = await getCountryDetail(params.alpha);
  return countryDetail;
}

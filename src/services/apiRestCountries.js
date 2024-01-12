const API_URL = "https://restcountries.com/v3.1";

export async function getCountries() {
  const res = await fetch(`${API_URL}/all`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting countries");

  const data = await res.json();
  return data;
}

export async function getCountry(countryName) {
  const res = await fetch(`${API_URL}/name/${countryName}`);
  if (!res.ok) throw Error(`Couldn't find ${countryName}`);

  const data = await res.json();
  return data;
}

export async function getFilterCountries(region) {
  const res = await fetch(`${API_URL}/region/${region}`);
  if (!res.ok) throw Error(`Couldn't find #${region}`);

  const data = await res.json();
  return data;
}
export async function getCountryDetail(code) {
  const res = await fetch(`${API_URL}/alpha/${code}`);
  if (!res.ok) throw Error(`Couldn't find contry #${code}`);

  const data = await res.json();
  return data;
}

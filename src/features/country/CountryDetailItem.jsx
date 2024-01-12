function CountryDetailItem({ subHeader, content }) {
  return (
    <p className="pb-1 ">
      <span className="pr-1 text-md font-semibold">{subHeader}:</span>
      <span className="text-sm"> {content}</span>
    </p>
  );
}

export default CountryDetailItem;

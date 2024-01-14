function CountryDetailItem({ subHeader, content }) {
  return (
    <h2 className="pb-1 ">
      <span className="pr-1 text-md font-semibold">{subHeader}:</span>
      <span className="text-sm"> {content}</span>
    </h2>
  );
}

export default CountryDetailItem;

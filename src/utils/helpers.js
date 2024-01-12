export function formattedNumber(number) {
  const formattedNumber = number.toLocaleString('en-US');
  return formattedNumber;
}

export function formatObject(params) {
  const objectValue = Object.values(params).at(0);
  return objectValue;
}
export function formatObjectVal(params) {
  const objectValue = Object.values(params);
  return objectValue;
}

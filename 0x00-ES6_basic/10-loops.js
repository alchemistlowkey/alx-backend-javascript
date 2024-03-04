export default function appendToEachArrayValue(array, appendString) {
  const newValue = []
  for (const value of array) {
    newValue.push(appendString + value);
  }

  return array;
}

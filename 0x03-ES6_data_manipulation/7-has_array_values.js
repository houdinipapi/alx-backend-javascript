function hasValuesFromArray(set, array) {
  // Check if every element in the array exists in the Set
  return array.every((element) => set.has(element));
}

export default hasValuesFromArray;

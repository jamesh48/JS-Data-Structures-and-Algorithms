const iCantBelieveItCanSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

export default iCantBelieveItCanSort;

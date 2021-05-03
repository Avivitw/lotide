const middle = function(array) {
  //check the length of tha array if length is < 2 return an empty array
  //check if the length of array is odd or even

  const arrLength = array.length;
  if (arrLength <= 2) {
    return [];
  } else if (arrLength % 2 !== 0) {
    let midd = Math.floor(arrLength / 2);
    return array[midd];
  } else {
    let midd = (arrLength / 2) - 1;
    return array.slice(midd, midd + 2);

  }
};


module.exports = middle;

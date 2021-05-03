const tail = function(array) {

  if (Array.isArray(array) && array.length > 0) {
    let arrayTail = array.slice(1);
    return arrayTail;
  }

  return [];
};

module.exports = tail;
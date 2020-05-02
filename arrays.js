var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(oldArr, element){
  var newArr = oldArr;
  newArr.unshift(element);
  return newArr;
}

function destrucivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr;
}
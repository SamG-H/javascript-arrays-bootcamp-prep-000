var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(oldArr, element){
  var newArr = oldArr;
  return newArr.unshift(element);
}

function destrucivelyAddElementToBeginningOfArray(arr, element){
  return arr.unshift(element)
}
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(oldArr, element){
  var newArr = [element, ...oldArr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr;
}

function addElementToEndOfArray(oldArr, element){
  var newArr = [...oldArr, element];
  return newArr;
}

destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element)
  return arr;
}
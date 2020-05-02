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

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element)
  return arr;
}

function accessElementInArray(arr, index)
{
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
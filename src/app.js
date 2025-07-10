/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num)
{
  if(num === 0 || num === 1)
    return 1;
  else
  {
    return num*findFactorial(num - 1);
  }
}

//Exercise 2
const reverseString = function(str, result) 
{
  if(str.length === 0)
  {
    return result;
  }
  else
  {
    result += str[str.length - 1];
    return reverseString(str.slice(0, str.length - 1) ,result);
  }
}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2)
{
  if(arr1.length === 0)
    return;
  else
  {
    arr2.push(arr1[0]);
    arr1.shift();
    swap(arr1,arr2);
  }
}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }
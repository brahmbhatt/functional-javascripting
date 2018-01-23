//module.exports =
function doubleAll(arr)
{
  a = arr.map(fun);
  return a;
}

function fun(num)
{
  return 2 * num ;
}

function isEqualArray(arr1 , arr2)
{
  if(arr1.length !== arr2.length)
    return false;

  for(i = 0 ; i < arr1.length ; i++)
  {
    if(arr1[i] !== arr2[i])
      return false;
  }

  return true;
}
console.log(doubleAll([1,2,3]));
console.log(isEqualArray(doubleAll([1,2,3]) , [2,4,6]));

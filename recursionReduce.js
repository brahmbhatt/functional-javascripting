
let count = 0;
function add(pre, curr, index, arr)
{
  if(index % 2 === 0)
  {
    pre = pre + curr;
  }
  count++;
  return pre;
}

function inner(pre, curr , index, arr)
{
  //console.log("coming");
  count++;
  return pre+curr;

}
module.exports = function reduce(arr, inner, initialValue)
{
  let pre = initialValue;
  if(arr.length === 0 || count >= arr.length)
  {
    count = 0;
    return initialValue;
  }
  else {
    let current = arr[count];
    initialValue = inner(pre, current, count, arr);
    count++;
    return reduce(arr, inner, initialValue);
  }

}

// console.log(reduce([1,2,3], inner, 0));

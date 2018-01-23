module.exports = function reduce(arr, fn, initial) {
  let prev = initial;
  if(arr.length===0){
    return initial;
  }else{
    let curr = arr[0];
    initial = add(prev,curr)
    return reduce(arr.slice(1),fn,initial)
  }

}

function add(pre, curr)
{
  return pre+curr;
}

function count(pre, current) {
  if(!pre[current])
  {
    pre[current] = 1;
  }
  else
  {
    pre[current] += 1;
  }

  return pre;
}

// console.log(reduce([1,2,3], add, 0)===6)
//
// console.log(reduce([], add, 0)===0)
//
// let input = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
// console.log(reduce(input, count, {}));

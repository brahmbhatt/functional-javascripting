//module.exports =
function inputWords(arr)
{
  let result = {};
  //reduce function atleast needs two parameteres
  //callback function and initial value

  //the callback function needs two parameteres
  //previous value and current value(this reduce will provide)
  arr.reduce(fun , result );
  return result;
}

function fun(pre , current)
{
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

function equalObject(obj1 , obj2)
{
  for(let x in obj1)
  {
    if(obj1[x] !== obj2[x])
    {
      return false;
    }
  }

  return true;
}

let input = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
console.log(equalObject(inputWords(input) , {Apple:2 , Banana:1 , Durian:3}));

//console.log(equalObject(inputWords([])) , {});
//console.log(inputWords([]));

console.log(equalObject({} , {}));

console.log(equalObject({} , {Apple:1}) === false);

console.log(equalObject({Apple:1} , {Banana:2}) === false);

console.log(equalObject({Apple:1} , {Apple:2}) === false);

const curry = require('./currying');
function fn(arr)
{
  return arr.reduce((pre,current) => pre+current, 0);
}
let curryC = curry(fn,3);
let curryB = curryC(6);
let curryA = curryB(3);

test('curry function with 3 arguments', function(){
  expect(curryA(2)).toBe(11);
});

test('curry function with 3 arguments', function(){
  expect(typeof(curryA(2))).toBe('number');
});

function fn2(arr)
{
  return arr.map((current) => current.charAt(0));
}

let str=curry(fn2,2);
let str1 = str('margi');
test('curry function with 2 arguments', function(){
  expect(str1('brahmbhatt')).toEqual(['m','b']);
});

let str2 = curry(fn2, 2);
let str3= str2('');
test('curry function with 2 arguments', function(){
  expect(str3('brahmbhatt')).toEqual(['','b']);
});

str4 = curry(fn2, 1);
test('curry function with 1 argument', function(){
  expect(str4('')).toEqual(['']);
});

// str5 = curry(fun2);
// test('curry function with 1 argument', function(){
//   expect(str5()).toEqual([]);
// });

// function curryN(fn, n) {
//   if(typeof n !== 'number') n = fn.length;
//
//   function genCurry(prev) {
//     return function(arg) {
//       let args = prev.concat(arg);
//       if(args.length < n) return genCurry(args);
//       return fn.apply(this, args);
//
//
//     };
//   }
//
//   return genCurry([]);
//
//
// }
//
// module.exports = curryN;


function curryN(fn, n){
  if(typeof n!= 'number')
    n = fn.length;
  function abc(pre){
    return function(arg) {
      pre.push(arg);
      if(pre.length < n)
        return abc(pre);
      //console.log('end pre=', pre);
      return fn(pre);
    };
  }
  return abc([]);
}

module.exports = curryN;

function fn(arr)
{
  //console.log('inside fn arr=',arr);
  return arr.reduce((pre,current) => pre+current, 0);
}

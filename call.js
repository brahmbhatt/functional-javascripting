function duckCount()
{
  return Array.prototype.filter.call(arguments,checkProperty).length;
}
function checkProperty(arg) {
  return Object.prototype.hasOwnProperty.call(arg, 'quack');
}
module.exports = duckCount
// console.log(checkProperty({quack:1}));
// console.log(checkProperty({}) === false);
// console.log(checkProperty({quack:2 , q:3}));

// console.log(duckCount({quack:1} , {quack:1 , lol:2} , {} , {lol:3}) === 2);
// console.log(duckCount({}) === 0);
// console.log(duckCount({lol:5}) === 0);
// console.log(duckCount(Object.create({quack:9})) === 0);

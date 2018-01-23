function repeat(operation, num) {
  if (num <= 0) return

  return function() {
    operation()
    return repeat(operation, --num)
  }
}

function trampoline(fn) {
  let a = 1;
  while (fn && typeof fn === 'function') {
    console.log("a:" , a);
    fn = fn();
    a++;
  }
  console.log("lalalalala");
  return fn;
}

function main(operation, num) {
  return trampoline(function() {
    return repeat(operation, num)
  })
}
//module.exports = main;

function operation()
{
  console.log("hello");
}


main(operation,5);

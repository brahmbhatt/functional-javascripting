module.exports = function repeat(operation , num)
{
  if(num > 0)
  {
    operation();
    repeat(operation , num - 1);
  }

}
count = 0;

// function operation()
// {
//   count++;
// }
//
// repeat(operation, 1);
// console.log(count);

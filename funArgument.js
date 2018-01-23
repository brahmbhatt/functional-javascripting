function repeat(operation , num)
{
  if(num > 0)
  {
    operation();
    repeat(operation , --num);
  }
}

function operation()
{
  console.log("welcome"); 
}

repeat(operation , 5);

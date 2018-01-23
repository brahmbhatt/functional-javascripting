function fun1()
{
  console.log("a");
  setTimeout(function(){console.log("b")});
  console.log("c");
  setTimeout(function(){console.log("d")});
}
fun1();

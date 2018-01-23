//module.exports =
function getShortMessages(messages)
{
  result = messages.filter(funFilter);
  return result.map(funMap);

}

function funFilter(arr)
{
  if(arr.message.length < 5)
  {
    return true;
  }
}

function funMap(arr)
{
  return arr.message;
}

console.log(getShortMessages([{message:'hell'},{message:'hello world'}]));

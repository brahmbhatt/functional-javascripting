//module.exports =
function checkUsersValid(goodUsers)
{
  return function(giverUsers)
  {
    return giverUsers.every(x => goodUsers.some(y => y.id === x.id));
  }
}

let good = [
  { id: 2 },
  { id: 3 },
  { id: 1 }
];

let given = [
  { id: 1},
  { id: 2},
  { id: 4}
]

console.log(checkUsersValid(good)(given) === false);
console.log(checkUsersValid([])([]) === true);
console.log(checkUsersValid(good)([]) === true);
console.log(checkUsersValid([])(given) === false);

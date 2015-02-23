// ES6: A simple block
{
  let privateKey = Math.random();

  var login = function (password) {
    return password === privateKey;
  };
}

console.log(login('hello'));

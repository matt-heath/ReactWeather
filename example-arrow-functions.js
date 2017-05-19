// var names = ['Matthew', 'Andrew', 'Julie'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name)); //shorthand way to do the same thing as above
//
// var returnMe = (name) => name + '!'; //whatever you put in the expression automatically gets returned
//
// console.log(returnMe('Matthew'));
//
// var person = {
//   name: 'Matthew',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// };
//
// person.greet();

//Challenge Area

function add (a,b) {
  return a + b;
}

var addExpressions = (a,b) => a + b;
console.log(addExpressions(10,20));

var addStatement = (a,b) => {
  return a+b;
};

console.log(addStatement(4,7));

console.log(add(1, 3));
console.log(add(9, 0));

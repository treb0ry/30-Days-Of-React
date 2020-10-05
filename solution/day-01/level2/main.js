const { countries } = require('./countries');
const { webTechs } = require('./web_techs');
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/\./g, '').replace(/,/g, '').split(' ');
console.log(text.length);
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (shoppingCart.indexOf('Meat') === -1) {
  shoppingCart.unshift('Meat');
}
console.log(shoppingCart);
if (shoppingCart.indexOf('Sugar') === -1) {
  shoppingCart.push('Sugar');
}
console.log(shoppingCart);
shoppingCart = shoppingCart.filter((item) => item !== 'Honey');
console.log(shoppingCart);
shoppingCart = shoppingCart.map((item) =>
  item === 'Tea' ? 'Green Tea' : item,
);
console.log(shoppingCart);

if (countries.indexOf('Ethiopia') === -1) {
  countries.push('Ethiopia');
} else {
  console.log('ETHIOPIA');
}
console.log(countries);
if (webTechs.indexOf('Sass') === -1) {
  webTechs.push('Sass');
  console.log(webTechs);
} else {
  console.log('Sass is a CSS preprocess');
}
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

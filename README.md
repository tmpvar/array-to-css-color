# array-to-css-color

convert an array to a css color string

## install

`npm install array-to-css-color`

## use

```javascript
var css = require('array-to-css-color');

console.log(css([0, 255, 0, 1], 'rgba')); //  'rgba(0, 255, 0, 1)'
console.log(css([0, 1.0, 1.0], 'hsla')); //  'hsla(0, 100%, 100%, 1)'
```

## license

[MIT](LICENSE.txt)

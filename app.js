const path = require ('path');
let pathObj = path.parse(__filename);

console.log(pathObj);

// output
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\Aboo Maaz\\Desktop\\Node js',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
  */
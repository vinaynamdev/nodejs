const x = {};
const y = {key: "y"};
const z = {key: "z"};

x[y] = 123;
x[z] = 456;

console.log(x[y]);  

// Just for fun

/* 
const fs = require('fs/promises');

(async function(path) {
  try {
    await fs.unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})

('/tmp/vinay'); // calling a function */


const fs = require('fs');

/* const data = fs.readFileSync("readme.txt", "utf-8");
console.log(data);
console.log("After The Data"); */

fs.readFile("readme.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("After The Data");
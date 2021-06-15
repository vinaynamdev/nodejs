const fs = require("fs");

/* creating a new file */

// fs.writeFileSync("readme.txt", "Welcome to my first Node.js Core Module ");

// fs.writeFileSync("readme.txt", "Welcome to my first Node.js Core Module Again ");

//fs.appendFileSync("readwrite.txt", "\r\n \r\nHello Vinay Namdev "); // \r\n use for new line

//const buf_data = fs.readFileSync("readme.txt");

//console.log(buf_data);
{/* <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 66 69 72 73 74 20 4e 6f 64 65 2e 6a 73 20 43 6f 72 65 20 4d 6f 64 75 6c 65 20 41 67 61 69 6e 20 48 65 6c 6c ... 13 more bytes> */}

// Node.js includes an additional data type called buffer while file read time
// (not available in browser's JavaScript)
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network.

// org_data = buf_data.toString();

// console.log(org_data);


// to rename the file 

//fs.renameSync("readme.txt", "readwrite.txt");



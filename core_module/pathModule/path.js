const path = require('path');

console.log(path.dirname("/media/vinay/ubantu disk/NodeJs/core_module/pathModule/path.js"));
console.log(path.extname("/media/vinay/ubantu disk/NodeJs/core_module/pathModule/path.js"));
console.log(path.basename("/media/vinay/ubantu disk/NodeJs/core_module/pathModule/path.js"));
const mypath = path.parse("/media/vinay/ubantu disk/NodeJs/core_module/pathModule/path.js");

console.log(mypath.name);
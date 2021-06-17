const fs = require('fs');

const bioData = {
    name : "Vinay Namdev",
    Age : 26,
    Designation : "Developer",
};

//console.log(bioData.name);

// const jsonData = JSON.stringify(bioData);

// const objData = JSON.parse(jsonData);
// console.log(objData.name);

// {"name":"Vinay Namdev","Age":26,"Designation":"Developer"}

// convert data in json

const jsonData = JSON.stringify(bioData);

// fs.writeFile('data.json', jsonData, (err) => {
//     console.log('File Create');
// });

fs.readFile("data.json", "utf-8", (err, data) => {
    const objData = JSON.parse(data);
    console.log(objData);
    console.log(data);

});



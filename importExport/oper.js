const add = (a,b) => {
    return a+b;
};
const sub = (a,b) => {
    return a-b;
};

const mult = (a,b) => {
    return a*b;
};

const name = "Vinay Namdev";

const star = (n) => {
    let i,j;
    for(i=1; i<=n; i++)
    {
        for(j=1; j<=i; j++)
        {
            console.log("*");
        }
    }
};

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;

module.exports = { add, sub, mult, name, star};
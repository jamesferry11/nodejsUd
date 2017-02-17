// var square = (x) => {
//     var result = x*x;
//     return result;
// };
// console.log(square(9)); ***this. will not be called in =>

var square = (x) => x*x;
console.log(square(9));

var user = {
    name: 'James',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1,2,3);
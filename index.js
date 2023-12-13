let arg = [
    {
        name: "John",
        age: 34
    },
     {
        name: "Adam",
        age: 15
    },    
    {
        name: "Doe",
        age: 21
    },    
    {
        name: "Alex",
        age: 76
    },
];

// 1-masala
// function arg() {
// let sum = 1;
// for (const element of arr) {
//     sum *= element.age
// };

// return sum;
// }
// console.log(arg());


//2-masala
// function arg() {
//     let arg = [];
//     for(const element of arr) {
//         if(arg.age >= 25) {
//             arg += `$(arg.age)`;
//         }
//     }
//     return arg;
// };

// 3-masala
// function arg() {
//     let arg = {
//         arg1:{
//             name: "John",
//             age: 34
//         },
//         arg2: {
//             name: "Adam",
//             age: 15
//         },    
//         arg3: {
//             name: "Doe",
//             age: 21
//         },    
//         arg4:{
//             name: "Alex",
//             age: 76
//         },
//     };
//     let a = [];
//     let b = [];
//     for(const element of arr) {
//         if(arg.arg1 <= arg.arg2) {
//             a = arg.arg1;
//         } else {
//             a = arg.arg2;
//         }
//         if(arg.arg3 <= arg.arg4) {
//             b = arg.arg3;
//         } else {
//             b = arg.arg4;
//         }
//         if(a >= b) {
//             return b;
//         } else {
//             return b;
//         }
//     }
// };

// 4-masala
// let array = [
//   {
//     name: "John",
//     age: 34,
//   },
//   {
//     name: "Adam",
//     age: 15,
//   },
//   {
//     name: "Doe",
//     age: 21,
//   },
//   {
//     name: "Alex",
//     age: 76,
//   }
// ];
// function info(arg) {
//   let sum = arg[0];
//   for (let i = 1; i < arg.length; i++) {
//     if (arg[i].age > sum.age) {
//       sum = arg[i];
//     }
//   };
//   return sum;
// };
// console.log(info(array));

// 5-masala
// function small(arg) {
//     let a = arg[0];
//     for (let i = 1; i < arg.length; i++) {
//         if(arg[i].age > a.age) {
//             arg[i] = a.age;
//         }
//     };
//     return a;
// };
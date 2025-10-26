// let arr = [];
// arr [0] = "coco";
// arr [1] = "moci";
// arr [2] = "mimi";
// arr [3] = "momo";
// arr [4] = "edi";
// console.log(arr);

// let arr = ["coco", "moci", "mimi"];
// arr[2] = undefined;
// console.log(arr);

// let arr = ["coco", "moci", "mimi", "momo", "edi"];
// for (let i = 0; i < arr.length; i++){
//     console.log(`My cat number ${i+1} is ${arr[i]}`);
// }

// method in array
//join
let arr = ['coco', 'moci', 'mimi'];
console.log(arr.join(', '));

// push & pop
//push
arr.push('momo', 'edi');
console.log(arr.join(', '));
//pop
arr.pop();
arr.pop();
console.log(arr.join(', '));

//unshift & shift
//unshift
arr.unshift('tia', 'cristin');
console.log(arr.join(', '));
//shift
arr.shift();
arr.shift();
arr.shift();
console.log(arr.join(', '));


//splice & slice
//splice
let arr2 = ["coco", "moci", "mimi", "momo", "edi"];
arr2.splice(4, 0, "loli", "anya");
console.log(arr2.join(' - '));
//slice
let arrSlice = arr2.slice(2,4);
console.log(arrSlice.join(' - '));
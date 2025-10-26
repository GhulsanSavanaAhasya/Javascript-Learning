// let animals = ['cat', 'sheep', 'monkey', 'rabbit', 'elephant'];
// console.log(animals[0]);

// let animals = [];
// animals = ['cat', 'sheep', 'monkey', 'rabbit', 'elephant'];
// console.log(animals[4]);

// let myNumber = [7, 12, 2001];
// console.log(myNumber[2]);

// let myArr = ['coco', 10, true];
// console.log(typeof(myArr));

let myFunction = function(){
    alert("Hello World!");
}

let myArr = ['coco', 10, true, myFunction];

let myArr2 = ['coco', 10, true, myFunction, [7, 12,2001]];
console.log(myArr2[4][2]);
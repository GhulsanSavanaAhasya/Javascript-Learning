// let myObj = {
//     name:'Ghulsan Savana Ahasya',
//     age: 23,
//     hobby: 'Learn Something New',

//     start: function(){
//         console.log('This is method in Object');
//     }
// };

// console.log(myObj.name);
// myObj.start();


//using this keyword
let myObj = {
    name: 'Ghulsan Savana Ahasya',
    age: 23,

    showName: function(){
        console.log(`My name is ${this.name}`);
    }
}
myObj.showName();
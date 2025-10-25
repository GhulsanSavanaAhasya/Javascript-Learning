let book = 1;
let totalBook = 10;
let bookAvailable = 6;

for(book; book <= totalBook; book++){
    if(book <= bookAvailable){
        console.log(`Book ${book} is available`);
    }else if(book == 8){
        console.log(`Book ${book} is available and exlusive`);
    }else {
        console.log(`Book ${book} is not available`);
    }
}
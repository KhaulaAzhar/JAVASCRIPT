/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. */

let list = ["Khaula", "efrah", "urooj", "hadia"];

list[8] = "unzila";

// i created this error by adding value in 8th index insted of 4th, this will creat empty values in our array and total values/keys will be 5 in our objectbut it will show


//////////////////Resolving this error//////////////

/* A filter function that will filter out all the empty values from out array. */

newList = list.filter((1) => list.length > 0);

console.log(newList);
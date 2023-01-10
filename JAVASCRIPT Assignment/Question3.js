/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/


var lower="khaula azhar"
var p=lower.toLowerCase()
console.log(p)

var upper="khaula azhar"
var e=upper.toUpperCase()
console.log(e)

// name in titlecase
var my_name = "Khaula";

//dividing name khaula into two parts ( k and haula ) by using slice() function
var separating_name = my_name.slice(1);
console.log(separating_name);

//getting first letter of name khaula with chartAt() function
var firstletter= my_name.charAt(0);

// capitalizing first letter of khaula
var capatilize_First_Letter = firstletter.toUpperCase();
console.log(capatilize_First_Letter);

//concatination 
var final = capatilize_First_Letter + separating_name;
console.log(final);
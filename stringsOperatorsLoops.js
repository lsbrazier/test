//sentecnecs
let sentence1 =
  "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
let sentence2 =
  "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
let sentence3 =
  "This summer they plan on traveling to El Paso to visit as many family members as possible.";

//This part separates the numbers from the string (still in string form)
let numStr1 = sentence1.slice(10, 11);
let numStr2 = sentence1.slice(52, 53);
let numStr3 = sentence1.slice(127, 128);
let numStr4 = sentence2.slice(15, 16);
let numStr5 = sentence2.slice(63, 64);
let numStr6 = sentence2.slice(96, 99);

//makes the 100 a 10
let num = numStr6.substring(0, 2);
// console.log(num)

//switches the numbers strings to ints
let n1 = parseInt(numStr1);
let n2 = parseInt(numStr2);
let n3 = parseInt(numStr3);
let n4 = parseInt(numStr4);
let n5 = parseInt(numStr5);
let n6 = parseInt(num);

//adss the sumtotal ==28
let sumTotal = n1 + n2 + n3 + n4 + n5 + n6;
console.log("The variable sumTotal is storing " + sumTotal);

//changes el paso to san antonio
let city = "San Antonio";
let newSentence3 = sentence3.replace("El Paso", city);
console.log(newSentence3);

//1-10 car  loop
let start = n3;
let end = n6;
while (start <= end) {
  console.log("I saw " + start + " car(s) on my trip.");
  start++;
}

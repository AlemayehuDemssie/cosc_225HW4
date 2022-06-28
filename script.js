/* node script.js to run the script after installing prompt-sync node module  */
 var input=require("prompt-sync"); /* The prompt-sync module is a function that creates prompting functions*/                                   
 var prompt=input(); 
var arrOne=[],arrTwo=[],arrProduct=[],arrAdd=[];
var arrSumOne=0, arrSumTwo=0; 
var numberOfElements=20;
console.log("Enter Elements of the first array one Element per line: ")
var arrOneElements, arrTwoElements;
for(i=0;i<numberOfElements;i++){
    arrOneElements=parseInt(prompt());
    arrOne.push(arrOneElements);
}
console.log("Enter Elements of the second array one Element per line: ")
for(i=0;i<numberOfElements;i++){
    arrTwoElements=parseInt(prompt());
    arrTwo.push(arrTwoElements);
}
function multiplyArray()
{
    for(i=0;i<arrOne.length;i++){
        arrProduct[i]= arrOne[i]*arrTwo[i];

    }
    return arrProduct;
}
function addArray()
{
    for(i=0;i<arrOne.length;i++){
        arrAdd[i]= arrOne[i]+arrTwo[i];

    }
    return arrAdd;
}
function sumArray()
{
    for(i=0;i<arrOne.length;i++){
        arrSumOne=arrSumOne+arrOne[i];
        arrSumTwo=arrSumTwo+arrTwo[i];

    }
    console.log("The Sum of The first array: "+arrSumOne);
    console.log("The Average of The first array: "+arrSumOne/arrOne.length);
    console.log("The Sum of The second array: "+arrSumTwo);
    console.log("The Average of The second array: "+arrSumTwo/arrTwo.length);
}
  
console.log("Array One : ", arrOne);
console.log("Array Two: ", arrTwo);
console.log("The product of the Array: ", multiplyArray());
console.log("The Sum of the Array: ", addArray());
sumArray();

 
 
 
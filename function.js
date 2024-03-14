         //Task#1
var firstName = document.querySelector('#input1');
var secondName = document.querySelector('#input2');
var age = document.querySelector('#input3');
var show1 = document.querySelector('#box1');
var show2 = document.querySelector('#box2');
function printName()
{
   
    show1.innerHTML = firstName.value+" " +secondName.value;
    show2.innerHTML = age.value;
    clearField();
}

    //Function for Clear Field
function clearField()
{
    firstName.value = '';
    secondName.value = '';
    age.value = '';

}


//Task#2
var number1 = document.querySelector('#num1');
var number2 = document.querySelector('#num2');
var display = document.querySelector('#show');
function sum()
{
    var plus = +number1.value + +number2.value;
    display.innerHTML = plus;

}


//Task#3
var number1 = document.querySelector('#num1');
var number2 = document.querySelector('#num2');
var operator = document.querySelector('#opera');
var display = document.querySelector('#show');

function compute()
{
    var sum = +number1.value + +number2.value;
    var sub = +number1.value - +number2.value;
    var mul = +number1.value * +number2.value;
    var devi = +number1.value / +number2.value;
    var mod = +number1.value % +number2.value;
    switch(operator.value)
    {
        case '+' :
            display.innerHTML = sum;
            break;
        case '-':
            display.innerHTML = sub;
            break;
        case '*':
            display.innerHTML = mul;
            break;
        case '/':
            display.innerHTML = devi;
            break;
        case '%':
            display.innerHTML = mod;
            break;
            default:
         display.innerHTML = "Invalid Input";

    }
}


//Task#4
var num = document.querySelector('#num1');
var display = document.querySelector('#show');
function squareNum()
{
    var square = +num.value * +num.value;
    display.innerHTML = square;
}


//Task#5
var number = document.querySelector('#num1');
var display = document.querySelector('#show');
function factorial()
{
    if(+number.value < 0)
    {
        display.innerHTML ="Factorial is not defined for negative number";
    }
    else if(+number.value === 0)
    {
        display.innerHTML = 1;
    }
    else{
        var result = 1;
        for(var i =1; i <= number.value; i++)
        {
            result *= i;
        }
        display.innerHTML = result;
    }
}


//Task#6
var start = document.querySelector('#num1');
var end = document.querySelector('#num2')
var display = document.querySelector('#show');
function counting()
{
    if(+start.value <= +end.value)
    {
        for(var i=+start.value; i<=+end.value; i++)
        {
            display.innerHTML += i + "</br>";
        }
    }
    else
    {
        for(var i=+start.value; i>=+end.value; i--)
        {
            display.innerHTML += i + "</br>";
        }

    }
}
var start = document.querySelector('#num1');
var end = document.querySelector('#num2')
var display = document.querySelector('#show');
function clearAll()
{
    start.value = '';
    end.value = '';
    display.innerHTML = '';
}



//Task#7
function sorting(arry) {

    const SortedArray = arry.slice().sort();
    return SortedArray;

}
const arry = [9,8,7,6,5,4,3,2,1];
const SortedArray = sorting(arry);
document.write("Sorted Array ===> ", SortedArray);


//Task#8
function sumArray(numbers){
    let sum =0;
    for(let i = 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
const numbers = [1,2,3,4,5,6,7,8,9];
const result = sumArray(numbers);
document.write("Sum Of Array ===> " +result);


//Task#9
function power(){
    var base = document.querySelector('#num1');
    var exponent = document.querySelector('#num2');
    var display = document.querySelector('#show');
    var result = Math.pow(base.value,exponent.value);
    display.innerHTML = result;
}
function reset(){
    var base = document.querySelector('#num1');
    var exponent = document.querySelector('#num2');
    var display = document.querySelector('#show');
    display.innerHTML= ' ';
    base.value = ' ';
    exponent.value = ' ';
}

//Task#10
function rollDice(){
    var display = document.querySelector('#show');
    let dice = Math.floor(Math.random() * 6) + 1;
    display.innerHTML = dice;

}

//Task#11
function reverseNum(){
        var num = document.querySelector('#num1');
        var display = document.querySelector('#show');
        var result = parseInt(num.value.split('').reverse().join(''));
        display.innerHTML = result;
    }


//Task#12
function isPalindrom(){
    var str = document.querySelector('#num1').value;
    var display = document.querySelector('#show');
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    if(str === reversedStr){
        display.innerHTML=" Palindrom"
    }
    else{
        display.innerHTML="Not Palindrom";

    }
}

//Task#13
function capitalizeFirstLetter() {
    
    var str = document.querySelector('#num1').value;
    var display = document.querySelector('#show');
    const words = str.split(' ');

    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    var result = words.join(' ');
    display.innerHTML=result;
}

//Task#14
function findLongestWord() {
    var str = document.querySelector('#num1').value;
    var display = document.querySelector('#show');
    const words = str.split(' ');
    let longestWord = '';
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            longestWord = words[i];
            maxLength = words[i].length;
        }
    }

    var result = longestWord;
    display.innerHTML = result;
}

//Task#15
function countVowels(){
    var str = document.querySelector('#num1').value;
    var display = document.querySelector('#show');
    let line = 'aeiouAEIOU';
    let count=0;

    for(let char of str){
        if(line.includes(char)){
            count ++;
        }
    }
    display.innerHTML = count;
}

//Task#16
function getType(value) {
    
    let type = typeof value;

    if (type === 'object') {
        if (value === null) {
            return 'null';
        } else if (Array.isArray(value)) {
            return 'array';
        }
    }

    return type;
}

// Example usage:
console.log(getType(123)); // Output: "number"
console.log(getType("Hello")); // Output: "string"
console.log(getType(true)); // Output: "boolean"
console.log(getType({})); // Output: "object"
console.log(getType([])); // Output: "array"
console.log(getType(null)); // Output: "null"

//Task#17
function uniqueChar(){
    var str = document.querySelector('#num1').value;
    var display = document.querySelector('#show');
    let uniqueCharacter = new Set();

    for(let char of str){
        uniqueCharacter.add(char);
        }
        let array = [...uniqueCharacter];
        let result = array.join(' ');

        display.innerHTML = result;
    }
    

//Task#18
function countWord(){
    var str = document.querySelector('#num1').value;
    var words = document.querySelector('#num2').value;
    var display = document.querySelector('#show');
    let count =0;

    for(let char of str){
        if(char === words){
            count++;
        }
    }
    display.innerHTML = count;
}

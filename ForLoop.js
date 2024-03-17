//Task#1
for(let i=0; i<5; i++)
{
    document.write("Hello World</br>");
}

//Task#2
for(let i=1; i<=10; i++)
{
    document.write(i,"</br>");
}

//Task#3
var tableNumber = +prompt("Enter Table Number");
var tableLength = +prompt("Enter Length Of Table")
for(let i=1; i<=tableLength; i++)
{
    document.write(`${tableNumber} * ${i} = ${tableNumber*i}</br>`);
}

//Task#4
const mobile = ["Nokia","Samsung","Sony","Motorola","Huawei","Itel","Infinix"]
for(let i=0; i<mobile.length; i++)
{
    document.write(`${mobile[i]}</br>`)
}

//Task#5
const fruits = ["Apple","Orange","Mango","Peach","grapes","watermelon","Banana"]
for(let i=0; i<fruits.length; i++)
{
    document.write(`${fruits[i]}</br>`)
}
for(let i=0; i<fruits.length; i++)
{
    document.write(`</br>Element at index ${i} is ${fruits[i]}`)
}

//Task#6
var itemNumber = +prompt("Enter Number Of Item");
const array =[];
for(let i=0; i<itemNumber; i++)
{
    var Item = prompt(`Enter value for index ${i}`);
    array.push(Item);
}
document.write(`Number Of Items ${array.length}</br>`);
document.write("Items:</br>")
for(let i=0; i<array.length; i++)
{
    document.write(`${array[i]}</br>`)
}

//Task#7
document.write(`<h3>Counting</h3>`);
for(let i=1; i<=15; i++)
{
    document.write(`${i}  `)
}

document.write(`<h3>Reverse Counting</h3>`);
for(let i=10; i>=1; i--)
{
    document.write(`${i}  `)
}

document.write(`<h3>Even</h3>`);
for(let i=1; i<=20; i++)
{
    if( i % 2 === 0)
    {
        document.write(`${i}  `)
    }
}

document.write(`<h3>Odd</h3>`);
for(let i=1; i<=20; i++)
{
    if( i % 2 !== 0)
    {
        document.write(`${i}  `)
    }
}

document.write(`<h3>Series</h3>`);
for(let i=1; i<=20; i++)
{
    if( i % 2 === 0)
    {
        document.write(`${i}k  `)
    }
}

//Task#8
const items = ["cake","apple pie","cookie","chips","patties"];
var userInput = prompt("Welcome to RAO Bakery. What do you want to order?");
let search = userInput.toLowerCase();

if(items.includes(search))
{
    document.write(`${search} is available at index ${items.indexOf(search)} in our bakery`);
}
else
{
    document.write(`We are sorry. ${search} is not available in our bakery`);
}

//Task#9
var array1 = [24,53,91,78,12];
document.write("Array: ",array1+"</br>")
let max = array1[0];
for(let i=1; i<array1.length; i++)
{
    if(array1[i] > max)
    {
        max = array1[i];
    }
}
document.write("The Largest Number In Array is ", max);

//Task#10
var array2 = [24,53,91,78,12];
document.write("Array: ",array2+"</br>")
let min = array2[0];
for(let i=1; i<array2.length; i++)
{
    if(array2[i] < min)
    {
        min = array2[i];
    }
}
document.write("The Smallest Number In Array is ",min);

//Task#11
var array3 = [24,53,91,78,12];
document.write("Array: ",array3+"</br>")
let min1 = array3[0];
let max1 = array3[0];
for(let i=1; i<array3.length; i++)
{
    if(array3[i] < min1)
    {
        min1 = array3[i];
    }

    if(array3[i] > max1)
    {
        max1 = array3[i];
    }
}
document.write("The Smallest Number In Array is ",min1+"</br>");
document.write("The Largest Number In Array is ",max1);

//Task#12
for(let i=1; i<=100; i++)
{
    if( i % 5 === 0)
    {
        document.write(`${i} `)
    }
}

//Task#13
const studentName = ["Owais","Arslan","Imran","Kamran","Iftikhar"];
const studentScore =[50,60,70,80,90];
let table =`<table><tr><th>Student</th><th>Score</th></tr>`;
for(let i=0; i<studentName.length; i++)
{
    table += `<tr><td>${studentName[i]}</td><td>${studentScore[i]}</td></tr>`;
}

table +=`</table>`;
document.write(table);

//Task#14
const number_array =[[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < number_array.length; i++) {
    for (let j = 0; j < number_array[i].length; j++) {
        document.write(number_array[i][j] + " ");
    }
    document.write("</br>");
}

//Task#15
let num1 = parseFloat(prompt("Enter a number:"));

if (!isNaN(num1)) {
    while (num1 > 0) {
        document.write(num)
        num1 -= 0.5;
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}

//Task#16
let num =+prompt("enter a number");
for(num >= 0; num-=0.5;)
 {
   console.log(num)
 }

 //Task#17
let product =1;
for(let i=1; i<=7; i++)
 {
   if(i % 2 !==0)
     {
       product *=i;
     }
  }
console.log(product);


//Task#18
let initialNum = +prompt("Enter Initial Number of star");
for(let i=initialNum; i>=0; i--)
 {
   let line = "";
   for(let j=1; j<=i; j++)
     {
       line +="*";
     }
   console.log(line)
 }


//Task#19
let linenum = +prompt("Enter how many lines of star you want to print??");
for(let i=1; i<=linenum; i++)
 {
    console.log("******");
 }


//Task#20
let line_Num = +prompt("Enter how many lines of star you want to print??");
for(let i=1; i<=line_Num; i++)
{
   let line = "";
  for(j=1; j<=i; j++)
    {
      line +="*";
     }
  console.log(line);
}


//Task#21
let lineNum = +prompt("Enter how many lines of star you want to print??");
for(let i=lineNum; i>=1; i--)
 {
    let line = "";
   for(j=1; j<=i; j++)
     {
       line +="*";
     }
   console.log(line);
}


//Task#22
for(let i=0; i<=20; i++)
{
    if(i % 2 === 0)
    {
        console.log(i," is Even")
    }
    else
    {
        console.log(i," is Odd")
    }
}
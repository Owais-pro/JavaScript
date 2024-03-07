//If-else Statement Exercise

//TASK#1
var num = prompt("Enter any Number");
if(num % 3 === 0)
{
    alert("Number is divisible by 3");

}
else{
    alert("Number is not divisible by 3");
}

//TASK#2
var number = prompt("Enter any Number");
if(number % 2 === 0)
{
    alert("Number is Even");

}
else{
    alert("Number is Odd");
}

//TASK#3
var age = prompt("Enter any Number");
if(age >= 18)
{
    alert("Old Enough");

}
else{
    alert("Too Young");
}

//TASK#4
var name = prompt("Enter any Name");
if(name === 'Owais'|| name === 'OWAIS' || name === 'owais')
{
    alert("Hurrah!!! Our Name Are Same");

}
else{

}

//Task#5
var number = prompt("Enter any Number");
switch(number % 3)
{
    case 0:
        alert("Number is divisible by 3");
        break;
        default:
            alert("Number is not divisible by 3");

}

//Task#6
var input = prompt("Enter a Character (Number or string)");
var ascii = input.charCodeAt(0);
if(ascii >= 65 && ascii <=90)
{
    alert("Input is an Uppercase letter");
}
else if(ascii >= 97 && ascii <= 122)
{
    alert("Input is an Lowercase letter");
}
else
{
    alert("Input is a Number")
}

//Task#7
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var Operator = prompt("What You Want(+,-,/,*,%)");
var sum = +num1 + +num2;
var subtract = +num1 - +num2;
var multiple = +num1 * +num2;
var devide = +num1 / +num2;
var mode = +num1 % +num2;
switch(Operator)
{
    case '+':
        alert("Sum of two  number "+num1 +" and "+num2 +" ==> " +sum);
        break;
    case '-':
        alert("Subtraction of two number "+num1 +" and "+num2 +" ==> "+subtract);
        break;
    case '*':
            alert("Product of two number "+num1 +" and "+num2 +" ==> "+multiple);
            break;
    case '/':
        alert("Division of two number "+num1 +" and "+num2 +" ==> "+devide);
        break;
    case '%':
        alert("Modules of two number "+num1 +" and "+num2 +" ==> "+mode);
        break;
        default:
            alert("Invalid Input");
}

//Task#8
var time = prompt("Enter Time between 0000 to 2400 (1900 == 7pm)");
if(time >= '0000' && time <= 1200)
{
    alert("Good Morning!");
}
else if(time >= 1200 && time <= 1700)
{
    alert("Good Afternoon!");
}
else if(time >= 1700 && time <= 2100)
{
    alert("Good Evening");
}
else if(time >= 2100 && time <= 2399)
{
    alert("Good Night");
}
else
{
    alert("Invalid time");
}

//Task#9
var year = prompt("Enter a year(YYYY Format)");
if(year % 4 === 0)
{
    if(year % 100 === 0 && year % 400 !== 0)
    {
        alert(year+ " is not a Leap Year!!");
    }
    else {
        alert(year+ " is a Leap Year!!");
    }
}
else
{
    alert(year+ " is not a Leap Year!!");
}

//Task#10
var pasw = prompt("Enter Your Password");
var repasw = prompt("Confirm your password");
if(pasw === repasw)
{
    alert("Correct! The password you entered matches the original password");
}
else
{
    alert("Incorrect Password");
}

//Task#11
var firstName = prompt("Enter Your Name");
if (firstName === "Fahad") {
  document.write("Hello Fahad!");
} else {
  alert("You are not Fahad");
}

//Task#12
var greeting;
 var hour = prompt("Enter any Number");
 if (hour < 18) {
 greeting = "Good day";
 alert(greeting);
 }
 else{
    greeting = "Good evening";
    alert(greeting);
 }
 
//Task#13
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
if(num1 === num2)
{
    alert("Both Number are Equal");
}
else if(num1 > num2)
{
    alert(num1 +" is greater then "+num2);
}
else 
{
    alert(num2 +" is greater then "+num1);
}

//Task#14
var num = prompt("Enter Any Number");
if(num == 0)
{
    alert("Number is Zero");
}
else if(num < 0)
{
    alert(num +" is Negative ");
}
else 
{
    alert(num +" is Positive");
}

//Task#15
var hour = prompt("Enter the current hour (in 24-hour format, e.g., 14 for 2 PM):");
if (hour>=6 && hour<9)
{
    alert("Breakfast is served.");
}
else if (hour>=11 && hour<13)
{
    alert("Time for lunch.");
}
else if (hour>=17 && hour<20)
{
    alert("It's dinner time");
}
else
{
    alert("Sorry, you'll have to wait, or go get a snack.");
}

//Task#16
var num1 = 444;
alert("Your input is "+typeof(num1));
var num2 = 'Owias';
alert("Your input is "+typeof(num2));
var num3 = true;
alert("Your input is "+typeof(num3));
var num4;
alert("Your input is "+typeof(num4));

//Task#17
var char = prompt("Enter a single character");
char = char.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    alert(true);
} else {
    alert(false);
}

//Task#18
var num1 = 10;
var num2 = 8;
if(num1 !== num2)
{
    alert(true);

}
else
{
    alert(false);
}

//Task#19
var month = +prompt("Enter Month Number");
switch(month)
{
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break; 
     case 3:
        alert("March");
        break;
    case 4:
        alert("April");
        break; 
    case 5:
        alert("May");
        break;
    case 6:
        alert("June");
        break; 
    case 7:
        alert("July");
        break;
    case 8:
        alert("August");
        break; 
    case 9:
        alert("September");
        break;
    case 10:
        alert("October");
        break; 
    case 11:
        alert("November");
        break;
    case 12:
        alert("December");
        break;
        default:
            alert("Invalid Input");
}



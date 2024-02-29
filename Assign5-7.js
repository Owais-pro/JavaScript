                                             //Assignment#5-7
     //Task#1
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var sum = number1 + number2;
alert("Sum of " +number1 + " and " +number2+ " is "+sum);

      //Task#2
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var subtract = number1 - number2;
alert("Result of subtracting " +number1 + " from " +number2+ " is "+subtract);

      //Task#3
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var multiple= number1 * number2;
alert("Result of Multiplying " +number1 + " and " +number2+ " is "+multiple);

      //Task#4
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var devide= number1 / number2;
alert("Result of Dividing " +number1 + " and " +number2+ " is "+devide);

      //Task#5
var number1 = +prompt("Enter First Number");
var number2 = +prompt("Enter Second Number");
var remainder = number1 % number2;
alert("Remainder of Dividing " +number1 + " and " +number2+ " is "+remainder);

      //Task#6
var age;
document.write("Value after variable declaration is "+age); 
age = 24;
document.write("<br/> Initial Value "+age);
++age;
document.write("<br/> Value after Increment is "+age);
var add = age + 5;
document.write("<br/> Value after addition is "+add);
--add;
document.write("<br/> Value after  decrement is "+add);
var remainder = add % 2;
document.write("<br/> The remainder is "+remainder);

      //Task#7
var cost = 600;
var ticket = 5;
document.write("Total cost of buy "+ticket+ " tickets to a movie is "+cost*ticket+" PKR");      

      //Task#8
var item1 = 560;
var item2 = 200;
var quantity_Item1 = 2;
var quantity_Item2 = 5;
var charges = 150;
var total = (item1*quantity_Item1)+(item2*quantity_Item2)+charges;
document.write("<h1>Shopping Cart</h1>")
document.write("<br/><br/> Price of Item 1 is "+item1);
document.write("<br/> Quantity of Item 1 is "+quantity_Item1);
document.write("<br/> Price of Item 2 is "+item2);
document.write("<br/> Quantity of Item 2 is "+quantity_Item2);
document.write("<br/><br/>Shipping Charges "+charges); 
document.write("<br/><br/>Total Cost of your order is "+total+" PKR");

      //Task#9
document.write("<h1>Marks Sheet</h1>")
var obtainMarks = +prompt("Enter Total Obtained Marks");
var totalMarks = +prompt("Enter Total Marks");
var percentage = obtainMarks / totalMarks*100;
document.write("Your Percentage Is "+percentage+"%");     

        //Task#10
var dollar = 10;
var riyal = 25;
var dollarRate = 104;
var riyalRate = 28;
var PKR = dollar * dollarRate + riyal * riyalRate;
document.write("<br/><h1>Currency in PKR</h1>");
document.write("<br/>Total currency in PKR : ",PKR);

      //Task#11
var num = 10;
num += 5;
num *= 10;
num /= 2;
alert(num);       

    //Task#12
var currentYear = +prompt("Enter current year");
var birthYear = +prompt("Enter Birth year");
var age = currentYear - birthYear;
document.write("<br/><h1>The Age Calculator</h1>");
document.write("<br/>Current Year : ",currentYear);
document.write("<br/>Birth Year : ",birthYear);
document.write("<br/><br/>You are either "+age+" or "+ ++age +" years old");

      //Task#13

var radious = 6;
var pai = 3.142;
var circumference = 2 * pai * radious;
var area = pai * (radious * radious);
document.write("<h1>The Geometrizer</h1>");
document.write("<br/>Radius of a circle : ",radious);
document.write("<br/>The circumference is : ",circumference);
document.write("<br/>The area is : ",area);


       //Task#14

var count = 5;
document.write("<br/>The value of count is ",count);
document.write("<br/><br/>The value of ++count is ",++count);
document.write("<br/>Now the value of count is ",count);
document.write("<br/><br/>The value of count++ is ",count++);
document.write("<br/>Now the value of count is ",count);
document.write("<br/><br/>The value of --count is ",--count);
document.write("<br/>Now the value of count is ",count);
document.write("<br/><br/>The value of count-- is ",count--);
document.write("<br/>Now the value of count is ",count);

         //Task#15

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("<br/>Value of --a : 1 ");
document.write("<br/>Value of --a - --b : 1 ");
document.write("<br/>Value of --a - --b + ++b : 2 ");
document.write("<br/>Value of --a - --b + ++b + b-- : 4 ");
document.write("<br/>Result is : ",result);         

          //Task#16

 var snacks = prompt("Enter your favorite Snacks");
 var currentAge = +prompt("Enter your Current Age");
 var maxAge = +prompt("Enter your Estimated maximum Age");
 var snacksCount = +prompt("Enter Amount Of Snacks per Day");
 var month = (maxAge - currentAge) * 12;
 var totalSnacks = month * 60;
 document.write("You will need "+totalSnacks+ " "+snacks+"snacks to last you until the ripe old age of "+maxAge);         

         //Task#1
const futureStudentName = [];

         //Task#2
const futureStudentsName = new Array();

         //Task#3
const StringArray = ["Owais","Imran","Kamran","Arslan","Iftikhar"];

         //Task#4
const NumberArray = [1,2,3,4,5];

         //Task#5
const BooleanArray = [true,false,false,true];

         //Task#6
const MixedArray = [true,"Owais",10,true];

         //Task#7
const network = ["Telenor","Zong","Jazz","Ufone"];

         //Task#8
const education = ["SSC","HSC","BSC","BS","BCOM","M.phil.","PhD","MS"];
document.write("<h2>Qualification</h2>");
document.write("<ol></br>");
for(let i=0; i<education.length; i++){
document.write(`<li>${education[i]} </li>`);
}
document.write("</ul>");

         //Task#9
const topMovies = ["Avengers: Age Of Ultron","Spectre","Jurassic World","Inside out"];
document.write("<h2>Top Movies Of 2015</h2>"); 
document.write("<ol></br>");
for(let i=0; i<topMovies.length; i++){
document.write(`<li>${topMovies[i]} </li>`);
}
document.write("</ul></br>");
document.write(`<h2>Length of the array: ${topMovies.length}</h2>`);

        //Task#10
const cars =["Audi","Volvo","Ford","Lamborghini"];
document.write("<h2>Favorite Cars</h2></br>");
document.write(cars,"</br></br>");
document.write(`First Index Of The Array : ${cars.indexOf("Audi")}</br>`);
document.write(`Car At First Index Of The Array : ${cars[0]}</br>`); 
document.write(`Last Index Of The Array : ${cars.indexOf("Lamborghini")}</br>`); 
document.write(`First Index Of The Array : ${cars[3]}</br>`);     

        //Task#11
const stdName = ["Owais","Imran","Arslan"];
const stdScore1 = [380,400,430];
let totalMarks = 500;
let stdPercentage =[];
for(let i=0; i<stdName.length; i++){
    let percentage = (stdScore1[i] / totalMarks) * 100;
    stdPercentage.push(percentage);

}        
for(let i =0; i<stdName.length; i++){
    document.write(`Score Of ${stdName[i]} is ${stdScore[i]}. Percentage:${stdPercentage[i]}%</br>`)
}

        //Task#12
const colorArray = ["Green","Yellow","Pink","Orange","Brown"];
document.write(`Initial Colors Array ===>  ${colorArray}</br>`);
let stratColorName = prompt("Which color you want to Add at the Beginning Of Array??");
colorArray.unshift(stratColorName); 
document.write(`Updated Array after Add to the Beginning ===>  ${colorArray}</br>`);
let EndColorName = prompt("Which color you want to Add at the End Of Array??");
colorArray.push(EndColorName);
document.write(`Updated Array after Add to the End ===>  ${colorArray}</br>`);     
let twoColorName = prompt("Add two more colors at the Beginning Of Array??");
colorArray.unshift(twoColorName);
document.write(`Updated Array after Adding two colors ===>  ${colorArray}</br>`);  
colorArray.shift();
document.write(`Updated Array after Delete first color in the array ===>  ${colorArray}</br>`);
colorArray.pop();
document.write(`Updated Array after Delete Last color in the array ===>  ${colorArray}</br>`);

let indexToAddColor = prompt("Enter the index where you want to add a color:");
let colorToAdd = prompt("Enter the color to add:");
colorArray.splice(indexToAddColor, 0 ,colorToAdd);
document.write(`Updated Array after adding color by Index ===>  ${colorArray}</br>`);
let indexToremoveColor = prompt("Enter the index where you want to remove a color:");
let colorToremove = prompt("Enter how many color you want to Delete");
colorArray.splice(indexToremoveColor,colorToremove);
document.write(`Updated Array after Delete color by Index ===>  ${colorArray}</br>`);

        //Task#13
const stdScore2 =[320,230,480,120];
document.write(`Scores Of Students : ${stdScore2}</br>`);
document.write(`Ordered Scores Of Students : ${stdScore2.sort()}</br>`);

        //Task#14
const stdScore3 =["Apple","Banana","Orange","Grapes","Mango"];
document.write(`Fruits List : ${stdScore3}</br>`);
document.write(`Ordered Fruit List : ${stdScore3.sort()}</br>`);        

        //Task#15
const stdScore =["Sargodha","RYK","Multan","Lahore","Karachi","Bahawalpur"];
document.write(`Cities Names In Orignal Array : ${stdScore}</br>`);
document.write(`Cities Names In Copied Array : ${stdScore.slice(1,4)}</br>`); 

       //Task#16
const stringArray = ["This","is","my","Book"];
document.write(`Orignal Array : ${stringArray}</br>`);
document.write(`After Join : ${stringArray.join(' ')}</br>`); 

       //Task#17
let queue =[];
function inqueue(value)
{
    queue.push(value);
}
function outqueue()
{
    return queue.shift();
}
inqueue(11);
inqueue(12);
inqueue(13);
inqueue(14);
console.log(queue);

console.log(outqueue());
console.log(outqueue());
console.log(outqueue());

       //Task#18
       let Stack =[];
function inqueue(value)
{
    Stack.push(value);
}
function outqueue()
{
    return Stack.pop();
}
inqueue(11);
inqueue(12);
inqueue(13);
inqueue(14);
console.log(Stack);

console.log(outqueue());
console.log(outqueue());
console.log(outqueue());

 console.log(Stack);

       //Task#19
const company = ["Apple","Samsung","Motorola","Nokia","Sony"];

document.write(`<select>`);
for(let i=0; i<company.length; i++){
    document.write(`<option>${company[i]}</option>`);
}
document.write(`</select>`);

       //Task#20
const Arrays = [];
Array1.push ([1,2,3]);
Array1.push ([4,5,6]);

       //Task#21
       const Array1 = [];
       Array1.push([1, 2, 3]);
       Array1.push([4, 5, 6]);
       Array1.push([7, 8, 9]);
       
       document.write("Matrix Representation:</br>");
       for (let i = 0; i < Array1.length; i++) {
           for (let j = 0; j < Array1[i].length; j++) {
               document.write(Array1[i][j] + " ");
           }
           document.write("</br>");
       }
       
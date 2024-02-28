var percentage = +prompt("Enter your percentage");
if (percentage > 100)
  {
    console.log("Enter between 1 to 100")
  }
else if (percentage < 50)
  {
    console.log("You Are Failed")
  }
else if (percentage >=50 && percentage <=60)
  {
    console.log("You obtained C Grade")
  }
else if (percentage >=61 && percentage <=70)
  {
    console.log("You obtained B Grade")
  }
else if (percentage >=71 && percentage <=80)
  {
    console.log("You obtained A Grade")
  }
else if (percentage >=81 && percentage <=90)
  {
    console.log("You obtained A+ Grade")
  }
else if (percentage >=91 && percentage <=100)
  {
    console.log("You obtained A- Grade")
  }
else
  {
    console.log("Plz Enter Percentage In Number");
    }
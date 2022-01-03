var num1, num2, num3, num4, num5
num1 = window.prompt("Please input the first number");
num2 = window.prompt("Please input the second number");
num3 = window.prompt("Please input the third number");
num4 = window.prompt("Please input the fourth number");
num5 = window.prompt("Please input the fifth number");

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
  console.log(num2);
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
  console.log(num3);
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
  console.log(num4);
} else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
  console.log(num5)
} else console.log("The numbers are the same");
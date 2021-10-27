// alert(666)


// var var1 = "This is Yousuf";
// alert(var1);


// var firstName = "Yousuf";
// var middleName = "Islam";
// var lastName = "Rathore";
// var age = 20;
// var fullName = firstName + " " + middleName + " " + lastName; 
// alert("My name is " + fullName + " and I am " + age + " years old.")


// var num1 = 14; 
// var num2 = 3;

// var sum = num1 + num2;
// var difference = num1 - num2;
// var product = num1 * num2;
// var quotient = num1 / num2;
// var modulus = num1 % num2;

// alert(sum);
// alert(difference);
// alert(product);
// alert(quotient);
// alert(modulus);


// case sensitive language


// // overwriting 
// var name1 = "YOUSUF";
// alert(name1);
// var name1 = "yousuf";
// alert(name1);



var firstName = prompt("Enter Your First Name Here:");
var lastName = prompt("Enter Your Last Name Here:");
var rollNumber = +prompt("Enter Your Roll No. Here:");
var schoolName = prompt("Enter Your School Name Here:");
var math = +prompt("Your Mathematics Marks :");
var comp = +prompt("Your Computer Marks :");
var eng = +prompt("Your English Marks :");
var html = +prompt("Your HTML Marks :");
var css = +prompt("Your CSS Marks :");
var obtainedMarks = math + comp + eng + html + css; 
var totalMarks = +prompt("Enter Total Marks :");
var percentage = obtainedMarks / totalMarks * 100;

document.write("=================================" + "<br>");
document.write("First Name : " + firstName + "<br>"); 
document.write("Last Name : " + lastName + "<br>");
document.write("Roll Number : " + rollNumber + "<br>");
document.write("School Name : " + schoolName + "<br>");
document.write("=================================" + "<br>");
document.write("Each Subject's Marks are Mentioned Below : <br>");
document.write("Marks Obtained in Maths : " + math + "<br>");
document.write("Marks Obtained in Computer : " + comp + "<br>");
document.write("Marks Obtained in English : " + eng + "<br>");
document.write("Marks Obtained in HTML : " + html + "<br>");
document.write("Marks Obtained in CSS : " + css + "<br>");
document.write("=================================" + "<br>");
document.write("Total Marks Obtained are " + obtainedMarks + " Out of " + totalMarks + "<br>"); 
document.write("=================================" + "<br>");
document.write("Percentage is : " + percentage + "<br>" )
document.write("=================================" + "<br>");
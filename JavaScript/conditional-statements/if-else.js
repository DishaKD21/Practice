/*1. Nested Conditions: Grading System with Curves
Write a program that takes a student's score (0–100) and applies a grading curve:
    If score ≥ 90 → Grade A
    If score ≥ 80 → Grade B
    If score ≥ 70 → Grade C
    If score ≥ 60 → Grade D
    Below 60 → Grade F
    Now,if score is 55 then add 5 extra points before grading.*/

let marks = parseInt(prompt('enter your marks(0-100):-'));
console.log(marks);
if (marks == 55) {
  marks = marks + 5;
}
if (marks <= 100 && marks >= 90) {
  console.log('grade-A');
} else if (marks < 90 && marks >= 80) {
  console.log('grade-B');
} else if (marks < 80 && marks >= 70) {
  console.log('grade-C');
} else if (marks < 70 && marks >= 60) {
  console.log('grade-D');
} else if (marks < 60 && marks >= 0) {
  console.log('grade-F');
} else {
  console.log('please enter marks between 0-100');
}


/* 2. Complex Eligibility Check
A person can enter a club only if:
    Age is 21 or older, and
    Has either a membership card or is on the guest list
Write an if-else program to determine if the person can enter.*/
let age = parseInt(prompt('enter your age:-'));
let membership =prompt('do you have membership or are you in guestlist(yes/no):-');
if(age>21){
  if(toLowerCase(membership)==='yes'){
    console.log("welcome to the club");
  }
  else {
    console.log("you are not member or in the guestlist so not allowed");
  }
}
else{
  console.log("you are too young to go inside the club");
}


 /*3. Date Checker (Leap Year & Valid Date)
Take a year and a month (1–12) as input and check:
If it's a leap year (Feb has 29 days)
Show how many days that month has*/

let year = parseInt(prompt('enter year:-'));

if(year%400==0 ||( year%100!=0 && year%4==0))
{
  console.log("It's a leap year so feb will have 29 days");
}
else {
  console.log("its not a leap year so there will be 30 days in feb month");
}



/*4. Password Validator (Nested Conditions)
Ask the user to input a password. A valid password must:
   - Be at least 8 characters long
   - Contain at least one digit
   - Contain at least one special character (e.g., !@#$%^&*)
Write a program using if-else to check if the password is strong or weak.*/

let password = prompt("Enter your password:");
if (password.length >= 8) {
  if (/\d/.test(password)) {
    if (/[!@#$%^&*]/.test(password)) {
      console.log("Strong password ");
    } else {
      console.log("Weak password→ Add at least one special character (!@#$%^&*)");
    }
  } else {
    console.log("Weak password→ Add at least one digit");
  }
} else {
  console.log("Weak password→ Password must be at least 8 characters long");
}




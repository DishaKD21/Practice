//this is the code for let user enter password and username untill they dont give the correct both of them
const correctUsername = "admin";
const correctPassword = "1234";
let username, password;
do {
  username = prompt("Enter your username:");
  password =parseInt(prompt("Enter your password:"));

  if (username !== correctUsername || password !== correctPassword) {
    console.log(" Incorrect username or password. Try again.\n");
  }
} while (username !== correctUsername || password !== correctPassword);
console.log(" Login successful. Welcome, admin!");

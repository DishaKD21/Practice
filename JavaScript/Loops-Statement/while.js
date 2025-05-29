/* ATM PIN Validation Simulation
Simulate an ATM system that asks the user to enter a PIN.
The user is allowed a maximum of 3 attempts.
If they enter the correct PIN, it shows “Access Granted”.
If the user enters the wrong PIN 3 times, it shows “Account Locked”. */

let pin = 1234;
let attempt = 0;
let enteredPin;

while (attempt < 3) {
  enteredPin = parseInt(prompt("Enter your 4-digit PIN:"));

  if (enteredPin === pin) {
    console.log("Login successful!");
    break;
  } else {
    attempt++;
    console.log(`Invalid PIN. Attempts left: ${3 - attempt}`);
  }

  if (attempt === 3) {
    console.log("Account locked. Please try again later.");
  }
}

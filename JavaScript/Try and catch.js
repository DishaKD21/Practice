let a = parseInt(prompt("enter a number"));
let b = parseInt(prompt("enter a number"));
try{
  if (b=== 0) throw "Cannot divide by zero";
  console.log(a/b);
}
catch(err){
  console.log(err);
}



try {
  const colors = ["red", "green", "blue"];
  const index = parseInt(prompt("Enter index to access:"));
  if (index >= colors.length || index < 0) throw "Index out of bounds";
  console.log("Color at index:", colors[index]);
} catch (err) {
  console.log("Error:", err);
}

let a = parseInt(prompt("enter a number"));
let b = parseInt(prompt("enter a number"));
try{
  if (b=== 0) throw "Cannot divide by zero";
  console.log(a/b);
}
catch(err){
  console.log(err);
}




/*
You have an array of products with names and prices. You want to apply a 10% discount to 
each product and get the final price list without modifying the original array.
const products = [
  { name: "Shirt", price: 1000 },
  { name: "Jeans", price: 2000 },
  { name: "Jacket", price: 3000 }
];
*/
const products = [
  { name: "Shirt", price: 1000 },
  { name: "Jeans", price: 2000 },
  { name: "Jacket", price: 3000 }
];
// Apply 10% discount using map
const discountedProducts = products.map((product)=> {
  const discount = product.price * 0.10;
  const finalPrice = product.price - discount;
  return {
    name: product.name,
    originalPrice: product.price,
    finalPrice: finalPrice
  };
});
console.log(discountedProducts);

/*
You have an array of students with their marks. Use .map() to assign a grade (A, B, C,D,E, F) based on their marks.
*/
const students = [
  { name: "Alice", marks: 92 },
  { name: "Bob", marks: 76 },
  { name: "Charlie", marks: 60 },
  { name: "David", marks: 45 }
];

const gradeStudents = students.map((student)=>{
let grade;
if(student.marks>=90){
    grade = "A";
}
else if(student.marks>=80){
    grade = "B";
}
else  if(student.marks>=70){
    grade = "C";
}
else if(student.marks>=60){
    grade = "D";
}
else if(student.marks>=50){
    grade = "E";
}
else{
    grade = "F";
}
return [ student.name , student.marks,grade];
});

console.log(gradeStudents);

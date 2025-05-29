//product name with detail that it is in stock or not
const products = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 5 },
  { name: "Tablet", stock: 0 }
];

products.forEach(product => {
  if (product.stock > 0) {
    console.log(`${product.name} is in stock (${product.stock} items)`);
  } else {
    console.log(` ${product.name} is out of stock`);
  }
});

//how many marks each student got 
const students = [
  { name: "Aarav", marks: 88 },
  { name: "Sneha", marks: 45 },
  { name: "Kiran", marks: 72 },
  { name: "Megha", marks: 33 }
];
students.forEach((student)=>{
    console.log(`${student.name} got ${student.marks} marks.`)
});


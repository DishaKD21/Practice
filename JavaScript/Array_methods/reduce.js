//reduce method will reduce all the element and it will return a single value 
const arr = [1,2,3,4,5,6,7];
const sum=0;
const found = arr.reduce((sum,elem)=>{
    return elem + sum;
})
console.log(found);

//total price
const cart = [
  { name: "Laptop", price: 40000 },
  { name: "Mouse", price: 1000 },
  { name: "Bag", price: 1500 }
];
let sum=0;
    const item = cart.reduce((sum,element)=>
    {
        return element.price + sum;
    },0) ;
console.log(item);

/* 1.Calculate Factorial */
let n = parseInt(prompt("enter number:-"));
let fact=1;
for(let i=n;i>0;i--){
  fact=fact*i;
}
console.log(fact);

/*
2.array of objects is there,Apply each discount to the item
Print the final price of each item
Print the total bill amount at the end
const cart = [
  { name: "Shoes", price: 1500, discount: 10 },  // 10% off
  { name: "Shirt", price: 800, discount: 5 },    // 5% off
  { name: "Jeans", price: 2000, discount: 20 },  // 20% off
  { name: "Watch", price: 2500, discount: 15 }   // 15% off
];
*/
const cart = [
  { name: "Shoes", price: 1500, discount: 10 },  // 10% off
  { name: "Shirt", price: 800, discount: 5 },    // 5% off
  { name: "Jeans", price: 2000, discount: 20 },  // 20% off
  { name: "Watch", price: 2500, discount: 15 }   // 15% off
];
let len = cart.length;
let totalbill=0, final_price,discount;
for(let i = 0;i<len;i++){
  dicount= (cart[i].price*cart[i].discount)/100;
  final_price =  cart[i].price- dicount;
  console.log(`final price of ${cart[i].name} is ${final_price}`);
  totalbill+=final_price;
}
console.log(`total bill amount is ${totalbill}`);


/*
3.Calculate total price for each guest (room + add-ons)
Show a detailed bill of each customer
Calculate the total revenue for the hotel
const bookings = [
  { guest: "Alice", roomPrice: 3000, addons: ["breakfast", "spa"] },
  { guest: "Bob", roomPrice: 2500, addons: [] },
  { guest: "Charlie", roomPrice: 4000, addons: ["pickup", "spa", "breakfast"] }
];
const addonPrices = {
  breakfast: 300,
  spa: 1000,
  pickup: 800
};
*/
const bookings = [
  { guest: "Alice", roomPrice: 3000, addons: ["breakfast", "spa"] },
  { guest: "Bob", roomPrice: 2500, addons: [] },
  { guest: "Charlie", roomPrice: 4000, addons: ["pickup", "spa", "breakfast"] }
];
const addonPrices = {
  breakfast: 300,
  spa: 1000,
  pickup: 800
};
let addon,totalguestprice=0;
let hotelrevenue =0;
for(let i=0;i<bookings.length;i++){
  addon = bookings[i].addons;
  let price=0;
  for(let j=0;j<addon.length;j++){
    price += addonPrices[addon[j]];
  }
  totalguestprice = price + bookings[i].roomPrice;
  console.log(`guest:${bookings[i].guest} is having total bill : ${totalguestprice}`);
  hotelrevenue += totalguestprice;
}
console.log(`total revenue of hotel :${hotelrevenue}`);


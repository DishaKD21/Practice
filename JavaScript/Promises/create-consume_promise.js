//structure
/*
creating a promise
const mypromise = new Promise(function(resolve,reject){
if(condition){
  resolve("value what you want to give after it get resolved");
}
else{
  reject("if rejected the error message you want to give");
}
});

consuming a promise
mypromise
    .then(function(result){
    console.log(result);
    })
    .catch(function(err){
      console.log(err);
    });
*/


//1. create promise for cheking given number is even other wise show error that enter even number
let num = parseInt(prompt("enter a number"));
const even = new Promise(function(resolve,reject){
if(num%2==0){
  resolve("its an even number");
}
else{
  reject("its odd number");
}                     
});
even
   .then(function(result){
     console.log(result);
   })
   .catch(function(err){
     console.log(err);
   });


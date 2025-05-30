/* create one array of all ingredients you have and check if you can make fried rice with those incredients 
if yes then return lets eat otherwise error   */

const things=["rice","salt","spices","vegies","fruits","wheat"];
const friedRice = new Promise(function(resolve,reject){
  if(things.includes("rice") && things.includes("spices") && things.includes("salt") && things.includes("vegies")){
    resolve("friedrice");
  }
  else{
    reject("there are not enough ingredients we have to make friedrice")
  }
});
friedRice
  .then(function(result){
    console.log(`let's make ${result}`);
  })
  .catch(function(err){
    console.log(err);
  });

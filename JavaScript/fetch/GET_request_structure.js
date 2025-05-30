const URL = "https://jsonplaceholder.typicode.com/posts";  //paste the link of the api 
fetch(URL)  //fetch returns promise which resolves to a Response object, which contains information about what the server sent back — like:
/* The actual data, The status code (like 200 or 404),The headers, etc.
so for consuming the value which comes from fetch promise*/
  .then(function(response){
    if(!response.ok){
      throw new Error("failed in getting response");
    }
    else{
     return response.json() //here this will return promise where data is consolverted to json format wrapped in that promise.
    }
  })
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });

/*
this is fetch with .then()
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // or response.text(), response.blob(), etc.
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
in fetch with .then() we used to take response with .then() but here we wait for response with
await same thing but diff syntax and we dont use .then() here and we use try catch for error handling */
async function getData() {   //declare async function
  try {
    const response = await fetch('https://api.example.com/data'); //here fetch is returning promise and await is waiting till promise get resolved and give value 
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    const data = await response.json();  //here response.json() returns promise whhere await will wait till promise get resolved and give value 
    console.log('Data:', data);
  } catch (error) {   
    console.error('Error:', error);
  }
}
getData();

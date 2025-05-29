//this will return the first element which is greater than that number
const arr = [1,2,3,4,5,6,7];
const found = arr.find((elem)=>{
    return elem>2;
})
console.log(found);


//find person with name 
const students =[{ 'name' : "meera",  "age": 23},{ 'name' : "era",  "age": 13},{ 'name' : "mani",  "age": 26}]
const student = students.find((element)=>
    {
        return element.name == "meera";
    }) 
console.log(student);

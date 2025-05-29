//here the diff is in filter method we get all element's array in return which satisfy the condition
const arr = [1,2,3,4,5,6,7];
const found = arr.filter((elem)=>{
    return elem>2;
})
console.log(found);

//this will return all the person with age >20
const students =[{ 'name' : "meera",  "age": 23},{ 'name' : "era",  "age": 13},{ 'name' : "mani",  "age": 26}]
const student = students.filter((element)=>
    {
        return element.age >20;
    }) 
console.log(student);

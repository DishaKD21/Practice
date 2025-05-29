/*.splice() Method
 Used for:
    Adding, removing, or replacing elements in an array.
    It modifies the original array directly.
    syntax:
    => array.splice(startIndex, deleteCount, item1, item2, ...)
    startIndex: Position to start from.
    deleteCount: Number of elements to remove.
    item1, item2...: (Optional) Items to add in place.
*/

const fruits = ["apple", "banana", "mango", "orange"];
fruits.splice(1, 2 ,"grapes","kiwi"); // starts at index 1, removes 2 items from index 1
console.log(fruits); //[ 'apple', 'grapes', 'kiwi', 'orange' ]

const veggies = ["carrot", "beet"];
veggies.splice(1, 0, "broccoli", "spinach"); //starts from 1 and removes 0 element 
//adds element at index 1
console.log(veggies); // ["carrot", "broccoli", "spinach", "beetroot"]

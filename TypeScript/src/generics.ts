function identity<T>(value: T): T {
  return value;
}

// Using with number
let num = identity<number>(10);   // type is number

// Using with string
let str = identity<string>("Hello"); // type is string

console.log(num); // 10
console.log(str); // Hello

/* What’s Happening?
T is a type placeholder (generic type).
You pass the actual type (like number, string) when calling the function.
It ensures type safety while still being flexible.*/
function identify<T>(input: T): T {
  return input;
}

let nums = identity<number>(42);
let s= identity("Hello");

console.log(nums); // 42
console.log(s); // Hello

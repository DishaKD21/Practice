//enum with default values
enum Direct{
  Up,
  Down,
  Left,
  Right,
}

console.log(Direct.Up);  // Output: 0
console.log(Direct.Down); // Output: 1

//enum with custom values
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

console.log(Direction.Left);  // Output: 3

//String Enum Example
enum Directions {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Directions.Right);  // Output: "RIGHT"

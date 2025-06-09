/*class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Alice", 30);
p.greet(); // Hello, my name is Alice
*/

class Person {
  name: string;   // property with type annotation
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {  // method with return type annotation
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const p = new Person("Alice", 30);
p.greet();  // Hello, my name is Alice and I am 30 years old.

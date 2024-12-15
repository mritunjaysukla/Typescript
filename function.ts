// functions in typescript
// Function Syntax
function add(a: number, b: number): number {
    return a + b;
}

// optional parameters
function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        return `Hello, ${name}`;
    }
}
console.log(greet("mritunjay", 20));

// default parameters
function multiply(a: number, b: number = 1): number {
    return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 3)); // Output: 15

// rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// function overloading...>TypeScript allows multiple function signatures, making it possible to define functions with multiple types of arguments.
function getinfo(id: number): string;
function getinfo(name: string): string;
function getinfo(value: number | string): string {
    if (typeof value === "number") {
        return `ID: ${value}`;
    } else {
        return `Name: ${value}`;
    }
}
console.log(getinfo(125));
console.log(getinfo("mritunjay"));

// arrow function...> Arrow functions work the same as in JavaScript, but you can add type annotations for parameters and return types.
const subtract = (a: number, b: number): number => a - b;
console.log(subtract(5, 3)); // Output: 2


// Type Inference in Functions...> TypeScript can infer the types of function parameters and return values based on their usage.
function divide(a: number, b: number) {
    return a / b;
}
let result = divide(10, 2);
console.log(result); // Output: 5







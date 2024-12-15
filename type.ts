// TypeScript....> TypeScript is a superset of JavaScript. It is a typed language that compiles to JavaScript. It is a statically typed language.
// Basic Types....> TypeScript has a set of basic types that can be used to define variables, functions, and objects.

// number...> number is a primitive type that represents a number.
let number: number = 10;
console.log(number);

// string...> string is a primitive type that represents a string.
let string: string = "Hello World";
console.log(string);

// boolean...> boolean is a primitive type that represents a boolean.
let isstudent: boolean = true;
let haspaidfees: boolean = false;
console.log(isstudent);
console.log(haspaidfees);

// Array...> Array is a primitive type that represents an array.
let array: number[] = [1, 2, 3, 4, 5];
console.log(array);

// Tuple...> Tuple is a primitive type that represents an array with a fixed number of elements.
let tuple: [number, string] = [1, "Hello World"];
console.log(tuple);

// Enum...> Enum is a primitive type that represents a set of named constants.
enum Color {
    Red,
    Green,
    Blue,
}
let favouritecolor: Color = Color.Red;
console.log(favouritecolor);

// Any...> Represents any type of value. Use it cautiously, as it bypasses type checking.
let randomvalue: any = 10;
randomvalue = "Heello World";
console.log(randomvalue);

// unknown..> Similar to any, but safer because you need to check the type before using it.
let input: unknown = "TypeScript";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}


// Void...> Represents the absence of a value. It is commonly used as the return type for functions that don't return a value.
function greet(): void {
    console.log("Hello World");
}
greet();

// Null and Undefined...> Null and Undefined are primitive types that represent the absence of a value.
let nullvalue: null = null;
let undefinedvalue: undefined = undefined;
console.log(nullvalue);
console.log(undefinedvalue);

// Object...> Represents a non-primitive type (everything except number, string, boolean, etc.).
let user: { id: number; name: string } = {
    id: 125,
    name: "mritiunjay",
};
console.log(user);




// special types
/* never...>The never type represents values that never occur. It is used for:
>Functions that always throw an error.
>Functions that never return (e.g., infinite loops).
>Exhaustive type checks.*/
function throwsError(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
        // Infinite loop
    }
}

// type assertions...>Type assertions are used to tell the compiler about the type of a value, even if TypeScript can't infer it.
let value: any = "Hello World";
let strLength: number = (value as string).length;
console.log(strLength);

// readonly...>Readonly is a utility type that creates a new type with all properties of the original type set to readonly.
type point = {
    readonly x: number;
    readonly y: number;
};
let p: point = { x: 10, y: 20 };
// p.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.

// literals type...>Literal types represent specific, known values.They are often used with union types.
type Direction = "left" | "right" | "up" | "down";
let direction: Direction = "left";

// union type...>Union types allow a variable to have multiple types.
let union: string | number
union = "Hello World";
union = 10;

// intersection type...>Intersection types combine multiple types into one.
type person = { name: string; age: number };
type employee = { id: number; department: string };
type staff = person & employee;
let staffmember: staff = { name: "Mritunjay", age: 20, id: 125, department: "IT" };
console.log(staffmember);




























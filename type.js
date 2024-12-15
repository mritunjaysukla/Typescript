// TypeScript....> TypeScript is a superset of JavaScript. It is a typed language that compiles to JavaScript. It is a statically typed language.
// Basic Types....> TypeScript has a set of basic types that can be used to define variables, functions, and objects.
// number...> number is a primitive type that represents a number.
var number = 10;
console.log(number);
// string...> string is a primitive type that represents a string.
var string = "Hello World";
console.log(string);
// boolean...> boolean is a primitive type that represents a boolean.
var isstudent = true;
var haspaidfees = false;
console.log(isstudent);
console.log(haspaidfees);
// Array...> Array is a primitive type that represents an array.
var array = [1, 2, 3, 4, 5];
console.log(array);
// Tuple...> Tuple is a primitive type that represents an array with a fixed number of elements.
var tuple = [1, "Hello World"];
console.log(tuple);
// Enum...> Enum is a primitive type that represents a set of named constants.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favouritecolor = Color.Red;
console.log(favouritecolor);
// Any...> Represents any type of value. Use it cautiously, as it bypasses type checking.
var randomvalue = 10;
randomvalue = "Heello World";
console.log(randomvalue);
// unknown..> Similar to any, but safer because you need to check the type before using it.
var input = "TypeScript";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
// Void...> Represents the absence of a value. It is commonly used as the return type for functions that don't return a value.
function greet() {
    console.log("Hello World");
}
greet();
// Null and Undefined...> Null and Undefined are primitive types that represent the absence of a value.
var nullvalue = null;
var undefinedvalue = undefined;
console.log(nullvalue);
console.log(undefinedvalue);
// Object...> Represents a non-primitive type (everything except number, string, boolean, etc.).
var user = {
    id: 125,
    name: "Aayush",
};
console.log(user);
// special types
/* never...>The never type represents values that never occur. It is used for:
>Functions that always throw an error.
>Functions that never return (e.g., infinite loops).
>Exhaustive type checks.*/
function throwsError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // Infinite loop
    }
}
// type assertions...>Type assertions are used to tell the compiler about the type of a value, even if TypeScript can't infer it.
var value = "Hello World";
var strLength = value.length;
console.log(strLength);
var p = { x: 10, y: 20 };
var direction = "left";
// union type...>Union types allow a variable to have multiple types.
var union;
union = "Hello World";
union = 10;
var staffmember = { name: "Mritunjay", age: 20, id: 125, department: "IT" };
console.log(staffmember);
function handleInput(input) {
    if (typeof input === "string") {
        console.log("String input:", input.toUpperCase());
    }
    else if (typeof input === "number") {
        console.log("Number input:", input * 2);
    }
    else {
        console.log("Unknown input type");
    }
}
function processStatus(status) {
    if (status === "success") {
        console.log("Operation succeeded");
    }
    else {
        console.log("Operation failed");
    }
}
var users = { id: 125, name: "Aayush" };
// user.id = 200; // Error: Cannot assign to 'id' because it is a read-only property
handleInput("Hello");
handleInput(42);
processStatus("success");

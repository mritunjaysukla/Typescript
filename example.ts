function handleInput(input: unknown): void {
    if (typeof input === "string") {
        console.log("String input:", input.toUpperCase());
    } else if (typeof input === "number") {
        console.log("Number input:", input * 2);
    } else {
        console.log("Unknown input type");
    }
}

function processStatus(status: "success" | "error"): void {
    if (status === "success") {
        console.log("Operation succeeded");
    } else {
        console.log("Operation failed");
    }
}

const users: { readonly id: number; name: string } = { id: 125, name: "Mritunjay" };
// user.id = 200; // Error: Cannot assign to 'id' because it is a read-only property

handleInput("Hello");
handleInput(42);
processStatus("success");


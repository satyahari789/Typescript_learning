//Special Types

//any
let anything: any = "hello";
anything = 5; // OK

//unknown 
let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

//void
function logMessage(): void {
  console.log("Logging...");
}

//never
function throwError(): never {
  throw new Error("Something went wrong");
}


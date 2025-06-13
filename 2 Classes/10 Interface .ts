// Define the interface
interface UserInterface {
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
}

// Use the interface
const user0: UserInterface = {
  name: "Nani",
  age: 25
};

const user2: UserInterface = {
  name: "Alice",
  age: 30,
  isAdmin: true
};

function greetUser(user: UserInterface): void {
  console.log(`Hello, ${user.name}. You are ${user.age} years old.`);
}

greetUser(user); // Hello, satya. You are 25 years old.
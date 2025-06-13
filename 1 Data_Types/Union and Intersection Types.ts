// Union - variable can be multiple types
let value1: string | number = "hello";
value1 = 42;

// Intersection - combines multiple types
type Admin = { role: string };
type Employee = { name: string };
type AdminEmployee = Admin & Employee;

const admin: AdminEmployee = {
  role: "Manager",
  name: "satya"
};
console.log(value1)
console.log(admin)

// Anonymous Classes
//Named class
// Useful for dynamic use cases.
const MyDynamicClass = class {
  sayHello() {
    console.log("Hello from dynamic class");
  }
};

new MyDynamicClass().sayHello();

//named class

const Animal1 = class Dog {
  bark() {
    console.log("Woof!");
  }
};

const pet = new Animal();
// pet.bark(); ✅
// Dog — only accessible inside the class body, not outside.
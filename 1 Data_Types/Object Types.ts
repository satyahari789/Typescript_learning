// object - general object type
let person10: object = { name: "satya", age: 25 };

// specific object type using type or interface
type User1 = {
  name: string;
  age: number;
};

let user: User1 = { name: "Alice", age: 30 };


const apple:{color:string, price:number, discount:boolean}={
  color:"red",
  price:40,
  discount : true
}
apple.color="green"
apple.price=8
apple.discount=true


console.log("fruit color:", apple.color )
console.log("fruit price:", apple.price)
console.log("fruit discount:", apple.discount)
//Type: object

let user: object;
user = {}; // Object

user = {
    id: "1",
    username: "johanson_aj",
    isPro: true
}

console.log('user:', user)
//Object vs object(Clase JS vs Tipo TS)
const myObj = {
    id: "1",
    username: "johanson_aj",
    isPro: true
}
const isInstance = myObj instanceof Object;
console.log(isInstance)
console.log('user.username', myObj.username)
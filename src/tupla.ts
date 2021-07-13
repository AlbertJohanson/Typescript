export {}
// [1, 'user']
let user: [number, string];
user = [1, 'Albert'];

console.log('user', user)
console.log('username', user[1])
console.log('username.length', user[1].length);
console.log('id', user[0]);


//Tuplas con varios valores
//id, username, isPro
let userInfo: [number, string, boolean];
userInfo=[2, 'Albert', true];
console.log('userInfo', userInfo);

//Arreglo con tuplas
let arrayDeTuplas: [number, string][] = []
arrayDeTuplas.push([1, 'Erik']) //*0
arrayDeTuplas.push([2, 'Logan']) //*1
arrayDeTuplas.push([3, 'Xavier']) //*2

//Uso de funciones Array
//lensQueen -> lensQueen001

arrayDeTuplas[2][1].concat('001') // lensQueen001
console.log('array', arrayDeTuplas)

//Corchetes []

//Tipo Explicito
let users: string[];
users = ['Albert', 'Juan Pablo', "Messi"];
/* users = [1, true, 'test']; //Error */


//Tipo Inferido
let otherUsers = ['Albert', 'Juan Pablo', "Messi"];
/* otherUsers = [1, true, 'test']; */


//Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];


//accediendo a los valores en un Array
console.log('First user', users[0])

//Propiedad en Array

console.log('users.length', users.length)

// Uso de funciones en Arrays

users.push("platzi Users");
users.sort();
console.log('users', users)
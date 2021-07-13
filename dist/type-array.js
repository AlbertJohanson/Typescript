"use strict";
//Corchetes []
//Tipo Explicito
var users;
users = ['Albert', 'Juan Pablo', "Messi"];
/* users = [1, true, 'test']; //Error */
//Tipo Inferido
var otherUsers = ['Albert', 'Juan Pablo', "Messi"];
/* otherUsers = [1, true, 'test']; */
//Array<TIPO>
var pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
//accediendo a los valores en un Array
console.log('First user', users[0]);
//Propiedad en Array
console.log('users.length', users.length);
// Uso de funciones en Arrays
users.push("platzi Users");
users.sort();
console.log('users', users);

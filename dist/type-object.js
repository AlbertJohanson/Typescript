"use strict";
//Type: object
var user;
user = {}; // Object
user = {
    id: "1",
    username: "johanson_aj",
    isPro: true
};
console.log('user:', user);
//Object vs object(Clase JS vs Tipo TS)
var myObj = {
    id: "1",
    username: "johanson_aj",
    isPro: true
};
var isInstance = myObj instanceof Object;
console.log(isInstance);
console.log('user.username', myObj.username);

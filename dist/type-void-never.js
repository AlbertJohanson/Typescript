"use strict";
//Void
//Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    /* return 'Hola' */
}
showInfo({ id: 1, username: 'Albert Johanson', firstName: 'Albert' });
//Tipo Inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'Albert Johanson', firstName: 'Albert' });
//Tipo void, como tipo de dato en variable
var unusable;
/* unusable = null; */
unusable = undefined;
//Tipo Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
//Ciclo infinito, programa nunca termina

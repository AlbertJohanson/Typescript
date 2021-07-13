"use strict";
console.log('Hola Platzi World');
//Number
//Explicito
var phone;
phone = 1;
phone = 5231321321;
//phone = 'hola'; //Error
//Inferido
var phoneNumber = 4233213;
phoneNumber = 123;
/* phoneNumber = true; */ //Error por tipo de dato
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//Tipo: Boolean
//Tipado Explicito
var isPro;
isPro = true;
/* isPro = 1; */
//Inferido 
var isUserPro = false;
isUserPro = true;
/* isUserPro = 10; */
//Tipo: String
var username = 'Albert Johanson';
username = 'Albert';
/* username = true;  */ // Error: tipo string
//Template String
//Uso de back-tick `
var userInfo;
userInfo = "\n    User Info:\n        username: " + username + "\n        firstName: " + (username + ' Johanson') + "\n        phone: " + phone + "\n        isPro: " + isPro + "\n";
console.log('userInfo', userInfo);

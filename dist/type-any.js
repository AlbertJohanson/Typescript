"use strict";
//Tipo explicito
var idUser;
idUser = 1; //number
idUser = '1'; //string
console.log('idUser', idUser);
//Inferido
var otherId; //TS infiere que como no le asignamos, es 'any'
otherId = 1;
otherId = "1";
otherId = true;
console.log("otherId", otherId);
var surprise = "Hello TypeScript";
var res = surprise.substring(6);
console.log("res", res);

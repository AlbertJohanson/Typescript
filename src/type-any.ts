//Tipo explicito
let idUser: any;
idUser = 1; //number
idUser = '1'; //string
console.log('idUser', idUser)

//Inferido
let otherId: any; //TS infiere que como no le asignamos, es 'any'
otherId = 1;
otherId = "1";
otherId= true;
console.log("otherId", otherId);

let surprise: any = "Hello TypeScript";
const res = surprise.substring(6);
console.log("res", res);
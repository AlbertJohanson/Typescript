console.log('Hola Platzi World')

//Number
//Explicito
let phone: number;

phone = 1;
phone = 5231321321;
//phone = 'hola'; //Error

//Inferido
let phoneNumber = 4233213;

phoneNumber = 123;
/* phoneNumber = true; */ //Error por tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//Tipo: Boolean
//Tipado Explicito
let isPro: boolean;
isPro = true;
/* isPro = 1; */

//Inferido 
let isUserPro = false;
isUserPro = true;
/* isUserPro = 10; */

//Tipo: String
let username: string = 'Albert Johanson';
username = 'Albert'
/* username = true;  */ // Error: tipo string

//Template String
//Uso de back-tick `

let userInfo: string;
userInfo = `
    User Info:
        username: ${username}
        firstName: ${username + ' Johanson'}
        phone: ${phone}
        isPro: ${isPro}
`;

console.log('userInfo', userInfo)
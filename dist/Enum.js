"use strict";
// Orientacion para Fotografias
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panomara =3; */
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
var portrait = PhotoOrientation.Portrait;
var square = PhotoOrientation.Square;
var panorama = PhotoOrientation.Panorama;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);
console.log('portrait', PhotoOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "BOL";
    Country["Colombia"] = "COL";
    Country["Mexico"] = "MEX";
    Country["EEUU"] = "USA";
    Country["Espa\u00F1a"] = "ESP";
})(Country || (Country = {}));
var country = Country.Colombia;
console.log('country', country);

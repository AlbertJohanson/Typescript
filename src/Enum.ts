// Orientacion para Fotografias
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panomara =3; */

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

const landscape:PhotoOrientation = PhotoOrientation.Landscape;
const portrait:PhotoOrientation = PhotoOrientation.Portrait;
const square:PhotoOrientation = PhotoOrientation.Square;
const panorama: PhotoOrientation = PhotoOrientation.Panorama;


console.log('landscape', landscape)
console.log('Landscape', PhotoOrientation[landscape])

console.log('portrait', PhotoOrientation.Portrait)

enum Country {
    Bolivia = 'BOL',
    Colombia = 'COL',
    Mexico = 'MEX',
    EEUU = 'USA',
    España = 'ESP'
}

const country: Country = Country.Colombia;
console.log('country', country);
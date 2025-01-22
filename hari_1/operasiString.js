let dataString = "abcdefghijklmnopqrstuvwxyz";
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);

dataChar = dataString.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);

// meyambung string
let namaDepan = "Alfa";
let namaBelakang = "Beta";
let namaLengkap = namaDepan.concat(" ",namaBelakang, " Orang Hebat");
console.log(namaLengkap);

// mengambil index (kemunculan pertama)
console.log(namaLengkap.indexOf('H'));
console.log(namaLengkap.indexOf('O'));
console.log(namaLengkap.indexOf('r'));
console.log(namaLengkap.indexOf('e'));

// substring
console.log(namaLengkap.substring(0, 4));
console.log(namaLengkap.substring(5, 10));
console.log(namaLengkap.substring(10, 16));
console.log(namaLengkap.substring(16, 24));

// slice
console.log(namaLengkap.slice(4, 0));
console.log(namaLengkap.slice(5, 10));
console.log(namaLengkap.slice(16, 10));
console.log(namaLengkap.slice(16, 24));

// replace
console.log(namaLengkap.replace("Orang Hebat", "Orang Terbaik"));
console.log(namaLengkap.replace("Beta", "Edison"));

// toLowerCase
console.log(namaLengkap.toLowerCase());
console.log("thomas",namaLengkap.replace("Beta", "Edison").toLowerCase());

// toUpperCase
console.log(namaLengkap.toUpperCase());
console.log(namaLengkap.replace("Beta", "Edison").toUpperCase());

// extract data number
let dataString2 = '10';
console.log(typeof dataString2);
let dataNumber = parseInt(dataString2);
console.log(typeof dataNumber);
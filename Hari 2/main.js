let nama = 'Faldi';
let usia = 22;
let tinggiBadan = 167;
let beratBadan;
let pacar = 2;

if (pacar == null) {
    pacar = 'belum punya';
} else {
    pacar = 'udah punya';
}

let saldoAwal = 50000;
let saldoTambahan = 70000;
const saldoAkhir = saldoAwal + saldoTambahan;

// switch (pacar) {
//     case 1:
//         pacar = 'punya 1 aja';
//         break;
//     case 2:
//         pacar = 'punya 2 pacar, dan aku cukup playboy';
//         break;
//     default:
//         pacar = 'belum punya';
//         break;
// }

alert(
    `Nama saya ${nama}, usia saya itu ${usia} tahun, tinggi badan saya adalah ${tinggiBadan}cm, berat badan saya ${beratBadan}kg, dan pacar saya ${pacar}`
);

alert(`Saldo awal saya: Rp. ${saldoAwal}, dan saya menambahkan: Rp. ${saldoTambahan}, jadi total saldo saya sekarang adalah Rp. ${saldoAkhir}`);
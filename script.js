// Tugas Javascript 1
// Winson Kennedy Web D Morning

// 1. If, else, nested if

// If
const hari = "sabtu";

if (hari == "sabtu") {
    console.log("Yay, weekend!");
}

// If else
const nilai = 50;

if (nilai >= 70) {
    console.log("Kamu lulus!")
} else {
    console.log("Kamu remedial!");
}

// Nested if
const umur = 15;

if (umur >= 0 && umur <= 6) {
    if (umur <= 3) {
        console.log("Kamu bayi!");
    } else if (umur > 3) {
        console.log("Kamu balita");
    }
} else if (umur >= 7 && umur <= 12) {
    if (umur <= 10) {
        console.log("Kamu anak-anak!");
    } else if (umur >= 11) {
        console.log("Kamu anak-anak menjelang remaja!")
    }
} else if (umur >= 13 && umur <= 19) {
    if (umur <= 18) {
        console.log("Kamu anak remaja!");
    } else if (umur > 18) {
        console.log("Kamu remaja menjelang dewasa!")
    }
} else if (umur >= 20 && umur <= 60) {
    console.log("Kamu orang dewasa!");
} else {
    console.log("Kamu sudah tua!");
}

// 2. Switch case
let hasil;
let nilaiMandarin = 80;
switch(true) {
    case nilaiMandarin >= 85:
        hasil = "A, kamu anak advance!";
        break;
    case nilaiMandarin >= 60:
        hasil = "B, kamu anak intermediate!";
        break;
    case nilaiMandarin >= 0:
        hasil = "C, kamu anak basic!";
        break;
}

console.log(hasil);

// 3. For statement
const namaMahasiswa = ["Winson", "William", "Jonathan"];

for (i = 0; i < namaMahasiswa.length; i++) {
    console.log(`${i+1}. Nama mahasiswa: ${namaMahasiswa[i]}`)
}

// 4. While, do while
// While
const namaBuah = ["Apel", "Mangga", "Jeruk"];
let x = 0;
while (x < namaBuah.length ) {
    console.log(`${x+1}. Jenis-jenis buah:${namaBuah[x]}`);
    x++;
}

// Do while
const namaMall = ["BCS", "One mall", "Grand Batam"];
let y = 0;
do {
    console.log(`${y+1}. Nama-nama mall dibatam: ${namaMall[y]}`);
    y++;
} while (y < namaMall.length);

// 5. Function
function luasPersegi(sisi) {
    luas = sisi * sisi;
    console.log(`Luas persegi dengan sisi ${sisi} cm yaitu ${luas} cm^2`);
}

luasPersegi(5);


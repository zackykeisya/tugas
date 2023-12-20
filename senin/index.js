// 1.Mencari keliling Persegi Panjang 
// memasukan nilai panjang, lebar
// menghitung rumus: 2*P + 2*L
// menampilkan hasil

// Memasukan nilai panjang,lebar
let panjang = 150;
let lebar = 40;

// Menghitung rumus
let hasil = 2 * panjang + 2 * lebar;

// Menampilkan
console.log("keliling persegi panjang adalah" + hasil)

// 2.luas lingkaran

// tentukan phi dan r


let phi = 3.14;
let r = 100;

let hasilL = phi * r 

console.log("hasilnya:" + hasilL)

let Lp = 64;
let sisi = Math.sqrt(Lp);
let hasilNya = 4 * sisi;
console.log (hasilNya)

// -------------------------------------- //

// syarat membuat ktp
// input

let umur = 18;

// proses/ logika
if(umur >= 17){
    result = "membuat ktp";
} else {
    result = "belum bisa membuat ktp"
}

// output

console.log(result)




let pabp = 86;
let math = 80;
let dpk = 77;
let rata = (pabp + math + dpk) / 3 ;

if (rata >=80 && rata <=100){
    grade = "A";
}
else if (rata >=75 && rata <80){
    grade = "B"
}

console.log(grade)

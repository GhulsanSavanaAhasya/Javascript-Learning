// Penggunaan pop up box
alert("Selamat Datang!");

let cobaLagi = true;
while(cobaLagi){
    let namaAnda = prompt("Masukkan Nama Anda!");
    console.log("Nama Anda Adalah " + namaAnda);

    cobaLagi = confirm("Coba Lagi?");
}
alert("Terima Kasih Sudah Mencoba! :)");

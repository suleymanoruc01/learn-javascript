// 9. Kitap isimlerini Map ile Listele
function kitapIsimleri() {
    const kitaplar = [
        { ad: "Sefiller", yazar: "Victor Hugo" },
        { ad: "1984", yazar: "George Orwell" },
        { ad: "Suç ve Ceza", yazar: "Dostoyevski" }
    ];
    let isimler;
    
    isimler =  kitaplar.map(kitap => kitap.ad);

   isimler = isimler.map(isim => "Kitap adı: " + isim );

    document.getElementById("kitapSonuc").textContent = "Kitaplar: " + isimler;
    }
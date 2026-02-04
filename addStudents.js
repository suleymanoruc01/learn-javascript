    //7.Öğrenci ekle
    function ekleOgrenciler() {
    const ogrenciler = ["Zeynep", "Ali", "Mehmet", "Ayşe", "Can"];
    let ad = document.getElementById("ogrenciInput").value;
    ogrenciler.push(ad);
    
    return ogrenciler;

    }
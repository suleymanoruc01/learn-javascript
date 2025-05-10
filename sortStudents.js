    // 7. Öğrencileri Alfabetik Sırala
    function siralaOgrenciler() {
    const ogrenciler = ekleOgrenciler();
    
    sirali = ogrenciler.sort();

    document.getElementById("ogrenciSonuc").textContent = "Sıralı: " + sirali;
    }
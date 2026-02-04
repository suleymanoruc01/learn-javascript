    // 5. Arrow Function ile Kare Hesaplama
    const kareHesapla = () => {
      let sayi = parseFloat(document.getElementById("kareInput").value);
      document.getElementById("kareSonuc").textContent = "Kare: " + sayi * sayi ;
    }
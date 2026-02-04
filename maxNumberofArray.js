    // 6. Dizideki En Büyük Sayıyı Bul
    function enBuyukBul() {
      let diziStr = document.getElementById("diziInput").value;
      let sayilar = diziStr.split(",").map(Number);
      let enBuyuk = 0;
      for(let i = 0 ; i < sayilar.length; i++){

        if(sayilar[i] > enBuyuk){
            enBuyuk = sayilar[i];
        }

      }
      document.getElementById("diziSonuc").textContent = "En büyük: " + enBuyuk;
    }
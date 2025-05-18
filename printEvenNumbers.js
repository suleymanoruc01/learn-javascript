// 1. 1–100 Arası Çift Sayılar
function yazdirCiftSayilar() {
        let sonuc = "";
        for (let i = 1; i <= 100; i++) {
          if (i % 2 === 0) {
            sonuc += i + " ";
          }
        }
        document.getElementById("ciftSonuc").textContent = sonuc;
      }
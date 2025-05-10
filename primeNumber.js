// 2. Asal Sayı Kontrolü
function asalKontrol() {
        let sayi = parseInt(document.getElementById("asalInput").value);
        let sonuc = "Asal değil";
        
         if (sayi <= 1) {
            sonuc = "Asal değil";
        } 
        else {
            let asal = true;
            for (let i = 2; i <= Math.sqrt(sayi); i++) {
                if (sayi % i === 0) {
                asal = false;
                break;
                }
            }
            sonuc = asal ? "Asal" : "Asal değil";
        }
        document.getElementById("asalSonuc").textContent = sonuc;
      }
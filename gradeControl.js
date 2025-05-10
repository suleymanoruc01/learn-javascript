// 3. Not Kontrolü
function notKontrol() {
        let not = parseFloat(document.getElementById("notInput").value);
        let sonuc = "Kaldı";
        if(not > 49){
            sonuc = "Geçti";
        }
        document.getElementById("notSonuc").textContent = sonuc;
      }
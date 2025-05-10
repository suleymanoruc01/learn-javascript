 // 4. Ad ve Yaş Al – Mesaj Gönder
function mesajGonder() {
        let ad = document.getElementById("adInput").value;
        let yas = parseInt(document.getElementById("yasInput").value);
        let mesaj = ad + " " + yas + " yaşında." 
        document.getElementById("mesajSonuc").textContent = mesaj;
    }
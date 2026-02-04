     // Tekrar edenleri temizleme
    function tekrarTemizle() {
      const input = document.getElementById("tekrarInput").value;
      const sayilar = input.split(',').map(Number);
      const benzersiz = [...new Set(sayilar)];
      document.getElementById("tekrartemizle").innerHTML = benzersiz.join(', ');
    }
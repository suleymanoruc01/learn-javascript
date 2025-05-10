    // Sayı ters çevirme
    function sayiTersCevir() {
      const input = document.getElementById("reverseInput").value;
      const ters = input.toString().split('').reverse().join('');
      document.getElementById("tersayi").innerHTML = ters;
    }
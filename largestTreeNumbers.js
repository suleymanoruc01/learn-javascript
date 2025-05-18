    // En büyük 3 sayıyı bulma
    function enBuyukUc() {
      const input = document.getElementById("buyukUcInput").value;
      const sayilar = input.split(',').map(Number);
      sayilar.sort((a, b) => b - a);
      const ilkUc = sayilar.slice(0,3);
      console.log(sayilar);
      document.getElementById("ucbuyuksayi").innerHTML = ilkUc;
    }
// 8. 50+ Notları Filter ile al, Reduce ile topla
function notlariFiltreleVeTopla() {
    const notlar = [45, 78, 32, 90, 51, 66];
    let filtrelenmis, toplam;

    filtrelenmis = notlar.filter(buyukFunction);
    toplam = filtrelenmis.reduce(eklemeFunction)
    
    console.log(filtrelenmis);
    console.log(toplam);
    function buyukFunction(value) {
        return value > 50;
    }

    function eklemeFunction(total, value) {
        return total + value;
    }

    document.getElementById("notToplam").textContent = "50+ Notlar: " + filtrelenmis + " | Toplam: " + toplam;

    
    }
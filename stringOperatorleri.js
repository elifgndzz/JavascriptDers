let ad="Çisem";
let soyad="Yaşar";
let memleket="Balıkesir";

let musteriProfili=`
<h3>MÜŞTERİ BİLGİLERİ: </h3><br>
Ad Soyad: ${ad} ${soyad} <br>
Memleket: ${memleket} <br>
Hesap No: ${"MUST" + "-" + ad.substring(0,2)
    .toUpperCase() + "2025"}`;
document.writeln(musteriProfili);
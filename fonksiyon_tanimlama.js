// Fonksiyon Tanımlama (Function Declaration)
function selamVer(isim)
{
   const mesaj="Hoş Geldiniz"+isim;
   return mesaj;
}

let selamlama=selamVer("Çisem");

document.writeln("<u>Fonksiyon Bildirimi Örneği </u><br>");
document.writeln(selamlama+"<br> <br>");




//Function Expression Örneği
const carpmaIşlemi=function(sayi1,sayi2)
{
    const sonuc=sayi1*sayi2;
    return sonuc;
}
   let hesapSonucu=carpmaIşlemi(7,3);

    document.writeln("<u>Fonksiyon Expression Örneği </u< <br>");
    document.writeln("İşlem Sonucu:"+hesapSonucu+"<br><br>");


   
   
    //Ok Fonksiyomları

const farkAl=(sayi1,sayi2)=>sayi1-sayi2;
let farkSonuc=farkAl(25,10);

document.writeln("<u>Ok fonksiyon örneği </u< <br>");
document.writeln("İşlem Sonucu:"+farkSonuc+"<br><br>");







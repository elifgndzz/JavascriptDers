//Fonksiyon tanımlama boş durumu kontrol et
function sifreKontrolEt(hamSifre)
    {
        if(hamSifre==null || hamSifre.trim()=="")
        {
            alert("Girdi Alınamadı alan boş bırakıldı.");
            return false;
        }
//girdi temizle
    let temizSifre=hamSifre.trim();
    document.writeln(`Kontrol Edilen Şifre: "${temizSifre}"`+"<br>");
        if(temizSifre.length<8)
            {
                document.writeln("Başarısız Şifre en az 8 karakter olmalıdır."+"<br>");
                return false;
            }
        else if(!temizSifre.includes("!"))
            {
                document.writeln("Başarısız şifre ! karakteri içermeli" + "<br>");
                return false;
            }
        document.writeln("Başarılı Şifre"+ "<br>");
        return true;            
    }
    let kullaniciGirdisi=prompt("Lütfen Şifre giriniz.");
    let sonuc=sifreKontrolEt(kullaniciGirdisi);
    document.writeln(`İşlem Sonucu(true/false):${sonuc}`);
let mevsim=prompt("İlkbahar, sonbahar, yaz ve kış mevsimlerinden birini yazınız");
switch(mevsim.toLowerCase())
{
    case "kış":
        document.writeln("Kayak yapabilirsiniz");
        break;
    case "ilkbahar":
        document.writeln("Doğa yürüyüşü yapabilirsiniz");
        break;
    case "yaz":
        document.writeln("Denize gidebilirsiniz");
        break;
    case "sonbahar":
        document.writeln("Yaprak toplayabilirsiniz");
        break;
     default:
            document.writeln("Böyle bir mevsim yoktur");
            break;
}
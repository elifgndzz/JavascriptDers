let sayi = prompt("Sayı Giriniz: ");
let faktoriyel = 1;

for (let i = 1; i <= sayi; i++) 
{
    faktoriyel *= i;
}
alert(sayi+" Sayısının faktöriyeli: "+ faktoriyel);
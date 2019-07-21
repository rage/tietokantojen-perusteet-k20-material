---
path: "/vinkkeja-javaan"
title: "Vinkkejä Java-ohjelmointiin"
hidden: false
information_page: true
---

Tälle sivulle on koottu Java-ohjelmointiin liittyvää tietoa,
josta voi olla hyötyä kurssilla.
Monet asioista ovat esiintyneet myös ohjelmoinnin peruskursseilla,
mutta ne eivät ehkä ole enää tuoreessa muistissa.

## Taulukko

Javan perustietorakenne on _taulukko_,
joka muodostuu peräkkäin olevista alkioista.
Taulukon alkiot on numeroitu kokonaisluvuin
0, 1, 2, jne., ja niihin viitataan `[]` -merkinnän avulla.

Esimerkiksi seuraava koodi luo taulukon `luvut`,
jossa on 3 lukua, ja käsittelee sen alkioita.

```java
int[] luvut = new int[3];
luvut[0] = 2;
luvut[1] = 5;
luvut[2] = luvut[0]+luvut[1];
```

Yllä olevassa koodissa jokainen taulukon alkio on aluksi 0.
Toinen tapa luoda taulukko on antaa sen alkusisältö
aaltosulkujen `{` ja `}` sisällä:

```java
int[] luvut = {1,2,3};
```

Taulukko on hyvä valinta algoritmien toteutuksessa,
jos sen ominaisuudet riittävät,
koska se on paljon kevyempi kuin `ArrayList`.


## Taulukon tulostaminen

Taulukon sisällön tulostaminen vaatii hieman työtä,
koska seuraava koodi ei toimi halutulla tavalla:

```java
int[] luvut = {1,2,3};
System.out.println(luvut); // [I@3cd1a2f1
```

Sisällön pystyy kuitenkin tulostamaan näin:

```java
int[] luvut = {1,2,3};
System.out.println(Arrays.toString(luvut)); // [1, 2, 3]
```

## Viittaukset ja kopiointi

Javassa on kahdenlaisia muuttujia:
alkeistyypin muuttujat (esim. `int`)
ja oliomuuttujat (esim. `String` ja taulukko).
Näiden muuttujien käsittelyssä on tärkeä ero:
alkeismuuttujien arvo kopioidaan sijoituksessa
ja metodin parametrina,
mutta oliomuuttujasta kopioidaan vain viittaus.

Esimerkiksi seuraavassa koodissa ei ole mitään yllättävää:

```java
int a = 3;
int b = a;
b = 5;
System.out.println(a); // 3
```

Kuitenkin kun saman koodin toteuttaa taulukoilla,
tulee yllättävämpi tulos:

```java
int[] a = {1,2,3};
int[] b = a;
b[0] = 5;
System.out.println(a[0]); // 5
```

Tässä `a` ja `b` viittaavat _samaan_ taulukkoon,
eli kun taulukkoa `b` muuttaa, niin muutos heijastuu
myös taulukkoon `a`.
Tämä lienee yksi yleisimmistä syistä bugeihin Java-ohjelmissa.

Jos taulukosta halutaan tehdä aito kopio,
jonka muuttaminen ei vaikuta alkuperäiseen taulukkoon,
ratkaisu on käyttää sanaa `clone`:

```java
int[] a = {1,2,3};
int[] b = a.clone();
b[0] = 5;
System.out.println(a[0]); // 1
```

## == vs. equals

Seuraava koodi _ei_ toimi oikein, jos `a` ja `b` ovat merkkijonoja,
koska koodi vertailee viittauksia eikä sisältöjä.

```java
if (a == b) {
    // ...
}
```

Toimiva vertailu on käyttää metodia `equals`:

```java
if (a.equals(b)) {
    // ...
}
```

## int vs. Integer

Javassa alkeistyyppien (kuten `int`) rinnalla on
vastaavia oliotyyppejä (kuten `Integer`),
jotka ovat omiaan aiheuttamaan sekaannusta.

Oliotyypit esiintyvät usein Javan valmiin tietorakenteen osana.
Esimerkiksi kun luomme `ArrayList`-rakenteen,
jonka sisältönä on `int`-lukuja, tyypiksi tulee antaa
`Integer`:

```java
ArrayList<Integer> luvut = new ArrayList<>();
```

Kuitenkin luonnin jälkeen rakenteen käsittelyssä voi käyttää
`int`-lukuja tavalliseen tapaan:

```java
luvut.add(1);
luvut.add(2);
luvut.add(3);
int x = luvut.get(0);
```

Yllä olevassa koodissa Java muuttaa automaattisesti arvoja tyyppien
`int` ja `Integer` välillä.
Viimeisellä rivillä metodi `get` palauttaa `Integer`-arvon,
mutta sen voi laittaa kuitenkin suoraan `int`-muuttujaan.

Huomaa kuitenkin, että seuraava koodi _ei_ ole toimiva:

```java
if (luvut.get(0) == luvut.get(1)) {
    // ...
}
```

Koska kyseessä ovat muuttamattomat `Integer`-luvut,
niitä tulee vertailla `equals`-metodilla seuraavasti:

```java
if (luvut.get(0).equals(luvut.get(1))) {
    // ...
}
```

Kuitenkin Javan toteutuksesta riippuen
_pienillä_ luvuilla (esim. välillä -128...127)
myös `==`-vertailu näennäisesti toimii,
eli tällainen bugi tulee esille vasta silloin, 
kun koodi käsittelee suurempia lukuja.

## static-muuttujat

Luokassa oleva `static`-muuttuja on yhteinen kaikille
luokasta luotaville olioille.
Sen arvo säilyy tallessa olioiden välillä,
toisin kuin tavallisen muuttujan arvo.
Tarkastellaan esimerkkinä seuraavaa koodia:

```java
public class Testi {
    static int a;
    int b;
    
    void tulosta() {
        a++; b++;
        System.out.println(a + " " + b);
    }
}
```

Kun luokasta luodaan kaksi oliota,
muuttuja `a` on niille yhteinen,
kun taas kummallakin oliolla on oma muuttuja `b`:

```java
Testi x = new Testi();
x.tulosta(); // 1 1
Testi y = new Testi();
y.tulosta(); // 2 1
```

Tirassa moni outo bugi testatessa koodia johtuu siitä,
että luokassa on käytetty `static`-muuttujaa.
Tällöin tietoa säilyy muuttujissa testien välillä,
vaikka testit eivät liity toisiinsa.
Ratkaisu on kerrankin helppo: kun sanan `static` poistaa,
niin koodi alkaa toimia moitteetta.

## Merkki ja merkkijono

Merkki (`char`) on yksittäinen symboli,
kuten kirjain tai numero. Merkki kirjoitetaan koodissa
heittomerkkien sisään.

Merkkijono (`String`) on jono peräkkäin olevia merkkejä.
Merkkijono kirjoitetaan koodissa lainausmerkkien sisään.

```java
char c = 'a';
String s = "apina";
```

Javassa merkkijonoa ei pysty muuttamaan sen määrittelyn jälkeen.
Seuraava koodi kuitenkin näyttää lisäävän merkkijonon loppuun merkin:

```java
String s = "apina";
s = s+"x";
System.out.println(s); // apinax
```

Tässä on kysymys siitä, että `+`-operaatio luo uuden merkkijonon,
johon se kopioi ensin merkkijonon `s` merkit ja lopuksi merkin `"x"`.

```java
String s = "";
for (int i = 0; i < 1000000; i++) {
    s += "a";
}
```

```java
StringBuilder b = new StringBuilder();
for (int i = 0; i < 1000000; i++) {
    b.append("a");
}
String s = b.toString();
```

## Lukujen esittäminen

Yleisimmin käytetyt tietotyypit lukujen esittämiseen ovat
`int`, `long` ja `double`.

Tyyppi `int` on 32-bittinen kokonaislukutyyppi,
jonka arvoalue on –2^31...2^31–1
(eli luvun suuruus voi olla enintään noin kaksi miljardia).
Tämä on yleensä hyvä valinta kokonaisluvun tyypiksi.

Jos on tarvetta suuremmille kokonaisluvuille,
apuun tulee 64-bittinen tyyppi `long`,
jonka arvoalue on –2^63...2^63–1
(eli luvun suuruus voi olla enintään noin 9&middot;10^18).

Tyyppi `double` on 64-bittinen liukulukutyyppi,
jonka avulla voi esittää desimaalilukuja.
Huomaa kuitenkin, että esim. Tirassa on hyvin harvoin tarvetta
käyttää liukulukuja.
Sen sijaan kannattaa miettiä, miten koodin voi tehdä tarkasti
kokonaisluvuilla.

## Lause vs. lauseke

_Lause_ (_statement_) on ohjelmassa oleva komento,
kun taas _lauseke_ (_expression_) on jokin koodin osa, jolla on arvo.
Esimerkiksi `System.out.println(a+b)` on lause,
jonka osana on lauseke `a+b`.

Javassa melko moni lauseelta näyttävä ilmaisu on itse asiassa
lauseke, jolla on arvo.
Esimerkiksi sijoitus `a = b` on lauseke,
jonka arvona on `b`.
Seuraava koodi samaan aikaan sijoittaa muuttujan `a` arvoksi 5
ja tulostaa arvon.

```java
int a = 3;
System.out.println(a = 5); // 5
```

Lausekkeet `a++` ja `++a` kasvattavat molemmat `a`:n arvoa yhdellä,
mutta `a++` on arvoltaan `a`, kun taas `++a` on arvoltaan `a+1`.
Seuraavat koodit havainnollistavat asiaa:

```java
int a = 3;
System.out.println(a++); // 3
System.out.println(a); // 4
```

```java
int a = 3;
System.out.println(++a); // 4
System.out.println(a); // 4
```

## Ehdollinen lauseke

Ehdollinen lauseke `a ? b : c` on arvoltaan `b`,
jos ehto `a` pätee, ja muuten `c`.
Esimerkiksi seuraavassa koodissa ehdollisen lausekkeen arvo
on `"parillinen"`, jos ehto `x%2 == 0` pätee
(eli `x` on parillinen), ja muuten `"pariton"`.

```java
int x;
// ...
String s = x%2 == 0 ? "parillinen" : "pariton";
```

## Komentorivin käyttäminen

```
$ javac Koodi.java
```

```
$ java Koodi
```

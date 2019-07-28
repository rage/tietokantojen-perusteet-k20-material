---
path: "/vinkkeja-javaan"
title: "Vinkkejä Java-ohjelmointiin"
hidden: false
information_page: true
---

Tälle sivulle on koottu Java-ohjelmointiin liittyvää tietoa,
josta voi olla hyötyä kurssilla.
Monet asioista ovat esiintyneet myös ainakin ohimennen ohjelmoinnin peruskursseilla,
mutta ne eivät ehkä ole enää tuoreessa muistissa.

## Lukujen käsittely

### Kokonaisluvut

<p>Javan tavallisimmat kokonaislukutyypit ovat
<code class="language-id">int</code> ja
<code class="language-id">long</code>.
Tyyppi <code class="language-id">int</code> on 32-bittinen,
ja siinä olevan luvun suuruus
voi olla noin 2 &middot; 10<sup>9</sup>.
Tyyppi <code class="language-id">long</code> on puolestaan 64-bittinen,
ja siinä olevan luvun suuruus voi olla noin 9 &middot; 10<sup>18</sup>.</p>

Yleensä hyvä valinta kokonaisluvun tyypiksi on `int`.
Jos sen arvoalue on liian pieni, voi käyttää
suurempaa tyyppiä `long`.

Jos käytetyn tyypin arvoalue loppuu kesken, tapahtuu _ylivuoto_
(_overflow_), mikä näkyy usein siinä, että koodin tuloksena
on negatiivinen luku, vaikka sellaista ei pitäisi tulla.
Näin käy esimerkiksi seuraavassa koodissa:

```java
int a = 123456789;
int b = 987654321;
System.out.println(a*b); // -67153019
```

Tässä on ongelmana, että laskun tulos ei mahdu `int`-tyyppiin.
Ongelman voi korjata käyttämällä `long`-tyyppiä:

```java
long a = 123456789;
long b = 987654321;
System.out.println(a*b); // 121932631112635269
```

Seuraavassa koodissa on vielä yksi sudenkuoppa:

```java
long x = 123456789*987654321;
System.out.println(x); // -67153019
```

Nyt vaikka muuttujan `x` tyyppi on `long`,
kertolasku lasketaan edelleen `int`-tyypillä.
Yksi tapa korjata asia on muuttaa toinen luvuista
`long`-tyyppiseksi näin:

```java
long x = (long)123456789*987654321;
System.out.println(x); // 121932631112635269
```

Kuten tästä näkyy, `long`-tyypin käyttäminen vaatii tarkkuutta.
Usein jos koodi antaa outoja tuloksia, jossain kohtaa on kuitenkin
käytetty vahingossa `int`-tyyppiä.

### Liukuluvut

Javan tavallisin liukulukutyyppi on 64-bittinen `double`.
Liukulukujen etuna on, että niissä voi olla desimaaliosa:

```java
double x = 12.527;
```

Liukuluvuissa on kuitenkin ongelmana, että niissä tapahtuu pyöristysvirheitä.
Seuraava koodi havainnollistaa asiaa:

```java
double x = 3*0.3+1;
double y = 1;
if (x == y) System.out.println("x ja y ovat samat");
if (x < y) System.out.println("x on pienempi kuin y");
if (x > y) System.out.println("x on suurempi kuin y");
```

Vaikka `x`:n ja `y`:n arvon pitäisi olla sama,
koodi tulostaa `x on pienempi kuin y`.
Syynä on, että laskua `3*0.3+1` ei pystytä laskemaan tarkasti,
vaan `x`:n arvoksi tulee hieman alle 1.

Tämän vuoksi liukulukuja kannattaa välttää _aina kun mahdollista_.
Yleensä löytyy jokin tapa, miten algoritmin voi toteuttaa tarkasti ilman liukulukuja.

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

### Muutos yhdellä

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

### Ehdollinen lauseke

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

## Taulukko

Javan perustietorakenne on _taulukko_,
joka muodostuu peräkkäin olevista alkioista.
Taulukon alkiot on numeroitu kokonaisluvuin
0, 1, 2, jne., ja niihin viitataan `[]` -merkinnän avulla.

Taulukko on hyvä valinta algoritmien toteuttamisessa,
jos sen ominaisuudet riittävät,
koska se on paljon kevyempi kuin esimerkiksi `ArrayList`-rakenne.

### Taulukon käsittely

Seuraava koodi luo taulukon `luvut`, jossa on 5 alkiota.
Jokainen arvo on aluksi 0.

```java
int[] luvut = new int[5];
```

Toinen tapa luoda taulukko on antaa sen alkiot listana:

```java
int[] luvut = {3,1,5,2,5};
```

Taulukon alkioita voi käsitellä samaan tapaan kuin tavallisia muuttujia:

```java
luvut[0] = 2;
luvut[1] = 5;
luvut[2] = luvut[0]+luvut[1];
```

### Taulukon tulostaminen

Taulukon tulostaminen vaatii hieman työtä,
koska seuraava koodi ei toimi halutusti:

```java
int[] luvut = {1,2,3};
System.out.println(luvut); // [I@3cd1a2f1
```

Taulukon pystyy kuitenkin tulostamaan näin:

```java
int[] luvut = {1,2,3};
System.out.println(Arrays.toString(luvut)); // [1, 2, 3]
```

## Viittaukset ja kopiointi

Javassa on kahdenlaisia muuttujia:
alkeistyypin muuttujat (esim. `int`)
ja oliomuuttujat (esim. taulukko).
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
Tämä on hyvin yleinen syy bugeihin Java-ohjelmissa.

Jos taulukosta halutaan tehdä aito kopio,
jonka muuttaminen ei vaikuta alkuperäiseen taulukkoon,
ratkaisu on käyttää metodia `clone`:

```java
int[] a = {1,2,3};
int[] b = a.clone();
b[0] = 5;
System.out.println(a[0]); // 1
```

## Merkkijonot

### Merkki vs. merkkijono

Merkki (`char`) on yksittäinen symboli,
kuten kirjain tai numero. Merkki kirjoitetaan koodissa
heittomerkkien sisään.

Merkkijono (`String`) on jono peräkkäin olevia merkkejä.
Merkkijono kirjoitetaan koodissa lainausmerkkien sisään.

```java
char c = 'a';
String s = "apina";
```

Metodi `charAt` antaa tietyssä kohtaa merkkijonoa olevan merkin:

```java
String s = "apina";
System.out.println(s.charAt(1)); // p
```

### Merkkijonojen vertailu

Seuraava koodi _ei_ toimi oikein, jos `a` ja `b` ovat merkkijonoja,
koska `==`-operaattori vertailee viittauksia eikä sisältöjä.

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

### Merkkijonon muuttaminen

Javassa merkkijonoa ei voi muuttaa sen luomisen jälkeen,
vaan ainoa tapa on luoda uusi merkkijono.
Esimerkiksi `+=`-operaattori luo uuden merkkijonon
kopioimalla sen pohjaksi alkuperäisen merkkijonon sisällön.
Seuraavan koodin seurauksena muistissa on kolme merkkijonoa:
`"apina"`, `"x"` ja `"apinax"`.

```java
String s = "apina";
s += "x";
```

Seuraava koodi on _erittäin tehoton_ tapa luoda merkkijono,
jossa on miljoona a-merkkiä:

```java
String s = "";
for (int i = 0; i < 1000000; i++) {
    s = s+"a";
}
```

Ongelmana on, että silmukan jokainen askel luo uuden merkkijonon,
eli koodi luo merkkijonot `"a"`, `"aa"`, `"aaa"`, jne.
Tässä kuluu paljon aikaa ja muistia.
Tehokas tapa on käyttää `StringBuilder`-luokkaa tai
`char`-taulukkoa merkkijonon luomiseen.

## int vs. Integer

Javassa alkeistyyppien (kuten `int`) rinnalla on
vastaavia oliotyyppejä (kuten `Integer`),
jotka ovat omiaan aiheuttamaan sekaannusta.

Oliotyypit ovat välttämätön paha Javan tietorakenteissa.
Esimerkiksi kun luomme `ArrayList`-rakenteen,
jonka sisältönä on `int`-lukuja, tyypiksi tulee antaa
`Integer`:

```java
ArrayList<Integer> luvut = new ArrayList<>();
```

Java tekee usein automaattisia muunnoksia tyyppien välillä.
Esimerkiksi seuraava koodi toimii mainiosti,
vaikka `luvut` sisältää `Integer`-lukuja ja koodi käyttää `int`-lukuja:


```java
luvut.add(1);
luvut.add(2);
luvut.add(3);
int x = luvut.get(0);
```

Huomaa kuitenkin, että seuraava koodi _ei_ ole toimiva:

```java
if (luvut.get(0) == luvut.get(1)) {
    // ...
}
```

Tässä ei tapahdu muunnosta `int`-tyypiksi,
vaan Java vertailee `Integer`-lukuja.
Nyt `==`-operaattori ei toimi halutusti,
vaan vertailu tulee tehdä `equals`-metodilla:

```java
if (luvut.get(0).equals(luvut.get(1))) {
    // ...
}
```

Asiaa mutkistaa vielä se, että `==`-vertailu saattaa toimia näennäisesti,
kun luvut ovat pieniä (esim. välillä –128...127),
koska Java voi silloin vertailla niitä eri tavalla.
Bugi tulee kuitenkin esille silloin, 
kun koodi käsittelee suurempia lukuja.

## static-muuttujat

Luokassa oleva `static`-muuttuja on yhteinen kaikille
luokasta luotaville olioille.
Sen arvo säilyy tallessa olioiden välillä,
toisin kuin tavallisen muuttujan arvo.
Tarkastellaan esimerkkinä seuraavaa luokkaa:

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

Moni outo bugi testatessa koodia johtuu siitä,
että luokassa on käytetty `static`-muuttujaa.
Tällöin tietoa säilyy muuttujissa testien välillä,
vaikka testit eivät liity toisiinsa.
Ratkaisu on kerrankin helppo: kun sanan `static` poistaa,
niin koodi alkaa toimia moitteetta.

## Komentorivin käyttäminen

On hyödyllinen taito osata kääntää ja suorittaa Java-koodi
komentorivillä.
Tällöin ohjelmoijalla on täysi kontrolli asioihin,
toisin kuin IDEä (esim. NetBeans) käyttäessä.

Seuraavat esimerkit olettavat, että käytössä on Linux-ympäristö.
Muissa ympäristöissä komentoriviä käytetään melko samalla tavalla.

### Käännös ja suoritus

Seuraava koodi kääntää tiedostossa `Koodi.java` olevan luokan:

```java
$ javac Koodi.java
```

Tästä syntyy käännetty tiedosto `Koodi.class`, jonka voi suorittaa näin:

```java
$ java Koodi
```

### Komentoriviparametrit

Metodin `main` parametrina oleva taulukko `args` sisältää parametrit,
jotka ohjelmalle on annettu komentorivillä.
Seuraava ohjelma tulostaa kaikki parametrinsa:

```java
public class Koodi {
    public static void main(String[] args) {
        for (int i = 0; i < args.length; i++) {
            System.out.println(i + " " + args[i]);
        }
    }
}
```

Voimme testata ohjelmaa suorittamalla se näin:

```java
$ java Koodi apina banaani cembalo
```

Nyt ohjelman tulostus on seuraava:

```java
0 apina
1 banaani
2 cembalo
```

### Palautusarvo

Ohjelma voi myös _palauttaa_ kokonaisluvun, jonka voi tarkastaa komentorivillä
ohjelman suorituksen jälkeen.
Tämä tapahtuu poistumalla ohjelmasta metodilla `System.exit`:

```java
public class Koodi {
    public static void main(String[] args) {
        System.exit(42);
    }
}
```

Ohjelman suorituksen jälkeen palautusarvoon pääsee käsiksi `$?`-muuttujan kautta:

```java
$ java Koodi
$ echo $?
42
```

Yleensä periaatteena on, että jos ohjelman suoritus päättyy onnistuneesti,
palautusarvo on 0 (Javan oletus, jos ei käytä komentoa `System.exit`),
ja muut palautusarvot ilmaisevat mahdollisia virhetilanteita.

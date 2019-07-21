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

Taulukon sisällön tulostaminen vaatii hieman työtä,
koska seuraava koodi ei toimi halutulla tavalla:

```java
System.out.println(luvut); // [I@3cd1a2f1
```

Sisällön pystyy kuitenkin tulostamaan näin:

```java
System.out.println(Arrays.toString(luvut)); // [1, 2, 3]
```


Taulukko on hyvä valinta algoritmien toteutuksessa,
jos sen ominaisuudet riittävät,
koska se on paljon kevyempi kuin `ArrayList`.

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

## String vs. StringBuilder

## Lukujen esittäminen

## Komentorivin käyttäminen

## Lause vs. lauseke

## Ehdollinen lauseke

## Tyyppimuunnokset

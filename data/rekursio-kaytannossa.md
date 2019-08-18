---
path: "/rekursio-kaytannossa"
title: "Rekursio käytännössä"
hidden: false
information_page: true
---

## Yksi kutsu

Yksinkertaisin tilanne on, että rekursiivinen metodi kutsuu
itseään tarkalleen yhdessä kohdassa.
Näin on seuraavassa koodissa:

```java
public class Rekursio {
    static void testi(int n) {
        System.out.print(n + " ");
        if (n == 1) return;
        testi(n-1);
    }

    public static void main(String[] args) {
        testi(10);
    }
}
```

Tässä metodi `testi` tulostaa ensin parametrin `n` arvon.
Jos `n` on 1, metodi ei tee muuta vaan päättyy.
Muussa tapauksessa metodi kutsuu itseään yhtä pienemmällä
parametrilla `n-1`. Koodin tulos on seuraava:

```x
10 9 8 7 6 5 4 3 2 1
```

## Monta kutsua

Tilanne muuttuu kiinnostavammaksi,
kun metodi kutsuu itseään useissa kohdissa.
Seuraava koodi on muuten samanlainen kuin ennen,
mutta metodin lopussa on kaksi rekursiivista kutsua:

```java
public class Rekursio {
    static void testi(int n) {
        System.out.print(n + " ");
        if (n == 1) return;
        testi(n-1);
        testi(n-1);
    }

    public static void main(String[] args) {
        testi(4);
    }
}
```

Nyt koodin tulostus on seuraava:

```x
4 3 2 1 1 2 1 1 3 2 1 1 2 1 1
```

Esimerkiksi kun `n` on 4, metodi `testi` tulostaa ensin `4`
ja suorittaa sitten kaksi kutsua `testi(n-1)`.
Kumpikin kutsu tulostaa luvut `3 2 1 1 2 1 1`.
Voit vastaavasti miettiä, miten metodi toimii
parametreilla 1, 2 ja 3.

## Pinon koko

Seuraavassa koodissa metodi `summa` laskee summan
1 + 2 + 3 + ... + `n` rekursion avulla.

```java
public class Rekursio {
    static long summa(int n) {
        if (n == 0) return 0;
        else return summa(n-1)+n;
    }

    public static void main(String[] args) {
        System.out.println(summa(10)); // 55
    }
}
```

Kaikki sujuu hyvin, kun `n` on pieni, mutta suuremmalla
parametrilla (esim. `n` on miljoona) tuleekin seuraava virhe:

```x
Exception in thread "main" java.lang.StackOverflowError
```

Syynä tähän on, että sisäkkäiset metodin kutsut vievät tilaa
muistialueelta, jota kutsutaan nimellä _pino_ (_stack_).
Tämän alueen koko on oletuksena melko pieni,
ja jos rekursiossa on monta kerrosta, muisti voi loppua kesken.

Ongelman voi kuitenkin kiertää kasvattamalla pinon kokoa
ohjelman käynnistyksen yhteydessä.
Esimerkiksi seuraava käynnistyskomento asettaa pinon kooksi 128 megatavua,
jolloin saamme laskettua suurenkin summan.


```x
java -Xss128m Rekursio
```

## Esimerkki: Tiedostot

Yksi luonteva rekursion käyttötarkoitus on
sisäkkäisissä hakemistoissa olevien tiedostojen läpikäynti.
Käytämme esimerkkinä seuraavaa hakemistorakennetta:

```x
testi
├── 1.txt
├── 2.txt
├── maija
│   ├── 3.txt
│   ├── 4.txt
│   ├── apina
│   │   ├── 5.txt
│   │   └── 6.txt
│   ├── banaani
│   │   ├── 7.txt
│   │   └── 8.txt
│   └── cembalo
│       ├── 10.txt
│       └── 9.txt
└── uolevi
    ├── 11.txt
    └── 12.txt       
```

Seuraavassa koodissa oleva metodi `tutki`
käy läpi annetun hakemiston sisällön.
Parametrina annettu `File`-olio voi viitata
sekä hakemistoon että tiedostoon.
Jos kyseessä on hakemisto,
metodi käy rekursiivisesti läpi sen sisällön.
Jos taas kyseessä on tiedosto,
metodi tulostaa sen nimen.

```java
import java.io.*;

public class Tiedostot {
    static void tutki(File f) {
        if (f.isDirectory()) {
            for (File u : f.listFiles()) {
                tutki(u);
            }
        } else {
            System.out.println(f);
        }
    }

    public static void main(String[] args) {
        File f = new File("testi");
        tutki(f);
    }
}
```

Esimerkissämme ohjelman tulostus on seuraava:

```x
testi/1.txt
testi/2.txt
testi/uolevi/11.txt
testi/uolevi/12.txt
testi/maija/4.txt
testi/maija/3.txt
testi/maija/cembalo/9.txt
testi/maija/cembalo/10.txt
testi/maija/apina/5.txt
testi/maija/apina/6.txt
testi/maija/banaani/7.txt
testi/maija/banaani/8.txt
```

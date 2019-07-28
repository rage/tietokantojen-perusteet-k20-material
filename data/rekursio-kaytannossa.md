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
    public static void testi(int n) {
        System.out.print(n + " ");
        if (n == 1) return;
        testi(n-1);
    }

    public static void main(String[] args) {
        testi(4);
    }
}
```

Tässä metodi `testi` tulostaa ensin parametrin `n` arvon.
Jos `n` on 1, metodi ei tee muuta vaan päättyy.
Muussa tapauksessa metodi kutsuu itseään yhtä pienemmällä
parametrilla `n-1`. Koodin tulos on seuraava:

```x
4 3 2 1
```

## Monta kutsua

Tilanne muuttuu kiinnostavammaksi,
kun metodi kutsuu itseään useissa kohdissa.
Seuraava koodi on muuten samanlainen kuin ennen,
mutta metodin lopussa on kaksi rekursiivista kutsua:

```java
public class Rekursio {
    public static void testi(int n) {
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
    public static long summa(int n) {
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

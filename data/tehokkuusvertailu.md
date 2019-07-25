---
path: "/tehokkuusvertailu"
title: "Tehokkuusvertailun toteuttaminen"
hidden: false
information_page: true
---

Monessa kurssin tehtävässä sinun tulee vertailla kahta algoritmia toisiinsa.
Tämä ohje antaa mallin, jonka mukaan voit menetellä.

Tehokkuusvertailun suorittavan koodin tavallinen runko on seuraava:

1. Luo testisyöte
- Aloita ajanmittaus
- Suorita algoritmi
- Lopeta ajanmittaus
- Ilmoita tulokset


## Testisyötteen luominen

Testisyötteen tulee olla sopivan kokoinen, jotta se tuo esille eroja
testattavien algoritmien välillä.
Tällä kurssilla hyvä koko on sellainen, jossa hitaammalla algoritmilla
kuluu aikaa luokkaa kymmenen sekuntia. Löydät sopivan koon kokeilemalla.

Jotta vertailu on reilu, kummankin algoritmin tulee saada täsmälleen sama
testisyöte. Lisäksi syöte tulee muodostaa ajanmittauksen ulkopuolella,
jotta syötteen luomiseen kuluva aika ei vääristä testituloksia.

Usein hyvä tapa muodostaa syöte on käyttää satunnaisuutta.
Tällöin satunnaislukujen generaattorille voi antaa kiinteän _siemenluvun_ (_seed_),
jolloin se tuottaa joka kerta saman lukusarjan.
Esimerkiksi seuraava koodi luo taulukon, jossa on `n` alkiota ja
jokainen alkio on satunnainen kokonaisluku väliltä 0...99.
Generaattorin siemenlukuna on 1337,
minkä ansiosta taulukon sisältö on satunnainen mutta aina sama.

```java
int n = 1000000;
int[] taulu = new int[n];
Random r = new Random(1337);
for (int i = 0; i < n; i++) {
    taulu[i] = r.nextInt(100);
}
```

## Ajanmittaus

Kätevä tapa mitata aikaa on Javan metodi `System.nanoTime`.
Se antaa lukuarvon, joka on nanosekunteina kulunut aika jostain kiinteästä ajanhetkestä.
Kun tällainen arvo laitetaan muistiin juuri ennen algoritmin suoritusta
ja heti suorituksen jälkeen, arvojen erotus kertoo, kauanko algoritmin suoritus vei aikaa.
Mittauksen voi toteuttaa näin:


```java
long alku = System.nanoTime();
// algoritmin suoritus
long loppu = System.nanoTime();
System.out.println("Aikaa kului "+(loppu-alku)+" ns");
```

Sekunnissa on miljardi nanosekuntia, joten mukavammin sekunteina
luettavan mittaustuloksen saa näin:

```java
System.out.println("Aikaa kului "+((loppu-alku)/1e9)+" s");
```

## Algoritmin suorittaminen

Kun vertailet kahta algoritmia, toteuta kummallekin algoritmille erillinen ohjelma,
joka suorittaa sen ja mittaa aikaa, eli älä suorita algoritmeja peräkkäin samassa ohjelmassa.
Syynä tähän on, että jos algoritmit suoritetaan peräkkäin,
ensin suoritettava algoritmi voi vääristää toisen tuloksia prosessorin ja
Javan virtuaalikoneen ominaisuuksien vuoksi.

Toteuta algoritmit niin, että ne antavat jonkin tuloksen, jonka voi tulostaa
ajanmittauksen jälkeen. Tämän avulla voi varmistaa, että algoritmit toimivat oikein,
ja lisäksi tuloksen tulostaminen pakottaa virtuaalikoneen suorittamaan algoritmin.
Jos algoritmi ei tekisi mitään näkyvää, virtuaalikone voisi periaatteessa optimoida
koko koodin pois.

## Esimerkki

Vertaillaan esimerkkinä kurssikirjan luvussa 2 esitettyjä algoritmeja toisiinsa.
Algoritmeille annetaan taulukko, jonka jokainen alkio on 0 tai 1,
ja tehtävänä on laskea, monellako tavalla taulukosta voidaan valita vasen ja oikea kohta niin,
että vasemmassa kohdassa on luku 0 ja oikeassa kohdassa on luku 1.

Tässä tapauksessa luonteva syöte on taulukko, jonka jokainen luku on joko 0 tai 1
satunnaisesti valittuna.
Sopivaksi syötteen kooksi osoittautuu `n` = 100000.

Algoritmi 1 on raa'an voiman algoritmi, joka käy läpi kaikki mahdolliset parit
ajassa O(`n`²). Seuraava ohjelma mittaa algoritmin suoritusajan:

```java
import java.util.*;

public class Vertailu1 {
    static long algoritmi1(int[] taulu) {
        int n = taulu.length;
        long laskuri = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i+1; j < n; j++) {
                if (taulu[i] == 0 && taulu[j] == 1) {
                    laskuri++;
                }
            }
        }
        return laskuri;
    }

    public static void main(String[] args) {
        int n = 100000;
        // 1. luo testisyöte
        int[] taulu = new int[n];
        Random r = new Random(1337);
        for (int i = 0; i < n; i++) {
            taulu[i] = r.nextInt(2);
        }
        // 2. aloita ajanmittaus
        long alku = System.nanoTime();
        // 3. suorita algoritmi
        long tulos = algoritmi1(taulu);
        // 4. lopeta ajanmittaus
        long loppu = System.nanoTime();
        // 5. ilmoita tulokset
        System.out.println("Algoritmin tulos: "+tulos);
        System.out.println("Aikaa kului "+((loppu-alku)/1e9)+" s");
    }
}
```

Algoritmi 2 on puolestaan tehokas algoritmi,
joka laskee tuloksen yhdellä silmukalla ajassa O(`n`).
Seuraava ohjelma mittaa algoritmin suoritusajan:

```java
import java.util.*;

public class Vertailu2 {
    static long algoritmi2(int[] taulu) {
        int n = taulu.length;
        long laskuri = 0;
        int nollat = 0;
        for (int i = 0; i < n; i++) {
            if (taulu[i] == 0) {
                nollat++;
            } else {
                laskuri += nollat;
            }
        }
        return laskuri;
    }

    public static void main(String[] args) {
        int n = 100000;
        // 1. luo testisyöte
        int[] taulu = new int[n];
        Random r = new Random(1337);
        for (int i = 0; i < n; i++) {
            taulu[i] = r.nextInt(2);
        }
        // 2. aloita ajanmittaus
        long alku = System.nanoTime();
        // 3. suorita algoritmi
        long tulos = algoritmi2(taulu);
        // 4. lopeta ajanmittaus
        long loppu = System.nanoTime();
        // 5. ilmoita tulokset
        System.out.println("Algoritmin tulos: "+tulos);
        System.out.println("Aikaa kului "+((loppu-alku)/1e9)+" s");
    }
}
```

Algoritmin 1 testauksen tulos:

```java
Algoritmin tulos: 1250858484
Aikaa kului 16.224270262 s
```

Algoritmin 2 testauksen tulos:

```java
Algoritmin tulos: 1250858484
Aikaa kului 0.002792366 s
```

Molemmat algoritmit antavat saman tuloksen,
eli ne luultavimmin toimivat oikein.
Algoritmien välillä on myös selkeä tehokkuusero:
algoritmi 1 vie aikaa noin 16 sekuntia,
kun taas algoritmi 2 toimii salamannopeasti.
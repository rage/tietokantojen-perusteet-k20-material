---
path: '/viikko-01-dev'
title: 'Viikko 1: Johdanto'
overview: true
---

Viikon 1 tehtävien deadline: su 15.9. klo 23:59

## Alkutoimet

Kurssin suorittamista varten tarvitset mooc.fi-tunnuksen.
Jos olet suorittanut muita mooc.fi-kursseja,
sinulla on jo tällainen tunnus,
mutta muuten voit [luoda tunnuksen](https://tmc.mooc.fi/user/new).

Jotta voit saada kurssista suorituksen
Helsingin yliopiston opintorekisteriin,
varmista vielä, että olet ilmoittanut vaaditut tiedot
mooc.fi-profiilissa.
Pystyt tekemään tämän kirjautumalla sisään tämän
sivun ylälaidassa olevasta napista.

## Tehtävät

Kurssin jokaisella viikolla ilmestyy kuusi tehtävää.
Saat suorituksen kurssista, jos ratkot jokaisella viikolla
ainakin kolme tehtävää deadlineen mennessä.
Tarkemmat tiedot arvostelusta ja tehtävien aikataulusta
löydät [kurssin etusivulta](/).

Viikon 1 kaikki tehtävät ovat ohjelmointitehtäviä,
jotka kertaavat ohjelmoinnin perusasioita.
Voit ratkoa ohjelmointitehtäviä NetBeans-ympäristössä
([asennusohje](https://materiaalit.github.io/tmc-asennus/netbeans/))
valitsemalla organisaation "MOOC" kurssin "Tietorakenteet ja algoritmit, syksy 2019".
Jos et halua käyttää NetBeansia, voit palauttaa
ohjelmointitehtäviä myös
[TMC-sivuston kautta](https://tmc.mooc.fi/org/mooc/courses/497).

<programming-exercise name='Numeroiden summa' tmcname='X'>

Tehtäväsi on laskea annetun positiivisen kokonaisluvun
numeroiden summa.
Esimerkiksi luvun 4075 numeroiden summa on
4 + 0 + 7 + 5 = 16.

Tee luokka `Numerot`, jossa on seuraavat metodit:

* `int summa(int x)`: palauttaa luvun `x` numeroiden summan

Rajat:

- 1 &le; `x` &le; 10<sup>9</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Numerot t;
System.out.println(t.summa(4075)); // 16
System.out.println(t.summa(3)); // 3
System.out.println(t.summa(999999999)); // 81
```

</programming-exercise>

<programming-exercise name='Osajonot' tmcname='X'>

Merkkijonon _osajono_ (_substring_) on merkkijonon
osana oleva toinen merkkijono.
Esimerkiksi merkkijonon `aybabtu` osajonoja
ovat `bab` ja `abtu`.

Tee luokka `Osajonot`, jossa on seuraavat metodit:

* `int laske(String a, String b)`: palauttaa osajonon `b`
esiintymien määrän merkkijonossa `a`

Rajat:

- kummassakin merkkijonossa on 1...100 merkkiä
- kaikki merkit ovat välillä `a`...`z`

Seuraava koodi esittelee luokan käyttämistä:

```java
Osajonot t;
System.out.println(t.laske("aybabtu","bab"); // 1
System.out.println(t.laske("aaaaa","aa"); // 4
System.out.println(t.laske("apina","banaani"); // 0
```

</programming-exercise>

<programming-exercise name='Kolmen summa' tmcname='X'>

Tehtäväsi on laskea,
monellako eri tavalla luvun `x`
voi esittää kolmen eri positiivisen
kokonaisluvun summana.
Esimerkiksi jos `x` = 9, oikea vastaus on 3,
koska mahdolliset tavat ovat
1 + 2 + 6, 1 + 3 + 5 ja 2 + 3 + 4.

Tee luokka `KolmenSumma`, jossa on seuraavat metodit:

* `int laske(int x)`: palauttaa luvun `x` esitystapojen määrän

Rajat:

- 1 &le; `x` &le; 100

Seuraava koodi esittelee luokan käyttämistä:

```java
KolmenSumma t;
System.out.println(t.laske(9)); // 3
System.out.println(t.laske(2)); // 0
System.out.println(t.laske(99)); // 768
```

</programming-exercise>

<programming-exercise name='Taulukko' tmcname='X'>

Annettuna on taulukko, jossa on kokonaislukuja.
Joka askeleella muodostat taulukosta uuden taulukon,
jonka jokainen alkio on summa kahdesta vierekkäisestä
alkiosta alkuperäisessä taulukossa.
Jatkat näin, kunnes taulukossa on vain yksi alkio.

Esimerkiksi jos taulukko on `[1,2,3,2]`,
se muuttuu ensin taulukoksi `[3,5,5]`,
sitten taulukoksi `[8,10]` ja lopuksi taulukoksi `[18]`.

Tee luokka `Taulukko`, jossa on seuraavat metodit:

* `int laske(int[] t)`: palauttaa lopullisen taulukon ainoan alkion

Rajat:

- taulukossa on enintään 100 alkiota
- jokainen alkio on välillä 1...100

Seuraava koodi esittelee luokan käyttämistä:

```java
Taulukko t;
System.out.println(t.laske(new int[] {1,2,3,2})); // 18
System.out.println(t.laske(new int[] {5})); // 5
System.out.println(t.laske(new int[] {4,2,9,1,9,2,5})); // 159
```

</programming-exercise>

<programming-exercise name='Ruudukko' tmcname='X'>

Tehtäväsi on muodostaa `n` &times `n` -ruudukko,
jonka vasemmassa yläkulmassa on luku 0
ja kaikissa muissa ruuduissa on pienin epänegatiivinen
kokonaisluku, jota ei esiinny vasemmalla samalla rivillä
eikä ylhäällä samassa sarakkeessa.

Tee luokka `Ruudukko`, jossa on seuraavat metodit:

* `int[][] muodosta(int n)`: palauttaa ruudukon sisällön

Rajat:

- 1 &le; `n` &le; 100

Seuraava koodi esittelee luokan käyttämistä:

```java
int n = 5;
Ruudukko t;
int[][] r = t.muodosta(n);
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.print(r[i][j]+" ");
    }
    System.out.println();
}
```

Koodin tulostuksen tulisi olla seuraava:

```x
0 1 2 3 4
1 0 3 2 5
2 3 0 1 6
3 2 1 0 7
4 5 6 7 0
```

</programming-exercise>

<programming-exercise name='Onnenluvut' tmcname='X'>

Positiivinen kokonaisluku on _onnenluku_,
jos sen jokainen numero on 3 tai 7.
Esimerkiksi luvut 7, 37 ja 73373
ovat onnenlukuja.
Tehtäväsi on laskea onnenlukujen määrä
välillä `a`...`b`.

Tee luokka `Onnenluvut`, jossa on seuraavat metodit:

* `int laske(int a, int b)`: palauttaa onnenlukujen määrän
välillä `a`...`b`

Rajat:

- 1 &le; `a` &le; `b` &le; 10<sup>9</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Onnenluvut t;
System.out.println(t.laske(1,10)); // 2
System.out.println(t.laske(123,321)); // 0
System.out.println(t.laske(1,1000000)); // 63
```

Huomaa, että tässä ja kaikissa muissakin kurssin ohjelmointitehtävissä
yksittäisen testin aikarajana on yksi sekunti.
Tässä tehtävässä olisi liian hidasta käydä läpi kaikki välin `a`...`b`
luvut, vaan sinun tulee keksiä tehokkaampi ratkaisutapa.

</programming-exercise>

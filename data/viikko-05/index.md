---
path: '/viikko-05'
title: 'Viikko 5: Hajautustaulu'
overview: true
---

Viikon 5 tehtävien deadline: su 13.10. klo 23:59

## Tehtävät

<quiz id="4d0804de-735e-45ac-bd2b-489b9802dbd0"></quiz>

<programming-exercise name='2. Hatut ja pallot' tmcname='viikko05-Viikko05Tehtava2'>

<p>Sinulla on 10<sup>9</sup> hattua, jotka on numeroitu
1, 2, ..., 10<sup>9</sup>.
Aluksi jokainen hattu on tyhjä,
mutta sitten niihin aletaan lisätä palloja.</p>

Tee luokka `HatutJaPallot`, jossa on seuraavat metodit:

* `void lisaaPallo(int x)`: lisää pallon hattuun `x`
* `int monessakoYksi()`: palauttaa, monessako hatussa on ainakin yksi pallo
* `int suurinMaara()`: palauttaa, mikä on suurin pallojen määrä yhdessä hatussa

Rajat:

- 1 &le; `x` &le; 10<sup>9</sup>
- jokaisessa testissä metodeita kutsutaan yhteensä enintään 10<sup>6</sup> kertaa

Seuraava koodi esittelee luokan käyttämistä:

```java
HatutJaPallot h = new HatutJaPallot();
h.lisaaPallo(2);
h.lisaaPallo(3);
h.lisaaPallo(5);
System.out.println(h.monessakoYksi()); // 3
System.out.println(h.suurinMaara()); // 1
h.lisaaPallo(3);
System.out.println(h.monessakoYksi()); // 3
System.out.println(h.suurinMaara()); // 2
```

</programming-exercise>

<programming-exercise name='3. Toistuminen' tmcname='viikko05-Viikko05Tehtava3'>

Sinulle annetaan lukuja yksi kerrallaan,
ja tehtäväsi on ilmoittaa jokaisen luvun kohdalla,
montako lukua oli välissä ennen kuin sama luku esiintyi viimeksi aiemmin.

Tee luokka `Toistuminen`, jossa on seuraavat metodit:

* `int uusiLuku(int x)`: palauttaa välissä olleiden lukujen määrän
(tai &ndash;1, jos luku esiintyy ensimmäistä kertaa)

Rajat:

- jokainen luku on välillä 1...10<sup>9</sup>
- metodia kutsutaan yhteensä enintään 10<sup>6</sup> kertaa

Seuraava koodi esittelee luokan käyttämistä:

```java
Toistuminen t = new Toistuminen();
System.out.println(t.uusiLuku(1)); // -1
System.out.println(t.uusiLuku(2)); // -1
System.out.println(t.uusiLuku(3)); // -1
System.out.println(t.uusiLuku(1)); // 2
System.out.println(t.uusiLuku(2)); // 2
System.out.println(t.uusiLuku(1)); // 1
```

</programming-exercise>

<quiz id="ae2ffd39-8ab5-4ea5-9904-e642512f8f04"></quiz>

<programming-exercise name='5. Törmäys' tmcname='viikko05-Viikko05Tehtava5'>

Etsi kaksi eri merkkijonoa, jotka muodostuvat merkeistä `a` ja `b`
ja joille Javan metodi `hashCode` antaa saman hajautusarvon.

Tee luokka `Tormays`, jossa on seuraavat metodit:

* `String merkkijono1()`: palauttaa ensimmäisen merkkijonon
* `String merkkijono2()`: palauttaa toisen merkkijonon

Voit etsiä merkkijonot haluamallasi tavalla ja
toteuttaa kummankin yllä olevan metodin yhtenä `return`-komentona,
joka palauttaa sopivan merkkijonon (eli ei haittaa,
vaikka merkkijonojen etsiminen vie aikaa).

Seuraava koodi esittelee luokan käyttämistä:

```java
Tormays t = new Tormays();
String x = t.merkkijono1();
String y = t.merkkijono2();
if (x.matches("[ab]+") && y.matches("[ab]+") && !x.equals(y) && x.hashCode() == y.hashCode()) {
    System.out.println("Hyvää työtä :)");
}
```

</programming-exercise>

<programming-exercise name='6. Summahaku' tmcname='viikko05-Viikko05Tehtava6'>

Annettuna on taulukko, jossa on `n` kokonaislukua.
Tehtäväsi on laskea, monessako yhtenäisessä alitaulukossa
lukujen summa on `x`.

Tee luokka `Summahaku`, jossa on seuraavat metodit:

* `long laske(int[] t, int x)`: palauttaa alitaulukoiden määrän

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- 1 &le; `x` &le; 10<sup>9</sup>
- jokainen taulukon alkio on välillä &ndash;100...100

Seuraava koodi esittelee luokan käyttämistä:

```java
SamaSumma s = new Summahaku();
System.out.println(s.laske(new int[] {1,3,2,4}, 4)); // 2
System.out.println(s.laske(new int[] {0,0,0,0}, 0)); // 10
System.out.println(s.laske(new int[] {1,-1,1,-1}, 0)); // 4
```

</programming-exercise>

---
path: '/viikko-04-dev'
title: 'Viikko 4: Lista'
overview: true
---

Viikon 4 tehtävien deadline: su 6.10. klo 23:59

## Tehtävät

<quiz id="ae417cad-8ac3-4d97-9f99-e659729a0500"></quiz>

<programming-exercise name='3. Listan rakennus' tmcname='viikko04-Viikko04Tehtava3'>

Tehtäväsi on toteuttaa listarakenne,
jossa pystyy lisäämään tehokkaasti alkion listan alkuun ja loppuun
sekä hakemaan annetussa kohdassa olevan alkion.

Lista on alussa tyhjä,
ja alkiot on numeroitu aina 0, 1, 2, jne. listan alusta alkaen.

Tee luokka `Lista`, jossa on seuraavat metodit:

* `void lisaaAlkuun(int x)`: lisää alkion `x` listan alkuun
* `void lisaaLoppuun(int x)`: lisää alkion `x` listan loppuun
* `int haeAlkio(int k)`: palauttaa kohdassa `k` olevan alkion

Rajat:

- 1 &le; `x` &le; 10<sup>9</sup>
- `k` osoittaa johonkin listan kohtaan
- jokaisessa testissä metodeita kutsutaan enintään 10<sup>6</sup> kertaa

Seuraava koodi esittelee luokan käyttämistä:

```java
Lista l = new Lista();
l.lisaaLoppuun(3);
l.lisaaLoppuun(5);
System.out.println(l.haeAlkio(1)); // 5
l.lisaaAlkuun(2);
System.out.println(l.haeAlkio(1)); // 3
```

</programming-exercise>


<programming-exercise name='4. Poistot' tmcname='viikko04-Viikko04Tehtava4'>

Annettuna on taulukko, jossa on `n` kokonaislukua.
Joka vuorolla poistat taulukosta kaksi vierekkäistä
alkiota, jotka ovat samat, kunnes et voi enää poistaa mitään.
Montako alkiota on lopullisessa taulukossa?

Tee luokka `Poistot`, jossa on seuraavat metodit:

* `int laske(int[] t)`: palauttaa lopullisen taulukon alkioiden määrän

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- jokainen alkio on välillä 1...10<sup>9</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Poistot p = new Poistot();
System.out.println(p.laske(new int[] {1,2,2,3})); // 1
System.out.println(p.laske(new int[] {1,2,3,4})); // 4
System.out.println(p.laske(new int[] {1,2,2,3,3,1})); // 0
```

</programming-exercise>


<programming-exercise name='5. Piirileikki' tmcname='viikko04-Viikko04Tehtava5'>

Piirissä on `n` lasta, jotka on numeroitu 1, 2, 3, jne.
Vuoro kiertää piirissä ja joka toinen lapsi poistuu piiristä,
kunnes piirissä on vain yksi lapsi.
Mikä on tämän lapsen numero?

Esimerkiksi jos `n` on 7,
lapset poistuvat piiristä järjestyksessä
2, 4, 6, 1, 5, 3, 7,
eli viimeisenä piirissä on lapsi,
jonka numero on 7.

Tee luokka `Piirileikki`, jossa on seuraaat metodit:

* `int viimeinen(int n)`: palauttaa viimeisen lapsen numeron

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Piirileikki p = new Piirileikki();
System.out.println(p.viimeinen(7)); // 7
System.out.println(p.viimeinen(4)); // 1
System.out.println(p.viimeinen(123)); // X
```

</programming-exercise>


<programming-exercise name='6. Laskulauseke' tmcname='viikko04-Viikko04Tehtava6'>

Tehtäväsi on laskea merkkijonona annetun laskulausekkeen arvo.
Lausekkeessa voi esiintyä merkkejä `0`...`9`, `+`, `*`, `(` ja `)`.

Tee luokka `Laskulauseke`, jossa on seuraavat metodit:

* `long laske(String s)`: palauttaa laskulausekkeen arvon

Rajat:

- lausekkeessa on enintään 1000 merkkiä
- lausekkeen arvo mahtuu `long`-tyyppiin

Seuraava koodi esittelee luokan käyttämistä:

```java
Laskulauseke l = new Laskulauseke();
System.out.println(l.laske("1+2")); // 3
System.out.println(l.laske("2*3+5")); // 11
System.out.println(l.laske("2*(3+5)")); // 16
```

</programming-exercise>

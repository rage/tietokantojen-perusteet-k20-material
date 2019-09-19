---
path: '/viikko-06-dev'
title: 'Viikko 6: Binäärihakupuu'
overview: true
---

Viikon 6 tehtävien deadline: su 20.10. klo 23:59

## Tehtävät

<quiz id="4cf466c6-7340-4f94-9584-48891a4fb9fc"></quiz>

<programming-exercise name='2. Pienin etäisyys' tmcname='viikko06-Viikko06Tehtava2'>

Tehtäväsi on toteuttaa luokka,
joka pitää yllä lukujen kokoelmaa.
Kokoelmaan voi lisätä uuden luvun sekä kysyä,
mikä on pienin etäisyys kahden eri luvun välillä.

Tee luokka `PieninEtaisyys`, jossa on seuraavat metodit:

* `void lisaa(int x)`
* `int laske()`: palauttaa pienimmän etäisyyden kahden eri luvun välillä

Rajat:

- 1 &le; `x` &le; 10<sup>9</sup>
- jokaisessa testissä metodeita kutsutaan yhteensä enintään 10<sup>6</sup> kertaa
- metodia `laske` ei kutsuta, ennen kuin kokoelmassa on kaksi eri lukua

Seuraava koodi esittelee luokan käyttämistä:

```java
PieninEtaisyys p = new PieninEtaisyys();
p.lisaa(3);
p.lisaa(8);
System.out.println(p.laske()); // 5
p.lisaa(20);
System.out.println(p.laske()); // 5
p.lisaa(9);
System.out.println(p.laske()); // 1
```

</programming-exercise>

<programming-exercise name='3. Samat luvut' tmcname='viikko06-Viikko06Tehtava3'>

Tehtäväsi on toteuttaa luokka, joka pitää yllä lukujen kokoelmaa.
Kokoelmaan voi lisätä luvun, sieltä voi poistaa luvun sekä kysyä,
mikä on pienin luku.
Huomaa, että kokoelmassa voi olla useita kertoja sama luku.

Tee luokka `SamatLuvut`, jossa on seuraavat metodit:

* `void lisaa(int x)`: lisää kokoelmaan luvun `x`
* `void poista(int x)`: poistaa kokoelmasta luvun `x`
  (jos kokoelmassa ei ole lukua `x`, metodi ei tee mitään)
* `int pienin()`: palauttaa pienimmän luvun

Rajat:

- 1 &le; `x` &le; 10<sup>9</sup>
- jokaisessa testissä metodeita kutsutaan yhteensä enintään 10<sup>6</sup> kertaa
- metodia `pienin` ei kutsuta, jos kokoelma on tyhjä

Seuraava koodi esittelee luokan käyttämistä:

```java
SamatLuvut s = new SamatLuvut();
s.lisaa(2);
s.lisaa(7);
s.lisaa(2);
System.out.println(s.pienin()); // 2
s.poista(2);
System.out.println(s.pienin()); // 2
s.poista(2);
System.out.println(s.pienin()); // 7
```

</programming-exercise>

<quiz id="bec51703-97ea-46a0-9b4d-fc2dee87a94f"></quiz>

<quiz id="b288be2e-8e2c-408b-91c3-ec0145481ec2"></quiz>

<programming-exercise name='6. Järjestys' tmcname='viikko06-Viikko06Tehtava6'>

Binääripuussa on `n` solmua, jotka on numeroitu 1...`n`.
Sinulle annetaan solmujen esijärjestys `a` ja sisäjärjestys `b`,
ja tehtäväsi on tuottaa niiden perusteella jälkijärjestys.

Huom! Puu ei ole välttämättä binäärihakupuu,
eli solmut voivat olla puussa missä tahansa järjestyksessä.

Tee luokka `Jarjestys`, jossa on seuraavat metodit:

* `int[] muodosta(int[] a, int[] b)`: palauttaa solmujen jälkijärjestyksen

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Jarjestys j = new Jarjestys();
int[] a = {4,2,1,3,5};
int[] b = {2,4,3,1,5};
int[] c = j.muodosta(a,b);
System.out.println(Arrays.toString(c)); // [2, 3, 5, 1, 4]
```

</programming-exercise>

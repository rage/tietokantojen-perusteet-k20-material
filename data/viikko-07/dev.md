---
path: '/viikko-07-dev'
title: 'Viikko 7: Keko'
overview: true
---

Viikon 7 tehtävien deadline: su 27.10. klo 23:59

## Tehtävät

<quiz id="9a7a1b4f-7b03-4bb0-8ff1-cc3425763cc3"></quiz>

<programming-exercise name='2. Tehtävälista' tmcname='viikko07-Viikko07Tehtava2'>

Sinun tulee pitää yllä tehtävälistaa,
jossa jokaisella tehtävällä on nimi ja kiireellisyys.
Voit lisätä listalle uuden tehtävän ja hakea
seuraavaksi suoritettavan tehtävän.

Tee luokka `Tehtavat`, jossa on seuraavat metodit:

* `void lisaa(String nimi, int kiireellisyys)`: lisää listalle uuden tehtävän
* `String hae()`: hakee ja poistaa kiireellisimmän tehtävän
(jos on monta yhtä kiireellistä tehtävää, valitaan aakkosjärjestyksessä ensimmäinen)

Rajat:

- tehtävän nimessä on 1–10 merkkiä väliltä a–z
- kiireellisyys on kokonaisluku väliltä 1–100
- jokaisessa testissä metodeita kutsutaan yhteensä enintään 10<sup>6</sup> kertaa

Seuraava koodi esittelee luokan käyttämistä:

```java
Tehtavat t = new Tehtavat();
t.lisaa("apina",30);
t.lisaa("banaani",70);
t.lisaa("cembalo",20);
System.out.println(t.hae()); // banaani
System.out.println(t.hae()); // apina
t.lisaa("aybabtu",100);
System.out.println(t.hae()); // aybabtu
```

</programming-exercise>

<programming-exercise name='3. Tehdas' tmcname='viikko07-Viikko07Tehtava3'>

Tehtaassa on `n` konetta,
joilla jokaisella menee tietty määrä aikaa valmistaa yksi tuote.
Mikä tahansa määrä koneita voi olla käynnissä samaan aikaan.
Paljonko aikaa tarvitset,
kun haluat valmistaa yhteensä `x` tuotetta?

Tee luokka `Tehdas`, jossa on seuraavat metodit:

* `long laske(int[] t, int x)`: ilmoittaa tuotteiden valmistamiseen
tarvittavan ajan

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- 1 &le; `x` &le; 10<sup>6</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Tehdas t = new Tehdas();
System.out.println(t.laske(new int[] {2,3,7}, 2)); // 3
System.out.println(t.laske(new int[] {2,3,7}, 5)); // 6
System.out.println(t.laske(new int[] {2,3,7}, 6)); // 7
```

</programming-exercise>

<programming-exercise name='4. Mediaani' tmcname='viikko07-Viikko07Tehtava4'>

Listan _mediaani_ on keskimmäinen alkio,
kun alkiot järjestetään pienimmästä suurimpaan.
Esimerkiksi listan `[3,1,4,7,1]` mediaani on `3`.
Jos alkioita on parillinen määrä, mediaani on
keskikohdan vasemmalla puolella oleva alkio.

Tee luokka `Mediaani`, jossa on seuraavat metodit:

* `void lisaa(int x)`: lisää uuden luvun listalle
* `int mediaani()`: ilmoittaa listan lukujen mediaanin

Rajat:

- 1 &le; `x` &le; 10<sup>9</sup>
- jokaisessa testissä metodeita kutsutaan enintään 10<sup>6</sup> kertaa

Seuraava koodi esittelee luokan käyttämistä:

```java
Mediaani m = new Mediaani();
m.lisaa(3);
System.out.println(m.mediaani()); // 3
m.lisaa(1);
System.out.println(m.mediaani()); // 1
m.lisaa(4);
System.out.println(m.mediaani()); // 3
m.lisaa(7);
System.out.println(m.mediaani()); // 3
m.lisaa(1);
System.out.println(m.mediaani()); // 3
```

</programming-exercise>

<programming-exercise name='5. Lukujono' tmcname='viikko07-Viikko07Tehtava5'>

Tarkastellaan lukujonoa, joka sisältää pienimmästä suurimpaan
kaikki positiiviset kokonaisluvut,
jotka saadaan kertomalla lukuja 2, 3 ja 5 keskenään.
Lukujono alkaa näin:

2, 3, 4, 5, 6, 8, 9, 10, 12, 15, ...

Tee luokka `Lukujono`, jossa on seuraavat metodit:

* `long laske(int n)`: antaa lukujonon kohdassa `n` olevan luvun

Rajat:

- 1 &le; `n` &le; 10000 (vastaus mahtuu `long`-tyyppiin)

Seuraava koodi esittelee luokan käyttämistä:

```java
Lukujono l = new Lukujono();
System.out.println(l.laske(1)); // 2
System.out.println(l.laske(2)); // 3
System.out.println(l.laske(3)); // 4
System.out.println(l.laske(10)); // 15
System.out.println(l.laske(100)); // 1600
```

Lisähaaste: Toteuta tehtävään ratkaisu,
jonka aikavaativuus on O(`n`).

</programming-exercise>

<quiz id="9e665052-7e23-4690-a9f8-d1639c881584"></quiz>

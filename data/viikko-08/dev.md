---
path: '/viikko-08-dev'
title: 'Viikko 8: Peruuttava haku'
overview: true
---

Viikon 8 tehtävien deadline: su 10.11. klo 23:59

## Tehtävät

<programming-exercise name='1. Merkkijonot I' tmcname='viikko08-Viikko08Tehtava1'>

Tehtäväsi on muodostaa kaikki `n`-merkkiset
merkkijonot, jotka koostuvat merkeistä A ja B.

Tee luokka `Merkkijonot`, jossa on seuraavat metodit:

* `ArrayList<String> muodosta(int n)`: palauttaa listan merkkijonoista
aakkosjärjestyksessä

Rajat:

- 1 &le; `n` &le; 16

Seuraava koodi esittelee luokan käyttämistä:

```java
Merkkijonot m = new Merkkijonot();
System.out.println(m.muodosta(1)); // [A, B]
System.out.println(m.muodosta(2)); // [AA, AB, BA, BB]
System.out.println(m.muodosta(3)); // [AAA, AAB, ABA, ABB, BAA, BAB, BBA, BBB]
```

</programming-exercise>

<programming-exercise name='2. Merkkijonot II' tmcname='viikko08-Viikko08Tehtava2'>

Tehtäväsi on muodostaa kaikki `n`-merkkiset
merkkijonot, jotka muodostuvat `k`
ensimmäisestä suuresta aakkosesta.

Tee luokka `Merkkijonot`, jossa on seuraavat metodit:

* `ArrayList<String> muodosta(int n, int k)`: palauttaa listan merkkijonoista
aakkosjärjestyksessä

Rajat:

- 1 &le; `n` &le; 16
- 1 &le; `k` &le; 26
- merkkijonoja on yhteensä enintään 10<sup>5</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Merkkijonot m = new Merkkijonot();
System.out.println(m.muodosta(2,1)); // [AA]
System.out.println(m.muodosta(2,2)); // [AA, AB, BA, BB]
System.out.println(m.muodosta(2,3)); // [AA, AB, AC, BA, BB, BC, CA, CB, CC]
System.out.println(m.muodosta(3,2)); // [AAA, AAB, ABA, ABB, BAA, BAB, BBA, BBB]
```

</programming-exercise>

<programming-exercise name='3. Osajoukot' tmcname='viikko08-Viikko08Tehtava3'>

Annettuna on taulukko lukuja ja tehtäväsi on selvittää,
monellako tavalla voit valita osajoukon luvuista niin,
että summa on `x`.

Tee luokka `Osajoukot`, jossa on seuraavat metodit:

* `int laske(int[] t, int x)`: laskee osajoukkojen määrän

Rajat:

- 1 &le; `n` &le; 16
- jokainen luku on välillä 1...10<sup>9</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Osajoukot o = new Osajoukot();
System.out.println(o.laske(new int[] {1,2,1,3}, 4)); // 3
System.out.println(o.laske(new int[] {1,1,1,1}, 4)); // 1
System.out.println(o.laske(new int[] {4,4,4,4}, 4)); // 4
```

</programming-exercise>

<programming-exercise name='4. Permutaatiot' tmcname='viikko08-Viikko08Tehtava4'>

Tehtäväsi on laskea, monellako tavalla voit muodostaa luvuista
1...`n` permutaation, jossa minkään kahden vierekkäisen
luvun ero ei ole 1.

Esimerkiksi kun `n` on 4, mahdolliset permutaatiot ovat
`[2,4,1,3]` ja `[3,1,4,2]`.

Tee luokka `Permutaatiot`, jossa on seuraavat metodit:

* `int laske(int n)`: laskee permutaatioiden määrän

Huomaa, että metodin `laske` tulee laskea tulos tyhjästä
(eli siinä ei saa olla suurten tapausten vastauksia sisällä).

Rajat:

- 1 &le; `n` &le; 8

Seuraava koodi esittelee luokan käyttämistä:

```java
Permutaatiot p = new Permutaatiot();
System.out.println(p.laske(1)); // 1
System.out.println(p.laske(2)); // 0
System.out.println(p.laske(3)); // 0
System.out.println(p.laske(4)); // 2
```

</programming-exercise>

<programming-exercise name='5. Latinalaiset neliöt' tmcname='viikko08-Viikko08Tehtava5'>

_Latinalainen neliö_ on `n` &times; `n` -ruudukko,
jonka jokaisella rivillä ja jokaisessa sarakkeessa
on tasan kerran jokainen luku väliltä 1...`n`.
Tehtäväsi on laskea latinalaisten neliöiden määrä
annetulle `n`:lle.

Tee luokka `Latinalaiset`, jossa on seuraavat metodit:

* `int laske(int n)`: laskee latinalaisten neliöiden määrän

Huomaa, että metodin `laske` tulee laskea tulos tyhjästä
(eli siinä ei saa olla suurten tapausten vastauksia sisällä).

Rajat:

- 1 &le; `n` &le; 5

Seuraava koodi esittelee luokan käyttämistä:

```java
Latinalaiset l = new Latinalaiset();
System.out.println(l.laske(1)); // 1
System.out.println(l.laske(2)); // 2
System.out.println(l.laske(3)); // 12
System.out.println(l.laske(4)); // 576
```

</programming-exercise>

<programming-exercise name='6. Neliö neliöiksi' tmcname='viikko08-Viikko08Tehtava6'>

Tehtäväsi on laskea, monellako tavalla
`n` &times; `n` -ruudukon voi muodostaa
neliöruudukoista.

Tee luokka `Nelioiksi`, jossa on seuraavat metodit:

* `int laske(int n)`: laskee ratkaisuiden määrän

Huomaa, että metodin `laske` tulee laskea tulos tyhjästä
(eli siinä ei saa olla suurten tapausten vastauksia sisällä).

Rajat:

- 1 &le; `n` &le; X

Seuraava koodi esittelee luokan käyttämistä:

```java
Latinalaiset l = new Latinalaiset();
System.out.println(l.laske(1)); // X
System.out.println(l.laske(2)); // X
System.out.println(l.laske(3)); // X
System.out.println(l.laske(4)); // X
```

</programming-exercise>

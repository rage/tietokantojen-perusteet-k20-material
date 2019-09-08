---
path: '/viikko-03-dev'
title: 'Viikko 3: Järjestäminen'
overview: true
---

Viikon 3 tehtävien deadline: su 29.9. klo 23:59

## Tehtävät

Tämän viikon tehtävissä 1–3 tavoitteena on ratkaista tehtävä ajassa
O(n log n) järjestämisen avulla.
Javassa on valmiita metodeita järjestämiseen (kuten Arrays.sort),
joita kannattaa hyödyntää.
Tehtävissä 4–5 sinun tulee toteuttaa oma järjestämisalgoritmi
ja verrata sitä Javan valmiiseen metodiin.
Tehtävä 6 on vaikeampi tehtävä, jossa tutustutaan lähemmin
inversioiden ominaisuuksiin.

<programming-exercise name='1. Pienin ero' tmcname='viikko03-Viikko03Tehtava1'>

Annettuna on taulukko, jossa on `n` kokonaislukua.
Tehtäväsi on selvittää, mikä on pienin ero kahden
taulukossa olevan luvun välillä.

Tee luokka `PieninEro`, jossa on seuraavat metodit:

* `int laske(int[] t)`: palauttaa pienimmän eron kahden luvun välillä

Rajat:

- 2 &le; `n` &le; 10<sup>6</sup>
- jokainen alkio on välillä 1...10<sup>9</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
PieninEro p = new PieninEro();
System.out.println(p.laske(new int[] {4,1,8,5})); // 1
System.out.println(p.laske(new int[] {1,10,100})); // 9
System.out.println(p.laske(new int[] {1,1,1,1,1})); // 0
```

</programming-exercise>

<programming-exercise name='2. Vain yksi' tmcname='viikko03-Viikko03Tehtava2'>

Annettuna on taulukko, jossa on `n` kokonaislukua,
missä `n` on pariton.
Jokainen taulukon luku esiintyy tasan kahdesti,
paitsi yksi luku esiintyy vain kerran.
Mikä on tämä luku?

Tee luokka `VainYksi`, jossa on seuraavat metodit:

* `int etsi(int[] t)`: palauttaa luvun, joka esiintyy vain kerran

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- jokainen alkio on välillä 1...10<sup>9</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
VainYksi v = new VainYksi();
System.out.println(v.etsi(new int[] {5,2,5,3,2})); // 3
System.out.println(v.etsi(new int[] {1})); // 1
System.out.println(v.etsi(new int[] {1,10,10,100,100})); // 1
```

Lisähaaste: Tässä tehtävässä riittää mainiosti
O(n log n)-aikainen järjestämistä käyttävä ratkaisu,
mutta jos haluat vaikeamman tehtävän,
koeta keksiä parempi ratkaisu,
jonka aikavaativuus on O(n) ja tilavaativuus on O(1).

</programming-exercise>

<programming-exercise name='3. Pysäkit' tmcname='viikko03-Viikko03Tehtava3'>

Tien varrella on `n` taloa,
joista jokaisella on tietty sijainti (kohta x-akselilla).
Tehtäväsi on rakentaa tielle bussipysäkkejä niin,
että jokaisen talon etäisyys lähimpään pysäkkiin
on enintään `k`.
Mikä on pienin mahdollinen määrä pysäkkejä?

Tee luokka `Pysakit`, jossa on seuraavat metodit:

* `int laske(int[] t, int k)`: palauttaa pienimmän pysäkkien määrän

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- jokainen talon sijainti on välillä 1...10<sup>9</sup>
- 1 &le; `k` &le; 10<sup>9</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Pysakit p = new Pysakit();
System.out.println(p.laske(new int[] {3,7,1,5}, 1)); // 2
System.out.println(p.laske(new int[] {3,7,1,5}, 2)); // 2
System.out.println(p.laske(new int[] {3,7,1,5}, 3)); // 1
```

</programming-exercise>

<quiz id="a47b9d60-82fb-488e-9cf6-d96e369e261e"></quiz>

<quiz id="b1deae9c-8da4-49c0-ae5b-eb20776fdf5f"></quiz>

<programming-exercise name='6. Inversiot' tmcname='viikko03-Viikko03Tehtava6'>

Tehtäväsi on muodostaa `n`-kokoinen taulukko,
joka sisältää luvut `1`...`n`
ja siinä on tasan `k` inversiota.
Voit muodostaa minkä tahansa taulukon,
joka täyttää nämä vaatimukset.

Tee luokka `Inversiot`, jossa on seuraavat metodit:

* `int[] muodosta(int n, long k)`: palauttaa taulukon

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- `k` on valittu niin, että ratkaisu on olemassa

Seuraava koodi esittelee luokan käyttämistä:

```java
Inversiot i = new Inversiot();
int[] t = i.muodosta(5,2);
System.out.println(Arrays.toString(t)); // [2, 1, 3, 5, 4]
```

</programming-exercise>


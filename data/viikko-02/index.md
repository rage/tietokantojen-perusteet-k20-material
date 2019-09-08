---
path: '/viikko-02'
title: 'Viikko 2: Tehokkuus'
overview: true
---

Viikon 2 tehtävien deadline: su 22.9. klo 23:59

## Tehtävät

Tämän viikon ensimmäisessä tehtävässä sinun tulee määrittää
annetun koodin aikavaativuus O-merkinnän avulla.
Muut viikon tehtävät ovat ohjelmointitehtäviä,
jotka opettavat algoritmien suunnittelua.

Tämän ja tulevien viikkojen ohjelmointitehtävissä
jokaisen yksittäisen testin aikarajana on yksi sekunti,
mikä vaatii tehokkaan algoritmin keksimistä.
Tällä viikolla jokaisen tehtävän syötteenä on taulukko,
jossa on miljoona alkiota, ja algoritmin tulisi toimia
ajassa O(n).
Käytännössä algoritmissa voi olla yksi tai useampi
silmukka, jotka käyvät läpi taulukon alkiot,
mutta ei sisäkkäisiä silmukoita.



<quiz id="b066bc51-8c79-43b7-9f56-e92f8060e711"></quiz>

<programming-exercise name='2. Pisin toisto' tmcname='viikko02-Viikko02Tehtava2'>

Annettuna on taulukko, jossa on `n` kokonaislukua.
Tehtäväsi on laskea, kuinka pitkä on pisin samaa lukua
toistava osuus taulukossa.

Tee luokka `PisinToisto`, jossa on seuraavat metodit:

* `int laske(int[] t)`: palauttaa pisimmän toiston pituuden

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- jokainen alkio on välillä 1...10<sup>6</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
PisinToisto p = new PisinToisto();
System.out.println(p.laske(new int[] {1,2,1,1,2})); // 2
System.out.println(p.laske(new int[] {1,2,3,4,5})); // 1
System.out.println(p.laske(new int[] {1,1,1,1,1})); // 5
```

</programming-exercise>

<programming-exercise name='3. Muutokset' tmcname='viikko02-Viikko02Tehtava3'>

Annettuna on taulukko, jossa on `n` kokonaislukua.
Haluat muuttaa taulukkoa niin,
että missään kohdassa ei ole kahta samaa lukua peräkkäin.
Saat joka siirrolla muuttaa minkä tahansa taulukossa
olevan luvun joksikin muuksi.
Mikä on pienin määrä siirtoja?

Esimerkiksi taulukossa `[1,1,2,2,2]`
pienin mahdollinen siirtojen määrä on kaksi.
Yksi ratkaisu on muuttaa taulukon sisällöksi
`[1,3,2,1,2]`.

Tee luokka `Muutokset`, jossa on seuraavat metodit:

* `int laske(int[] t)`: palauttaa pienimmän siirtojen määrän

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- jokainen alkio on välillä 1...10<sup>6</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Muutokset m = new Muutokset();
System.out.println(m.laske(new int[] {1,1,2,2,2})); // 2
System.out.println(m.laske(new int[] {1,2,3,4,5})); // 0
System.out.println(m.laske(new int[] {1,1,1,1,1})); // 2
```

</programming-exercise>


<programming-exercise name='4. Halkaisu' tmcname='viikko02-Viikko02Tehtava4'>

Annettuna on taulukko, jossa on `n` kokonaislukua.
Monellako tavalla voit halkaista taulukon
vasempaan ja oikeaan osaan niin, että kummankin osan
lukujen summat ovat yhtä suuret?

Esimerkiksi taulukossa `[1,2,-1,4,0]` 
mahdolliset halkaisutavat ovat:

- `[1]` ja `[2,-1,4,0]`
- `[1,2]` ja `[-1,4,0]`
- `[1,2,-1]` ja `[4,0]`
- `[1,2,-1,4]` ja `[0]`

Tässä taulukossa oikea vastaus on 1,
koska vasemman ja oikean osan summat ovat samat
vain silloin, kun osat ovat `[1,2]` ja `[-1,4,0]`.
Tällöin kummankin osan summa on 3.

Tee luokka `Halkaisu`, jossa on seuraavat metodit:

* `int laske(int[] t)`: palauttaa tapojen määrän

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- jokainen alkio on välillä &ndash;100...100

Seuraava koodi esittelee luokan käyttämistä:

```java
Halkaisu h = new Halkaisu();
System.out.println(h.laske(new int[] {1,2,-1,4,0})); // 1
System.out.println(h.laske(new int[] {1,2,3,4,5})); // 0
System.out.println(h.laske(new int[] {0,0,0,0,0})); // 4
```

</programming-exercise>


<programming-exercise name='5. Kierrokset' tmcname='viikko02-Viikko02Tehtava5'>

Annettuna on taulukko, jossa on jokainen luku
väliltä `1`...`n` tasan kerran.
Haluat kerätä luvut pienimmästä suurimpaan
tekemällä yhden tai useamman _kierroksen_ taulukossa.
Joka kierroksella käyt läpi taulukon vasemmalta oikealle
ja poimit mahdollisimman monta seuraavaksi tulevaa lukua.
Montako kierrosta teet yhteensä?

Esimerkiksi taulukossa `[4,1,3,2,5]` kierrosten määrä on kolme,
koska poimit ensimmäisellä kierroksella luvut `1` ja `2`,
toisella kierroksella luvun `3`
ja kolmannella kierroksella luvut `4` ja `5`.


Tee luokka `Kierrokset`, jossa on seuraavat metodit:

* `int laske(int[] t)`: palauttaa kierrosten määrän

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Kierrokset k = new Kierrokset();
System.out.println(k.laske(new int[] {4,1,3,2,5})); // 3
System.out.println(k.laske(new int[] {1,2,3,4,5})); // 1
System.out.println(k.laske(new int[] {5,4,3,2,1})); // 5
```

</programming-exercise>

<programming-exercise name='6. Alitaulukot' tmcname='viikko02-Viikko02Tehtava6'>

Annettuna on taulukko, jossa on `n` lukua.
Tehtäväsi on laskea,
monessako taulukon yhtenäisessä alitaulukossa
on enintään kaksi eri lukua.

Tee luokka `Alitaulukot`, jossa on seuraavat metodit:

* `long laske(int[] t)`: palauttaa alitaulukoiden määrän

Rajat:

- 1 &le; `n` &le; 10<sup>6</sup>
- jokainen alkio on välillä 1...10<sup>6</sup>

Seuraava koodi esittelee luokan käyttämistä:

```java
Alitaulukot a = new Alitaulukot();
System.out.println(a.laske(new int[] {1,2,1,3,2})); // 10
System.out.println(a.laske(new int[] {1,1,1,1,1})); // 15
System.out.println(a.laske(new int[] {1,2,3,4,5})); // 9
```

Huomaa, että metodin `laske` palautusarvon tyyppi on `long`,
koska alitaulukoiden määrä saattaa olla suuri.

</programming-exercise>


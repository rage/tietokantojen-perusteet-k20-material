---
path: '/viikko-10-dev'
title: 'Viikko 10: Verkkojen perusteet'
overview: true
---

Viikon 10 tehtävien deadline: su 24.11. klo 23:59

## Tehtävät

<programming-exercise name='2. Komponentit' tmcname='viikko10-Viikko10Tehtava2'>

Tietoverkko muodostuu _n_ koneesta,
jotka on numeroitu 1, 2, ..., _n_.
Verkossa on joukko yhteyksiä,
joista jokainen on kahden koneen välinen.
Kaksi konetta kuuluvat samaan komponenttiin,
jos niiden välillä voi viestiä yhteyksiä käyttäen.
Tehtäväsi on laskea verkon komponenttien määrä.

Tee luokka `Komponentit`, jossa on seuraavat metodit:

* `Komponentit(int n)`: koneiden määrä annetaan konstruktorissa
* `void lisaaYhteys(int a, int b)`: lisää yhteyden koneiden `a` ja `b` välille
* `int laske()`: palauttaa komponenttien määrän

Rajat:

- 1 &le; `n` &le; 5000
- ensin metodia `lisaaYhteys` kutsutaan enintään 10<sup>5</sup> kertaa
- lopuksi kutsutaan kerran metodia `laske`

Seuraava koodi esittelee luokan käyttämistä:

```java
Komponentit k = new Komponentit(6);
k.lisaaYhteys(1,2);
k.lisaaYhteys(2,3);
k.lisaaYhteys(1,3);
k.lisaaYhteys(3,4);
k.lisaaYhteys(5,6);
System.out.println(k.laske()); // 2
```

</programming-exercise>

<programming-exercise name='3. Lentoreitti' tmcname='viikko10-Viikko10Tehtava3'>

Sinulle annetaan tiedot `n` kaupungin välisistä lentoyhteyksistä.
Kaupungit on numeroitu 1, 2, ..., `n`,
ja jokainen yhteys on kahden kaupungin välinen.
Kun haluat matkustaa kaupungista `x` kaupunkiin `y`,
mikä on pienin mahdollinen määrä välilaskuja?

Tee luokka `Lentoreitti`, jossa on seuraavat metodit:

* `Lentoreitti(int n)`: konstruktorissa annetaan kaupunkien määrä
* `void lisaaYhteys(int a, int b)`: lisää yhteyden kaupunkien `a` ja `b` välille
* `int laske(int x, int y)`: palauttaa pienimmän välilaskujen määrän
reitillä kaupungista `x` kaupunkiin `y`
(tai &ndash;1, jos mitään reittiä ei ole olemassa)

Rajat:

- 1 &le; `n` &le; 5000
- ensin metodia `lisaaYhteys` kutsutaan enintään 10<sup>5</sup> kertaa
- lopuksi kutsutaan kerran metodia `laske`

Seuraava koodi esittelee luokan käyttämistä:

```java
Lentoreitti l = new Lentoreitti(6);
l.lisaaYhteys(1,2);
l.lisaaYhteys(2,3);
l.lisaaYhteys(3,4);
l.lisaaYhteys(3,5);
l.lisaaYhteys(1,3);
l.lisaaYhteys(5,6);
System.out.println(l.laske(1,6)); // 2
```

</programming-exercise>

<programming-exercise name='4. Viestintä' tmcname='viikko10-Viikko10Tehtava4'>

Tietoverkko muodostuu _n_ koneesta,
jotka on numeroitu 1, 2, ..., _n_.
Verkossa on joukko yhteyksiä,
joista jokainen on kahden koneen välinen.
Sinulle annetaan joukko konepareja
ja tehtäväsi on tarkastaa jokaisesta,
voiko niiden välillä viestiä yhteyksiä käyttäen.

Tee luokka `Viestinta`, jossa on seuraavat metodit:

* `Viestinta(int n)`: koneiden määrä annetaan konstruktorissa
* `void lisaaYhteys(int a, int b)`: lisää yhteyden koneiden `a` ja `b` välille
* `boolean tarkasta(int x, int y)`: palauttaa `true`,
jos koneiden `x` ja `y` välillä voi viestiä, ja muuten `false`

Rajat:

- 1 &le; `n` &le; 5000
- ensin metodia `lisaaYhteys` kutsutaan enintään 10<sup>5</sup> kertaa
- sitten metodia `tarkasta` kutsutaan enintään 10<sup>5</sup> kertaa

Huomaa, että metodia `tarkasta` voidaan kutsua monta kertaa,
joten olisi liian hidasta suorittaa haku alusta alkaen joka kutsulla.

Seuraava koodi esittelee luokan käyttämistä:

```java
Viestinta v = new Viestinta(6);
v.lisaaYhteys(1,2);
v.lisaaYhteys(2,3);
v.lisaaYhteys(1,3);
v.lisaaYhteys(3,4);
v.lisaaYhteys(5,6);
System.out.println(v.tarkasta(1,4)); // true
System.out.println(v.tarkasta(2,5)); // false
System.out.println(v.tarkasta(5,6)); // true
```

</programming-exercise>

<programming-exercise name='5. Labyrintti I' tmcname='viikko10-Viikko10Tehtava5'>

Tehtäväsi on etsiä labyrintissa lyhin reitti kohdasta
`x` kohtaan `y`. Labyrintti on `n` &times; `m` -ruudukko,
jonka kuvauksessa merkki `#` tarkoittaa
seinää ja merkki `.` tarkoittaa lattiaa.
Kaikki reunaruudut ovat seinää.

Saat liikkua joka vuorolla askeleen vasemmalle,
oikealle, ylöspäin tai alaspäin.
Sinun tulee antaa lyhimmän reitin kuvaus merkkijonona,
joka muodostuu vastaavasti merkeistä `V`, `O`, `Y` ja `A`.
Jos mahdollisia reittejä on useita,
voit antaa minkä tahansa niistä.

Tee luokka `Labyrintti`, jossa on seuraavat metodit:

* `String etsi(char[][] t)`: palauttaa lyhimmän reitin kuvauksen merkkijonona
(jos reittiä ei ole, metodin tulee palauttaa `null`)

Rajat:

- 1 &le; `n`, `m` &le; 50

Seuraava koodi esittelee luokan käyttämistä:

```java
Labyrintti l = new Labyrintti();
char[][] t = {{'#','#','#','#','#','#','#'},
              {'#','x','#','.','y','.','#'},
              {'#','.','#','.','#','.','#'},
              {'#','.','.','.','.','.','#'},
              {'#','#','#','#','#','#','#'}};
System.out.println(l.etsi(t)); // AAOOYYO
```

</programming-exercise>

<programming-exercise name='6. Labyrintti II' tmcname='viikko10-Viikko10Tehtava6'>

Tämä tehtävä vastaa muuten edellistä,
mutta lisäksi labyrintissa voi olla avaimia
ja lukittuja ovia.
Voit kulkea ovesta vain, jos sinulla on vastaava avain.
Avaimet on merkitty karttaan `a`&ndash;`d`
ja vastaavat lukot `A`&ndash;`D`.
Labyrintissa voi olla useita samanlaisia
avaimia ja lukkoja.


Tee luokka `Labyrintti`, jossa on seuraavat metodit:

* `String etsi(char[][] t)`: palauttaa lyhimmän reitin kuvauksen merkkijonona
(jos reittiä ei ole, metodin tulee palauttaa `null`)

Rajat:

- 1 &le; `n`, `m` &le; 50

Seuraava koodi esittelee luokan käyttämistä:

```java
Labyrintti l = new Labyrintti();
char[][] t = {{'#','#','#','#','#','#','#'},
              {'#','x','#','.','y','b','#'},
              {'#','.','#','A','#','#','#'},
              {'#','b','B','.','B','a','#'},
              {'#','#','#','#','#','#','#'}};
System.out.println(l.etsi(t)); // AAOOOOVVYYO
```

</programming-exercise>

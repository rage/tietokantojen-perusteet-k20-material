---
path: "/sqlite-python"
title: "SQLite Pythonissa"
hidden: false
information_page: true
---

Pythonin standardikirjaston osana on kirjasto `sqlite3`,
jonka kautta pystyy käsittelemään SQLite-tietokantaa.
Tämä sivu kertoo perusasiat kirjaston käyttämisestä,
ja voit halutessasi etsiä lisätietoa Pythonin dokumentaatiosta.

## Esimerkki

Seuraava koodi käyttää tietokantaa, joka on tiedostossa `testi.db`.
Koodi luo taulun `Tuotteet` ja lisää sinne viisi riviä.
Tämän jälkeen koodi hakee ja näyttää taulun rivit.

```python
import sqlite3

db = sqlite3.connect("testi.db")

c = db.cursor()

c.execute("CREATE TABLE Tuotteet (id INTEGER PRIMARY KEY, nimi TEXT, hinta INTEGER)")
c.execute("INSERT INTO Tuotteet (nimi,hinta) VALUES ('retiisi',7)")
c.execute("INSERT INTO Tuotteet (nimi,hinta) VALUES ('porkkana',5)")
c.execute("INSERT INTO Tuotteet (nimi,hinta) VALUES ('nauris',4)")
c.execute("INSERT INTO Tuotteet (nimi,hinta) VALUES ('lanttu',8)")
c.execute("INSERT INTO Tuotteet (nimi,hinta) VALUES ('selleri',4)")

db.commit()

c.execute("SELECT * FROM Tuotteet")
print(c.fetchall())
```

Koodin tulostus on seuraava:

```x
[(1, 'retiisi', 7), (2, 'porkkana', 5), (3, 'nauris', 4), (4, 'lanttu', 8), (5, 'selleri', 4)]
```

Tietokantaa käytetään _kursorin_ kautta,
jonka metodi `execute` suorittaa halutun komennon.
Muutosten jälkeen tulee kutsua metodia
`commit`, jotta transaktio viedään loppuun.
Komennon `SELECT` suorituksen jälkeen metodi `fetchall`
hakee tulosrivit.

Huomaa, että jos suoritat koodin uudestaan,
tapahtuu virhe, koska taulu `Tuotteet` on jo tietokannassa mutta
ohjelma yrittää luoda sen uudestaan.
Voit aina halutessasi nollata tietokannan sisällön
poistamalla tiedoston `testi.db`.


## Tiedon hakeminen käyttäjänä

Seuraava koodi näyttää esimerkin, jossa käyttäjä pystyy
hakemaan tietoa tietokannasta, jossa on valmiina taulu `Tuotteet`:

```python
import sqlite3

db = sqlite3.connect("testi.db")

c = db.cursor()

print("Anna tuotteen nimi:")
nimi = input()

c.execute("SELECT hinta FROM Tuotteet WHERE nimi=?",[nimi])
tiedot = c.fetchone()
if tiedot != None:
    print("Hinta:",tiedot[0])
else:
    print("Tuotetta ei löytynyt")    
```

Tässä on käytössä _parametrisoitu_ kysely,
jossa on käyttäjän antaman tiedon kohdalla `?` ja
tieto annetaan erikseen listassa kyselyn jälkeen.
Metodi `fetchone` antaa yhden tulosrivin tai `None`,
jos kysely ei palauttanut mitään riviä.

Tässä on esimerkkejä koodin toiminnasta:

```x
Anna tuotteen nimi:
selleri
Hinta: 4
```

```x
Anna tuotteen nimi:
banaani
Tuotetta ei löytynyt
```

<text-box variant='hint' name='Turvallinen kysely'>

Parametrisoitu kysely on turvallinen tapa yhdistää käyttäjän
antamaa tietoa kyselyyn,
koska tällöin käyttäjän antama tieto ei sekoitu SQL-komentoihin.
Sen sijaan vaarallinen tapa olisi yhdistää käyttäjän antama
tieto suoraan kyselyyn:

```python
c.execute("SELECT hinta FROM Tuotteet WHERE nimi='"+nimi+"'")
```

Nyt käyttäjä voisi antaa vaikka seuraavan tuotteen "nimen":

```x
Anna tuotteen nimi:
' OR id=1 OR nimi='
Hinta: 7
```

Tämä tuottaa kyselyn `SELECT hinta FROM Tuotteet WHERE nimi='' OR id=1 OR nimi=''`,
joka hakeekin tietokannasta tuotteen, jonka id on 1.
Käyttäjä voisi siis koettaa hakea tietoa, johon hänellä ei kuuluisi olla pääsyä.

Tällaisesta kyselyn rakennetta muuttavasta käyttäjän antamasta
tiedosta käytetään nimeä _SQL-injektio_.
Tämä oli etenkin takavuosina tavallinen tapa murtautua
huonosti toteutettuihin nettisivustoihin.

</text-box>

## Tiedon muuttaminen käyttäjänä

Tässä on vielä esimerkki, jossa käyttäjä pystyy lisäämään tuotteen:

```python
import sqlite3

db = sqlite3.connect("testi.db")

c = db.cursor()

print("Anna tuotteen nimi:")
nimi = input()
print("Anna tuotteen hinta:")
hinta = input()

c.execute("INSERT INTO Tuotteet(nimi,hinta) VALUES (?,?)",[nimi,hinta])
db.commit()

print("Tuote lisätty id:llä",c.lastrowid)
```

Kuten tiedon hakemisessa, turvallinen tapa toteuttaa kysely on
käyttää parametrisoitua kyselyä.
Metodin `commit` kutsuminen on tarpeen,
jotta lisätty rivi menee pysyvästi talteen.
Rivin lisäämisen jälkeen kentässä `lastrowid` on 
lisätyn rivin id-numero, josta olisi hyötyä,
jos esimerkiksi lisäisimme vielä toisen rivin,
joka viittaa siihen.

Koodin suoritus voi näyttää seuraavalta:

```x
Anna tuotteen nimi:
banaani
Anna tuotteen hinta:
3
Tuote lisätty id:llä 6
```

## Virheenkäsittely

Jos kyselyssä tapahtuu virhe, niin tämä keskeyttää ohjelman suorituksen.
Näin käy vaikkapa seuraavassa kyselyssä, jos taulua `Kurssit` ei ole olemassa:

```python
c.execute("SELECT * FROM Kurssit")
```

Tässä tapauksessa ohjelma päättyy seuraavaan virheeseen:

```x
Traceback (most recent call last):
  File "testi4.py", line 7, in <module>
      c.execute("SELECT * FROM Kurssit")
sqlite3.OperationalError: no such table: Kurssit
```

Voimme kuitenkin halutessamme varautua virheeseen `try`-rakenteen
avulla vaikkapa näin:

```python
try:
    c.execute("SELECT * FROM Kurssit")
except:
    print("Kysely ei onnistunut")    
```

Nyt virhetilanteessa ohjelma tulostaa viestin ja jatkaa toimintaansa.

## Transaktiot

Käyttämämme kirjasto `sqlite3` toteuttaa transaktiot melko oudosti:
oletuksena taulun rivejä muuttava komento (kuten `INSERT` tai `UPDATE`)
aloittaa transaktion (jos transaktiota ei ole käynnissä) ja
meidän täytyy kutsua metodia `commit`, jotta muutokset menevät talteen.

Kuitenkin yllättäen komento `CREATE TABLE` suoritetaan eri tavalla:
se vie loppuun mahdollisen käynnissä olevan transaktion ja
komennon luoma uusi taulu myös menee pysyvästi tietokantaan ilman metodin
`commit` kutsumista.

Seuraava komento ottaa puolestaan käyttöön _autocommit_-tilan:

```python
db.isolation_level = None
```

Tällöin jokainen komento on oma transaktionsa ja kaikki muutokset menevät
talteen ilman metodin `commit` kutsumista (kuten SQLite-tulkissa).

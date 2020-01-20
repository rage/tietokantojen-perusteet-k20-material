---
path: "/blogi"
title: "Kurssiblogi"
hidden: false
information_page: true
---

Kurssiblogissa ilmestyy silloin tällöin kurssimateriaalia täydentävää sisältöä,
jonka tavoitteena on antaa uusia näkökulmia kurssin aiheisiin.

## 20.1.2020

`LEFT JOIN` on usein mystiseltä tuntuva hakutapa SQL:n perusteiden opettelussa.
Siinäkin auttaa kuitenkin hakea ensin kaikki sarakkeet ilman lisäehtoja,
jotta näkee paremmin, mitä kyselyssä oikeasti tapahtuu.

Tarkastellaan esimerkkiä, jossa tietokannassa on kursseja ja opettajia.
Taulun `Opettajat` sisältö on:

```x
id          nimi      
----------  ----------
1           Kaila     
2           Kivinen   
3           Laaksonen 
```

Taulun `Kurssit` sisältö on:

```x
id          nimi                    opettaja_id
----------  ----------------------  -----------
1           Ohjelmoinnin perusteet  1          
2           Tietorakenteet ja algo  2          
3           Laskennan mallit        2 
```

Lopullinen tavoitteemme on hakea jokaisesta opettajasta kurssien määrä,
mutta tehdään ensin koemielessä puhdas `LEFT JOIN` -kysely:

```sql
SELECT * FROM Opettajat O LEFT JOIN Kurssit K ON K.opettaja_id=O.id;
```

```x
id          nimi        id          nimi                    opettaja_id
----------  ----------  ----------  ----------------------  -----------
1           Kaila       1           Ohjelmoinnin perusteet  1          
2           Kivinen     3           Laskennan mallit        2          
2           Kivinen     2           Tietorakenteet ja algo  2          
3           Laaksonen                                          
```

Tästä näkyy `LEFT JOIN` -kyselyn idea: jos jotain vasemman taulun riviä
ei onnistuta parittamaan minkään oikean taulun rivin kanssa
(kuten tässä esimerkissä taulun `Opettajat` riviä 3),
niin tulostauluun ilmestyy lisärivi, jossa on kyseisen vasemman taulun rivin
sisältö ja oikean taulun rivin kohdalla kaikissa sarakkeissa `NULL`.

Nyt voimme koettaa viimeistellä kyselyn lisäämällä haettavat sarakkeet ja ryhmittelyn:

```sql
SELECT O.nimi, COUNT(*) FROM Opettajat O LEFT JOIN Kurssit K ON K.opettaja_id=O.id GROUP BY O.id;
```

```x
nimi        COUNT(*)  
----------  ----------
Kaila       1         
Kivinen     2         
Laaksonen   1   
```

Jotain meni kuitenkin pieleen, koska kysely väittää, että Laaksosella olisi yksi kurssi.
Ongelmana on, että `COUNT(*)` laskee mukaan kaikki rivit,
myös vaikka osassa sarakkeista olisi `NULL`.
Ratkaisuna on tarkentaa laskentaa näin:

```sql
SELECT O.nimi, COUNT(K.id) FROM Opettajat O LEFT JOIN Kurssit K ON K.opettaja_id=O.id GROUP BY O.id;
```

```x
nimi        COUNT(K.id)  
----------  ----------
Kaila       1         
Kivinen     2         
Laaksonen   0
```

Tässä erona on, että `COUNT(K.id)` laskee mukaan vain rivit,
joissa sarakkeen `K.id` arvona ei ole `NULL`.
Nyt kysely toimii oikein eikä Laaksosella näy kursseja.

Huomaa myös sanojen `ON` ja `WHERE` ero:
jos `ON`-osassa oleva ehto ei päde,
vasemman taulun rivi pääsee kuitenkin mukaan kerran,
mutta jos `WHERE`-osassa oleva ehto ei päde,
vasemman taulun rivi ei pääse mukaan lainkaan.
Seuraava kysely havainnollistaa asiaa:

```sql
SELECT * FROM Opettajat O LEFT JOIN Kurssit K WHERE K.opettaja_id=O.id;
```

```x
id          nimi        id          nimi                    opettaja_id
----------  ----------  ----------  ----------------------  -----------
1           Kaila       1           Ohjelmoinnin perusteet  1          
2           Kivinen     3           Laskennan mallit        2          
2           Kivinen     2           Tietorakenteet ja algo  2   
```

Erona aiempaan on, että sanan `ON` sijasta kyselyssä on sana `WHERE`.
Niinpä vasemmasta taulusta ei tule riviä 3.

Tässä on vielä esimerkki, jossa kyselyssä on sekä `ON` että `WHERE`:

```sql
SELECT * FROM Opettajat O LEFT JOIN Kurssit K ON K.opettaja_id=O.id WHERE O.id<>2;
```

```x
id          nimi        id          nimi                    opettaja_id
----------  ----------  ----------  ----------------------  -----------
1           Kaila       1           Ohjelmoinnin perusteet  1          
3           Laaksonen
```

Nyt toisaalta rivi 3 tulee mukaan `ON`-osan ansiosta mutta riviä 2
ei tule mukaan `WHERE`-osan takia.
Jos molemmat ehdot laittaisi `ON`-osaan, niin tulos olisi taas toinen:

```sql
SELECT * FROM Opettajat O LEFT JOIN Kurssit K ON K.opettaja_id=O.id AND O.id<>2;
```

```x
id          nimi        id          nimi                    opettaja_id
----------  ----------  ----------  ----------------------  -----------
1           Kaila       1           Ohjelmoinnin perusteet  1          
2           Kivinen
3           Laaksonen
```

Nyt vasemmasta taulusta tulee mukaan sekä rivi 2 että rivi 3,
joissa molemmissa oikean taulun rivin kohdalla on `NULL`-arvoja.

## 17.1.2020

Kurssikanavalla heräsi kysymys: miten SQL:ssä voi laskea riveille
järjestysluvut?

Tarkastellaan esimerkkinä taulua `Nimet`,
jonka jokaisella rivillä on id-numero ja nimi:

```x
id          nimi      
----------  ----------
1           Uolevi    
2           Maija     
3           Liisa     
4           Vihtori
```

Tavoitteemme on tehdä kysely, joka antaa nimet aakkosjärjestyksessä
ja lisäksi jokaisen nimen _järjestysluvun_ eli tiedon siitä,
monesko nimi kyseinen nimi on järjestyksessä:

```x
nimi        
----------  ----------
Liisa       1
Maija       2
Uolevi      3
Vihtori     4
```

Yksi tapa muodostaa kysely on laatia alikysely,
joka laskee jokaisella rivillä, monenko rivin nimi on aakkosissa
korkeintaan yhtä suuri kuin kyseisen rivin nimi:

```sql
SELECT nimi, (SELECT COUNT(*) FROM Nimet WHERE nimi <= N.nimi) c FROM Nimet N ORDER BY c;
```

Tämä on usein kätevä tekniikka: voimme laskea lukumäärän tai jotain muuta tietoa
niistä riveistä, jotka ovat järjestyksessä ennen riviä.

Alikyselyn voi usein korvata usean taulun kyselyllä,
ja niin on myös tässä tehtävässä.
Voimme muodostaa alikyselyä käyttävän kyselyn sijasta seuraavan
kahden taulun kyselyn:

```sql
SELECT A.nimi, COUNT(*) c FROM Nimet A, Nimet B WHERE B.nimi <= A.nimi GROUP BY A.nimi ORDER BY c;
```

Tässä muodostamme kaikki kahden nimen parit, joissa jälkimmäinen nimi on 
aakkosissa korkeintaan yhtä suuri kuin ensimmäinen nimi.
Sitten ryhmittelemme tulokset ensimmäisen nimen mukaan, jolloin rivien määrät
antavat halutun tuloksen.

Tämän kyselyn toiminta on helpompaa ymmärtää, jos haemme ensin kaikki tulokset
ilman ryhmittelyä ja sarakkeiden valintaa:

```sql
SELECT * FROM Nimet A, Nimet B WHERE B.nimi <= A.nimi;
```

```x
id          nimi        id          nimi      
----------  ----------  ----------  ----------
1           Uolevi      1           Uolevi    
1           Uolevi      2           Maija     
1           Uolevi      3           Liisa     
2           Maija       2           Maija     
2           Maija       3           Liisa     
3           Liisa       3           Liisa     
4           Vihtori     1           Uolevi    
4           Vihtori     2           Maija     
4           Vihtori     3           Liisa     
4           Vihtori     4           Vihtori   
```

Tämä on yleensäkin hyvä keino suunnitella kyselyä:
tulostamme ensin kaikki tiedot ja alamme sitten miettiä
ryhmittelyä ja haettavan tiedon rajoittamista.

Vielä yksi tapa ratkaista tehtävä on käyttää SQLiten
ikkunafunktiota `ROW_NUMBER`:

```sql
SELECT nimi, ROW_NUMBER() OVER (ORDER BY nimi) FROM Nimet;
```

Tämä on kurssin ulkopuolista asiaa,
mutta jotkut ovat löytäneet funktion Googlella
ja se sopiikin hyvin tähän tilanteeseen.
Kurssilla saa ilman muuta hakea tietoa muualta ja käyttää kaikkia SQLiten
ominaisuuksia, mutta toisaalta tehtävissä voi myös luottaa siihen,
että ne on mahdollista ratkaista kurssin materiaalin perusteella.

---
path: "/blogi"
title: "Kurssiblogi"
hidden: false
information_page: true
---

Kurssiblogissa ilmestyy silloin tällöin kurssimateriaalia täydentävää sisältöä,
jonka tavoitteena on antaa uusia näkökulmia kurssin aiheisiin.

## 31.1.2020

Arvo `NULL` tarkoittaa SQL:ssä, että jotain tietoa ei ole saatavilla.
Tämä on joissain tilanteissa kätevää, mutta voi myös aiheuttaa ongelmia ja yllätyksiä.

Jos `NULL` esiintyy kaavassa, se hävittää kaiken ympärillään.
Esimerkiksi `NULL+1` on `NULL` ja samoin `5*NULL+2` on `NULL`.
`NULL` onkin selkeästi eri asia kuin luku nolla.
Huomaa, että SQLite ei näytä kyselyn tuloksessa tekstiä `NULL` vaan vain tyhjää:

```x
sqlite> SELECT NULL;

sqlite> SELECT NULL+1;

sqlite> SELECT 5*NULL+2;

```

Joskus kyselyn osana on lauseke, joka _saattaa_ olla `NULL`,
ja haluamme muuttaa mahdollisen arvon `NULL` luvuksi nolla.
Tyypillinen tilanne on, kun kyselyssä esiintyy `LEFT JOIN`,
`GROUP BY` sekä koostefunktio `SUM`,
joka antaa yleensä sarakkeen arvojen summan mutta `NULL` silloin,
kun riviä ei ole yhdistetty.
Tähän on ainakin kolme mahdollista tapaa:

1. Funktion `IFNULL(a,b)` arvo on `a`, jos `a` ei ole `NULL`,
   ja `b`, jos `a` on `NULL`.
   Esimerkiksi `IFNULL(5,0)` on `5` ja `IFNULL(NULL,0)` on `0`.
2. Funktio `COALESCE(...)` antaa listan ensimmäisen arvon,
   joka ei ole `NULL`, tai arvon `NULL`, jos jokainen arvo on `NULL`.
   Funktio `IFNULL` on funktion `COALESCE` erikoistapaus,
   kun parametrien määrä on kaksi.
   Esimerkiksi `COALESCE(5,0)` on `5` ja `COALESCE(NULL,0)` on `0`.
3. Voimme myös käyttää `CASE`-rakennetta:
   `CASE WHEN a IS NULL THEN b ELSE a END`
   tarkoittaa samaa kuin `IFNULL(a,b)`.
   Tämä ei ole kuitenkaan kovin tyylikäs tapa.

<text-box variant='hint' name='Miljardin dollarin virhe?'>

SQL:n lisäksi `NULL`-arvoja on muissakin kielissä, ja jotkut pitävät
niiden ottamista käyttöön vakavana virheenä, koska ne voivat aiheuttaa bugeja.

Tietojenkäsittelytieteen tutkija Tony Hoare
lisäsi `NULL`-arvot Algol-kieleen vuonna 1965
ja katuu nykyään tekoaan.
Voit katsoa Hoaren esityksen vuodelta 2009 tästä:

* [Null References: The Billion Dollar Mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/)

Hoare tunnetaan myös pikajärjestämisen (quick sort) kehittäjä.

</text-box>

## 29.1.2020

Mitä tarkkaan ottaen tapahtuu, kun `LEFT JOIN` yhdistää kolme tai useampia tauluja?
Tarkastellaan esimerkkinä seuraavaa tilannetta:

<img src="/taulut.png">

Seuraava kysely ilmoittaa jokaiselle asiakkaalle ostoskorin tuotteiden määrän:

```sql
SELECT A.nimi, COUNT(T.id)
FROM Asiakkaat A LEFT JOIN Ostokset O ON A.id = O.asiakas_id
                 LEFT JOIN Tuotteet T ON T.id = O.tuote_id
GROUP BY A.id;
```

```x
nimi        COUNT(T.id)
----------  -----------
Uolevi      2
Maija       3
Aapeli      0
```

Mitä tässä siis tapahtuu?
Tällaisen kyselyn voi tulkita aina kahden periaatteen avulla:

1. `LEFT JOIN` valitsee kaikki rivien yhdistelmät, jotka toteuttavat annetun ehdon,
   ja lisäksi kerran jokaisen vasemman taulun rivin, jota ei muuten valittu kertaakaan.
2. Jos tauluja on yli kaksi, yhdistämiset tapahtuvat vasemmalta oikealle.

Äskeisen kyselyn tulkinnassa voimme lähteä liikkeelle tilanteesta,
jossa yhdistämme ensin kaksi ensimmäistä taulua.
Saamme paremman kuvan asiasta, kun haemme kaikki sarakkeet ja poistamme ryhmittelyn:

```sql
SELECT * FROM Asiakkaat A LEFT JOIN Ostokset O ON A.id = O.asiakas_id;
```

```x
id          nimi        asiakas_id  tuote_id  
----------  ----------  ----------  ----------
1           Uolevi      1           2         
1           Uolevi      1           5         
2           Maija       2           1         
2           Maija       2           4         
2           Maija       2           5         
3           Aapeli                     
```

Koska Aapelin ostoskorissa ei ole mitään tuotteita,
tulostauluun ilmestyy ylimääräinen rivi Aapelille,
jossa taulun `Ostokset` sarakkeiden arvoina on `NULL`.

Lisätään sitten peliin kolmas taulu:

```sql
SELECT * FROM Asiakkaat A LEFT JOIN Ostokset O ON A.id = O.asiakas_id
                          LEFT JOIN Tuotteet T ON T.id = O.tuote_id;
```

```x
id          nimi        asiakas_id  tuote_id    id          nimi        hinta     
----------  ----------  ----------  ----------  ----------  ----------  ----------
1           Uolevi      1           2           2           porkkana    5         
1           Uolevi      1           5           5           selleri     4         
2           Maija       2           1           1           retiisi     7         
2           Maija       2           4           4           lanttu      8         
2           Maija       2           5           5           selleri     4         
3           Aapeli                                                                
```

Tässä tapauksessa vasen taulu on `Asiakkaat A LEFT JOIN Ostokset O`
ja oikea taulu on `Tuotteet T`.
Koska vasemman taulun Aapelin rivi ei täsmää mihinkään oikean taulun riviin,
tästä tulee taas ylimääräinen rivi, jossa sarakkeiden arvoina on `NULL`.

Tämä on tavallinen idea kolmen tai useamman taulun `LEFT JOIN` -kyselyissä:
mahdolliset `NULL`-rivit seuraavat mukana jokaisen uuden taulun yhdistämisessä.
Tämän vuoksi jos ensimmäinen yhdistys on `LEFT JOIN`,
niin myös muidenkin pitää olla.

## 25.1.2020

Harva asia on puhuttanut kurssilla yhtä paljon kuin SQL Trainerin 
tehtävät 93 ja 94, joissa tulee vertailla käyttäjien kaverilistoja.
Kuinka moinen onnistuu SQL:llä?

Hyvä askel kohti ratkaisua on koettaa ensin laskea jokaiselle
käyttäjäparille, montako yhteistä kaveria heillä on.
Koska jokainen kaverisuhde on oma rivinsä taulussa `Kaverit`,
meidän täytyy pohjimmiltaan vertailla kaverisuhteita toisiinsa
yksi kerrallaan.

Seuraava kysely käy läpi päätasolla kaikki käyttäjäparit ja
hakee heidän nimensä.
Kolmas tulostaulun sarake tulee alikyselystä,
joka käy läpi käyttäjien kaverilistat ja vertailee
niitä toisiinsa.
Tuloksena saamme jokaisesta parista tietoon yhteisten
kaverien määrät.

```sql
SELECT A.nimi, B.nimi, (SELECT SUM(C.kaveri_id=D.kaveri_id) 
                        FROM Kaverit C, Kaverit D
                        WHERE C.kayttaja_id=A.id AND D.kayttaja_id=B.id) tulos
FROM Kayttajat A, Kayttajat B;
```

Tehtävän 93 tilanteessa kyselyn tulos on seuraava:

```x
nimi        nimi        tulos     
----------  ----------  ----------
Uolevi      Uolevi      2         
Uolevi      Maija       0         
Uolevi      Liisa       1         
Uolevi      Kaaleppi    2         
Maija       Uolevi      0         
Maija       Maija       1         
Maija       Liisa       1         
Maija       Kaaleppi    0         
Liisa       Uolevi      1         
Liisa       Maija       1         
Liisa       Liisa       2         
Liisa       Kaaleppi    1         
Kaaleppi    Uolevi      2         
Kaaleppi    Maija       0         
Kaaleppi    Liisa       1         
Kaaleppi    Kaaleppi    2
```

Tulostaulusta selviää esimerkiksi,
että Uolevilla ja Kaalepilla on kaksi yhteistä kaveria
sekä että Maijalla ja Liisalla on yksi yhteinen kaveri.

Ehkä oudoin kohta kyselyssä on summa `SUM(C.kaveri_id=D.kaveri_id)`.
Tässä käytetään hyväksi SQL:n ehtojen ominaisuutta:
jos ehto on tosi, niin sen tulos on luku 1.
Alikysely vertaa toisiinsa kaverilistoja ja ehdon tulos on 1
aina, kun löytyy yhteinen kaveri.
Niinpä näiden tulosten summa kertoo, montako yhteistä kaveria on yhteensä.

Tällä idealla on mahdollista ratkaista tehtävät 93 ja 94.
Niissä pitää vielä ryhmitellä tietoa sopivasti sekä verrata yhteisten
kaverien määrää kaikkien kavereiden määrään.

## 23.1.2020

Tarkastellaan tilannetta, jossa taulussa `Elokuvat` on elokuvia
ja haluamme selvittää, mikä on suurin määrä elokuvia,
jotka ovat ilmestyneet samana vuonna.
Esimerkiksi taulussa

```x
id          nimi        vuosi     
----------  ----------  ----------
1           Lumikki     1937      
2           Fantasia    1940      
3           Pinocchio   1940      
4           Dumbo       1941      
5           Bambi       1942    
```

haluttu tulos on 2, koska vuonna 1940 ilmestyi kaksi elokuvaa.

Tämä on vähän hankalalta vaikuttava tilanne,
koska meidän tulisi tehdä sisäkkäin kyselyt
`COUNT`, joka laskee ilmestymismääriä,
ja sitten `MAX`, joka hakee suurimman arvon.
SQL ei salli kuitenkaan kyselyä `SELECT MAX(COUNT(vuosi))` tai vastaavaa.

Voimme ottaa kuitenkin lähtökohdaksi kyselyn,
joka ryhmittelee elokuvat vuoden mukaan ja hakee jokaisesta ryhmästä
elokuvien määrän:

```sql
SELECT COUNT(*) FROM Elokuvat GROUP BY vuosi;
```

```x
COUNT(*)  
----------
1         
2         
1         
1       
```

Näistä luvuista pitää vielä saada haettua suurin, mikä onnistuu alikyselyn avulla.
Tässä tapauksessa kätevä tapa on käyttää alikyselyä niin,
että sen tulos on pääkyselyn `FROM`-osassa,
jolloin alikysely luo taulun, josta pääkysely hakee tietoa:

```sql
SELECT MAX(c) FROM (SELECT COUNT(*) c FROM Elokuvat GROUP BY vuosi);
```

```x
MAX(c)    
----------
2      
```

Entä voisiko tehtävän ratkaista ilman alikyselyä?
Kyllä, koska voimme järjestää tulokset
suurimmasta pienimpään ja valita tulostaulun ensimmäisen rivin:

```sql
SELECT COUNT(*) c FROM Elokuvat GROUP BY vuosi ORDER BY c DESC LIMIT 1;
```

```x
c         
----------
2      
```

## 21.1.2020

SQL:ssä rivien järjestämisen `ORDER BY` -osassa voi toteuttaa myös
ilmoittamalla lukuna, _monennenko_ sarakkeen mukaan järjestetään.
Esimerkiksi seuraava kysely järjestää rivit toisen sarakkeen
eli nimen mukaan:

```sql
SELECT * FROM Tuotteet ORDER BY 2;
```

```x
id          nimi        hinta     
----------  ----------  ----------
4           lanttu      8         
3           nauris      4         
2           porkkana    5         
1           retiisi     7         
5           selleri     4
```

Tässä ei ole vielä mitään yllättävää, mutta seuraava kysely näyttää,
että SQL:ssä `1+1` ei aina ole `2`.
Tämä kysely _ei_ järjestä rivejä toisen sarakkeen mukaan:

```sql
SELECT * FROM Tuotteet ORDER BY 1+1;
```

```x
id          nimi        hinta     
----------  ----------  ----------
1           retiisi     7         
2           porkkana    5         
3           nauris      4         
4           lanttu      8         
5           selleri     4     
```

Tässä on kysymys siitä, että sarakkeen järjestysnumeron antaminen toimii
vain silloin, kun annetaan yksittäinen luku.
Jos kuitenkin annetaan jokin muu lauseke,
järjestäminen tapahtuu tämän lausekkeen arvon mukaan.

Lauseke `1+1` ei ole kovin mielekäs järjestämisessä,
koska sen arvo jokaiselle riville on sama eli jokainen rivi
on "yhtä suuri".
Tässä on järkevämpi esimerkki, jossa järjestetään lausekkeen
`LENGTH(nimi)` mukaan eli nimen pituuden mukaan:

```sql
SELECT * FROM Tuotteet ORDER BY LENGTH(nimi);
```

```
id          nimi        hinta     
----------  ----------  ----------
3           nauris      4         
4           lanttu      8         
1           retiisi     7         
5           selleri     4         
2           porkkana    5    
```

Toinen esimerkki on kurssimateriaalissa mainittu
`ORDER BY RANDOM()`, jossa jokaiselle riville
tulee satunnainen luku järjestyksen perustaksi.

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

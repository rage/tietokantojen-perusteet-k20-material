---
path: "/blogi"
title: "Kurssiblogi"
hidden: false
information_page: true
---

Kurssiblogissa ilmestyy silloin tällöin kurssimateriaalia täydentävää sisältöä,
jonka tavoitteena on antaa uusia näkökulmia kurssin aiheisiin.

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

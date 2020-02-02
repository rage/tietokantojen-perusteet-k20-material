---
path: "/harjoitustyo-ohje"
title: "Harjoitustyön ohje"
hidden: false
information_page: true
---

Moni on joskus tilannut paketin netistä ja tarkkaillut sen matkaa
kotiovelle seurantakoodin avulla.
Tässä harjoitustyössä teemme itse tietokantaa käyttävän sovelluksen,
joka voisi olla tällaisen systeemin taustalla.

## Yleiskuva

Järjestelmässä on paikkoja, asiakkaita, paketteja ja tapahtumia.

Paikka on jokin kohde paketin matkan varrella, jossa paketti voidaan skannata.
Jokaisella paikalla on eri nimi.

Asiakas on paketin tilaaja. Jokaisella asiakkaalla on eri nimi.

Paketilla on seurantakoodi, jolla siihen voidaan viitata.
Jokaisella paketilla on eri seurantakoodi.
Paketti liittyy tiettyyn asiakkaaseen.

Kun paketti skannataan, syntyy tapahtuma. Tapahtuma liittyy tiettyyn pakettiin
ja tiettyyn paikkaan. Lisäksi tapahtumaan kuuluu kuvaus ja lisäyshetki
(päivämäärä ja kellonaika).

## Harjoitustyön vaatimukset

Tietokannan tulee olla suunniteltu luvun 5.1 periaatteiden mukaisesti,
eli sen rakenne tulee olla järkevä eikä siinä saa olla toisteista tietoa.

Sovellus toteutetaan Java- tai Python-kielellä komentoriviohjelmana.
Sovelluksessa tulee olla valikko, jossa on seuraavat toiminnot:

1. Luo sovelluksen tarvitsemat taulut tyhjään tietokantaan.
2. Lisää uusi paikka tietokantaan, kun annetaan paikan nimi.
3. Lisää uusi asiakas tietokantaan, kun annetaan asiakkaan nimi.
4. Lisää uusi paketti tietokantaan, kun annetaan paketin seurantakoodi ja
   asiakkaan nimi. Asiakkaan tulee olla valmiiksi tietokannassa.
5. Lisää uusi tapahtuma tietokantaan, kun annetaan paketin seurantakoodi,
   tapahtuman paikka sekä kuvaus. Paketin ja paikan tulee olla valmiiksi tietokannassa.
6. Hae kaikki paketin tapahtumat seurantakoodin perusteella.
7. Hae kaikki asiakkaan paketit ja niihin liittyvien tapahtumien määrä.
8. Hae annetusta paikasta tapahtumien määrä tiettynä päivänä.
9. Suorita tietokannan tehokkuustesti (tästä lisää alempana).

Jos toiminto epäonnistuu, niin sovelluksen tulee antaa järkevä virheilmoitus.

Tietokantaan ei saa olla mahdollista ilmestyä kahta samannimistä
paikkaa tai asiakasta eikä kahta pakettia samalla seurantakoodilla.

## Esimerkki

Tässä on esimerkki siitä, miten sovellus voisi toimia käyttötilanteessa.
Oman sovelluksesi ei tarvitse toimia täsmälleen näin, mutta voit ottaa tästä mallia.

```x
Valitse toiminto (1-9): 1
Tietokanta luotu
Valitse toiminto (1-9): 2
Anna paikan nimi: Varasto
Paikka lisätty
Valitse toiminto (1-9): 2
Anna paikan nimi: Satama
Paikka lisätty
Valitse toiminto (1-9): 2
Anna paikan nimi: Kalmankuja 13
Paikka lisätty
Valitse toiminto (1-9): 3
Anna asiakkaan nimi: Kaaleppi
Asiakas lisätty
Valitse toiminto (1-9): 3
Anna asiakkaan nimi: Kaaleppi
VIRHE: Asiakas on jo olemassa
Valitse toiminto (1-9): 4
Anna paketin seurantakoodi: K000000781
Anna asiakkaan nimi: Kaaleppi
Paketti lisätty
Valitse toiminto (1-9): 5
Anna paketin seurantakoodi: K000000781
Anna tapahtuman paikka: Varasto
Anna tapahtuman kuvaus: paketti kuljetukseen
Tapahtuma lisätty
Valitse toiminto (1-9): 5
Anna paketin seurantakoodi: K000000781
Anna tapahtuman paikka: Satama
Anna tapahtuman kuvaus: paketti tullut maahan
Tapahtuma lisätty
Valitse toiminto (1-9): 5
Anna paketin seurantakoodi: K000000781
Anna tapahtuman paikka: Vankila
VIRHE: Paikkaa ei ole olemassa
Valitse toiminto (1-9): 5
Anna paketin seurantakoodi: K000000781
Anna tapahtuman paikka: Kalmankuja 13
Anna tapahtuman kuvaus: paketti toimitettu
Tapahtuma lisätty
Valitse toiminto (1-9): 6
Anna paketin seurantakoodi: K000000781
1.2.2020 12:48, Varasto, paketti matkaan
1.2.2020 12:49, Satama, paketti tullut maahan
1.2.2020 12:51, Kalmankuja 13, paketti toimitettu
Valitse toiminto (1-9): 4
Anna paketin seurantakoodi: K000000999
Anna asiakkaan nimi: Kaaleppi
Paketti lisätty
Valitse toiminto (1-9): 7
Anna asiakkaan nimi: Kaaleppi
K000000781, 3 tapahtumaa
K000000999, 0 tapahtumaa
Valitse toiminto (1-9): 8
Anna paikan nimi: Kalmankuja 13
Anna päivämäärä: 1.2.2020
Tapahtumien määrä: 1
```

## Tehokkuustesti

Sovelluksen toiminto 9 suorittaa tehokkuustestin,
jonka tavoitteena on selvittää, miten hyvin tietokanta toimii,
kun tiedon määrä on suuri.

Tehokkuustestaus toimii seuraavasti:

1. Tietokantaan lisätään tuhat paikkaa nimillä P1, P2, P3, jne.
2. Tietokantaan lisätään tuhat asiakasta nimillä A1, A2, A3, jne.
3. Tietokantaan lisätään tuhat pakettia, jokaiselle satunnaisesti valittu asiakas.
3. Tietokantaan lisätään miljoona tapahtumaa, jokaiselle satunnaisesti valittu paketti.
4. Suoritetaan miljoona kyselyä, joista jokaisessa haetaan satunnaisesti valitun
   asiakkaan pakettien määrä.
5. Suoritetaan miljoona kyselyä, joista jokaisessa haetaan satunnaisesti valitun
   paketin tapahtumien määrä.

Tulosta testin päätteeksi, paljonko komentoihin meni aikaa.
Älä tulosta mitään muuta testin aikana.

## Raportti

Harjoitustyö palautetaan raporttina, jossa on seuraavat osat
tässä järjestyksessä:

1. Harjoitustyön tekijän nimi, opiskelijanumero (jos tiedossa) ja mooc.fi-tunnus
2. Selostus, mitkä toiminnot harjoitustyöhön on toteutettu
3. Tietokantakaavio ja SQL-skeema
4. Tehokkuustestin tulokset kahdessa tapauksessa: ilman indeksejä
   ja sopivien indeksien lisäämisen jälkeen (näissä pitäisi olla selkeä ero)
5. Selostus, miten on varmistettu, että jokaisella paikalla ja asiakkaalla on
   eri nimi ja jokaisella paketilla on eri seurantakoodi
   (entä jos sovelluksella on useita samanaikaisia käyttäjiä?)
6. Toteutetun sovelluksen lähdekoodi

Harjoitustyö palautetaan yhtenä PDF-tiedostona Moodleen.
Tiedoston nimenä on sukunimi\_etunimi.pdf (esimerkiksi jos nimesi on Maija Virtanen,
tiedoston nimi on virtanen_maija.pdf).

Pääset Moodleen [tästä](https://moodle.helsinki.fi/course/view.php?id=34020)
ja kurssiavain on `2020tikape`.

## Arvostelu

Harjoitustyö arvostellaan asteikolla 1–5.

Arvosteluun vaikuttavia asioita ovat raportin selkeys, luettavuus ja sisältö,
tietokannan rakenne sekä sovelluksen toimivuus.

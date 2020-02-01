---
path: "/harjoitustyo-ohje"
title: "Harjoitustyön ohje"
hidden: false
information_page: true
---

Moni on joskus tilannut paketin netistä ja tarkkaillut sen matkaa
kotiovelle seurantakoodin avulla.
Tässä harjoitustyössä teemme itse hieman samantapaisen sovelluksen.

## Yleiskuva

Järjestelmässä on asiakkaita, paketteja, paikkoja ja tapahtumia.

Asiakas on paketin tilaaja, jolla on jokin nimi ja osoite.

Jokaisella paketilla on yksilöllinen seurantakoodi, jolla siihen voidaan viitata.
Jokainen paketti liittyy tiettyyn asiakkaaseen.

Paikka on jokin kohde paketin matkan varrella, jossa paketti voidaan skannata.
Jokaisella paikalla on jokin nimi.

Kun paketti skannataan, syntyy tapahtuma. Tapahtuma liittyy tiettyyn pakettiin
ja tiettyyn paikkaan. Lisäksi tapahtumaan kuuluu asiakkaalle näkyvä kuvaus
sekä päivämäärä ja kellonaika.

## Sovelluksen vaatimukset

Sovellus toteutetaan Java- tai Python-kielellä komentoriviohjelmana.

Sovelluksessa tulee olla valikko, jossa on seuraavat toiminnot:

1. Luo sovelluksen tarvitsemat taulut tyhjään tietokantaan.
2. Lisää uusi paikka tietokantaan, kun annetaan paikan nimi.
3. Lisää uusi asiakas tietokantaan, kun annetaan asiakkaan nimi ja osoite.
   Osoitteen tulee olla valmiiksi tietokannassa.
4. Lisää uusi paketti tietokantaan, kun annetaan paketin seurantakoodi ja
   asiakkaan nimi. Asiakkaan tulee olla valmiiksi tietokannassa.
   Samalla lisätään uusi tapahtuma, johon annetaan vielä lähtöpaikka.
5. Lisää uusi tapahtuma tietokantaan, kun annetaan paketin seurantakoodi,
   tapahtuman paikka sekä kuvaus. Paketin ja paikan tulee olla valmiiksi tietokannassa.
6. Hae kaikki paketin tapahtumat seurantakoodin perusteella.
7. Hae kaikki asiakkaan paketit ja niihin liittyvien tapahtumien määrä.
8. Hae annetusta paikasta tapahtumien määrä tiettynä päivänä.
9. Suorita tietokannan tehokkuustestaus (tästä lisää alempana).

## Esimerkki

Tässä on esimerkki siitä, miten sovellus voisi toimia käyttötilanteessa.
Oman sovelluksesi ei tarvitse toimia täsmälleen näin, mutta voit ottaa tästä mallia.

```x
Valitse toiminto (1-9): 1
Tietokanta luotu
Valitse toiminto (1-9): 3
Anna paikan nimi: Varasto
Paikka lisätty
Valitse toiminto (1-9): 3
Anna paikan nimi: Satama
Paikka lisätty
Valitse toiminto (1-9): 2
Anna asiakkaan nimi: Kaaleppi
Anna asiakkaan osoite: Kalmankuja 13
VIRHE: Paikkaa ei löydy
Valitse toiminto (1-9): 3
Anna paikan nimi: Kalmankuja 13
Paikka lisätty
Valitse toiminto (1-9): 2
Anna asiakkaan nimi: Kaaleppi
Anna asiakkaan osoite: Kalmankuja 13
Asiakas lisätty
Valitse toiminto (1-9): 4
Anna paketin seurantakoodi: K000000781
Anna asiakkaan nimi: Kaaleppi
Anna paketin lähtöpaikka: Varasto
Paketti lisätty
Valitse toiminto (1-9): 5
Anna paketin seurantakoodi: K000000781
Anna tapahtuman paikka: Satama
Anna tapahtuman kuvaus: paketti tullut maahan
Tapahtuma lisätty
Valitse toiminto (1-9): 5
Anna paketin seurantakoodi: K000000781
Anna tapahtuman paikka: Kalmankuja 13
Anna tapahtuman kuvaus: paketti toimitettu
Tapahtuma lisätty
Valitse toiminto (1-9): 6
Anna paketin seurantakoodi: K000000781
1.2.2020 12:48, Varasto, paketti matkaan
3.2.2020 04:22, Satama, paketti tullut maahan
3.2.2020 18:55, Kalmankuja 13, paketti toimitettu
Valitse toiminto (1-9): 7
Anna asiakkaan nimi: Kaaleppi
K000000781, 3 tapahtumaa
Valitse toiminto (1-9): 8
Anna paikan nimi: Kalmankuja 13
Anna päivämäärä: 3.2.2020
Tapahtumien määrä: 1
```

## Tehokkuustestaus

Sovelluksen toiminto 9 suorittaa tehokkuustestauksen,
jonka tavoitteena on selvittää, miten nopeasti tietokanta toimii,
kun tiedon määrä on suuri.

Testauksessa tietokantaan lisätään miljoona pakettia ja jokaiselle tuhat tapahtumaa.
Voit valita pakettien tiedot satunnaisesti.
Tämän jälkeen haetaan miljoona kertaa satunnaisesti valitun
paketin tapahtumien määrä.

Testauksen aikana ei tulosteta muuten mitään,
mutta lopuksi tulostetaan, kauanko testaukseen meni aikaa.

## Raportti

Harjoitustyöstä palautetaan raportti, jossa on seuraavat osat
tässä järjestyksessä:

1. Harjoitustyön tekijän nimi, opiskelijanumero (jos tiedossa) ja mooc.fi-tunnus
2. Selostus, mitkä toiminnot harjoitustyöhön on toteutettu
3. Tietokantakaavio ja SQL-skeema
4. Tehokkuustestauksen tulokset kahdessa tapauksessa: ilman indeksejä
   ja sopivien indeksien lisäämisen jälkeen (näissä pitäisi olla selkeä ero)
5. Arvio sovelluksen toimivuudesta, jos sitä käyttää monta käyttäjää samaan aikaan
6. Toteutetun sovelluksen lähdekoodi

Harjoitustyö palautetaan yhtenä PDF-tiedostona Moodleen.
Tiedoston nimenä on sukunimi\_etunimi.pdf (esimerkiksi jos nimesi on Maija Virtanen,
tiedoston nimi on virtanen_maija.pdf).

Pääset Moodleen [tästä](lol) ja kurssiavain on X.

## Arvostelu

Harjoitustyö arvostellaan asteikolla 1–5.

Harjoitustyö saa arvosanan 5, jos raportti on hyvin laadittu ja sen perusteella
sovelluksessa on kaikki vaaditut toiminnot ja sovellus on toimiva.
Puutteet raportissa ja sovelluksessa laskevat arvosanaa tapauskohtaisesti.

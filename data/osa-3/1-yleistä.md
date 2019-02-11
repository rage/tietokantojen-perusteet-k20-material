---
path: '/osa-3/1-yleistä'
title: 'Yleistä sovelluskerroksesta'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut sovelluskerroksen toimintoihin.
- Osaat kuvata, miten http protokollalla viestien vaihto tapahtuu. Osaat kertoa miksi https protokolla on http protokollaa parempi tietyissä tilanteissa.

</text-box>


Nyt lähdetään tutustutaan tietoliikenteen toiminnallisuuteen protokollapinon eri kerroksilla. Tässä osiossa vuorossa on pinon ylin kerros -sovelluskerros. Se on lähimpänä käyttäjää ja käyttäjän sovelluksia. Osa toiminnallisuuksista onkin jopa toteutettuna sovelluksen sisällä tai sovelluksen käyttämissä aliohjelmakirjastoissa.


## Yleistä sovelluskerroksesta

Tietoverkon näkökulmasta sovelluskerroksella mietitään asioita vain kahden tai useamman keskenään kommunikoivan elementin kannalta. Kaikkien muiden protokollapinon kerrosten tehtävänä on sitten vain huolehtia viestin siirtämisestä lähettäjältä vastaanottajalle. Tällä kerroksella täytyy oikeasti miettiä mitä asiaa lähettäjällä on ja miten se pitäisi 'sanoa', jotta vastaanottaja voi sen ymmärtää.

Verkkosovelluksessa on siis useita eri paikoissa suoritettavia osia, jotka kommunikoivat keskenään tietoverkon välityksellä. Kukin sovelluksen palanen sekä lähettää että vastaanottaa viestejä muilta paloilta. Verkkosovellus voidaan toteuttaa monella eri tekniikalla ja hyvin erilaisilla abstraktiotasoilla. Perinteisessä internetin protokollapinossa ne kaikki kuuluvat sovelluskerrokselle, vaikka todellisuudessa osa näistä menetelmistä käyttää tiettyjä muita sovelluskerroksen palveluja oman toimintansa pohjana. Tällaisia ovat esimerkiksi web-sovellukset, jotka käyttävät alunperin www-sivujen siirtoon kehitettyä http-protokollaa oman kommunikointina pohjana.

Uudempia sovelluskerroksella tapahtuvia asioita ovat esimerkiksi esineiden internetiin (Internet of Things, IoT) liittyvät erilaisia ideat ja toteutukset, kuten ajatus siitä, että autot voisivat kommunikoida keskenään ja välittää esimerkiksi ruuhka- ja kelitietoja automaattisesti toisilleen. Kaikkien näiden kommunikoinnit kuitenkin pohjautuvat näihin samoihin periaatteisiin, joita käymme tämän kurssin puitteissa läpi vähän perinteisemmillä esimerkeillä.

Verkkosovelluksen toteuttajalla, tekeepä hän web-sovellusta tai autojen välistä viestintää, on vastuulla suuri joukko erilaisia osien väliseen kommunikointiin liittyviä päätöksiä. Täytyy päättää mm. viestien rakenne ja sisältö, viestien välitysjärjestys, millaista välityspalvelua kuljetuskerrokselta halutaan, jne.  Viestien välitykseen liitttyy mm. siirtoon kuluva aika, siirrettävän määrä tarvitsema kapasiteetti, siirron luotettavuus ja mahdollisesti tarvittavat salaus. Lisäksi on mietittävä saako viestejä kadota ja jos saa, niin miten sovellus silloin reagoi. Entä sallitaanko suuret viipeet siirrossa, ja mikä on tarvittava siirtokapasiteetti tai verkon läpäisykyky (throughput).

Sovelluksille, joiden toiminta edellyttää, että kaikki viestit pääsevät perille, kuljetuskerros tarjoaa luotettavaa tiedonsiirtopalvelua. Se takaa, että viestit menevät perille samassa muodossa kuin ne on lähetetty, että ne eivät monistu matkalla ja että ne toimitetaan perille ennemmin tai myöhemmin. Jos esimerkiksi kaivinkone on katkaissut kaapelin tai palvelin kone on päivityksen vuoksi poissa käytöstä, niin viestiä ei voida toimittaa samantien, vaan viestin toimitusviive voi olla hyvinkin pitkä. Sovellus voi toki asettaa aikarajan viestin välitykselle, mutta silloni voi olla, että viestiä ei saada toimitettua perille, kun vastaanottajaa ei tavoiteta ajoissa. 






<quiznator id="5c385de6ddb6b814af31d7d0"></quiznator>


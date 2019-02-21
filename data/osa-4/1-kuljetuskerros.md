---
path: '/osa-4/1-kuljetuskerros'
title: 'Kuljetuskerros'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata kuljetuskerroksen tehtävät ja sen keskeiset protokollat.
- Osaat kertoa TCP:n ja UDP:n toimintaperiaatteet, samankaltaisuudet ja erot.

</text-box>

<quiznator id="5c498c7c017ffc13eddc84f1"></quiznator>



## Kuljetuskerros

Kuljetuskerros tarjoaa kuljetuspalvelun sovelluskerrokselle siten, että sovellusten tai oikeammin niitä toteuttavien prosessien ei tarvitse huolehtia viestien välityksestä vaan ne voivat vaan antaa viestin toimitettavaksi kuljetuskerrokselle. Viestin pitää toki antaa jollekin tietylle kuljetuskerroksen protokollalle, joka sitten huolehtii viestin vastaanottajalle.  Samalla koneella voi olla toiminnassa useita prosesseja. (Katso Tietokoneen toiminta -kurssin materiaalia prosesseihin ja niiden toimintaan liittyen.) Prosessit käyttävät pistokkeita (engl. socket), jotka liitetään johonkin tiettyyn tietoliikenteen porttiin. Wkipediassa on ihan lyhyt termistösivu tietoliikenteen pistokkeisiin liittyen https://fi.wikipedia.org/wiki/Pistoke_(tietotekniikka). Pistoke termiähän käytetään myös sähköverkoissa. 

Tietoliikenteen porteilla (https://fi.wikipedia.org/wiki/Portti_(tietoliikenne)) on porttinumerot, joiden avulla ne erotetaan toisistaan. Osa porttinumeroista on yhdessä sovittu tiettyjen sovellusten käyttöön ja osa on vapaasti käytettävissä. Porttinumeron avulla kuljetuskerros osaa tunnistaa sovelluskerroksen viestin vastaanottajan. Se on tavallaan paikallinen postiluukku, johon saapuvat viestit laitetaan. Lähettäjän täytyy siis tietää vastaanottavan koneen sovelluksen käyttämä porttinumero. Tämä on mahdotonta, jos meillä ei olisi etukäteen tietoa siitä mihin asiakkaan ensimmäinen viesti pitää toimittaa. Siksi yleisimmille sovelluksille on sovittu tietyt porttinumerot, joita ne käyttävät. Tällöin asiakas voi lähettää viestin 'arvaamalla', että palvelimella on käytössä nimenomaan tämä yhteisesti sovittu porttinumero. 

## Tähän quizz porttinumeroista. Niitä on lueteltu tuossa wikipedian artikkelissa varsin kattavasti

##  TCP

TCP:n avulla sovelluskerroksen prosessit voivat muodostaa loogisen yhteyden lähettäjän ja vastaanottajan välille. Yhteys on kaksisuuntainen, joten molemmat voivat lähettää ja vastaanottaa viestejä samaa yhteyttä pitkin. Yhteys on looginen, koska meillä ei ole yhtä tiettyä kiinteää putkimaista reittiä, jota pitkin kaikki viestit aina kulkisivat lähettäjän ja vastaanottajan välillä. 
Sovelluksen ja TCP:n välinen yhteys on sovittu käsiteltäväksi tavuvirtana, jolloin TCP:n ei tarvitse tietää sovelluksen sanomien rakennetta tai niiden kokoa etukäteen, vaan vaikki sovelluksen viestit tulevat TCP:lle pistokkeen kautta tavujonona, ihan samaan tapaan kuin tiedostoissa on vain tavuja.

TCP:n keskeinen tehtävä on huolehtia sovellukselta tulevien viestin jaottelusta sopivan kokoisiin datagrammeihin, jotka sitten annetaan verkkokerrokselle toimitettavasti vastaanottajan koneelle.


## UDP



## SSL



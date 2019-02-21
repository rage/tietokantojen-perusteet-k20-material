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

Tietoliikenteen porteilla (https://fi.wikipedia.org/wiki/Portti_(tietoliikenne)) on porttinumerot, joiden avulla ne erotetaan toisistaan. Osa porttinumeroista on yhdessä sovittu tiettyjen sovellusten käyttöön ja osa on vapaasti käytettävissä. Porttinumeron avulla kuljetuskerros osaa tunnistaa sovelluskerroksen viestin vastaanottajan. Se on tavallaan paikallinen postiluukku, johon saapuvat viestit laitetaan. Lähettäjän täytyy siis tietää vastaanottavan koneen sovelluksen käyttämä porttinumero. Jotta se olisi etukäteen mahdollista, niin näitä sopimuksia tiettyjen porttinumeroiden osalta on tehty. 

##  TCP



## UDP



## SSL



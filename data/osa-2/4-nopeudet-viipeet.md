---
path: '/osa-2/4-nopeudet-viipeet'
title: 'Nopeudet ja viipeet'
---


## Liikennöintinopeudet, viestien kulkuajat ja viipeet


Tietoliikenteessä viestin siirtoon menee aikaa. Tämä aika riippuu toisaalta verkon nopeudesta (bitteinä sekunnissa), viestin pituudesta (bitteinä) ja mahdollisista viivästyksistä matkan varrella.

Yhdessä linkissä viestin siirtoaika on helppo arvioida, kun tiedämme linkin liikennöintinopeuden (bittienä sekunnissa) ja viestin pituuden (sekunneiss). Tästä on helppo jakolaskulla (viestin pituus / liikennöintinopeus) saada arvio kyseisen viestin siirron kestolle.

Näissä laskutoimituksissa on tärkeä hahmottaa lukujen suuruusluokkia ilmaiset SI-järjestelmän kerrannaisyksklöt https://fi.wikipedia.org/wiki/Kansainv%C3%A4linen_yksikk%C3%B6j%C3%A4rjestelm%C3%A4#Kerrannaisyksik%C3%B6t nano, mikro, kilo, mega, giga, tera. 

Nämä laskutoimitukset ovat aina arvioita, koska viestit eivät kulje verkossa yksin.



Viestin kulkua hidastavat myös muut kuljetettavat viestit. Jos kaksi viestiä pitää siirtää samaa yhteyttä pitkin, niin ne eivät voi mennä yhtäaikaa vaan ne täytyy lähettää peräkkäin. Tällöin niiden yhteinen kokonaissiirtoaika on kummankin viestin siirtoaika yhteensä.

Näillä yksinkertaisilla laskutoimituksilla usein pärjää kotiverkossa, koska se usein on yhtä ja samaa aliverkkoa, jolloin viestin voi siirtää suoraan lähettäjältä vastaanottajalle.

Koska viestit kulkevat paketteina, joissa on mukana eri kerrosten otsakkeet, niin todellinen siirrettävä bittimäärä on suurempi kuin todellinen lähetettävä data. Jos viesteissä on paljon dataa, niin otsakkeiden aiheuttama lisäys ei ole merkityksellinen. Toisaalta, jos viestit ovat erittäin lyhyitä, niin suurin osa siirrettävästä datasta onkin näitä otsaketietoja ja siirto kestää paljon tuota yksinkertaista laskutoimitusta kauemmin.


## Viipeet

Pakettikytkentäisessä verkossa, kuten internet, viestin kulku lähettäjältä vastaanottajalle tapahtuu linkki  kerrallaan. Jokaisella linkillä on oma liikennöintinopeuksensa. Hitain näistä määrää millä nopeudella viesti voi korkeintaan kulkea. Kotiverkkojen kohdalla hitain linkki on tyypillisesti se, joka yhdistää kotiverkon ja palveluntarjoajan verkon. Siksi kotiverkkojen liikennöintinopeus ajatellaan yleensä tämän linkin nopeudeksi. Kotiverkon sisäinen liikenne voi kuitenkin tapahtua nopeammin.

Matkan varrella olevat reittimet aiheuttavat tuon edellä kuvatun siirtoajan (tai oikeammin siirtoviiveen) lisäksi vielä vähän lisää viivettä. Viestin käsittelyyn menee hiukan aikaa (prosessointiviive). Lisäksi viesti voi joutua odottamaan linkin vapautumista hetkisen ennenkuin se voidaan lähettää (jonotusviive). Viimeinen viive on etenemisviive, joka ottaa huomioon sen miten kauas viesti on menossa. Kaikki nämä kolme viivettä ovat yleensä niin pieniä, että ne voidaan pikaisissa laskelmissa jättää huomiotta ja keskittyä vain tuohon siirtoviiveeseen.

Ruuhkaisessa verkossa tosin jonotusviive voi olla merkittävä, mutta jätetään nämä ruuhkatilanteisiin liittyvät laskelmat tältä kurssilta pois. Tästä jonotuksesta aiheutuu suuri osa verkossa tapahtuvista pakettien katoamisista.


Tehdään pari hyvin yksinkertaista laskutoimitusta.

-- siirtoaika dvd
<quiznator id="5c7d121314524713f95a6d1f"></quiznator>

-- siirtoaika digikuva
<quiznator id=" 5c7d1624ddb6b814af327841"></quiznator>



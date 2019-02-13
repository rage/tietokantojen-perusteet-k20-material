---
path: "/osa-1/3-viestin-välitys"
title: "Viestin välitys"
---


<div>
<lead>Kommunikoinnissa ei vielä riitä, että tiedetään miten keskustella (=protokolla) tai kenen kanssa (=osoite) viestitään. Kommunikoivien osapuolten välissä olevan tietoverkon pitää vielä saada sanoma kuljetettua lähettäjältä vastaanottajalle.</lead>
</div>

## Sanomanvälitys protokollapinon kerrosten välillä

Käydään nyt ensimmäisen kerran tarinana läpi viestin kulkeminen lähettäjältä vastaanottajalle. Tähän tarinaan palataan kurssin aikana useaan kertaan ja lisätään mukaan paljon yksityiskohtia.

Viestin kuljettaminen lähettäjältä vastaanottajalle on suhteellisen yksinkertaista, jos lähettäjän tietokone ja vastaanottajan tietokone on samassa osassa tietoverkkona. Tällöin lähettäjän sovellus (esim. www-selain) vain muodostaa sovellustason viestin, jota usein kutsutaan sanomaksi. Sovelluskerroksella toimiva sovellus pyytää kuljetuskerroksella toimivaa palvelua huolehtimaan tämän sanoman vastaanottajalle, joka on tarkemmin ottaen vastaanottavan koneen sovelluskerroksella toimiva sovellus, esim. www-palvelinohjelma.

Kuljetuskerros puolestaan jakaa sovelluskerrokselta saamansa sanoman yhteen tai useampaan segmenttiin. Pieni sanoma mahtuu yhteen segmenttiin, mutta isompi sanoma joudutaan jakamaan useampaan segmenttiin. Tämä on täysin kuljetuskerroksen omaa toimintaa, eikä se näy sovelluskerrokselle.

Kuljetuskerros antaa segmentit yksi kerrallaan verkkokerrokselle välitettäväksi vastaanottajalle. Verkkokerroksella segmentit sijoitetaan IP-paketin sisään.

Verkkokerros puolestaan antaa IP-paketin linkkikerrokselle, joka sijoittaa sen oman kehyksensä sisään ja käyttää fyysistä kerrosta kehyksen siirtämiseen langallisen kaapelin toisessa päässä olevalle koneelle tai langattomassa verkossa kuuloyhteyden päässä olevalle vastaanottajalle.

Nyt sitten kehys, jonka sisällä on IP-paketti, jonka sisällä on segmentti, jonka sisällä on sanoma (tai osa siitä), on vihdoin vastaanottajalla ja protokollapinoa lähdetään kulkemaan alhaalta ylöspäin.

Linkkikerros on siis saanut kehyksen fyysiseltä kerrokselta. Se poimii IP-paketin kehyksen sisältä ja antaa sen ylöspäin verkkokerrokselle. Verkkokerros poimii IP-paketin sisältä segmentin ja antaa sen kuljetuskerrokselle. Jos segmentti sisälsi koko sovelluskerroksen sanoman, niin kuljetuskerros voi antaa sen sovelluskerrokselle. Jos kuljetuskerros oli joutunut pilkkomaan sovelluskerroksen sanoman useampaan segmenttiin, niin se pitää palaset tallessa. Kun sanoma on saapunut kokonaisuudessaan perille, niin kuljetuskerros kokoaa sen ja antaa sanoman sovelluskerrokselle.

Tämä tarina tapahtuu aina lähettäjällä ja vastaanottajalla, kun sanoma lähetetään. Lähettäjän sovellus päättää viestin lähettämisestä. Vastaanottajan protokollapino ei voi valita, vaan sen täytyy vastaanottaa viesti silloin kun se on tietoverkosta tulossa. Sen sijaan usein vastaanottava sovellus voi vaikuttaa siihen miten ja milloin sanoma siirtyy kuljetuskerrokselta vastaanottavalle sovellukselle sovelluskerroksella. Tätä emme käsittele juurikaan tällä kurssilla, vaan erilaiset verkko-ohjelmoinnin kurssit käsittelevät sovelluksen rajapintoja tiedonsiirtopalveluun.

-- verkon kaavakuva
<div>
<illustrations motive="verkon-kaavakuva.pdf" frombottom="0" totalheight="70%"></illustrations>
</div>

### Sanoman välitys tietoliikenneverkossa, pakettikytkentä, reititys

Lähettäjä ja vastaanottaja ovat hyvin harvoin samassa aliverkossa, jossa ne voivat kommunikoida suoraan keskenään. Tyypillisempää on, että ne ovat eri internet verkon aliverkoissa, jolloin ne tarvitsevat tietoverkon palveluja sanoman kuljettamiseen lähettäjältä koneelta vastaanottajan koneelle.

Kuten edellisestä tarinasta kävi jo ilmi, niin internet-verkossa tapahtuva sanomien kuljetus tapahtuu paketteina. Se onkin toteutustavaltaan pakettikytkentäinen (https://fi.wikipedia.org/wiki/Pakettikytkent%C3%A4).

Tällöin lähettävän tietokoneen verkko- ja linkkikerros siirtävät viestiä aina yksi yhteyspätkä kerrallaan. Kukin viesti (IP-paketti, kehys) voi kulkea omaa reittiään lähettäjältä vastaanottajalle.

Lähettäjän ja vastaanottajan välissä olevat reitittimet (https://fi.wikipedia.org/wiki/Reititin) huolehtivat viestin siirtämisestä yhdestä linkistä seuraavaan. Niiden täytyy tietää mihinpäin viesti pitää laittaa, jotta se aikanaan päätyy vastaanottajalle.

Ne  toimivat verkkokerroksella eli ne reitittävät IP-paketteja. Sitä varten niiten täytyy vastaanottaa linkkikerrokselle saapuva kehys ja siirtää sen sisältämä IP-paketti verkkokerrokselle reititystä varten. Tutustumme itse reititykseen myöhemmin. Nyt riittää tieto siitä, että reititin osaa tavalla tai toisella päätellä vastaanottajan IP-osoitteesta sen, mihin linkkiin IP-paketti pitää ohjata, jotta se olisi yhden askeleen lähempänä vastaanottajaa. Kun reititin on tämän päätöksen tehnyt, niin IP-paketti annetaan taas linkkikerrokselle toimitettavaksi tiettyyn suuntaan, eli tiettyyn linkkiin. Linkkikerros rakentaa IP-paketin ympärille uuden kehyksen, jonka mukana paketti laitetaan eteenpäin.

Käytännössä siis viesti kulkee lähettäjältä yhden tai useamman reitittimen kautta vastaanottajalle. Kun tietoverkkoa tarkastellaan verkkokerroksen näkökulmasta, niin lähettäjän ja vastaanottajan välissä on vain reitittimiä, jotka huolehtivat pakettien siirtymisestä yhdestä linkistä seuraavaan.

Kahden reitittimen välissä olevassa linkissä voi toki olla myös linkkikerroksella toimivia kytkimiä (https://fi.wikipedia.org/wiki/Kytkin_(tietoliikenne)), jotka siirtävät kehyksiä yhden aliverkon sisällä esim. fyysisestä kaapelista toiseen fyysiseen kaapeliin.

### Ongelmia

Koska viestit etenevät lähettäjältä vastaanottajalle pätkittäin reitittimeltä toiselle, on mahdollista, että joku reititin ei voikaan laittaa viestiä eteenpäin tai joku toinen reititin ei omien ongelmiensa vuoksi voi ottaa välitettävää viestiä vastaan. Tällöin viesti katoaa matkalla eikä se koskaa saavuta vastaanottajaa. Vastaavasti on myös mahdollista, että viestiä siirtäville reitittimille syntyy eri käsitys viestin etenemisestä ja lähettävä reititin laittaa viestin varmuuden vuoksi uudelleen eteenpäin. Tällöin viesti voi kahdentua, jolloin vastaanottajalle saapuukin kaksi kopiota samasta viestistä.

Toisaalta tällainen pakettien siirtely vaiheittain antaa mahdollisuuden myös pahantahtoiseen toimintaan. Verkossa on helppo kerätä kaikki tietyn pisteen kautta kulkevat viestit ja tutkia niitä. Julkisuudessa oli viitisen vuotta sitten paljonkin keskustelua siitä kuinka Yhdysvalloissa NSA kuuntelee viestejä tai kuinka Suomessa poliisin on mahdollisuus saada oikeus viestiliikenteen seurantaan.

Toisaalta internetin perusmalli, jossa vastaanottaja ei voi päättää mitä viestejä sille saapuu, sallii myös erilaisia hyökkäyksiä internetissä. Tähän perustuvat esim. palvelun esto -hyökkäykset ja erilaiset matojen ja virusten leviämiset. Tällä kurssilla emme keskity näihin uhkakuviin ja niiden torjuntaan, vaan pelkästään siihen miten tietoverkko toimii viestien siirrossa. Erilaiset tietoturvaa käsittelevät kurssit käyvät läpi näitä uhkia ja niiltä suojautumista.

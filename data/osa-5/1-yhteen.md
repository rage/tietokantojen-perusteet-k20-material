---
path: '/osa-5/1-yhteen'
title: 'Kaikki yhteen'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat muodostaa kokonaisuuden kaikesta kurssilla käsitellystä.
- Osaat kuvata tietoliikenteen toimintaa eri tarkkuuksilla.
- Tiedät miten viestien välitys internetissä tapahtuu.

</text-box>


## Kaikki yhteen

Olemme käyneet läpi tietoliikenteen erilaisia osa-alueita, joitakin tarkemmin ja joitakin vain ohimennen.

Kootaan vielä kaikki asiat yhdeksi isommaksi kokonaisuudeksi. Tässä ei siis pitäisi enää tulla varsinaisesti uutta asiaa, vaan katsotaan vaan kurssilla käsiteltyjen asioiden yhteistoimintaa.

![Kaavakuva missä viesti kulkee lähettäjältä vastaanottajalle useamman reitittimen kautta](../img/lahettaja-reititin-vastaanottaja.svg)

![Kaavakuva missä viesti kulkee lähettäjältä vastaanottajalle kahden reitittimen kautta. Lähettäjän IP on 192.168.0.24 ja MAC A3-24-67-EF-11-A6. Reititin 1 on yhdistetty käyttäjään ja sen käyttäjän puoleinen IP on 192.168.0.3 ja MAC E6-E9-00-11-22-33. Reititin 1:n toinen puoli on IP 242.242.242.42 ja MAC E6-E9-00-11-22-44. Reititin 1:n tämä puoli on yhdistetty Reititin 2:een. Reititin 2:n Reititin 1:n yhdistetty puoli on IP 24.2.242.242.11 ja MAC C4:11:E3:EE:11:11. Reititin 2:n toisella puolella on IP 111.112.113.10 ja MAC C4:11:E3:EE:11:00. Reititin 2 on tältä puolelta yhdistettynä tietokoneeseen jonka IP on 111.112.113.56 ja MAC AA:E1:86:11:3D:3E](../img/osa5-kuva.svg)

Lähdetään liikkeelle siitä, että käyttäjä kirjoittaa kotonaan www-selaimeen tietyn sivun URL-osoitteen (käytetään erimerkissä osoitetta http://www.helsinki.fi/opiskelijaksi

<!--  URL-osoite -->

<quiz id="44a72ec8-66d2-4116-83a7-40b5ecd154fa"></quiz>

Kuten muistamme, niin palvelimen nimi täytyy muuttaa IP-osoitteeksi, jotta pyyntö voidaan laittaa eteenpäin verkossa

## Quizz:  Millä järjestelmää tuo verkkonimen kuvaaminen IP-osoitteeksi tehdään: DHCP, DNS, ARP, FTP, oliko vielä muita lyhenteitä kurssin materiaalissa

<!--  URL-osoite -->

<quiz id="44a72ec8-66d2-4116-83a7-40b5ecd154fa"></quiz>


Nyt tiedetään jo palvelimen IP-osoite, joten sovelluskerroksella ei enää tehdä kovin paljoa.

## Quizz: Kumpaa kuljetuskerroksen protokolla HTTP käyttää? TCP vai UDP

Kuljetuskerroksen omissa otsaketiedoissa täytyy olla sovelluskerroksen palvelun/prosessin tunniste. Ajatellaan tätä siis kirjekuoreksi, jossa kuljetuskerroksen otsake on kirjekuoren päällä oleva osoite ja sovelluskerroksen viesti on kuoren sisällä oleva materiaali. (Sovelluskerros on jo voinut tehdä omasta viestistään erillisen kuoren ja antanut sen kuljetuskerrokselle. Uudemmissa verkkosovelluksissa tässä HTTP-protokollalta tulleessa viestissä voi olla jo useita sisäkkäisiä kuoria, mutta ne eivät näy kuljetuskerrokselle.)

## Quizz: Mitä tunnistetta kuljetuskerros käyttää sovelluskerroksen oikean prosessin tunnistamiseen: porttinumero, IP-numero, MAC-osoite?

Nyt meillä on siis kuljetuskerroksen viestissä kuljetuskerroksen otsake ja sen data, joka sisältää sovelluskerroksen otsakkeen ja datan.

Seuraavaksi kuljetuskerros antaa verkkokerrokselle tämän viestin (kirjekuoren) välitettäväksi eteenpäin. Samalla se kertoo  verkkokerrokselle, sen tarvitsemat tiedot vastaanottavasta palvelimesta.

## Quizz: Mitä tunnistetta verkkokerros käyttää omassa otsakkeessa oikean vastaanottajan löytämiseen: porttinumero, IP-numero, MAC-osoite?

Nyt puolestaan verkkokerros laittaa kuljetuskerrokselta saamansa viestin omaa kirjekuoreen ja sen päälle tämän verkkokerroksen käyttämän osoitteen ja antaa tämän kuoren edelleen linkkikerrokselle.

## Quizz: Mitä tunnistetta linkkikerros käyttää omassa otsakkeessa oikean vastaanottajan löytämiseen: porttinumero, IP-numero, MAC-osoite?

Ja linkkikerros lisää vielä yhden uuden kirjekuoren saamansa verkkokerroksen paketin ympärille. Tähän kuoreen kirjoitetaan päälle linkkikerroksen vastaanottajan osoite.

Todellisuudessa mitään kirjekuoria ei käytetä, vaan kukin kerroksen protokollalla on oma määritelty viestin rakenne, jonka alussa ovat kyseisen kerroksen otsaketiedot ja ylemmän kerroksen viesti otsakkeineen on tälle protokollalle vain välitettävää dataa.

Nyt vihdoin tuo välitettävä viesti on valmis poistumaan lähettäjän koneelta ja ensimmäiseksi se meneekin samassa linkissä olevalle laitteelle, jonka osoite on tässä uloimmassa linkkikerroksen otsakkeessa (eli linkkikerroksen kirjekuoressa).

Äskeisessä kuorituksessa jäi vielä miettimättä, että miten linkkikerros pystyy päättelemään tuo oikean MAC-osoitteen, kun verkokerrokselta tuli kirjekuori, jonka päällä oli vain IP-osoite. 

Viesti on menossa www-palvelimelle, joka ei ole www-selaimen kanssa samassa aliverkosssa. Esimerkiksi käyttäjä on kotona ja haluaa lukea tuon kyseisen www-sivun. Viesti pitää siis lähettää kotiverkosta ulos, mutta miten?

Tämä tapahtuu reitityksen avulla. Jokainen kone tietää oman aliverkkonsa peitteen ja vähintään oletusyhdyskäytävänsä IP-osoitteen.

## Quizz: Aliverkkopeitteestä ja osoitteista. Aliverkkopeite ei ole ollut aiemmin esillä, mutta tässä se on luontevasti mukana.
Eli aliverkkopeitteen selitys ja sitten joukko osoitteita, joista osa on samassa aliverkossa ja osa ei.

Verkkokerros antaakin todellisuudessa linkkikerrokselle kirjekuoren, jonka päällä on IP-osoite, mutta haluaa, että linkkikerros toimittaa sen ensin ihan eri IP-osoitteella varustetulle reitittimelle. Tätä IP-osoitetta ei kirjoiteta verkkokerroksen kirjekuoren vastaanottajaksi, vaan vastaanottaja on edelleen tuo www-palvelimen IP-osoite. Siksi verkkokerroksen pitää tähän välityspyyntöön liittää nimenomaan reitittimen linkkikerroksen MAC-osoite.

Jos viesti olisi ollut menossa saman aliverkon laitteelle, esim. verkkokirjoittimelle, niin silloin linkkikerrokselle olisi annettu kyseisen laitteen MAC-osoite eikä reititystä olisi tarvittu.

## Quizz: Millä protokollalla IP-osoitteen kuvaaminen MAC-osoitteeksi tehdään, jos lähettäjä ei sitä etukäteen tiedä: DHCP, DNS, ARP, FTP? 

Näiden vaiheiden jälkeen likkikerros on vihdoin siirtänyt viestin linkkikerroksen vastaanottajalle, joka on kotiverkon reititin.

Reitittimen linkkikerros poistaa viestistä oman linkkikerroksen kirjekuoren ja antaa verkkokerroksen kirjekuoren verkkokerrokselle tarkasteltavaksi. Reititin huomaa että viesti ei ole sille tarkoitettu, joten se selvittää seuraavan vastaanottajan (usein joku toinen reititin) IP-osoitteen ja sen perusteella kyseisen laitteen linkkikerroksen osoitteen ja antaa viestin linkkikerrokselle välitettäväsksi tälle laitteelle.

Näin viesti etenee vähitellen reitittimeltä toiselle, kunnes se saapuu Helsingin ylipiston reitittimelle.

Yliopiston reititin vastaanottaa viestin. Sekin tarkastelee vastaanottajan IP-osoitetta ja aliverkkopeitteen avulla havaitsee sen kuuluvan tiettyyn reitittimeen liitettyyn aliverkkoon, joten se lähettää viestin linkkikerroksen avulla sinne. Enää ei siis lähetetä viestiä jollekin välittävälle laitteelle vaan suoraan palvelimelle.

Näin viesti on monien vaiheiden kautta saapunut vastaanottajalle. Linkkikerros antaa oman kehyksensä datan verkkokerrokselle. Verkkokerros vielä tarkistaa, että viesti on itselle ja antaa sitten IP-paketin datan kuljetuskerrokselle. Kuljetuskerros katsoo oman viestinsä otsikoista vastaanottajan palvelun porttinumeron ja laittaa kuljetuskerroksen sanomassa olleen data sinne. Näin sovelluskerros voi vihdoin saadaa itselleen lähettäneen sovelluskerroksen viestin ja käsitellä sen.

Koska kyseessä on www-palvelin ja viesti oli tiettyyn sivuun liittynyt GET-pyyntö, palvelin etsii kyseisen sivun ja muodostaa vastausviestin. Vastausviestin vastaanottajana on siis www-selain. Vastausviesti kulkee nyt päinvastaiseen suuntaan, mutta käy läpi samat vaiheet kuin pyyntöviesti. Nyt on tärkeä huomata, että reitti eri reitittimien kautta ei välttämättä ole sama kuin jota pitkin pyyntö tuli. Reitittimet tekevät jokaiselle paketille itsenäisen reitityspäätöksen, joten viestit voivat kulkea eri reittejä.

## Yhteenvetona

Tietoliikenteessä on paljon toimijoita, mutta jokainen niistä hoitaa vain oman pienen tehtävänsä. Koko verkko toimii hyvin, kunhan jokainen sen pieni osa toimii hyvin. Verkon palveluja voi käyttää, vaikka ei verkon toimintaa täysin ymmärtäisikään. Oman kotiverkon ylläpito on helpompaa, kun tuntee siihen liittyvät käsitteet. IT-ammattilaisen, joka toteuttaa uusia verkkosovelluksia, on hyvä tuntea tietoliikenteen ja kommunikoinnin periaatteet, jotta oma sovellus toimisi tehokkaasti eikä kuormittaisi verkkoa tarpeettomasti.

Seuraavilla kursseilla tutustutaan tarkemmin eri protokollien toimintaan, niiden viestien rakenteisiin sekä erityisesti verkon kuormitukseen ja luotettavaan toimintaan liittyviin periaatteisiin.


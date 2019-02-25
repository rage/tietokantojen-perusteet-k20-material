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

Nyt on sitten käyty läpi tietoliikenteen erilaisia osa-alueita, joitakin tarkemmin ja joitakin vain ohimennen.

Kootaan vielä kaikki asiat yhdeksi isommaksi kokonaisuudeksi. Tässä ei siis pitäisi enää tulla varsinaisesti uutta asiaa, vaan katsotaan vaan kurssilla käsiteltyjen asioiden yhteistoimintaa.


## Kuva on kiva. Tämä kuva täytyy piirtää ensin käsin, koska tarina pohjautuu tähän kuvaan.

Lähdetään liikkeelle siitä, että käyttäjä kirjoittaa www-selaimeen tietyn sivun URL-osoitteen (käytetään erimerkissä osoitetta http://www.helsinki.fi/opiskelijaksi

## Quizz: Mikä osa osoitteestä on yliopiston www-palvelimen nimi: http, helsinki.fi, www.helsinki.fi opiskelijaksi

Kuten muistamme, niin palvelimen nimi täytyy muuttaa IP-osoitteeksi, jotta pyyntö voidaan laittaa eteenpäin verkossa

## Quizz:  Millä järjestelmää tuo verkkonimen kuvaaminen IP-osoitteeksi tehdään: DHCP, DNS, ARP, FTP, oliko vielä muita lyhenteitä kurssin materiaalissa

No nyt tiedetään jo palvelimen IP-osoite, joten sovelluskerroksella ei enää tehdä kovin paljoa.

## Quizz: Kumpaa kuljetuskerroksen protokolla HTTP käyttää? TCP vai UDP

Kuljetuskerroksen omissa otsaketiedoissa täytyy olla sovelluksen kerroksen palvelun/prosessin tunniste. Aajtellaan tätä siis kirjekuoreksi, jossa kuljetuskerroksen otsake on kirjekuoren päällä oleva osoite ja sovelluskerroksen viesti on kuoren sisällä oleva materiaali. (Sovelluskerros on jo voinut tehdä omasta viestistään erillisen kuoren ja antanut sen kuljetuskerrokselle. Uudemmissa verkkosovelluksissa tässä HTTP-protokollalta tulleessa viestissä voi olla jo useita sisäkkäisiä kuoria, mutta ne eivät näy kuljetuskerrokselle.)

## Quizz: Mitä tunnistetta kuljetuskerros käyttää sovelluskerroksen oikean prosessin tunnistamiseen: porttinumero, IP-numero, MAC-osoite?

Nyt meillä on siis kuljetuskerroksen viestissä kuljetuskerroksen otsake ja sen data, joka sisältää sovelluskerroksen otsakkeen ja datan.

Seuraavaksi kuljetuskerros antaa verkkokerrokselle tämän viestin (kirjekuoren) välitettäväksi eteenpäin. Samalla se kertoo  verkkokerrokselle, sen tarvitsemat tiedot vastaanottavasta palvelimesta.

## Quizz: Mitä tunnistetta verkkokerros käyttää omassa otsakkeessa oikean vastaanottajan löytämiseen: porttinumero, IP-numero, MAC-osoite?

Nyt puolestaan verkkokerros laittaa kuljetuskerrokselta saamansa viestin omaa kirjekuoreen ja sen päälle tämän verkkokerroksen käyttämän osoitteen ja antaa tämän kuoren edelleen linkkikerrokselle.

## Quizz: Mitä tunnistetta linkkikerros käyttää omassa otsakkeessa oikean vastaanottajan löytämiseen: porttinumero, IP-numero, MAC-osoite?

Ja linkkikerros lisää vielä yhden uuden kirjekuoren saamansa verkkokerroksen paketin ympärille. Tähän kuoeen kirjotetaan päälle linkkikerroksen vastaanottajan osoite.

Todellisuudessa mitään kirjekuoria ei käytetä, vaan kukin kerroksen protokollalla on oma määritelty viestin rakenne, jonka alussa ovat kyseisen kerroksen otsaketiedot ja ylemmän kerroksen viesti otsakkeineen on tälle protokollalle vain välitettävää dataa.

Nyt vihdoin tuo välitettävä viesti on valmis poistumaan lähettäjän koneelta ja ensimmäiseksi se meneekin samassa linkissä olevalle laitteelle, jonka osoite on tässä uloimmassa linkkikerroksen otsakkeessa (eli linkkikerroksen kirjekuoressa).

Äskeisessä kuorituksessa jäi vielä miettimättä, että miten linkkikerros pystyy päättelemään tuo oikean MAC-osoitteen, kun verkokerrokselta tuli kirjekuori, jonka päällä oli vain IP-osoite. 

Koska viesti on menossa www-palvelimelle, joka ei ole www-selaimen kanssa samassa aliverkosssa. Esimerkiksi käyttäjä on kotona ja haluaa lukea tuon kyseisen www-sivun. Viesti pitää siis lähettää kotiverkosta ulos, mutta miten?

Tämä tapahtuu reitityksen avulla. Jokainen kone tietää oman aliverkkonsa peitteen ja vähintään oletusyhdyskäytävänsä IP-osoitteen.

## Quizz: Aliverkkopeitteestä ja osoitteista. Aliverkkopeite ei ole ollut aiemmin esillä, mutta tässä se on luontevasti mukana.
Eli aliverkkopeitteen selitys ja sitten joukko osoitteita, joista osa on samassa aliverkossa ja osa ei.

Verkkokerros siis todellisuudessa antaakin linkkikerrokselle kirjekuoren, jonka päällä on IP-osoite, mutta haluaa, että linkkikerros toimittaa sen ensin ihan eri IP-osoitteella varustetulle reitittimelle. Tätä IP-osoitetta ei kirjoiteta verkkokerroksen kirjekuoren vastaanottajaksi, vaan vastaanottaja on edelleen tuo www-palvelimen IP-osoite. Siksi verkkokerroksen pitää tähän välityspyyntöön liittää nimenomaan reitittimen linkkikerroksen MAC-osoite.

Jos viesti olisi ollut menossa smaan aliverkon laitteelle, esim. verkkokirjoittimelle, niin silloin linkkikerrokselle olisi annettu kyseisen laitteen MAC-osoite eikä reititystä olisi tarvittu.

## Quizz: Millä protokollalla IP-osoitteen kuvaaminen MAC-osoitteeksi tehdään, jos lähettäjä ei sitä etukäteen tiedä: DHCP, DNS, ARP, FTP? 

Näiden vaiheiden jälkeen likkikerros on vihdoin siirtänyt viestin linkkikerroksen vastaanottajalle, joka on kotiverkon reititin.

Reitittimen linkkikerros poistaa viestistä oman linkkikerroksen kirjekuoren ja antaa verkkokerroksen kirjekuoren verkkokerrokselle tarkasteltavaksi. Reititin huomaa että viesti ei ole sille tarkoitettu, joten se selvittää seuraavan vastaanottajan (usein joku toinen reititin) IP-osoitteen ja sen perusteella kyseisen laitteen linkkikerroksen osoitteen ja antaa viestin linkkikerrokselle välitettäväsksi tälle laitteelle.

Näin viesti etenee vähitellen reitittimeltä toiselle, kunnes se saapuu Helsingin ylipiston reitittimelle.


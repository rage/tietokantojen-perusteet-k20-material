---
path: '/osa-1/2-protokolla-ja-osoite'
title: 'Protokolla ja osoite'
---

<div>
<lead>Tietokoneet kommunikoivat keskenään noudattamalla jotain yhdessä sovittua yhteyskäytäntöä eli protokollaa. Muuten ne eivät voisi ymmärtää toisiaan. Toinen kone tunnistetaan sen verkkotunnuksesta tai osoitteesta. Koneella voi olla useita erilaisia osoitteita ja niitä käytetään eri tarkoituksiin.</lead>
</div>


## Lähettäjä ja vastaanottaja

Tietoverkossa kulkevia viestejä kutsutaan usein sanomiksi. Niillä on aina lähettäjä ja vähintään yksi vastaanottaja. Usein sanomia verrataan postin välitettäväksi annettuihin kirjeisiin. Lähettäjä vain antaa sanoman tietoverkon välitettäväksi ja vastaanottaja saa viestin tietoverkosta, mutta kummankaan ei tarvitse tietää miten sanoma verkossa liikkui lähettäjän ja vastaanottajan välillä.

Lähettäjän täytyy vain määritellä sanoman sisältö ja vastaanottajan osoite. Sitten lähettäjä vain laittaa viestin verkon kuljetettavaksi ja luottaa siihen, että tietoverkko osaa siirtää viestin vastaanottajalle.

Internet-verkossa toimittaessa vastaanottajan pitää olla valmiina vastaanottamaan sanoma heti kun se on saapumassa. Internet ei jätä viestiä odottelemaan, josko vastaanottaja suostuisi ottamaan viestin vastaan. Jos vastaanottajaa ei tavoiteta, niin sanoma katoaa.

Asiakkaan ja palvelimen välisessä kommunikoinnissa tämä tarkoittaa sitä, että palvelimen pitää olla koko ajan verkossa ja valmiina vastaanottamaan viestejä. Asiakkaan sen sijaan ei tarvitse olla verkossa ennen kuin se haluaa ottaa yhteyttä palvelimeen.

Asiakkaan ja palvelimen välisessä viestien vaihdossa kumpikin osapuoli on vuorollaan lähettäjänä ja vastaanottajana, joten asiakkaankin pitää pysyä kiinni tietoverkossa kunnes se on vastaanottanut kaikki sanomat, joita se odotti palvelimen lähettävän.


## Protokolla eli yhteyskäytäntö

Jotta tietokoneiden välinen kommunikointi ja sanomien vaihto olisi mahdollista, niin niiden täytyy noudattaa yhteistä käytäntöä sekä sanomien lähettämisessä että sanomien sisällössä ja rakenteessa.

Valtaosa IETF:n standardeista onkin erilaisia internet-verkon protokollien määrittelyjä. Näiden avulla eri ohjelmoijien tekemät ohjelmat voivat kommunikoida toistensa kanssa onnistuneesti. Myös laitevalmistajien toteuttamien laitteiden pitää noudattaa standardoituja protokollia, jolla kommunikointi laitteiden välillä on mahdollista.

Esimerkiksi www-sivujen kanssa käytettävä HTTP on standardoitu IETF:n toimesta. Se on kuvattu useammassakin RFC standardissa. Uusin protokollan viestejä kuvaava standardi on [RFC7230](https://tools.ietf.org/html/rfc7230) vuodelta 2014. Sitä edellinen RFC2616 oli vuodelta 1999, joten ihan hirvittävän usein näitä vakiintuneita protokollia ei muokata. Itse asiassa myös standardisarjan numerot 7231-7235 käsittelevät HTTP-protokollaa ja sen eri piirteitä.


## Internetin protokollapino

Vaikka voimme helposti sanoa, että lähettäjä ja vastaanottaja kommunikoivat keskenään, niin todellisuudessa kommunikointi tietoverkon välityksellä on paljon monimutkaisempaa ja vaatii yhteistyötä eri laitteilta ja ohjelmistoilta. Toisaalta kuitenkin lähettäjä ja vastaanottaja kommunikoivat keskenään jonkun viestinvälityspalvelun avulla. Niiden ei tarvitse tietää miten tuo välityspalvelu tarkemmin toimii, kunhan se tarjoaa niille palvelun, jonka avulla viestit kulkevat lähettäjältä vastaanottajalle. Näin ne piilottavat tai abstrahoivat tarpeettomat yksityiskohdat pois omasta viestienvaihdostaan.
Vastaavasti lähettäjälle ja vastaanottajalle tällaista välityspalvelua tarjoava järjestelmä käyttää omassa toiminnassaan jotain palveluja, joiden toteutuksen yksityiskohtia sen ei tarvitse tietää.

Näistä palveluista  muodostuukin kerrosrakenne. Internetin sanomien välitykseen liittyvää kerrosrakennetta kutsutaan protokollapinoksi. Siinä on viisi kerrosta (sovellus, kuljetus, verkko, linkki ja fyysinen kerros). Kullakin kerroksella on määritelty tiettyjä palveluja, joita se tarjoaa yläpuolellaan olevalle kerrokselle. Vastaavasti kukin kerros käyttää alapuolellaan olevan kerroksen palveluja. Wikipediassa on kuvattu nelikerroksinen [TCP/IP-viitemalli](https://fi.wikipedia.org/wiki/TCP/IP-viitemalli), jossa linkkikerros ja fyysinen kerros on yhdistetty yhdeksi peruskerrokseksi. Internetin kannalta keskeiset kerrokset ovat kuljetus- ja verkkokerros, jotka määrittelevät internetin keskeiset protokollat TCP:n ja IP:n.

![viesti kulkee sovelluskerrokselta muiden kerrosten läpi fyysiselle kerrokselle ja sieltä vastaanottajan fyysiselle kerrokselle ja käänteisessä järjestyksessä kerrosten käpi sovelluskerrokselle](../img/kerrokset.svg)

Lähettäjä ja vastaanottaja, joka kommunikoivat keskenään käyttäen HTTP-protokollaa, sijoitetaan tässä protokollapinossa sovelluskerrokselle. Tällä kerroksella ovat siis kaikki ohjelmat, joilla on jokin yhteiseen tavoitteeseen liittyvä tarve kommunikoida keskenään. Näitä ovat tyypillisesti esimerkiksi www-selain ja -palvelin, sähköpostiohjelma, pikaviestinpalvelua toteuttava ohjelma (esim. whatsapp, telegram, jabber). Ne käyttävät omaan ohjelman sisäiseen kommunikointiin jotain sovellustason protokollaa, kuten HTTP tai XMPP. Sovellukset voivat ottaa käyttöön jonkun jo standardoidun sovellustason protokollan (esim. HTTP, XMPP) tai määritellä ihan oman protokollan, jota ne käyttävät. Tyypillisesti käyttäjän ohjelmat on sijoitettu sovelluskerrokselle, eivätkä käyttäjät voi suoraan käyttää alempien kerrosten protokollia.

Tietoliikenteessä puhutaan usein päästä-päähän -yhteydestä, jolla tarkoitetaan sitä, että sovellusten ei tarvitse tietää, miten viesti alemmilla kerroksilla liikkuu, vaan ne voivat luottaa siihen, että lähettäjän lähettämä viesti päätyy vastaanottajalleen toiseen päähän.

Kuljetuskerroksen tehtävä on nimenomaan tarjota sovelluskerrokselle tällainen yhteys lähettäjän ja vastaanottajan välille. Lähettäjä voi siis antaa viestinsä kuljetuskerrokselle toimitettavaksi ja olettaa, että vastaanottaja saa viestin oman tietokoneensa kuljetuskerrokselta. Kuljetuskerroksen toiminnalle voidaan asettaa myös erilaisia laatukriteerejä, esim. viestiä ei saa muuttua, kadota tai kahdentua. Toisaalta ihan yhtä hyvin voidaan kuljetuskerrokselle antaa lupa tarjota huonompilaatuista palvelua, esim. sallia viestin katoaminen. Internetin kuljetuskerroksen kaksi tärkeintä protokollaa ovat TCP ja UDP. Tutustutaan niihin tarkemmin myöhemmin tällä kurssilla.

Verkkokerros tarjoaa palveluna kuljetuskerrokselle sanoman siirron verkossa lähtöpisteestä A kohteeseen B. Verkkokerros siis tietää missä päin verkkoa eri laitteet ovat ja mitä reittiä viestit niille pitää kuljettaa. Verkkokerroksen tärkein tehtävä on siis huolehtia viestien reitittämisestä verkossa siten, että ne päätyvät oikeille vastaanottajille. Tämän kerroksen tärkein sanomien siirtoon liittyvä protokolla on IP, joka on lyhenne englanninkielen sanoista Internet Protocol eli suomennettuna Internet-verkon protokolla.

Verkkokerros on liima, joka liittää erilaiset sovellukset ja niiden kuljetustarpeet sekä erilaiset verkkoteknologiat ja niiden tarjoamat kuljetuspalvelut yhteen. Kaikkien internet-verkossa palvelua tarjoavien laitteiden täytyy osata IP-protokollaa. Tämä koskee sekä käyttäjien laitteita että verkon reitittimiä.

Linkkikerros tarjoaa verkkokerrokselle sanoman siirtopalvelun kahden vierekkäisen laitteen välillä. Laitteet ovat vierekkäisiä, jos niiden välissä ei ole muita verkkokerroksen palveluja tarjoavia laitteita. Nämä laitteet voivat olla fyysisesti lähellä toisiaan kuten kotiverkon ADSL-modeemi ja kotona olevat tietokoneet. Ne voivat yhtä hyvin olla fyysisesti hyvinkin kaukana toisistaan, kuten Hollannissa ja Yhdysvalloissa olevat reitittimet, jotka on yhdistetty toisiinsa yhdellä yhtenäisellä tuhansia kilometrejä pitkällä merikaapelilla.
Laitteet on voitu yhdistää toisiin erilaisilla verkkoteknologioilla. Kullakin niistä on omat protokollansa, joiden avulla linkkikerros pystyy palvelun tarjoamaan. Ethernet-verkko ja langaton WLAN-verkko ovat ehkä tunnetuimpia Internetissa käytettyjä verkkoteknologioita, mutta niitä on muitakin.

Internetin protokollapinon alin, fyysinen, kerros huolehtii bittien siirtämisestä linkkikerroksen laitteiden välillä. Tälläkin kerroksella bittien siirtoon voidaan käyttää erilaisia tekniikoita. Ne voidaan koodata valoksi valokuituun, sähköpulsseiksi koaksiaalikaapeliin tai radioaalloiksi langattoman verkon yhteyksillä. Näitä koodaustapoja emme tällä kurssilla käsittele.


<div><quiznator id="5c75241a99236814c5bbd859"></quiznator></div>


## Verkkotunnus eli laitteen osoite

Me olemme tottuneet käyttämään erilaisista Internet-verkon palveluista ihmiselle luettavia nimiä kuten mooc.fi, www.helsinki.fi tai vaikkapa eecs.berkeley.edu. Koska tietokoneet toimivat biteillä ja numerot on helpompi esittää bitteinä kuin kirjaimet (katso Tietokoneen toiminta -kurssin materiaaleista lisää biteistä ja numeroiden esitysmuodoista), on internet-verkon toimijoiden kesken sovittu, että kaikilla IP-protokollaa käyttävillä laitteilla pitää olla IP-numero, jolla ko. laite internet-verkossa tunnistetaan ja jonka avulla se voidaan myös löytää.

Käymme myöhemmin läpi Internet-verkon nimipalvelun (Domain Name Service, DNS) toimintaa. Nimipalvelun tehtävänä on huolehtia näiden ihmiselle luettavien nimien ja IP-numeroiden vastaavuuksista. Huomaa kuitenkin jo nyt, että yhdellä nimellä voi olla monta IP-numeroa ja yhdellä IP-numerolla voi olla monta nimeä. Jos jo nyt kiinnostaa kokeilla millaista tietoa osoitteista löytyy, niin whois-tietokannassa on tietoa nimien ja osoitteiden omistajista (tai oikeastaan tahoista, joille ko. nimet / osoitteet on rekisteröity). Nimipalvelusta tietoja taas voi kysellä vaikkapa nslookup -komennolla. Komento toimii suoraan tietokoneen komentoriviltä, mutta verkosta löytyy myös useita palveluja, jotka sallivat käyttäjiensä tehdä näitä kyselyjä www-selaimella.

IP-numero liittyy siis protokollapinon verkkokerroksen toimintaan. Muillakin kerroksilla on tarvetta tunnistaa vastapuoli, mutta niillä kerroksilla käytetään erilaisia kyseiseen toimintaan paremmin sopivia osoitteita.

IP-numeroita on kahta tyyppiä. Meillä on käytössä IP-protokollasta sekä versio 4 että versio 6. Näillä versioilla on käytössään erilainen IP-osoite. Se perinteisempi osoite IPv4 on muodoltaan 128.214.189.90  eli siinä on neljä ryhmää numeroita erotettuna pisteillä toisistaan. Kussakin ryhmässä voi olla numerot 0-255. Eli kukin numero esittää yhden tavun (=8 bittiä) arvon. Tuota eecs.berkeley.edu nimeä vastaava IPv4 osoite on 23.185.0.1. Sillä on myös IPv6 osoite, joka on 2620:12a:8001::1 

Koska IP-osoite on laitteen tunniste maailmanlaajuisesti, sen pitää olla globaalisti ainutlaatuinen, ja siksi IP-osoitteita (katso wikipedian [artikkeli](https://fi.wikipedia.org/wiki/IP-osoite)) hallinnoi [IANA (Internet Assigned Numbers Authority)](https://www.iana.org/). Joitakin IP-osoitteista on varattu yksityiseen käyttöön. Nämä osoitteet voi ottaa käyttöön koska tahansa, mutta niille ei voi eikä saa liikennöidä julkisessa internetissä. Palataan osoitteiden tarkempaan rakenteeseen myöhemmin.

Monet tietokoneen käyttäjät ovat törmänneet MAC-osoitteeseen. Minun käyttämässäni kannettavassa tietokoneessa koneen MAC-osoite on laitteen pohjassa olevassa tarrassa. Protokollapinon kannalta MAC-osoite liittyy linkkikerrokseen, koska se on mm. Ethernet-verkossa käytettävä laitteen tunniste. Toki MAC-osoitteella pyritään yksilöimään laitteet siten, että millään kahdella laitteella ei ole samaa osoitetta. Aiemmin MAC-osoite oli laitevalmistajan laitteelle antama osoite, jota ei voinut vaihtaa, mutta nykyään se on ainakin joissakin tilanteissa vaihdettavissa. Protokollapinon kannalta tätä osoitetta käyttävät ne verkon osat, jotka toimivat linkkikerroksella. Linkkikerroksella ei tuo verkkokerroksen IP-osoite ole käytettävissä, kun se on ylemmän kerroksen osoite ja piilossa linkkikerroksen oman kirjekuoren sisällä eikä siis näy linkkikerroksen toimijoille.

Vastaavasti verkkokerroksella käytetty  IP-osoite riittää yksittäisen laitteen tunnistamiseen, mutta se ei riitä kuljetuskerroksella tai ylemmällä sovelluskerroksella tietyn kommunikointiyhteyden tai sovelluksen tunnistamiseen. Tähän käytetään porttinumeroa. Porttinumeroita käsitellään hiukan enemmän myöhemmin kun tutustutaan tarkemmin kuljetuskerroksen toimintaan. Sovellukset liitetään tiettyyn porttinumeroon pistokkeilla (socket). Pistokkeet ovat tarpeen ohjelmoijille, jotka tekevät tietoliikennesovelluksia. Koska emme kurssilla opettele tekemään verkkosovelluksia, niin emme tutustu myöskään pistokkeisiin. Eri protokollien kohdalla kerrotaan, jos niihin liittyy sovittuja, standardoituja porttinumeroita, jotka ovat aina ko. sovelluksen käytössä.


<div><quiznator id="5c7657ca244fe21455cbbf30"></quiznator></div>

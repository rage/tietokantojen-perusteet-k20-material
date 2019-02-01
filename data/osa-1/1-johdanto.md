---
path: '/osa-1/1-johdanto'
title: 'Mikä Internet on ja miten se toimii?'
hidden: false
---


<text-box variant="example" name="Algoritmi juustokakun tekemiseksi">

1. Jauha keksit yleiskoneessa keksimuruiksi.
2. Lisää voisula ja sokeri, sekoita tasaiseksi.
3. Kaada seos voidellun vuoan pohjalle ja taputtele tasaiseksi.
4. Sekoita täytteeksi kulhossa rahka, juusto, kananmunat, sokeri ja maissisuuruste.
5. Kaada täyte vuokaan ja paista kunnes täyte on hyytynyt.
6. Nosta kakku pöydälle jäähtymään ja irroita se heti vuoan reunoista terävällä veitsellä.
7. Anna jäähtyä ennen tarjoilua.

</text-box>


<div>
<lead>
Lähes kaikki palvelut ja koko yhteiskunta toimii ja luottaa siihen, että viestejä voidaan välittää henkilöltä toisella ja laitteelta toisella. Kaikki siis olettavat että tietoliikenne toimii. Tietoliikennettä tarvitsevat esimerkiksi puhelut, verkkosivujen selailu, videoiden katselu tietokoneella tai kännykällä, mutta myös uudet älykkäät kodinkoneet olettavat voivansa käyttää tietoverkkoja. Käydään siis aluksi läpi tietoverkkoja ja niiden toiminnallisuuksia.
</lead>
</div>

## Tietoverkko ja sen käsitteitä

Tietoverkoilla yhdistetään toisiinsa tietokoneita, jotka haluavat kommunikoida keskenään. Ihmiset keskustelevat, mutta laitteet kommunikoivat. Aluksi meidän täytyykin käyttää aikaa erilaisten asioiden nimeämiseen. <a href="https://www.viestintavirasto.fi/">Viestintävirasto</a> on jo koonnut hyviä sanastoja, joissa asioita on nimetty. Tällä kurssilla käytetään näiden sanastojen mukaisia suomenkielisiä nimiä. Eri teemojen sanastot löytyvät www-osoitteesta: https://www.viestintavirasto.fi/viestintavirasto/sanastot.html

Hyvä esimerkki nimeämisen ongelmista on se, että olisin äskeistä wwww-osoitetta voinut kutsua myös nettiosoitteeksi tai URL-osoitteeksi. Nämä kaikki nimet ovat noissa sanastoissa.

Itseasiassa tuossa sanastojen osoitteessa on monta eri osaa. Käydään ne nyt läpi pikaisesti ja palataan niihin myöhemmin.

<ul>
  <li> alkuosa https kertoo meille, että kyseessä on HTTP protokollan salattu (S) versio.
  <li> keskiosa www.viestintavirasto.fi on jonkun tietyn laitteen tai palvelun verkkonimi
  <li> loppuosa /viestintavirasto/sanastot.html puolestaan kertoo tuolle palvelulle, minkä verkkosivun haluamme nähdä
</ul>

Kaikki näiden sanastojen termit ja paljon muitakin käsitteitä on koottu <a href="http://www.tsk.fi/tsk/">Sanastokeskus TSK</a>:n [Tietotekniikan termitalkoot](http://www.tsk.fi/tsk/termitalkoot/) -sivustolle kaikkien nähtäville. Jos eri asioiden nimet ja käsitteiden selitykset kiinnostavat, niin tätä sivustoa kannattaa käyttää. Kurssin aikana se toivottavasti auttaa uusien käsitteiden opiskelua, jos käsite jää tässä materiaalissa kuitenkin oudoksi. Jotta sanaston käyttö tulisi hiukan tutummaksi, niin käy katsomassa ainakin tietoverkko-käsitteen käsitekaaviota sivulla: http://www.tsk.fi/tsk/termitalkoot/haku-266.html?page=resurssi&tiedosto=tietoverkko.svg. Kurssin kuluessa tutustumme lähes kaikkiin näistä termeistä.

-- Quiz 1.1. Tietoverkko-käsitteen käsitekaavio
<div> <quiznator id="5c1ce20564cf001162cb949d"> </quiznator> </div>

## Internet

Internet on englanninkielisen nimensä mukaisesti verkkojen verkko. Se siis yhdistää tietoverkkoja toisiinsa. Sitä voi kuitenkin ajatella myös yhtenä isona tietoverkkona, jonka sisällä on muita pienempiä tietoverkkoja. Käytän materiaalissa suomenkielistä termiä tietoverkko silloinkin, kun internet olisi ehkä täsmällisempi nimitys. Kolmas termi, jota usein käytetään, on tietoliikenneverkko. Sillä kuitenkin usein viitataan esim. puhelinverkkoon tai muuhun erikoistarkoitukseen rakennettuun verkkoon. Usein näitä kolmea termiä (internet, tietoverkko, tietoliikenneverkko) käytetään myös toistensa synonyymeinä.

Näitä internetiin liitettyjä tietoverkkoja hallinnoivat palveluntarjoajat (Internet service provider, ISP). Suomessa toimii kymmeniä n internet palveluntarjoajia, joista tavalliselle kuluttajalle tunnetuimpia ovat teleeoperaattorit kuten DNA, Elisa ja Telia. Helsingin yliopistolle kuten muillekin suomalaisille yliopistoille ja korkeakouluille internet yhteyden palveluntarjoajana toimii CSC - Tieteen tietotekniikan keskus (www.csc.fi). Se hallinnoi FUNET-verkkoa, jonka kautta Helsingin yliopiston internet yhteydet kulkevat. FUNET-verkko on puolestaan liitetty muuhun internetiin FICIXin (www.ficix.fi/fi/) operoiman internetliikenteen yhdysliikennepisteen (internet exchange point) kautta. FICIXin yhdysliikennepiste on tietoverkko, joka puolestaan on liitetty yhteen eurooppalaisen yhdysliikennepisteen tietoverkkoon, joka puolestaan taas ...   Näin internet verkko rakentuu toisiinsa liitetyistä palasista. Sillä ei ole yhtä keskitettyä hallitsevaa organisaatiota. Jokaisen pienemmän verkon omistaja voi päättää vain oman verkkonsa toiminnasta.

![Kuvassa on verkko.](./ch-1-1-verkkojen-yhdistelma.jpg)

FICIX julkaisee tilastotietoa sen verkon kautta kulkeneestä liikenteestä. Graafinen kuva tilastosta on sivulla https://stats-ficix.basen.com/#/page?name=StatsWelcome&source=wiki


-- Quiz 1.2. Viestien määristä
<div> <quiznator id="5c1ce4a1054d71123e35cb5b"> </quiznator> </div>

Internetin keskeisin ominaisuus onkin sen kyky siirtää viestejä tietoverkosta toiseen. Tämän tekevät verkkoja yhdistävät <a href=" https://fi.wikipedia.org/wiki/Reititin">reitittimet</a> (engl. router), jotka vastaanottavat viestin yhdestä verkosta ja välittävät sen edelleen toiseen verkkoon. Kahden eri verkon välissä on aina reititin, joka huolehtii viestien siirtämisestä verkkojen välillä. Usein kummassakin verkossa on oma reitittimensä, joka poimii omasta verkosta ulospäin menevät viestit välitettäväksi toiseen verkkoon.
Jos olet kiinnostunut jo nyt oppimaan ylimääräistä lisätietoa, niin FUNET-verkkoa kuvaavalla sivulla https://wiki.eduuni.fi/display/funet/IP-yhteydet kerrotaan lisää siitä, miten eri yliopistot tai korkeakoulut voivat omat verkkonsa liittää FUNEtin verkkoon.

Internetin kommunikointitavat on standardoitu ja kaikki internetissä tapahtuva kommunikointi noudattaa näitä standardeja. Internetin standardoinnista huolehtii <a href="https://www.ietf.org/">Internet Engineering Task Force</a> (IETF). IETF:n standardeja puhutellaan lyhenteellä RFC. Niiden numerointi alkoi aikoinaan numerosta 1, mutta uusimmat numerot ovat jo yli 8500. RFC:t määrittelevät erilaisia internet-verkon ominaisuuksia. Jo hyväksyttyä standardia ei enää muuteta, vaan muutokset kirjataan uudeksi RFC:ksi, joka joko täydentää edellistä tai korvaa sen kokonaan.


## internetlaitteet ja verkkolaitteet

Internetlaitteita ovat kaikki internetiin kytketyt päätelaitteet. Verkkolaitteita puolestaan laitteet, jotka toimivat verkon sisällä ja huolehtivat viestien siirtämisestä paikasta toiseen.

Näin ollen käyttäjän tabletti, älypuhelin tai tietokone on tässä jaottelussa internetlaite silloin, kun se on kytkettynä internet-verkkoon. Myös erilaisten organisaatioiden www-sivuja jakavat www-palvelimet ovat internet-verkon päätelaitteita. Ne eivät välitä liikennettä eteenpäin vaan ovat kiinni verkossa ja vastaanottavat ja lähettävät viestejä samaa yhteyttä käyttäen.

Verkkolaitteita ovat puolestaan laitteet, jotka ovat verkon sisäpuolella. Niiden tyypillisin tehtävä on yhdistää isomman verkon osia, aliverkkoja, toisiinsa. Reititin mainittiinkin jo aiemmin tällaiseksi verkkoja yhdistäväksi laitteeksi. Muita paljon käytettyjä laitteita ovat <a href="https://fi.wikipedia.org/wiki/Kytkin_(tietoliikenne)">kytkimet</a> (engl. network switch)  ja erilaiset modeemit.

Kotiverkossa saattaa olla ADSL-modeemi, joka yhdistää sen internetpalvelua tarjoavan teleoperaattorin verkkoon. Aiemmin ADSL-modeemi oli vain ADSL-modeemi. Nykyään kyseessä yleensä on monitoimilaite, joka samalla toimii reitittimenä ja saattaa sisältää muitakin internet-verkon toiminnallisuuksia, kuten langattoman verkon (WLAN, WiFi) tukiasema.



    Verkko-osoite on

-- Quiz 1.1. Väitteet tietokoneista
<div> <quiznator id="5bf6a05dcd84693e7889b274"> </quiznator> </div>


## Palvelin ja palvelu

Ennen kuin siirrytään eteenpäin, niin tutustutaan vielä yhteen käsitepariin palvelu ja palvelin.

Helposti puhumme sekä www-palvelusta että www-palvelimesta. Epätäsmällisessä puheessa ne voivat jopa tarkoittaa samaa asiaa, mutta täsmällisemmässä määrittelyssä niillä on ihan selkeä ero.

Tietotekniikan termitalkoiden määrittelyt näille käsitteille ovat:
<ul>
  <li>Palvelu (engl. service) on palvelimessa toimiva ohjelma, joka tarjoaa standardoitujen internetyhteyskäytäntöjen avulla palveluja sovellusten käytettäväksi.
   <li>Palvelin (engl. server) puolestaan on tietokone, ohjelmisto tai näiden yhdistelmä, joka hoitaa tiettyjä tehtäviä muiden samaan verkkoon kytkettyjen tietokoneiden pyyntöjen ohjaamana tai niiden puolesta.
</ul>

Eli kun puhumme palvelusta tarkoitamme jotain isompaa kokonaisuutta, jota tarjotaan muille käytettäväksi. Palvelin on taas osa tietoverkko, jonka avulla tuo palvelu voi olla muiden käytettävissä.

Usein palvelua käyttävistä sovelluksista ja oikeammin niistä laitteista, joilla niitä suoritetaan käytetään termiä asiakas (engl. client). Sovelluksesta voidaan tarvittaessa käyttää termiä asiakasohjelma.

Seuraavassa aliluvussa tarkastellaankin miten viestinvaihto viestin lähettäjän ja vastaanottajan välillä oikein tapahtuu.


<div>
<key-terminology
  terminologies='[
       {"title":"internet", "content":"IETF:n standardia noudattava maailmanlaajuinen verkkojen verkko"},
         {"title":"reititin", "content":"Reititin yhdistää aliverkkoja toisiinsa ja osaa siirtää liikennettä verkon osasta toiseen."},
       {"title":"www-osoite", "content":"www-palvelun tai sen tarjoaman yksittäisen sivun osoite."},
       {"title":"internetpalvelun tarjoaja", "content":"ISP tarjoaa asiakkailleen yhteyden internet verkkoon oman verkkonsa kautta."},
       {"title":"internet liikenteen yhdyspalvelupiste", "content":"Yhdyspalvelupiste tarjoaa omille asiakkailleen mahdollisuuden välittää viestejä toisten asiakkaiden verkkoihin. Yhdyspalvelupisteen asiakkaat ovat internetpalveluntarjoajia."},
       {"title":"kytkin", "content":"Välittä liikennettä verkon osasta toiseen."}
  ]'>
</key-terminology>
</div>

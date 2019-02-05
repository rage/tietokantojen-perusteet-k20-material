---
path: '/osa-2/1-kotiverkko'
title: 'Kotiverkko'
---

<div>
<lead>Kotiverkko on useimpien tavallisten internet-käyttäjien kannalta erittäin tärkeä osa internetiä. Tässä luvussa käydään läpi kotiverkon rakenne, tyypilliset laitteet ja  keskeinen toiminnallisuus. </lead>
</div>

## Kotiverkon rakenne ja verkkolaitteet

Kotiverkko on tyypillisesti yhdistetty palveluntarjoajan verkkoon laajakaistayhteydellä. Tällainen laajakaistayhteys palveluntarjoajan ja kotiverkon välillä on tyypillisesti toteutettu jollakin kolmesta yleisimmästä tekniikasta. <ul>
  <li> Perinteisessä puhelinverkossa yhteys on yleensä toteutettu ADSL-tekniikalla ja kotiverkossa on ADSL-modeemi tai ADSL-verkkokytkin, joka on liitetty puhelinpistokkeeseen.
  <li> Kaaapelitelevisioverkkoon liitetyllä 'kaapelimodeemilla'.
  <li> Suoraan kotijakamoon tulevalla parikaapelilla tai optisella kuidulla. Tämä on yhä yleisempi ratkaisu uusissa rakennuksissa ja peruskorjatuissa vanhemmissa rakennuksissa. Syynä on viestintäviraston määräys siitä, että tällainen toteutus edellytetään. (Jos haluat lukea koko määräyksen, niin se on Viestintäviraston määräys kiinteistön sisäverkoista ja teleurakoinnista 65C/2018 (https://www.finlex.fi/data/normit/44045/M_65_C_2018.pdf)
    </ul>

Useimmat kotiverkon internetin puoleisella reunalla oleva laitteet ovat monitoimilaitteita, jotka tarjoavat kotiverkolle muitakin palveluja kuin vain verkon liittämiseen tarvittavan kytkimen tai reitittimen. Hyvin tyypillisesti nämä laitteet toimivat langattoman verkon (wifi, WLAN) tukiasemana. Tällöin kotiverkon omassa sisäisessä rakenteessa ei tarvita kaapelointia, vaan laitteet voivat kommunikoida tämän langattoman verkon välityksellä.
    
Jotkut kotikäyttäjät käyttävät mobiililaitteillaan, kuten älypuhelin tai tabletti, suoraan palveluntarjoajan mobiiliverkkoa. Silloin heillä ei ole erillistä kotiverkkoa, vaan laitteet on suoraan liitetty palveluntarjoajan verkkoon. Tätä internetin käyttötapaa ei luokitella kotiverkoksi, koska käyttäjällä ei ole omaa aliverkkoa, vaan liikennöinti tapahtuu suoraan palveluntuottajan mobiiliverkossa.
 
Kotiverkon laitteet kommunikoivat siis omassa aliverkossaan keskenään ilman, että liikenne näkyy muualle. Ulkopuolisen internetin kanssa ne kommunikoivat reitittimen välityksellä.

## Tähän kaavakuva verkosta ja sen laitteista

### Yhteys kotiin

Suomesaa näitä kotien internet yhteyksiä kutsutaan usein laajakaistayhteyksiksi tai lyhyesti vain laajakaistaksi. Nimitystä voi Suomessa käyttää, kun operaattorin tarjoama liikennöintinopeus on yli 256 kbits/s ja laskutus ei perustu siirrettyyn datamäärään.

Tyypillisesti yhteys kotiin toteutetaan joko perinteistä puhelinverkko pitkin ADSL-yhteynä, kaapeli TV-verkossa kaapelimodeemin avulla tai asuntoon tulevan parikaapelin tai valokuidun kautta. Wikipedian sivulla https://fi.wikipedia.org/wiki/Laajakaista  luetellaan muitakin tekniikoita, joilla laajakaistayhteyden voi saada kotiin.

Näitä yhteyksiä tarjoavat puhelinoperaattorit, kuten Telia, Elisa ja DNA, ympäri maata. Myös muita palveluntarjoajia on alueellisesti saatavilla. Erityisesti, jos käytetään noita muita tekniikoita. 

Osa palveluntarjoajista näyttää myyvän valokuitu-nimistä palvelua, vaikka valokuitu tulisikin vain taloyhtiöön ja siitä eteenpäin liikennöinti tapahtuisi puhelinverkon johtimella tai jollain muulla kaapeloinnilla.


## Tehtävä:  essee:  Selvitä millaisia yhteyksiä omalla alueellasi on saatavilla. Operaattorit haluavat usein kotiosoitteen, jotta kertovat millaisia yhteyksiä voi saada. Tätä osoitetta ei kannata laittaa vastaukseen, mutta muuten voit laittaa vastaukseen linkkejä. Selvitä liikennöintinopeus ja millainen laite kotiin tarvitaan.



### Kotiverkon ja internetin välinen laite

Käytettävästä verkkotekniikasta riippuen laitten nimi voi olla ADSL-modeemi, valokuitumuunnin, laajakaistareititin tai jotain muuta. Eri operaattoreilla on tälle laitteelle ja sen avulla tarjottavalle verkkopalvelulle erilaisia tuotenimiä kuten kotiboksi, valokuitu plus tai ihan vain laajakaista tai netti.

ADSL-modeemi on perinteinen tapa yhdistää kotiverkko internetiin. Siinä palveluntarjoajana toimii puhelinoperaattori. Yhteys muodostetaan olemassa olevaa langallista puhelinverkkoa pitkin.  Tämä on vähitellen poistuva tekniikka Suomesta, kun operaattorit pikkuhiljaa purkavat vanhoja puhelinverkkoja ja korvaavat ne nopeammilla verkkoyhteyksillä.  

Kaapelimodeemin avulla internet-yhteys kotiverkkoon voidaan saada kaapeli-TV:tä tarjoavalta operaattorilta. Pääkaupunkiseudulla tämä palvelun tarjoaja on yleensä DNA. 

Kuitumuunnin on näistä uusin ja silloin valokuituyhteys tarvitaan tähän muuntimeen asti. Jos kotiin tulee suoraan parikaapeliyhteys, niin silloin voidaan käyttää tavanomaista reititintä. 

Kotiverkon ja palveluntarjoajan verkon välissä on aina reititin. Yleensä reititystä kotiverkossa hoitaa tämä verkkoja toisiinsa littävä laite, mutta teknisesti olisi mahdollista jättää reititys kokonaan operaattorin huoleksi. Käytännössä oman kotiverkon turvallisuuden vuoksi on hyvä, että kotiverkon oma sisäinen liikenne ei vuoda operaattorille asti ja siksi tarvitaan reititin oman verkon puolelle. 
Muistathan, että reititys on protokollapinon verkkokerroksen toiminnallisuutta ja yhteystekniikka kuuluu linkkikerrokselle.  

Monitoimilaitteessa on linkkikerroksen yhteystekniikoiden lisäksi ja verkkokerroksen reititystoiminnallisuuden lisäksi yleensä myös langattoman verkon wifi-tukiasema ja usein myös palomuuri. Palomuurin tehtävänä on suojata kotiverkon liikennettä siten, että kotiverkkoon asti pääsee vain sinne aidosti kuuluva liikenne. Palataan palomuureihin vielä myöhemmin tällä kurssilla. 

Kaikissa näissä laitteissa on yksi liitin operaattorin verkkoon liittymistä varten sekä 0-4 liitintä kotiverkon laitteille.


### Laitteiden liittäminen kotiverkkoon
 
 
 

### WLAN-tukiasema vai WLAN-reititin

WLAN-tukiasema tarjoaa verkkoyhteyden palveluna kaikille laitteille, jotka siihen on yhdistetty. Jos se tarjoaa vain liikennöintiä, niin se välittää kaiken liikenteen langattoman ja langallisen verkon välillä ja toimii silloin tyhmänä toistimena (repeater). Tällaisia erillisiä WLAN-toistimia saatetaan tarvita isommassa omakotitalossa useita, jotta kaikkialla olisi hyvä kuuluvuus. Langaton Wifi signaali vaimenee tehokkaasti sekä etäisyyden mukana että erilaisten radioaaltoja huonosti läpäisevien materiaalien vuoksi.

WLAN-reititin tarjoaa langattoman yhteyden lisäksi myös reitityksen langattomaan verkkoon liitettyjen laitteiden ja langallisen verkon laitteiden välillä. Näin meille syntyy kaksi toisistaan loogisesti eristettyä verkkoa. Langattoman verkon laitteiden kommunikoidessa keskenään niiden liikennettä ei ohjata eteenpäin langalliseen verkkoon. Kotiverkko jakautuukin kahteen aliverkkoon, joista toinen on langallinen ja toinen langaton.

Nykyisin on tyypillistä, että kotiverkon monitoimilaitteessa on sekä reititys että WLAN-tukiasema. Lisäksi siinä on usein vielä ulkoverkkoyhteyteen tarvittava toiminnallisuus (ADSL, valokuitu, TV-kaapeli tai parikaapeli).
 




## Kuvia ja lisätietoja eri laitteista puuttuu vielä

reititin, kytkin, modeemi, tukiasema

Luku 2: Kotiverkon elementit, niiden käyttö ja ominaisuudet
-	reititin, modeemi, tukiasema  - erot, useampi vai  yksi laite
o	ADSL, WLAN-tukiasema, valokuitumodeemi, kaapelimodeemi
o	WiFi vai mobiilidata

## Tehtäviä

Tehtävä X ja Y: Mitkä seuraavista laitteista yhdistävät kotiverkon laitteita kotiverkon sisällä?  Mitkä seuraavista laitteista yhdistävät kotiverkon laitteet internetiin?

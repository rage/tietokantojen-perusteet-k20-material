---
path: '/osa-2/3-kotiverkon-palvelut'
title: 'Kotiverkon palvelut'
---

# Kotiverkon palvelut

Kotiverkon laitteiden tarvitsevat verkkopalvelut eivät poikkea tietoverkkoon liittyjen laitteiden tarvitsemista palveluista. Kaikki laitteet tarvitsevat itselleen oman IP-osoitteen, jonka avulla ne voidaan tunnistaa. Niiden pitää myös pystyä löytämään muiden laitteiden IP-osoitteita, jotta ne voivat lähettää näille viestejä. 

## Konfigurointi (DHCP)

Kaikki verkkoon liitetyt laitteet tarvitsevat IP-osoitteen, jotta ne voivat kommunikoida muiden kanssa käyttäen IP-protokolla. Tämän osoitteen annettiin aikoinaan jokaiselle laitteelle käsin kirjoittamalla se sopivaan tiedostoon laitteen asetuksissa. Tietokoneiden ja verkkolaitteiden määrän kasvaessa osoitteiden päivittäminen käsin muuttui aivan liian työlääksi ja siksi kehitettiin protokolla, jolla verkkoon liitettävä laite voi itse automaattisesti pyytää IP-osoitetta erilliseltä palvelimelta. Tämä Dynamic Host Configuration Protocol (DHCP) pohjautuu aiempiin vastaaviin protokolliin, mutta se on siis tällä hetkellä yleisimmin käytetty tapa saada verkkoon liitettävälle tietokoneelle tai muulle laitteelle IP-osoite. DHCP-protokolln määrittelyssä on kuvattuna useita erilaisia protokollan käyttötapoja. Tässä materiaalissa käydään niistä läpi vain tämä verkkoon liittyvän laitteet tarvitsema viestien vaihto prosessi.

### KUVA: Tähän oma kopio kirjan kuvasta 4.21, mukailee tuon englanninkielisen wikipedia-artikkelin kuvaa

DHCP-protokollassa asiakas aloittaa viestien vaihdon. Tämä on hyvin tyypillistä protokollille, koska yleensä asiakkaalla on jokin tarve ja palvelin on koko ajan valmiina vastaamaan asiakkaille. 
<ul>
  <li>Asiakas siis lähettää ensin DHCPDiscover-viestin verkkoon. Miten asiakas voi tämän viestin lähettää palvelimelle, kun ei se tiedä palvelimen osoitetta, eikä sillä vielä ole omaakaan osoitetta? Internetissä asia on ratkaistu siten, että laitteet voivat yhden vastaanottajan sijaan lähettää yhden ja saman viestin kaikille verkon laitteille. Tätä kaikille lähetettävää viestiä kutsutaan <b>yleislähetykseksi</b> ja sille on varattu ihan oma IP-osoite (255.255.255.255), jota ei siis voi käyttää mihinkään muuhun viestien välittämiseen kuin yleislähetykseen kaikille. DHCP käyttää porttinumeroita 67 ja 68, joilla sille saapuvat viestit on mahdollista erottaa muiden sovellusten ja niiden protokollien viesteistä. 
 <li>Palvelin vastaanottaa tämän viestin ja vastaa siihen DHCPOffer viestillä. Palvelin siis tarjoaa asiakkaalle yhtä IP-numeroa. Tämäkin viesti täytyy lähettää yleislähetyksenä, kun palvelimella ei ole keinoa yksilöidä asiakasta. Edellinen pyyntö ja tämä siihen tuleva vastaus yhdistetään toisiinsa viestin sisällä kulkevalla tunnisteella, joka on tässä viestiparissa sama. 
 <li> DHCP:n erikoisuus on se, että protokollan mukaan yhdessä verkossa saa olla useita DHCP-palvelimia, jotka kaikki voivat ehdottaa asiakkaalle IP-numeroa. Asiakas päättää minkä tarjotuista IP-numeroista se ottaa käyttöönsä.  Asiakkaan pitääkin siksi vielä tarkistaa palvelimelta, että saanhan pitää tämän IP-osoitteen. Tämä tehdään DHCPRequest-viestillä.
 <li> Palvelija kuittaa ja hyväksyy osoitteen käytön DHCPAck-viestillä.
   
Tämän viestien vaihdon yhteydessä palvelin voi toimitaa asiakkaalle myös muita verkon konfiguraation kannalta oleellisia tietoja. Näitä ovat tyypillisesti nimipalvelimen osoite, ulospäin menevän liikenteen oletusreitittimen osoite (default gateway) ja IP-osoitteen laina-aika. Laina-ajan päätyttyä asiakaan pitää erillisellä DHCP-protokollan viestillä tarkistaa palvelimelta saako se vielä käyttää tätä IP-osoitetta. 

EXTRA: Jos sinua kiinnostaa opetella tarkemmin DHCP-protokollan toimintaa, niin englanninkielinen wikipedian sivu https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol on hyvä lähtökohta. Sieltä löytyy linkin noihin DHCP:n toiminnallisuuden määritteleviin RFC-dokumentteihin.

## Nimipalvelu (DNS)

DNS

## Osoitteiden muunnos (NAT)

NAT

-	NAT, DHCP, DNS, Gateway , …   yms. käsitteitä, jotka hallittava oman kotiverkon kanssa
-	DNS palveluna (sisäinen toiminnallisuus osioon 2)


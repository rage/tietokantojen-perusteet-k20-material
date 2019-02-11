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

Nykyään kaikissa internet-verkon osissa on käyttössä nimipalvelu (Domani Name Service, DNS). Nimipalvelu on maailmanlaajuinen, koko laajan internet-verkon kattava palvelu, joka pitää huolta verkon laitteiden nimien ja IP-osoitteiden kuvaamisesti toisilleen. Esimerkiksi pyytämällä www.helsinki.fi nimen tietoja nimipalvelusta saadaan tiedoksi, että "www.helsinki.fi canonical name adc-vip3.helsinki.fi" ja edelleen että "Name: adc-vip3.helsinki.fi Address: 128.214.189.90". Näistä tiedoista voidaan päätellä, että helsingin yliospiston www-palvelu toimii tietokoneella, jonka nimi on adv-vip3.helsinki.fi ja sen IPv4 osoite on 128.214.189.90.

Kaikilla IP-osoitteilla ei ole pakko olla nimeä, mutta jos nimelle ei löydy IP-osoitetta, niin sen kanssa ei voi kommunikoida.

### Tehtävä: käytä jotain nimipalvelutietoja kyselevää järjestelmää ja selvitä mikä on Helsingin kaupungin www-palvelun www.hel.fi osoite. 128.214.123.25, 13.33.101.65, 208.7.71.31, 137.163.136.41

Mooc.fi on toteutustapansa vuoksi hiukan hankalampi nimipalvelun osalta. Kyselyllä "nslookup mooc.fi" vastaukseksi tulee useita IP-osoitteita. Tämä johtuu siitä, että mooc.fi on toteutettu pilvipalveluna ja kyseisellä pilvipalvelulla on käytössään sekä useita IP-osoitteita, että kuormatasauksen vuoksi tarve jakaa nimipalvelun kautta usieta osoitteita, jolloin eri asiakkaan ottavat yhteyttä eri osiin pilveä ja näin kaikki saavat palvelua sujuvasti. Jos kaikki yrittäisivät yhteyttä samaan kohtaa se voisi tukkeutua, jolloin osa ei ehkä saisi palvelua lainkaan ja useimmilla sivu toimisi todella hitaasti.

### Mukaan vai pois (EKSTRA: Jos nimipalvelun käyttö kiinnostaa, niin kokeille nimipalvelukyselyjen avulla selvittää millä isolla pilvialustalla mooc.fi toimii. Tämä voi onnistua suoraan ensimmäisellä kyselyllä, jos sain tiedon sähköpostipalvelimen nimestä. Se voi onnistua myös jos teet kyselyn yhdellä noista IP-osoitteista. Silloin saatat saada vastaukseksi kyseistä osoitetta hallinnoivan nimipalvelijan nimen.)

Kotiverkon kannalta kiinnostavin seikka on, että miten oman kotiverkon laitteet tietävät oman nimipalvelijan osoitteen. Aikoinaan tämä osoite täytyi kertoa laitteelle suoraan kirjoittamalla se sopivaan tiedostoon, mutta nykyään se onneksi saadaan samalla DHCP-kyselyllä kuin laitteen oma IP-osoite. DHCP-kyselyn mukana tulee siina paljon hyodyllistä konfigurointitietoa, joista yksi on nimipalvelijan osoite.

Kotiverkkoa palvelee yleensä aina oman palveluntarjoajan nimipalvelin, joka sitten yhdessä muiden maailman nimipalvelujoiden kanssa ratkoo asiakkaiden tekemät kyselyt. Wikipedian artikkeli https://fi.wikipedia.org/wiki/DNS kertoo lyhyesti tästä nimipalvelijoiden yhteistyöstä. Nimipalvelun sisäinen toiminta jätetään valitettavasti tältä aloituskurssilta pois, kun kaikki kiinnostava asia ei mahdu mukaan. 

Tietoturvan vuoksi kotiverkossa ei pitäisi olla omaa erillistä nimipalvelijaa, koska tuo palveluntarjoajan nimipalvelu yleensä riittää. Mikäli kotiverkossa on oma erillinen nimipalvelija, niin sitten sen päivittämisistä pitää huolehtia, jotta se pysyy turvallisena. Valitettavasti aina silloin tällöin on vastaan tullut oletusasetuksiltaan turvattomia laitteita. Yksi tällainen saattaa olla laitteissa toimiva nimipalvelin, silloinkin kun sillä ei aidosti ole tarvetta. Tällainen ylimääräinen, mahdollisesti jopa avoin nimipalvelu on yksi mahdollinen reitti hyökkäyksille / tunkeutumisille. Tämän kaltaisten ongelmien selvittämisessä oman palveluntarjoajan apu on usein tarpeen.


## Osoitteiden muunnos (NAT)

Osoitteiden muunnosta (Network address translation, NAT) käytetään silloin, kun omia yksityisiä verkko liitetään julkiseen internetiin. Verkon yksityisyys määräytyy sen käyttämien IP-osoitteiden kautta. Julkisen verkon IP-osoitteet täytyy erikseen anoa 

-	NAT, DHCP, DNS, Gateway , …   yms. käsitteitä, jotka hallittava oman kotiverkon kanssa
-	DNS palveluna (sisäinen toiminnallisuus osioon 2)


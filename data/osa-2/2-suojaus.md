---
path: '/osa-2/2-suojaus'
title: 'Viestien ja verkon suojaus'
---

<div> Kotiverkossa kuten muissakin tietoliikenneverkoissa on tärkeää, että verkko ja siellä kulkevat viestit on asianmukaisesti suojattu eivätkä ulkopuoliset tahot pääse käyttämään verkkoa tai lukemaan siellä kulkevien viestien sisältöjä.</div>

## Salaus

Jotta voimme suojata verkon liikennettä ja siellä kulkevia viestejä, ne pitää salata. Salaaminen tarkoittaa viestin sisällön muokkaamista siten, että se ei ole ulkopuolisten luettavissa. Yksinkertaisia esimerkkejä ovat erilaiset historialliset salakirjoitustekniikat (katso Wikipedian [sivua kryptologia](https://fi.wikipedia.org/wiki/Kryptologia), jos asia kiinnostaa enemmän).

Tietokoneiden nykyisin käyttämät salausmenetelmät perustuvat edistyneeseen matematiikkaan. Me emme tutustu itse salausmenetelmien toimintaan tai niihin liittyviin analyyseihin, vaan otamme ne annettuna ja käytämme muualla kehitettyjä salausmenetelmiä tietoliikenteessä viestien välityksen turvaamiseen.

Kaikki salausmenetelmät käyttävät avainta, jonka avulla selkokielisen viestin salaaminen salakieliseksi viestiksi tehdään. Avainta tarvitaan myös salakielisen viestin purkamiseksi takaisin selkokieliseksi. Eri salausmenetelmät käyttävät erilaisia avaimia. Joissakin menetelmissä sekä salaaminen että purkaminen tehdään samalla avaimella ja toisissa menetelmissä käytössä on avainpari, joista toista käytetään salaamiseen ja toista purkamiseen.

Paljon käytetty <b>julkisen avaimen salakirjoitus</b> perustuu avainpareihin, joista toinen on oma salainen avain ja toinen julkinen avain. Julkinen avain voidaan nimensä mukaisesti vapaasti jakaa muille, joiden kanssa luottamuksellisia viestejä halutaan vaihtaa. Kaikki, joilla on julkinen avain, voivat purkaa salaisella avaimella salatun viestin, mutta eivät julkisella avaimella salattua viestiä. Omalla salaisella avaimella voi purkaa julkisella avaimella salatut viestit. Jossa kaksi osapuolta haluavat suojata kaiken oman kommunikointinsa, niin viestit salataan aina vastaanottajan julkisella avaimella. Tällöin vain vastaanottaja voi purkaa viestin. Omalla salaisella avaimella viesti salataan silloin, kun on tarve todistaa, että viesti tulee juuri kyseisen avaimen haltijalta. Tällainen salausmenetelmä on esimerkiksi RSA.

<b>Symmetrisen avaimen salakirjoituksessa</b> käytetään samaa avainta sekä salaamiseen että purkamiseen. Tällöin kaikki, joilla on ko. avain voivat purkaa kaikki samalla avaimella salatut viestit. Esimerkki symmetrisen avaimen käytöstä voisi olla vaikkapa AES.

Näiden salausmenetelmien turvallisuus perustuu hyvään avainhallintaan. Emmehän me jaa kotiavaintakaan (tai sen kopioita) vapaasti muille. Samoin pitää menetellä oman salaisen avaimen kanssa. Jos joku epäluotettava taho saa haltuunsa minun salaisen avaimeni, niin mikään minun viestintäni ei ole sen jälkeen enää luottamuksellista, koska tämä taho voi vapaasti tutkia kaikkia minulle tulevia salattuja viestejä. Lisäksi kyseinen taho voi väittää olevansa minä salaamalla lähettämänsä viestit minun salaisella avaimellani. Julkista avainta ei pidetä piilossa, joten sen oletetaan olevan kaikilla, jotka haluavat lähettää viestejä minulle.

<div><quiz id="5c78f913fd9fd71425c67e56"></quiz></div>

## Viestien salaus

Tietoliikenteessä viestien sisällön salaamiseen käytetään usein erityisiä salausprotokollia. Ne voivat sijoittua protokollapinon eri kerroksille. Esimerkiksi sovelluskerroksen HTTP-protokollasta on kehitetty HTTPS-protokolla, joka salaa lähettäjän ja vastaanottajan väliset viestit. Se käyttää kuljetuskerroksen TLS-protokollaa viestin salaamiseen kuljetuskerroksella. Vastaavasti verkkokerroksella on oma salausprotokolla IPsec. Linkkikerroksella erityisesti langattomissa verkoissa käytetään myös salausprotokollia viestien suojaamiseen langattoman yhteyden yli.

Koska jokainen kerros voi lisätä mukaan oman salauksensa, on aina mahdollista, että viesti salataan useampaan kertaan eri menetelmillä. Tämä useampaan kertaan salaaminen ei sinänsä paranna salauksen turvallisuutta, jos avainten hallinta ei ole kunnossa.

Tällä kurssilla keskitymme tietoliikenneverkon ja sen protokollien perustoiminnallisuuteen ja siksi jätämme nämä salaavat protokollat vähemmälle huomiolle. On kuitenkin hyvä muistaa, että jos protokollasta on helposti käytettävissä salaava versio, niin sen käyttö parantaa omien viestien suojausta salaamattomaan versioon verrattuna.

## Verkon suojaus

Tietoliikenteeseen kotiverkossa voi kohdistua monenlaisia uhkia ja niiltä täytyy suojautua eri tavoin. Kotiverkon luvattoman käytön estäminen edellyttää, että verkkoon pääsy on jollain tavalla rajattu. Liikenteen kuuntelun estämiseen tyypillisesti käytetään liikenteen salausta. Ulkopuolisesta verkosta tulevaa liikennettä voidaan suodattaa palomuurilla, jolloin vain aidosti omaan verkkoon tulossa oleva liikenne pääse palomuurin läpi.

### Luvattoman käytön estäminen verkon sisällä

Jos kaikki kotiverkon laitteet liikennöivät langallisesti (valokuitu, parikaapeli), niin käytön estämiseen riittää se, että fyysinen pääsy verkkoliittimiin estetään.

Useimmissa kotiverkoissa on kuitenkin käytössä myös langaton verkko, jonka suojaaminen on haasteellisempaa, koska verkko kuuluu myös ulkopuoliseen tilaan ja fyysinen pääsy kuuluvuusalueelle on usein mahdotonta estää. Langattoman verkon osalta luvaton käyttö voidaan estää käyttämällä WLAN-verkkosalasanaa. Useimmissa WLAN-tukiasemissa on nykyään jo valmiiksi asennettuna verkkosalasana, jota edellytetään, jotta verkkoon voi liittyä. Kaikki laitteet, jotka antavat oikean verkkosalasanan saavat pääsyn verkkoon. Helpot salasanat on suhteellisen helppo arvata. Riittävän vaikea verkkosalasanan käyttö on hyvä ja yksinkertainen tapa rajoittaa verkon käyttöä.

Langalliseen tai langattomaan verkkoon pääsy voidaan rajata myös vain tietyille laitteille. Linkkikerroksella Ethernet-verkossa käytettävä MAC-osoite on yksi mahdollinen tapa rajoittaa verkon käyttöä. Perinteisesti laitteilla on ollut kiinteä MAC-osoite, jolla laite voidaan tunnistaa. Nykyisin laitteiden MAC-osoitteita voidaan ohjelmallisesti vaihtaa, joten tämä ei enää ole kovin turvallinen tapa rajoittaa verkkoon liitettäviä laitteita.


### Luvattoman tulevan liikenteen estäminen - Palomuuri

Verkon suojauksessa on erittäin tärkeää estää luvaton tunkeutuminen verkkoon tietoliikenneyhteyden kautta. Valtaosa erilaisista tietoliikenteen hyökkäyksistä tapahtuu ulkopuolisesta verkosta käsin. Tässä suojauksessa keskeinen elementti on kotiverkon ja palveluntarjoajan välistä liikennettä välittävä reititin. Reititin välittää kotiverkkoon päin kaiken liikenteen joka on osoitettu jollekin kyseisen verkon laitteelle. Muu liikenne jää operaattorin verkkoon eikä kuormita kotiverkon yhteyksiä.

Valitettavasti suuri osa internet-verkon hyökkäyksistä perustuu siihen, että viestejä lähetetään kaikkiin mahdollisiin osoitteisiin ja yritetään löytää laitetta, jossa olisi erilaisia tietoturvahaavoittuvuuksia sisältäviä ohjelmia. Tällainen verkkotiedustelu eli porttiskannaus (engl. port scanning) on mahdollista estää palomuurilla tai sitä kehittyneemmillä järjestelmillä. Palomuurin tehtävänä on tarkkailla liikennettä ja estää sellaiset viestit, jotka esimerkiksi yrittävät ottaa yhteyttä sellaisiin portteihin, joita ei ole tarkoitettu verkon ulkopuolisille käyttäjille.

Osa palomuuriohjelmistoista tai laitteista on oletusarvoisesti auki, jolloin ne eivät estä mitään liikennettä ja osa puolestaan on oletusarvioisesti suljettuja, jolloin ne estävät lähes kaiken liikenteen. Emme opettele tällä kurssilla palomuurien asetusten säätämistä, vaan se jää tietoturva- ja/tai ylläpito- teemaisten kurssien tehtäväksi.

## Laitteiden suojaus - käyttäjätunnukset yms.

Verkon liikenteen suojaamisen lisäksi on ihan yhtä tärkeää suojata verkon laitteet luvattomalta käytöltä. Tämä suojaaminen usein perustuu käyttäjätunnuksiin ja salasanoihin. Useimmilla verkkolaitteillakin on hallintatunnus (esimerkiksi admin) ja sillä salasana. Tämä salasana saattaa vieläkin olla turhan helppo arvata tai olla jopa sama kaikilla laitteilla. Tällöin tärkeää vaihtaa salasana riittävän vahvaksi ja aidosti salaiseksi.

Joissakin markkinoilla olevissa WLAN-laitteissa hallintatunnuksen oletussalasana on sama kuin verkon salasana. Jos salasana on riittävän hyvä ja voidaan luottaa kaikkiin verkon käyttäjiin, niin silloin oletussalasanaa ei ehkä tarvitse vaihtaa.

Salasanojen hallinnasta on vuonna 2014 julkaistu [Viestintäviraston kyberturvallisuuskeskuksen ohje](https://www.kyberturvallisuuskeskus.fi/sites/default/files/media/file/Salasanat_haltuun.pdf).

Salasanat eivät ole tämän kurssin keskeistä sisältöä, mutta jokaiselle joka ylläpitää tai hallinnoi omaa tietoliikenneverkkoaan niiden oikea käyttö on tärkeä osa oman verkon turvallisuutta.

<div><quiz id="5c790cf3ddb6b814af3271b0"></quiz></div>

<div><quiz id="5c791dc5fd9fd71425c67eaf"></quiz></div>

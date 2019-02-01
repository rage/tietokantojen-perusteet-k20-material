---
path: '/osa-2/2-suojaus'
title: 'Viestien ja verkon suojaus'
---

<div> Kotiverkossakin on tärkeää, että verkko ja siellä kulkevat viestit on asianmukaisesti suojattu eivätkä ulkopuoliset tahot pääse käyttämään verkkoa tai lukemaan siellä kulkevien viestien sisältöjä</div>

## Salaus

Jotta voimme suojata verkon liikennettä ja siellä kulkevia viestejä, ne pitää salata. Salaaminen tarkoittaa viestin sisällön muokkaamista siten, että se ei ole ulkopuolisten luettavissa. Yksikertaisia esimerkkejä ovat erilaiset historialliset salakirjoitustekniikat (katso wikipedia sivua kryptologia, jos asia kiinnostaa enemmän https://fi.wikipedia.org/wiki/Kryptologia).

Tietokoneiden nykyisin käyttämät salausmenetelmät perustuvat edistyneeseen matematiikkaan. Me emme tutustu itse salausmenetelmien toimintaan tai niihin liittyviin analyyseihin, vaan otamme ne annettuna ja käytämme muualla kehitettyjä salausmenetelmiä tietoliikenteessä viestien välityksen turvaamiseen.

Kaikki salausmenetelmät käyttävät yhtä tai useampaa avainta, jonka avulla selkokielisen viestin salaaminen salakieliseksi viestiksi tehdään. Avainta tarvitaan myös salakielisen viestin purkamiseksi takaisin selkokieliseksi. Eri salausmenetelmät käyttävät erilaisia avaimia. Joissakin menetelmissä sekä salaaminen että purkaminen tehdään samalla avaimella ja toisissa menetelmissä käytössä on avainpari, joista toista käytetään salaamiseen ja toista purkamiseen.

Paljon käytetty <b>julkisen avaimen salakirjoitus</b> perustuu avainpareihin, joista toinen on oma salainen avain ja toinen julkinen avain. Julkinen avain voidaan nimensä mukaisesti vapaasti jakaa muille, joiden kanssa luottamuksellisia viestejä halutaan vaihtaa. Kaikki, joilla on julkinen avain, voivat purkaa salaisella avaimella salatun viestin, mutta eivät julkisella avaimella salattua viestiä. Omalla salaisella avaimella voi purkaa julkisella avaimella salatut viestit.  Tällainen salaus on esimerkiksi RSA.

<b>Symmetrisen avaimen salakirjoituksessa</b> käytetään samaa avainta sekä salaamiseen että purkamiseen. Tällöin kaikki, joilla on ko. avain voivat purkaa kaikki samalla avaimella salatut viestit. Esimerkki symmetrisen avaimen käytöstä voisi olla vaikkapa AES.

Näiden salausmenetelmien turvallisuus perustuu hyvään avainhallintaan. Emmehän ne jaa kotiavaintakaan (tai sen kopioita) vapaasti muille. Samoin pitää menetellä oman salaisen avaimen kanssa. Jos joku epäluotettava taho saa haltuunsa minun salaisen avaimeni, niin mikään minun viestintäni ei ole sen jälkeen enää luottamuksellista, koska tämä taho voi vapaasti tutkia kaikkia minulle tulevia salattuja viestejä. Julkinen avain on helpommin saatavilla, joten voimme olettaa epäluotettavalla taholla ainakin sen olevan käytössä.

## Viestien salaus

Tietoliikenteessä viestien sisällön salaamiseen käytetään usein erityisiä salausprotokollia. Ne voivat sijoittua protokollapinon eri kerroksille. Esimerkiksi sovelluskerroksen HTTP-protokollasta on kehitetty HTTPS-protokolla, joka salaa lähettäjän ja vastaanottajan väliset viestit. Se käyttää kuljetuskerroksen TLS-protokollaa viestin salaamiseen kuljetuskerroksella. Vastaavasti verkkokerroksella on oma salausprotokolla IPsec. Linkkikerroksella erityisesti langattomissa verkoissa käytetään myös salausprotokollia viestien suojaamiseen langattoman yhteyden yli.

Koska jokainen kerros voi lisätä mukaan oman salauksensa, on aina mahdollista, että viesti salataan useampaan kertaan eri menetelmillä. Tämä useampaan kertaan salaaminen ei sinänsä paranna salauksen turvallisuutta, jos avainten hallinta ei ole kunnossa.

Tällä kurssilla keskitymme tietoliikenneverkon ja sen protokollien perustoiminnallisuuteen ja siksi jätämme nämä salaavat protokollat vähemmälle huomiolle.

## Verkon suojaus

Tietoliikenteeseen kotiverkossa voi kohdistua monenlaisia uhkia ja niiltä täytyy suojautua eri tavalla. Kotiverkon luvaton käyttö kotiverkon sisällä edellyttää, että verkkoon pääsy on jollain tavalla rajattu. Liikenteen kuuntelun estämiseen tyypillisesti käytetään liikenteen salausta. Ulkopuolisesta verkosta tulevaa liikennettä voidaan suodattaa palomuurilla, jolloin vain aidosti omaan verkkoon tulossa oleva liikenne pääse palomuurin läpi.

### Luvattoman käytön estäminen verkon sisällä

Jos kaikki kotiverkon laitteet liikennöivät parikaapelilla tai valokuidulla, niin käytön estämiseen riittää se, että fyysinen pääsy verkkoliittimiin estetään.

Useimmissa kotiverkoissa on kuitenkin käytössä myös langaton verkko, jonka suojaaminen on haastellisempaa, koska verkko kuuluu myös ulkopuoliseen tilaan ja fyysinen pääsy kuuluvuusalueelle on usein mahdotonta estää. Langattoman verkon osalta luvaton käyttö voidaan estää käyttämällä WLAN-verkkosalasanaa. Useimmissa WLAN-tukiasemissa on nykyään jo valmiiksi asennettuna verkkosalasana, jota edellytetään, jotta verkkoon voi liittyä. Kaikki laitteet, jotka antavat oikean verkkosalasanan saavat pääsyn verkkoon. Helpot salasanat on suhteellisen helppo arvata. Riittävän vaikea verkkosalasanan käyttö on hyvä ja yksinkertainen tapa rajoittaa verkon käyttöä.

Langalliseen tai langattomaan verkkoon pääsy voidaan rajata myös vain tietyille laitteille. Linkkikerroksella Ethernet-verkossa käytettävä MAC-osoite on yksi mahdollinen tapa rajoittaa verkon käyttöä. Perinteisesti laitteilla on ollut kiinteä MAC-osoite, jolla laite voidaan tunnistaa. Nykyisin laitteiden MAC-osoitteita voidaan ohjelmallisesti vaihtaa, joten tämä ei enää ole kovin turvallinen tapa rajoittaa verkkoon liitettäviä laitteita.


### Luvattoman tulevan liikenteen estäminen - Palomuuri

Verkon suojauksessa on erittäin tärkeää estää luvaton tunkeutuminen verkkoon tietoliikenneyhteyden kautta. Valtaosa erilaisista tietoliikenteen hyökkäyksistä tapahtuu ulkopuolisesta verkosta käsin. Tässä suojauksessa keskeinen elementti on kotiverkon ja palveluntajoajan välistä liikennettä välittävä reititin tai verkkomodeemi. Näissä laitteissa on usein

## Laitteiden suojaus - käyttäjätunnukset yms.




-- kuva: ch-2-2-nouto-suor-kesk-sykli-draft   # kalvo 5.3
<div>
<illustrations motive="ch-2-2-nouto-suor-kesk-sykli-draft"></illustrations>
</div>



-- quiz 2.2 Väitteet käskyjen nouto- ja suoritussyklistä
<div><quiznator id="5bc9a7f2c8bd874eb50b7b13"></quiznator></div>

---
path: '/osa-3/3-ftp'
title: 'Tiedostojen jakelu'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata miten tiedostojen jakopalvelut yleisellä tasolla toimivat
- Osaat perustella miksi ftp-protokolla on kaksi erillistä yhteyskanavaa

</text-box>


## Tiedostonjakopalvelu


Tiedostojen jakelu oli yksi ensimmäisistä internetin palveluista. Se on ollut mukana internetin toiminnassa ihan alkusta asti. Tiedostojensiirtoprotokolla FTP (File Transfer Protocol) on edelleen käytössä, vaikka sen rinnalle on tullut paljon muitakin tiedostojen siirtoon ja jakeluun suunniteltuja protokollia ja palveluja. 

Tiedostoista on siirrytty jo puhumaan sisällöstä, koska tavalliselle käyttäjälle ei ole enää merkitystä sillä onko tieto yhdessä vai useammassa tiedostossa. Sisältö on tärkeämpää. Ohjelmistopäivitysten, elokuvien ja videomateriaalin välittäminen verkossa vaatii paljon verkon kapasiteetista ja yhden yksittäisen palvelimen kautta ei voitaisi enää edes jakaa samaa määrää tietoa. Siksi onkin kehitetty erityisiä sisällönjakoverkkoja (Content Delivery Network, CDN), joiden avulla pyritään siihen, että käyttäjät saavat sisällön joustavasti eikä verkko kokonaisuudessaan tai jostain yhdestä kohtaa kuormitu liikaa.

Tutustutaan ensin tuohon perinteiseen ja yksinkertaisempaan tiedostojen siirtoon FTP ja sen jälkeen katsotaan lyhyesti näitä uudempia palveluja.

## FTP

FTP palvelu poikkeeaa aiemmn tarkastellusta WWW-palvelusta monella eri tavalla. FTP-protokollan määrittelyn mukaan asiakkaan ja palvelimen välinen kommunikointi on WWW:tä monipuolisempaa ja FTP-palvelimen pitää pitää kirjaa siitä, millaisia viestejä asiakkaalta on aiemmin tullut eli FTP-palvelimella on tila. Muistithan, että WWW-palvelin oli tilaton. Tämä tilatiedon ylläpito edellyttää, että FTP:n asiakkaan ja palvelimen välinen yhteys on koko ajan olemassa, jotta palvelin voi unohtaa asiakkaaseen liittyvän tilatiedon, kun yhteys suljetaan. Tällä kontrolliyhteydessä asiakas välittää toimenpidepyyntöjä palvelimelle. Tällaisia voivat olla mm. hakemiston tiedostolistaus, hakemiston vaihto, tiedosto nouto- tai tallennuspyynnöt. Varsinaista tiedoston siirtoa varten asiakas ja palvelin avaavat uuden erillisen yhteyden, jossa tiedoston siirto tapahtuu. Tämä datayhteys suljetaan heti, kun tiedosto on siirretty.

## Kuva FTP:stä. Voisi mukailla kirjan kuvaa 2.15  (kalvoissa on hiukan hauskemman näköinen versio)

Asiakkaan ottaa siis aluksi yhteyttä palvelimen portiin 21. Tämä on tuo kontrolliyhteys, joka on avoinna koko toiminnan ajan. Tiedostonsiirtoa varten yhteyden muodostaminen aloittaakin palvelin, joka ottaa yhteyttä asiakkaan porttiin 20. Kun yhteys on muodostettu, tässä yhteydessä välitetään vain tiedoston sisältö sellaisenaan. Kun tiedosto päättyy, niin palvelin sulkee tämä datayhteyden.

Palvelin voi muodostaa datayhteyden vain, kun molemmilla laitteilla on julkinen IP-osoite (tai molemmat ovat samassa yksityisessä verkossa). Näin oli todella pitkään internetin alkuvaiheissa. Tätä kutsutaan aktiivimoodiksi, koska palvelin on aktiivinen yhteyden muodostaja. Myöhemmin, kun yksityisten verkkojen yhdistäminen julkiseen verkkoon tuli NAT toiminnallisuuden avulla yleisemmäksi, ei palvelin enää voinutkaan muodostaa yhteyttä asiakkaaseen. Jotta NATin takana oleva asiakaskin voisi käyttää FTP-palvelua on sen muodostettava tuo datayhteys. Tätä varten asiakkaan pitää pyytää palvelinta siirtymään passiivimoodiin ja kertomaan mihin IP-osoitteeseen ja porttiin asiakkaan pitää yhteys muodostaa. Tiedostonsiirto toki tapahtuu samoin kuin aktiivimoodissa, mutta aloitteentekijä yhteyden muodostuksessa on eri.

Kontrolliyhteyden ja datayhteyden erottaminen on suhteellisen tavanomaista nykyisissä palveluissa. Tämä ratkaisumalli on siis paljon yleisempi, koska se usein helpottaa järjestelmän toteuttamista. Joskus erilaisille toiminnoille muodostetaan jopa useampiakin yhteyksiä, jotta eri toiminnot voidaan helpommin pitää erillään.

FTP:tä ei enää perusmuotoisena käytetä, koska se ei salaa kontrolliyhteyden viestejä. Koska viestejä ei salata, niin asiakkaan käyttäjä tunnus ja salasana siirretään selväkielisenä asiakkaalta palvelimelle. Nykypäivänä tätä ei enää pidetä millään tavalla turvallisena toimintana. Modernimmat FTP-pavelut käyttävät salausta. 

Funet ylläpitää edelleen FTP-palvelua ftp.funet.fi. Se oli aikoinaan merkittävä suomalainen tiedostojenjakopalvelu. Esimerkiksi LINUX-käyttöjärjestelmän ensimmäiset versiot olivat jaossa nimenomaan sen kautta.

FTP-palveluissakin pyrittiin välttämään verkon kuormittamista käyttämällä erityisiä peilisolmuja (Mirror cite), joihin tiedostoja siirrettiin lähemmäs oletettuja käyttäjiä. Käyttäjien velvollisuus oli miettiä mikä mahdollisista peilisolmuista olisi itselle sopivin ja ottaa sitten yhteyttä suoraan siihen.



Sisällönjakeluverkko

Sisällönjakeluverkot on kehitetty nykyisen internetin käyttötapoihin sopiviksi. Vaikka FTP ja muut puhtaasti tiedostojen jakeluun kehitetyt järjestelmätkin edelleen toimivat, niin sisällönjakeluverkkojen keskeinen tavoite on vähentää verkkoliikenne ja taata häiriötön datan kulku palveluntarjoajalta asiakkaalle. Laajimmat maailmanlaajuiset verkot toimivat ainakin osittain internetin ulkopuolella, jotta jakeluverkon ylläpitäjällä on täysi kontrolli verkossa liikkuvaan tietoon. Tällöin verkosta on useita erillisiä liityntäpisteitä, joista sisältöä jaellaan internetissä oleville asiakkaille.

Wikipediassa on lyhyt kuvaus sisällönjakeluverkoista https://fi.wikipedia.org/wiki/Sis%C3%A4ll%C3%B6njakeluverkko. Kuvauksessa on mainittu useita kaupallisia toimijoita, joilla on omia sisällönjakeluverkkoja.

Yleensä käyttäjä käyttää jotain sovellusta, joka sitten sisäisesti käyttääkin sisällön siirtoon jotain tiettyä sisällönjakopalvelua tarjoavaa organisaatiota. Käyttäjällä ei välttämättä ole edes käsitystä siitä, että tieto kulkeekin erillisen sisällönjakelijan kautta. Hyvä esimerkki tästä on Ylen vunna 2015 laatima kuvaus sen Areena palvelun toiminnasta: https://yle.fi/aihe/artikkeli/2015/01/15/nain-areenan-jakelu-toimii

NOTE: Muistathan, että käytän termiä käyttäjä ihmisistä ja termiä asiakas laitteesta tai sen ohjelmistosta. Käyttäjä siis käyttää esimerkiksi tablettia, joka asiakkaana ottaa yhteyttä erilaisiin verkon palveluihin.





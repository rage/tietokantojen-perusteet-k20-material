---
path: '/osa-3/2-listat'
title: 'WWW ja HTTP'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>


- Tiedät miten http protokollana toimii
- Osaat kertoa millainen protokollan viestin rakenne on ja millaisia arvoja eri kentillä on
- Hahmotat myös miten protokollan toiminnallisuuteen vaikuttaa viestin rakenne ja kenttien arvot

</text-box>

## WWW-palvelu


Ykkösosiosta toivottavasti muistat, että WWW-sivuihin viitataan URL-osoitteella. Esimerkiksi tämän sivun URL-osoite on https://tilpe-19.now.sh/osa-3/2-www-ja-http. Osoitteen alku https kertoo, että kommunikointi web-selaimen ja web-palvelimen välillä tapahtuu käyttäen HTTPS protokolla. Se on HTTP-protokollan salattu versio. Tällä kurssilla tutustumme HTTP-protokollaan, jota ei ole salattu. Seuraava osa tilpe-19.now.sh on web-palvelimen nimi. Tämän nimen perusteella tietoliikenteessä osataan ensin hakea laitteen oikea IP-osoite DNS-nimipalvelun avulla. Koska näitä sivuja jakava web-palvelin toimii googlen pilvipalvelulla, niin eri käyttäjät voivat saada sille eri IP-osoitteen. Minulle sivut tulivat juuri äsken IP-osoitteesta 130.211.93.80.

Web-palvelimet ja web-selaimet käyttävät omaan keskinäiseen kommunikointiinsa HTTP-protokollaa. HTTP-protokolla on meidän ihmisten kannalta sikäli kiva, että se on tekstipohjainen, joten meidän on helppo lukea protokollan viestejä ja niiden sisältöjä. Jotkut muut protokollat siirtävät viestejä binäärilukuina. Yksi esimerkki tällaisesta protokollasta on HTTP:stä kehitetty salattu versio HTTPS. 

## Tähän kuva, jossa on www-palvelin keskellä ja useita eri asiakasselaimia ympärissä. Yhdistävissä kaksipäisissä nuolissa voisi lukea http


## HTTP - protokolla

Ensimmäisesssä versiossa HTTP-protokollasta oli määritelty vain sivun noutoon tarvittavat GET pyyntö ja siihen liittyvä vastaus. Nämä ovat edelleen eniten käytetyt HTTP-protokollan viestit. Uudemmassa protokollassa on lisäksi paljon enemmän viestityyppejä, joiden avulla nettiselain voi myös antaa tietoja palvelimelle eikä vain pyytää siltä tietoja. Tämän kurssin osalta tarkastelemme lähinnä GET pyyntöä. Jos sinua kiinnostavat myös nuo muut viestityypit, niin wikipedian artikkelissa https://fi.wikipedia.org/wiki/HTTP on lyhyet kuvaukset niistä.  
 
HTTP on siis siirtoprotokolla, joka huolehtii www-sivun sisällön siirtämisestä palvelimelta asiakkaalle. Siirto tapahtuu asiakkaan pyynnöstä.  HTTP:n kaikki sanomat ovat tekstimuotoisia, joten niitä on ihmistenkin helppo lukea. Esimerkiksi oheinen suoraan wikipedian sivulta https://fi.wikipedia.org/wiki/HTTP lainattu GET pyyntö

<text-box variant='example' name='HTTP Get pyyntö'>

GET /wiki/HTTP HTTP/1.1
Host: fi.wikipedia.org
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; fi-FI; rv:1.6) Gecko/20040206 Firefox/0.8
Accept: application/x-shockwave-flash,text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,video/x-mng,image/png,image/jpeg,image/gif;q=0.2,*/*;q=0.1
Accept-Language: fi,en;q=0.7,en-us;q=0.3
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Proxy-Connection: keep-alive
Referer: http://fi.wikipedia.org/w/wiki.phtml?title=HTTP
Cache-Control: max-age=0

</text-box>

Tästä näkyy hyvin tuo viestin rakenne. Viesti alkaa sanalla GET, jota seuraa pyydettävän sivun tunniste /wiki/HTP ja käytettävän protokollan nimi ja versionumero. Muut rivit ovat tähän viestin liittyviä määrämuotoisia attribuutteja. Kukin rivi alkaa attribuutin nimellä, jota seuraa kaksoispiste. Loppurivi on sitten kyseisen attribuutin arvo. Jotkut attribuutit ovat valinnaisia ja jotkut pakollisia. Esimerkiksi HTTP versio 1.1 edellyttää, että viestissä on aina Host attribuutti, jonka arvona on sen www-palvelimen nimi, jolle viesti on osoitettu.

HTTP protokolla on tilaton (stateless). Tämä tarkoittaa sitä, että selaimen tai palvelimen ei tarvitse muistaa mitä oltiin tekemässä, vaan jokainen viestipari käsitellään muista irrallisena tapahtuna. Tämä muistamattomuus helpottaa sovelluksen suunnittelua ja toteutusta, kun ei tarvitse pitää kirjaa siitä mitä on aiemmin tehty.

HTTP käyttää TCP:tä viestien välittämiseen. TCP on yhteydellinen, joten asiakas (eli selain) ja palvelin voivat erikseen sopia yhteyden säilyttämisestä tulevia pyyntöjä varten tai palvelin voi sulkea yhteyden heti vastausviestin lähetettyään, jolloin asiakas joutuu avaamaan uuden yhteyden seuraavalle pyynnölle. Koska www-sivun muodostaminen yleensä edellyttää useita sivun elementtien pyyntöjä, niin usein asiakas ja palvelin sopivat yhteyden säilyttämisestä. Toisaalta yhteyden säilyttäminen tilanteessa, jossa lisäpyyntöjä ei tulekaan, kuormittaa palvelimen rajallisia yhteyksiä.

kun kaikki kuvat ja muut osat joudutaan hakemaan erikseen sivun kuvaus kielen HTML:n määrittelyjen mukaan.
-- 


## HTML - kuvauskieli

HTTP-protokolla ja sen viesteillä www-selain ja www-palvelin voivat siirtää www-sivun kuvauksen palvelimen tietovarastoista selaimelle, joka voi sen sitten näyttää käyttäjälle. HTTP-protokolla ei ota kantaa siiten mitä tuolla sivulla on tai miten sivu on rakennettu. Sitä varten on ihan oma HTML-kieli, jolla www-sivun sisältö yleensä kuvataan. Tällä sivun sisällön kuvaamisella ei ole mitään tekemistä tietoliikenteen kanssa ja siksi emme tuota HTML-kieltä tässä opiskele. Kielestä ja sen kehitysprosessistä on suomenkielinen kuvaus wikipediassa https://fi.wikipedia.org/wiki/HTML. Jos haluat kurssin ulkopuolella tutustua tähän aiheeseen lisää, yksi mahdollisuus on lukea Jukka Korpelan Web-julkaisemisen opas http://jkorpela.fi/webjulk/all.html.

Tämä sisällön kuvauksen ja siirtoprotokollan välinen erillisyys on vahva ajattelumalli koko tiedonsiirron taustalla. Tiedonsiirrossa keskitytään vain siihen, että sisältö saadaan siirrettyä muuttumattomana paikasta toiseen, mutta ei oteta lainkaan kantaa siihen mitä sisältöä siirretään. Tähän ajattelumalliin perustuvat useimmat sisältöä jakavat palvelut, kuten Facebook, Snapchat, Napster, Youtube, jne. Osalle näistä sisältäpalvelua tuottaville organisaatioille on viranomaisten taholta asetettu myöhemmin (tai jo alunperin) vaatimuksia myös sisällön valvontaan.

## Evästeet 

Eväste (engl. cookie) on Tietotekniikan termitalkoiden määritelmän mukaan aputiedosto tai tunniste, jonka sisältämiä tietoja voidaan käyttää selaimen ja palvelimen välisen yhteydenpidon ohjaamiseen.

Palvelimet käyttävät evästeitä, koska niiden avulla voi tavallaan kiertää tuota tilattomuutta. Palvelimen ei itsensä tarvitse ylläpitää jokaiseen asiakkaaseen liittyvää tilaa, vaan tilatietoa ylläpidetään asiakkaalle annetun evästeen avulla. Asiakas saa evästeen palvelimelta osana HTTP-protokollan vastausviestiä ja antaa evästeen takaisin palvelimelle aina lähettäessään sille HTTP-protokollan mukaisen viestin. Näin palvelimen tarvitsema tilatietoa kulkee viestien mukana ja sitä säilytetään aina asiakkaalla väliaikoina.

## Mukaeltu kuva kirjan kuvasta 2.10  (Voisi olla jokin hauskempi sisältö, esim. tilaus, käyttöoikeus tms.

Palvelin voi siis tallettaa eväisteisiin tarvitsemiaan tietoja. Tyypillinen eväste on cfduid, johon palvelin yleensä tallettaa käyttäjän yksilöivän tunnisteen. Näin palvelin voi yhdistää saapuvan HTTP pyynnön aiempiin pyyntöihin ja selvittää mitä kyseinen käyttäjä on aiemmin palvelimen kanssa tehnyt. Näin palvelin voi analysoida saapuneita pyyntöjä ja havaita mitkä pyynnöt liittyvät samaan käyttäjään. Tälla voi olla nettipalvelun tarjoajan kannalta merkitystä esim. kohdennetussa mainonnassa tai vaikkapa palvelun esi osien kiinnostavuutta arvioitaessa.

Voit omasta selaimestasi hallinnoida evästeitä ja jopa katsoa mihin kaikkiin sivustoihin sinun selaimessasi on tallessa evästeitä. Varsin monet sivut käyttävät googlen analytiikkaa sivujen käyttötietojen seurannassa. Tähän liittyen minullakin on selaimessani paljon ga evästeitä eri sivustoilta.

Jos haluat selvittää mitä eri evästeet tarkoittavat tai mihin käyttötarkoitukseen ne todennäköisesti liittyvät, on englanninkieliselle sivustolle https://cookiepedia.co.uk/all-about-cookies koottu evästeisiin liittyvää informaatiota. Siellä voi tehdä hakuja evästeen nimellä.

## Tehtävä: Etsi omalta koneeltasi tämän kurssin evästeistä _ga. Minä vuonna kyseisen evästeen voimassaolo päättyy (expires) 2019, 2020, 2021,2022? 


## Välityspalvelin

Välityspalvelin (engl. proxy server) hakee internetistä tietoa työasemien puolesta ja säilyttää työasemien toistuvasti käyttämiä tietoja niiden saannin nopeuttamiseksi (Lähde: tietotekniikan termitalkoot). WWW-palvelun kannalta se siis sijoittuu www-selaimen ja www-palvelun väliin. Välityspalvelimia käyttävät yleensä suuret organisaatiot, jolloin ne voivat pienentää omasta organisaatiosta ulkopuolisille www-palvelimille menevää liikennettä silloin, kun useammat organisaation sisäverkon asiakkaan haluavat käyttää samaa sivua. Välityspalvelin pitää siis omassa välimuistissaan (engl. cache) aiemmin pyydettyjä sivuja, joita se sitten antaa vastauksena pyyntöihin. Esimerkiksi Helsingin yliopistolla on oma välityspalvelin, myös useimmilla kotiverkoille internet yhteyksiä tarjoavilla organisaatioilla on omat välityspalvelimet. 

## Kuva kolmesta laatikosta asiakas - välityspalvelin - palvelin

Välityspalvelin siis katkaisee aiemmin suoran yhteyden asiakkaan ja palvelimen välillä ja ottaa itselleen molemmat roolit. Se toimii palvelimena alkuperäiselle asiakkaalle ja asiakkaana alkuperäiselle palvelimelle. Samalla se vaikuttaa evästeiden käyttöön, kun ne eivät valukaan alkuperäiseltä palvelimelta alkuperäiselle asiakkaalle vaan alkuperäisen palvelimen lähettävät evästeet jäävät välityspalvelimelle.

Koska verkkoliikenne ei ole ilmaista, niin näin organisaatiot voivat vähentää liikennettä ja säätää kuluissa. Jos vaikkapa ajatellaan, että Helsingin yliopiston verkkokurssilla opiskelijoiden pitää katsoa joku youtubeen taltioitu video, niin silloin video siirretään vain kertaalleen youtuben palvelimelta yliopiston välityspalvelimelle ja opiskelijoiden selaimet hakevatkin videon tältä välityspalvelimelta eivätkä suoraan youtuben palvelimelta. Tämä toki edellyttää, että youtuben palvelin sallii sisällön tilapäisen varastoinnin välityspalvelimella. WWW-palvelin voi vastausviestinsä attribuuttien avulla ohjata tätä toimintaa ja halutessaan jopa kieltää tällaisen välivarastoinnin.

## Tehtävä voisi olla jonkunlainen oikein väärin väittämiä tai jotain muuta jolla testataan tekstin lukeminen.

## Toisaalta tehtävä voisi olla myös joltain sivulta selvittää jokin HTTP-protokollan argumentti ja sen käyttö. Tämän voisi laittaa jopa vertaisarvioitavaksi pikku esseeksi.



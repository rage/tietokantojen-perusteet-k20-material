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

HTTP käyttää TCP:tä viestien välittämiseen. TCP on yhteydellinen, joten selaimen pitää ottaa kantaa siihen käytetäänkö samaa TCP yhteyttä useammille viesteille vai ei. Molemmiss samaa yhteyttä pitkin selain ja palvelin voivat vaihtaa useampia viestejä. Usein www-sivun muodostaminen edellyttääkin useita sivun elementtien pyyntöjä, kun kaikki kuvat ja muut osat joudutaan hakemaan erikseen sivun kuvaus kielen HTML:n määrittelyjen mukaan.
-- TÄhän lisää pähkäilyä






## HTML



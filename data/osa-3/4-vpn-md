---
path: '/osa-3/3-taulukot'
title: 'Virtuaalinen yksityisverkko (VPN)'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mikä virtuaalinen yksityisverkko on.
- Osaat kertoa milloin ja miksi sitä käytetään tai kannattaisi käyttää.

</text-box>


## Virtuaalinen yksityisverkko


Virtuaalinen yksityisverkko (engl. virtual private network, VPN) tapa muodostaa suojattu yhteys esimerkiksi työpaikan verkkoon silloinkin, kun todellisuudessa on jossain muualla. VPN-yhteyden avulla oman koneensa saa liitettyä työpaikanverkkoon siten, että koneella ovat käytettävissä ihan samat palvelut kuin työpaikallakin. Usein tietoturvan parantamiseksi organisaatiot rajoittavat palvelujen käyttöä ja näkyvyyttä siten, että ne ovat käytettävissä vain organisaation omassa verkossa.

Esimerkiksi Helsingin yliopiston opiskelijoille ja henkilökunnalle on käytettävissä paljon enemmän palveluja yliopiston omassa verkossa kuin verkon ulkopuolella. Moni meistä on törmännyt tähän esimerkiksi tieteellisten artikkelien kanssa. Artikkeli on luettavissa ilman maksua, kun sen hakee yliopiston verkossa, mutta kun samaa artikkelia yrittää lukea kotiverkosta käsin, niin artikkelin julkaisija haluaakin maksun siitä. Tällöin tilanne on helppo ratkaista muodostamalla ensin VPN-yhteys yliopiston verkkoon ja sitten hakemalla kyseinen artikkeli.

Ajatuksellisesti VPN-yhteys on siis jonkinlainen suojattu putki tai tunneli, joka johtaa omalta koneelta organisaation VPN-palvelimelle ja johon kukaan matkanvarrella oleva ulkopuolinen toimija ei voi nähdä sisälle. Näin se on helppo vielä hahmottaa. Lisätään tähän vähän yksityiskohtia lisää. Putken sisällä liikenne on organisaation oman sisäisen verkon liikennettä, eli esimerkiksi www-selaimen lähettämiä pyyntöjä ja sen saamia vastauksia. Putken ulkopuolella liikenne puolestaan on julkisen internetin liikennettä. Sisäpuolella liikennöidään siis yrityksn sisäverkon IP-osoitteilla ja ulkopuolella julkisen internetin osoitteilla. 

## Kuva, jossa yksi protokollapinon sovellus, kuljetus ja verkko kerrokset on piilotettu sovelluskerroksen sisään/lievästi yläpuolelle)

Lähettäjän sovellus lähettää viestin normaalisti ja protokollapinon eri kerroksilla siitä muodostetaan sisäverkon paketti. Koska sitä ei IP-osoitteidensa vuoksi voida suoraan lähettää julkiseen verkkoon. Tämä paketti sijoitetaan ulkoverkon paketin sisään dataksi. Ulkoverkon paketti voidaan sitten lähettää vastaanottajalle, jonka VPN-palvelin vastaanottaa ulkoverkon paketin. Palvelin avaa datan ja ottaa sieltä tuon sisäverkon paketin, jonka se lähettää nyt sisäverkosta lopulliselle kohteelleen. Viestien paketointiin tutustutaan hiukan tarkemmin seuraavassa osiossa, jossa katsotaan muita protokollan pinon kerroksia ja niiden toimintoja.

## Tässä voisi olla jonkunlainen pieni avokysymys ja siihen vastaus, jonka muut opiskelijat arvioivat tai sitten vain oikein väärin väittämiä.

---
path: '/osa-3/5-muita'
title: 'Muita esimerkkejä'
hidden: false
---

## Muita esimerkkejä sovelluskerroksen protokollista

WWW-palvelun, tiedostopalvelujen ja virtuaalisen yksityisverkon lisäksi sovelluskerroksella on satoja muitakin palveluja ja niiden omia protokollia.  Yksi yleisimmistä on sähköpostin lähettämisessä käytetty SMTP.

## Sähköposti

Sähköpostipalvelu poikkeaa aiemmista palveluista siinä, että sähköpostin lähettämiseen sähköpostipalvelimelle käytetään SMTP-protokolla (Simple Mail Transfer Protocol), mutta viestien noutamiseen lukemista varten käytetäänkin ihan eri protokollia. Tämä johtuu siitä, että aikoinaan sähköpostia luettiin vain kirjautumalla suoraan sähköpostipalvelimelle ja suorittamalla postin lukeminen paikallisesti palvelimelle. Siksi ei tarvittu muita protokollia, koska viestejä ei koskaan luettu tietoliikenne verkon avulla muualta. Nyt jo ihan tietoturvasyistä sähköpostipalvelimelle kirjautumista ei sallita, joten sähköpostien lukeminen on mahdollista vain erityisillä sähköpostin lukemiseen tarkoitetuilla sovelluksilla tai verkkoselaimen avulla. Verkkoselain käyttää WWW-palvelimen kanssa kommunikoidessaan tuota HTP protokolla. Sähköpostiohjelmat (kuten Thunderbird, Outlook sekä kännyköiden omat sähköpostisovellukset) kommunikoivat sähköpostipalvelimen kanssa yleensä joko IMAP tai POP3 protokollilla. IMAP (Internet Message Access Protocol) on kuvattuna tarkemmin wikipedian sivulla https://fi.wikipedia.org/wiki/IMAP. POP3 (Post Office Protocol version 3) on kuvattu vastaavasti wikipedian sivulla https://fi.wikipedia.org/wiki/POP3.

Sähköpostijärjestelmän eri vaiheiden protokollat käyttäytyvät eri tavalla. Lähetysvaiheessa käytettävä SMTP on niin sanottu PUSH-tyyppinen protokolla. Siinä sähköpostin lähettäjä 'työntää' tiedon sähköpostipalvelimelle ilman, että palvelin tekee aktiivisesti mitään. Aktiivinen toimija on siis postin lähettäjä. Lukuvaiheessa käytettävät protokollat IMAP ja POP3 ovat ns. PULL-tyyppisiä protokollia. Niissä  sähköpostin lukijan täytyy itse aktiivisesti ottaa yhteyttä tiedon tuottajaan ja 'vetää' sähköpostin sisältö palvelimelta itselleen. Tämä protokollien eri osapuolten aktiivisuus on myö seikka, joka palvelun ja protokollien suunnittelijoiden täytyy ottaa huomioon.

Roskapostin lähettäjät hyödyntävät vahvasti tätä sähköpostien lähettämisen PUSH-periaatetta. Ne voivat ottaa yhteyttä sähköpostipalvelimeen ja antaa sille sähköpostiviestin välitettäväksi sähköpostin vastaanottajalle. Alkuperäisessä SMTP:ssä sähköpostipalvelimen piti vastaanottaa kaikki sille annetut viestit. Nykyisin sähköpostipalvelimet suojautuvat ,mahdollisuuksien mukaan tällaisten laittomien viestien välittämisessä esimerkiksi pyrkimäällä tunnistamalla viestin lähettäjän ja tarvittaessa kieltäytymällä viestin vastaanottamisesta.

## Pikaviestit

Pikaviestintä on selvästi sähköpostia uudempi tapa viestiä internetin käyttäjien kesken. Ensimmäisiä näistä oli IRC (https://fi.wikipedia.org/wiki/IRC). Nykyisin paljon käytettyjä ovat esimerkiksi Whatsapp, telegram, yammer ja slack. Wikipedian sivulla https://fi.wikipedia.org/wiki/Pikaviestint%C3%A4 on lueteltu paljon muitakin pikaviestintäjärjestelmiä. Usein kukin järjestelmä on omalla tavallaan suljettu eli viestejä voi väittää vain kyseisen sovelluksen käyttäjien kesken.

Monet pikaviestintäjärjestelmät käyttävät sisäisesti viestein välittämiseen XMPP-protokollaa (Extensible Messaging and Presence Protocol), mutta muitakin usein järjestelmän omia protokollia on käytössä. XMPP on avoin protokolla, joten sen standardit on julkaistu. Niissä on varauduttu myös siihen, että XMPP:tä käyttävään järjestelmään voi erillisen yhdyskäytävän (gateway) kautta olla käyttäjiä myös muita protokollia käyttävissä järjestelmissä. Yhdyskäytävän tehtävänä on silloin tehdä tarvittavat protokolla muunnokset XMPP:n ja käyttäjän asiakasohjelman käyttämän protokollan välillä.


Emme millään pysty tutustumaan kaikkiin mahdollisiin internetin kautta saatavilla oleviin palveluihin ja niiden käyttämiin protokolliin. Tässä jäävät esimerkiksi erilaiset TV- ja videopalvelut kokonaan käsittelemättä. Jos erilaiset palvelut kiinnostavat laajemminkin, niin kannattaa itse aktiivisesti etsiä lisätietoja. Wikipediassa on yleensä ihan hyviä tiiviitä kuvauksia eri teemoista. Kannattaa lukea myös ihan perinteisiä lehtiä ja niiden artikkeleita. Suomenkielisiä lehtiä, joissa on paljon tietoliikenteeseen ja internetin palveluihin liittyviä artikkeleja ovat esimerkiksi Mikrobitti, MPC, Tekniikan maailma ja Scrolli. Lehtiä on toki paljon muitakin, mutta näitä selaisen itse säännöllisesti.




---
path: '/osa-3/5-muita'
title: 'Muita esimerkkejä'
hidden: false
---

## Muita esimerkkejä sovelluskerroksen protokollista

WWW-palvelun, tiedostopalvelujen ja virtuaalisen yksityisverkon lisäksi sovelluskerroksella on satoja muitakin palveluja ja niiden omia protokollia.  Yksi yleisimmistä on sähköpostin lähettämisessä käytetty SMTP.

## Sähköposti

Sähköpostipalvelu poikkeaa aiemmista palveluista siinä, että sähköpostin lähettämiseen sähköpostipalvelimelle käytetään SMTP-protokolla (Simple Mail Transfer Protocol), mutta viestien noutamiseen lukemista varten käytetäänkin ihan eri protokollia. Tämä johtuu siitä, että aikoinaan sähköpostia luettiin vain kirjautumalla suoraan sähköpostipalvelimelle ja suorittamalla postin lukeminen paikallisesti palvelimelle. Siksi ei tarvittu muita protokollia, koska viestejä ei koskaan luettu tietoliikenne verkon avulla muualta. Nyt jo ihan tietoturvasyistä sähköpostipalvelimelle kirjautumista ei sallita, joten sähköpostien lukeminen on mahdollista vain erityisillä sähköpostin lukemiseen tarkoitetuilla sovelluksilla tai verkkoselaimen avulla. Verkkoselain käyttää WWW-palvelimen kanssa kommunikoidessaan tuota HTP protokolla. Sähköpostiohjelmat (kuten Thunderbird, Outlook sekä kännyköiden omat sähköpostisovellukset) kommunikoivat sähköpostipalvelimen kanssa yleensä joko IMAP tai POP3 protokollilla. IMAP (Internet Message Access Protocol) on kuvattuna tarkemmin wikipedian sivulla https://fi.wikipedia.org/wiki/IMAP. POP3 (Post Office Protocol version 3) on kuvattu vastaavasti wikipedian sivulla https://fi.wikipedia.org/wiki/POP3.



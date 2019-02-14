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


Web-palvelimet ja web-selaimet käyttävät omaan keskinäiseen kommunikointiinsa HTTP-protokollaa. HTTP-protokolla on meidän ihmisten kannalta sikäli kiva, että se on tekstipohjainen, joten meidän on helppo lukea protokollan viestejä ja niiden sisältöjä. Jotkut muut protokollat siirtävät viestejä binäärilukuina. Yksi esimerkki tällaisesta protokollasta on HTTP:stä kehitetty salattu versio HTTPS. 


## HTTP - protokolla

Ensimmäisesssä versiossa HTTP-protokollasta oli määritelty vain sivun noutoon tarvittavat GET pyyntö ja siihen liittyvä vastaus. Nämä ovat edelleen eniten käytetyt HTTP-protokollan viestit. Uudemmassa protokollassa on lisäksi paljon enemmän viestityyppejä, joiden avulla nettiselain voi myös antaa tietoja palvelimelle eikä vain pyytää siltä tietoja. Tämän kurssin osalta tarkastelemme lähinnä GET pyyntöä. Jos sinua kiinnostavat myös nuo muut viestityypit, niin wikipedian artikkelissa https://fi.wikipedia.org/wiki/HTTP on lyhyet kuvaukset niistä.  





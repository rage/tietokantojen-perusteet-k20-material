---
path: '/viikko-01-dev'
title: 'Viikko 1: Johdanto'
overview: true
---


<programming-exercise name='Onnenluku' tmcname='X'>

Positiivinen kokonaisluku on _onnenluku_,
jos sen jokainen numero on 3 tai 7.

Tee luokka `Onnenluku`, jossa on seuraava metodi:

* `boolean tarkasta(int x)`: palauttaa `true`, jos `x` on onnenluku, ja muuten `false`

Rajat:

- 1 &le; `x` &le; 10<sup>9</sup>

Seuraava koodi esittelee metodin käyttämistä:

```java
Onnenluku t;
System.out.println(t.tarkasta(37)); // true
System.out.println(t.tarkasta(7193)); // false
System.out.println(t.tarkasta(7373)); // true
```

</programming-exercise>

---
marp: true
theme: uncover
class: invert

style: |
  .columns2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .columns3 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

---

![bg](images/image1.png)

# Uvod u JavaScript
---
![bg](images/image4.png)

# O JavaScriptu
* Nastao 1995. od strane NetScapea
* Jedan od najpopularnijih programskih jezika
* Može se koristiti za:
    * frontend (Javascript + React, Vue, Angular)
    * backend (Node.js)
    * desktop aplikacije (Electron)
    * mobilne aplikacije (React Native)

---
![bg](images/image2.png)

# Osnovna sintaksa

* Skriptni jezik, interpreter evaluira liniju po liniju
* Nema potrebe za main funkcijom
* Osnovna sintaksa bliska C-u ili Javi (zagrade, ; itd.)
* Znak `;` nije obavezan, ali se preporučuje

<br /><br />
<!-- br-ovi samo za potrebe da se digne tekst -->

---
![bg](images/image6.png)

# JavaScript ≠ Java

### Primer osnovnog Hello World programa:

<div class="columns2">

<div>
<h4> Java </h4>

```java
class Program {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```
</div>

<div>
<h4> JavaScript </h4> 

```javascript

console.log("Hello World");

```
</div>
</div>

---
![bg](images/image4.png)

# Varijable

- U JS-u varijable se definišu pomoću jednog od 3 keyworda:
  - `let`
  - `const`
  - `var`

- `const` koristimo za konstante
- `var` se u poslednje vreme ne koristi,
nasledio ga je `let`
---
![bg](images/image5.png)

# Tipovi varijabla

- JS nije statično tipiziran
- Runtime ne brani promenu tipa tokom izvršavanja
**(ali je to loša ideja)**
- `typeof` operator vraća string sa tipom varijable
<br /><br />
---
![bg](images/image3.png)

* <h1> Vrednosni tipovi: </h1>

  * Number
  * BigInt
  * String
  * Boolean
  * Object
  * Function

---
![bg](images/image1.png)

* <h2> Tipovi koji ne sadrže vrednost: </h2>

  * undefined
  * null
  * NaN

---
![bg](images/image4.png)

### Ponekad tipovi maaaalo nemaju smisla:
  * `typeof typeof 123 == "string"`
  * `typeof null == "object"` 
  * `typeof NaN == "number"`
  * `typeof class Foo {} == "function"`
  * `typeof [1,2,3] == "object"`

---
![bg](images/image7.png)

# Funkcije
#### Funkcije se mogu napisati na više načina:

<div class="columns3">

<div>

Deklaracija funkcije
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```
</div>

<div>
Izraz <br />funkcije 

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```
</div>
<div>
Arrow<br> funkcija 

```javascript
const greet = (name) => {
    return `Hello, ${name}!`;
};
```
</div>

</div>

---
![bg](images/image6.png)
# Objekti

- Koriste se za grupisanje više različitih varijabli u jednu

```javascript
let osoba = {
    ime: 'Pera Perić',
    godine: 25,
    grad: 'Beograd'
};
```
- Pristupamo pomoću:
<div class="columns2">
  <div> 
  Notacije tačkom

  `osoba.ime`
  </div>
  <div> 
  Notacije zagradom

  `osoba["ime"]`
  </div>
</div>

---
![bg](images/image2.png)
# Klase

- "Kalup" za pravljenje objekata
- Konstruktor ➜ funkcija koja inicijalizuje objekat
- Od ECMAScript 2022 postoje privatna polja
  - Privatna polja počinju sa `#`
  - Za pristup možemo koristiti `get` i `set` operatore
- Klase se instanciraju sa `new` operatorom

<br /><br /><br />

---

# Nizovi
![bg](images/image5.png)

- Koriste se kao skup istih varijabli
- Ne funkcionišu ispod haube kao u drugim jezicima
  - Posebna, indeksirana vrsta objekta
  - Više su nalik listama
<br /><br /><br />
---

![bg](images/image2.png)
# Operatori za poređenje

- Postoje **2** načina za poređenje varijabli:
  - `==` i `!=` ➜ porede samo vrednosti, ali ne i tipove
  - `===` i `!==` ➜ porede i vrednosti i tipove **(preporučljivo)**

<!-- NaN === NaN; // -> false -->

---
![bg](images/image4.png)

# Aritmetički operatori

- `+`, `-`, `*`, `/`, `%`, `**`
- Mogu se i assignovati: `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- Takođe, postoji i increment i decrement: `i++`, `i--`
- `+` i `+=` se mogu koristiti i za spajanje stringova
- Ostali operatori automatski castuju operande u Number
  - Koji je output `2 + '2' - '2'`?

<!-- "b" + "a" + +"a" + "a"; // -> 'baNaNa' -->

---
![bg](images/image6.png)
# Logički operatori

- `&&` (AND) ➜ vraća `true` ako su obe vrednosti `true`
- `||` (OR) ➜ vraća `true` ako je barem jedna vrednost `true`
- `!` (NOT) ➜ negira vrednost, tj vraća kontra vrednost
- JS radi lazy evaluaciju
- `??` (Nullish) ➜ vraća drugu vrednost ako je prva `null` ili `undefined`
---
# Kondicionali
![bg](images/image3.png)

- `if...else` statement
- `switch` statement
---

# if...else
![bg](images/image5.png)

```javascript
if(uslov1) {
  // prva akcija
}
else if (uslov2) {
  // druga akcija
}
else {
  // treca akcija
}
```
---
![bg](images/image4.png)
# Switch
- Ukoliko imamo više grananja za različite vrednosti varijable bolje je korisiti `switch`


```javascript
switch(varijabla) {
  case 1:
    // prva akcija
    break;

  case 2:
    // druga akcija
    break;

  default:
    // treca akcija
}
```

---
# Petlje
![bg](images/image3.png)

- `while` i `do..while`
- `for`, `for..in` i `for..of`
---
# while i do..while
![bg](images/image1.png)

<div class="columns2">

<div>

while
```javascript
while(uslov) {
  // akcija
}
```
</div>

<div>
do..while

```javascript
do {
    // akcija
} while(uslov)
```
</div>
</div>

- do..while će se garantovano barem jednom izvršiti
<br /><br /><br /><br /><br />
---
![bg](images/image6.png)

# For petlje

<div class="columns3">

<div>

`for`
```javascript
for(init; uslov; korak) {
  // akcija
}
```
</div>

<div>

`for..in`
```javascript
for(kljuc in iterable) {
  // akcija
}
```
</div>
<div>

`for..of`
```javascript
for(vrednost of iterable) {
  // akcija
}
```
</div>

</div>

- `for..in` i `for..of` služe za prolazak kroz nizove i objekte
- `for..in` vraća index ili ključ elementa
- `for..of` vraća kopiju vrednosti elementa
  - promene vrednosti elementa **NE** utiču na objekat

---

# map, filter, reduce
![bg](images/image4.png)
- Metodi nizova
- Prolaze kroz niz, izvršavaju arrow funkciju i vraćaju neku vrednost
- `map` ➜ vraća modifikovanu **kopiju** niza na osnovu funkcije
- `filter` ➜ vraća filtriranu **kopiju** niza na osnovu uslova
- `reduce` ➜ vraća akumuliranu vrednost

<!--
  Ovde ubaciti bonus stvari koje mogu uraditi ako stignem:
    - prototipovi
    - JSON

-->

---
![bg](images/image6.png)

# Pitanja?
---

![bg](images/image7.png)

# Hvala na pažnji!
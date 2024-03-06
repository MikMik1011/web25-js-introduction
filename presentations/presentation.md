---
marp: true
theme: uncover
class: invert

style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
* Znak `;` nije obavezan ako nije naveden striktni mod na početku fajla

`
"use strict"
`

<br /><br />
<!-- br-ovi samo za potrebe da se digne tekst -->

---
![bg](images/image6.png)

# JavaScript ≠ Java

### Primer osnovnog Hello World programa:

<div class="columns">

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
- Jezik ne brani promenu tipa tokom runtimea
**(ali je to loša ideja)**
- `typeof` operator vraća string sa tipom varijable
<br /><br />
---
![bg](images/image3.png)

* <h1> Bezvredni tipovi </h1>

  * undefined
  * null
  * NaN
* neke interesantne situacije:
  * `typeof typeof 123 == "string"`
  * `typeof null == "object"` 
  * `typeof NaN == "number"`

---
![bg](images/image6.png)

# Pitanja?

---

![bg](images/image7.png)

# Hvala na pažnji!
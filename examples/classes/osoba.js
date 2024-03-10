class Osoba {
    #ime;
    godine;
    grad;

    constructor(ime, godine, grad) {
        this.#ime = ime;
        this.godine = godine;
        this.grad = grad;
    }

    get ime() {
        return this.#ime;
    }

    set ime(ime) {
        this.#ime = ime;
    }

    toString() {
        return `${this.#ime} ima ${this.godine} godina i živi u ${this.grad}u.`;
    }
}

let osoba = new Osoba('Pera', 25, 'Beograd');
console.log(osoba.toString()); // Output: Pera ima 25 godina i živi u Beogradu.
console.log(osoba.ime); // Output: Pera
osoba.ime = 'Mika';
console.log(osoba.ime); // Output: Mika
console.log(osoba.toString()); // Output: Mika ima 25 godina i živi u Beogradu.
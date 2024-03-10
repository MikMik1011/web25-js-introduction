class Student extends Osoba {
    kurs;

    constructor(ime, godine, grad, kurs) {
        super(ime, godine, grad);
        this.kurs = kurs;
    }

    toString() {
        return `${super.toString()} Pohađa kurs ${this.kurs}.`;
    }
}

let student = new Student('Marko', 20, 'Beograd', 'Web 2.5 Akademija');
console.log(student.toString()); // Output: Marko ima 20 godina i živi u Beogradu. Pohađa kurs Web Development.
console.log(student.ime); // Output: Marko
student.ime = 'Janko';
console.log(student.ime); // Output: Janko
console.log(student.toString()); // Output: Janko ima 20 godina i živi u Beogradu. Pohađa kurs Web Development.

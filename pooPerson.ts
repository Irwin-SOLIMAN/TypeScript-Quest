class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName() {
        return `I am ${this.name}`;
    }

    tellMyAge() {
        return `I am ${this.age} years old`;
    }
}

// Instantiate two Person objects
const man1 = new Person("John", 40);
const woman1 = new Person("Mary", 35);

// Call the methods and log the output
console.log(man1.tellMyName() + ", " + man1.tellMyAge());
console.log(woman1.tellMyName() + ", " + woman1.tellMyAge());

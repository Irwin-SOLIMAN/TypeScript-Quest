// import  assert  from  'assert';
const assert = require('assert');

// Son constructeur devra prendre deux paramètres, le premier étant le nom du client, le second, le code secret de sa carte bleue.
// Ces paramètres devront être stockés de façon à n'être pas visibles depuis le code appelant (privés, donc).
// Une méthode getName permettra de récupérer le nom du client.
// Une méthode verifyPinInput devra permettre de vérifier si un code secret entré correspond bien au code stocké par l'instance, et renvoyer true si c'est le cas, false sinon.

class BankCustomer {        // class Name is UperCase

    private name : string;
    private pin : string;

    constructor(name : string,pin : string) {   // use constructor to initialize the class. Used by calling it with a "new ..."
        this.name = name;
        this.pin = pin;
    }

    public getName() {
        return this.name
    }

    public verifyPinInput(pinInput : string) {
        if (pinInput === this.pin) {
            return true
        } else {
            return false
        }
    }
}

// Tests

const customer1 = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer1.getName, 'function');
assert.equal(typeof customer1.verifyPinInput, 'function');
assert.equal(customer1.getName(), 'John Doe', 'La méthode getName ne renvoie pas le nom attendu');
assert.ok(customer1.verifyPinInput('3579'));

console.log("Well done! All tests passed!");
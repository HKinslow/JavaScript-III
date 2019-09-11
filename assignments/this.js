/* The for principles of "this";
* in your own words. Explain the four principles for the "this" keyword below.
*
* 1. Global Binding, when in the global scope, the value of "this" will be the window/console Object
* 2. Implicit Binding, whenever a function is called by a dot, the object that is on the left will get 'this'.
* 3. New Binding, whenever a constructor is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding, whenever the JevaScript's call or apply method is used, 'this' is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayWhat(name) {
    console.log(this);
    return name;
}
sayWhat("Abby");

// Principle 2

// code example for Implicit Binding

const myName = {
    greeting: 'Hey',
    sayHey: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this)
    }
};
myName.sayHey('Heather');

// Principle 3

// code example for New Binding

function MyFunction(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(`${this.greeting} ${this.greeter}`);
        console.log(this)
    };
}

const heather = new MyFunction('Kinslow');
const kinslow = new MyFunction('Heather');

heather.speak();
kinslow.speak();

// Principle 4

// code example for Explicit Binding

heather.speak.apply(kinslow);
kinslow.speak.apply(heather);
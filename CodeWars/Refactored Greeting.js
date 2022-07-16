class Person {
    constructor(name) {
        this.name = name;
    }

    greet(yourName) {
        return "Hello " + yourName + ", my name is " + this.name;
    }

}

const joe = new Person('Joe');
console.log(joe.greet('Kate')); // should return 'Hello Kate, my name is Joe'
console.log(joe.name);           // should == 'Joe'
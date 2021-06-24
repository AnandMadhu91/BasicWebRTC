// console.log(__dirname, __filename);
class Age {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My age is ${this.age}`);
    }
}
class Name {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name}`);
    }
}
module.exports = {
    Age,
    Name
}

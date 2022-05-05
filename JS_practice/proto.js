console.log('{}', {}.prototype)
console.log('{}', {}.__proto__)

const person = {
    age:18,
    name: 'nick',

    greet: function (){
        console.log('Hello')
    }
}
console.log("Person", person)
console.log("Person.prototype", person.prototype)
console.log("Person.__proto__", person.__proto__)

function Sumfunction(){}

console.log('Sumfunction', Sumfunction)
console.log('Sumfunction.prototype',Sumfunction.prototype)
console.log('Sumfunction.__proto__',Sumfunction.__proto__)

let age = 18

console.log('age',age)
console.log('age.prototype',age.prototype)
console.log('age.__proto__',age.__proto__)

class ClassSum {}

console.log('ClassSum.prototype',ClassSum.prototype)
console.log('ClassSum.__proto__',ClassSum.__proto__)

let Component = (props)=>{
    return `<div>Sum text</div>`
}

console.log(Component.prototype)
function list(names){
    var array = [];
    var array_last = [];

    if (names.length === 0) {
        return '';
    } else if(names.length < 2){
        return names[0].name;

    } else if (names.length === 2) {
        return names[0].name + ' & ' + names[1].name;
    } else if (names.length > 2) {
        for(let i = 0; i < names.length - 2; i++) {
            array.push(names[i].name);
        }
        for(let i = names.length - 2; i < names.length; i++) {
            array_last.push(names[i].name);
        }
    }

    return array.join(', ') + ', ' + array_last.join(' & ');

}

x = list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Maggie'},{name: 'Maggie'}]);
console.log(x);

function Animal(name, voice) {
    //const result = Object.create(animal);// отпадает
    this.name = name; // появляется this
    this.voice = voice;
    // return result;
}

Animal.prototype.say = function () {
    console.log(this.name, 'goes', this.voice);
};
const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');

dog.say();
cat.say();
// Конспект по JS
// =============
// let и const

// let - изменяемое значение
// const - не изменяемое, но для массивов чуть иначе

const arr1 = ['Bart', 'Liza'];
// arr1 = ['Gomer']; - будет ошибка, Но
arr1.push('Gomer'); // - это можно, получим arr = ['Bart', 'Liza', 'Gomer'];

// С объектами
const obj= {
    name: 'Jenny',
    age: 26
};

// Присвоить новое значение свойству можно
obj.name = 'Bob'; // пройдет, НО
//  obj = 'Alice'; будет ошибка

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, i*100);
} // выведет 3 3 3, тк сущ-т всего один адрес в памяти, где хранится значение i и через
// 100мс это значение будет уже 3
// если заменить var на let, то выведет 0 1 2


//===================
// Стрелочные функции
// Задача: вернуть максимально нечетное число

const sq = (x) => x*x;

console.log(sq(4));

const arr = ['1', '3', '2', '4'];

const res = arr
    .map((el) => parseInt(el)) // возвращает элемент в виде числа
    .filter((num) => num % 2) // останутся элементы, для которых ф. вернет true
    .reduce((max, value) => Math.max(max, value), 0); // для каждого значения выполнит функцию

//Функции стрелки сохраняют лексическое значение this
// Нет prototype

//==================
//Параметры по умолчанию
function FetchOrders(count = 10, start = 0) {
    console.log('Getting', count, 'orders starting from', start);
}
// но если мы вызовем функцию
FetchOrders(10,50); // то значения по умолчанию перезапишутся
// если хотим отправить только одно значение, то парамер по умолчанию лучше ставить в конец


//=========
// Rest - параметр

function max(...numbers) { // передаем значения, которые преобразуются сразу в массив
    console.log(numbers);
}

max(); // пустой массив []


function max(a, b, ...numbers) { // передаем значения, которые преобразуются сразу в массив
    console.log(numbers);
}

max(1, 2, 3); // 1 запишется в a, 2 запишется в b, и будет массив numbers [3]
// rest параметр доджен идти в конце


//===============
// Spread параметр
// Отличие от Rest: rest собирает в массив, а спред наоборот раскладывает массив на список
// независимых аргументов
const arr1 = [1, 2, 3];
const arr2 = [4, 8, 3];

Math.max(); //принимает аргументы и выдает максимальное значение, не умеет с массивом
const res1 = Math.max.apply(Math, arr1); // старый синтаксис, чтобы передать массив в кач-ве аргументов
const res2 = Math.max( ... arr1, ... arr2); // новый синтаксис, чтобы передать массив в кач-ве аргументов

//Можно комбинировать с аргументами
const res3 = Math.max.apply(1, ... arr1, 5, ... arr2, 14);

// Можно создавать поверхностную копию
const shallowCopy = [... arr1]; // скопировали массив

// Можно два массива
const shallowCopy = [... arr1, ...arr2];

//===========
// Деструктуризация - позволяет лаконично достать значение из структуры данных, массива
// или объекта

const person = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 27
};

// const firstName = person.firstName; = старый синтаксис
// const lastName = person.lastName;

const {firstName, lastName} = person; // новый синтаксис

//если объект в объекте
const person1 = {
    name: {
        first: 'Peter',
        last: 'Smith',
    },
    age: 27
};
const {name: {first, last}} = person1; // новый синтаксис, сохранение свойств в переменные

//но использовать такие же имена не всегда удобно, тогда даем новое имя
const {name: {first: firstName, last: lastName}} = person1;
console.log(firstName, lastName); // Peter Smith

//возм-ть указать значение по умолчанию, если значение есть, то заменится,
// если нет, то выведет значение по умолчанию
const {role ='user'} = person1;

// если значение вложенное, и объекта нет, то необх присвоить объекту зн по умолч
//например, пусой объект
const {permission: {role = 'user'} = {}} = person1;

//Предположим у нас есть функ, которая должна подключатся к сетевому сервису
// и нужно передать аргументы(хост, порт, имя польз), и некоторые могут иметь
//значение по умолчанию, другие опциональны, тогда

function connect({
    host = 'localhost1', // значения по умолчанию
    port = 1830,
    user = 'Peter'} = {}) { // присвоили пустой объект, чтобы избежать error destruct
      console.log(user, port, host); // вывод: Peter 1829 localhost
}

connect({
   host: 'localhost',
   port: 1829
});

connect(); //чтобы не было ошибки, необходимо присвоить пустой объект в функции

//Деструктуризация элементов

const dict = {
    duck1: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
};
const {duck1, ...otherAnimals} = dict; // поддержка rest
console.log(otherAnimals); //вывод: {dog: 'wuff', mouse: 'squeak'}

// ==========
//Деструктуризация массива

const fib = [1, 1, 2, 3, 5, 8, 13];
const line = [[1, 2], [3, 4]]; // многомерный

const [a, b, c] = fib; //сохранит в переменные a b c числа 1 1 2
const [ , a, , b] = fib; //сохранит в переменные a b числа 1 и 3
const [[p1x, p1y], [p2x, p2y]] = line; //сохранит в переменные числа из многомерного

//поддержка параметров по умолчанию
const people = ['chris', 'sandra'];
const [a, b, c = 'guest'] = people; //сохранит в переменные  chris sandra guest

//поддержка rest
const people = ['chris', 'sandra', 'bob'];
const [a, ...others] = people;
console.log(others); // вывод [ 'sandra', 'bob']

//объекты - хотим найти зверей что говорят 'squeak'
const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};

const result = Object.entries(dict);
console.log(result); // вывод
// [ ['duck', 'quack'],
//   ['dog', 'wuff'],
//   ['mouse', 'squeak'],
//   ['hamster', 'squeak'] ]

// разбираем
const result = Object.entries(dict).
    filter((arr) => arr[1] === 'squeak');

// еще лучше, деструктурировать прямо на месте
const result = Object.entries(dict).
    filter(([, value]) => value === 'squeak').
    map(([key]) => key);

//более сложный пример
const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
};

const {coordinates: {start:[startX, startY], end: [endX, endY]}} = shape;
console.log(startX, startY, endX, endY); //вывод 10, 15, 17, 15

//==========
//Шаблонные строки

const user = 'Bob';
const num = 17;
const txt = 'Hello, ' + user + ' you have' + num + 'letters'; // старый синтаксис

const txt2 = `Hello ${user} you have + ${num} + letters`; // символы бэк-тик
const txt3 = `Now is ${Date.now()}`; // результат вызова функции
const txt4 = `You have ${6 + 7} + letters`; // можем вставить вычисления

const items = ['tea', 'coffee'];
const Html = `  
    <ul>
        <li>${items[0]}</li>
        <li>Item Two</li>
        <li>${items[1]}</li>
    </ul>
`; // форматирование сохраняется, можем вставлять код + комбинирование

// результат обычная строка

//=========
//Объекты

const x = 10;
const y = 30;

const point = { // старый синтаксис
    x: x,
    y: y,
    draw: function () {
        // ...
    }
};

const p= {x, y, draw(ctx) {}}; // новый синтаксис

//создание префиксов
const prefix = '_blah_';
const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23
};

//копирование свойств из одного объекта в другой
const defaults = { // опции по умолчанию
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};
const opts = { // сведения о пользователе
    user: 'john',
    password: 'utopia'
};
Object.assign(defaults, opts);
console.log(defaults); // в результе получим
// {   host: 'localhost',
//     dbName: 'blog',
//     user: 'john',
//     password: 'utopia'
// };

//чтобы не перезаписывать defaults
const res = Object.assign({}, defaults, opts);
console.log(defaults);  //в результе получим новый объект

// создадим shallowCopy
const shallowCopy = Object.assign({}, defaults);

//=============
//Оператор object spread

const defaults = { // опции по умолчанию
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};
const opts = { // сведения о пользователе
    user: 'john',
    password: 'utopia'
};

const port = 8080;
const res = { //можем комбинировать добавляя св-ва из переменных и методы
    ... defaults,
    ... opts,
    port,
    connect() {
        //....
    }
};

//===================
//Prototype
/*
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
*/

//============
//Классы

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }
    say() {
        console.log(this.name, 'goes', this.voice);
    }
}

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
    constructor(name, voice, canFly) {
        super(name, voice);
        super.say(); // если мы хотим чтобы здесь вызывался метод из Bird, заменить super на this
        this.canFly = canFly;
    }

    say() { // переопределение метода в Animal
        console.log('Birds dont like to talk');
    }

}

const duck = new Bird('duck', 'quack', true);
duck.say();

//вывод Duck goes quack и следом Birds dont like to talk

//============
// Модули
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let length1 = 'hello world';
console.log(length1.length)

let length2 = 'lorem ipsum';
console.log(length2.length)

let length3 = 'javascript is cool';
console.log(length3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase1 = 'hello world';
console.log(toUpperCase1.toUpperCase());

let toUpperCase2 = 'lorem ipsum';
console.log(toUpperCase2.toUpperCase());

let toUpperCase3 = 'javascript is cool';
console.log(toUpperCase3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCase1 = 'HELLO WORLD';
console.log(toLowerCase1.toLowerCase());

let toLowerCase2 = 'LOREM IPSUM';
console.log(toLowerCase2.toLowerCase());

let toLowerCase3 = 'JAVASCRIPT IS COOL';
console.log(toLowerCase3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let trim = ' dirty string   ';
console.log(trim.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str){
let split = str.split(' ');
return split;
}
let str = 'Ревуть воли як ясла повні';
console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const arr = [10,8,-7,55,987,-1011,0,1050,0];
let strings = arr.map(value => value.toString());
console.log(strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(direction, arr){
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}

let nums = [11, 21, 3];
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sortArr1 = (array) => array.sort((a,b)=>b.monthDuration-a.monthDuration);
console.log(sortArr1(coursesAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sortArr2 = (array) => array.filter(value => value.monthDuration>5);
console.log(sortArr2(coursesAndDurationArray));

// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deck = [
    {
        cardSuit: null,
        value: 'Joker',
        color: 'black'
    },
    {
        cardSuit: null,
        value: 'Joker',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Ace',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Ace',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Ace',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Ace',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'King',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'King',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Queen',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Queen',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Jack',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Jack',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
];

// - знайти піковий туз
console.log(deck.find(value => value.cardSuit === 'spade' && value.value === 'Ace'));

// - всі шістки
console.log(deck.filter(value => value.value === '6'));

// - всі червоні карти
console.log(deck.filter(value => value.color === 'red'));

// - всі буби
console.log(deck.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(deck.filter(value => value.cardSuit === 'clubs' && value.value >= '9' || value.cardSuit === 'clubs' && value.value === '10'));


console.log('ДОДАТКОВЕ')
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deck.reduce((accumulator, suit) => {
    if (suit.cardSuit === 'spade') {
        accumulator.spade.push(suit);
    } else if (suit.cardSuit === 'diamond'){
        accumulator.diamond.push(suit);
    } else if (suit.cardSuit === 'heart') {
        accumulator.heart.push(suit);
    } else if (suit.cardSuit === 'clubs') {
        accumulator.clubs.push(suit);
    }

    return accumulator;
}, {spade: [], diamond:[], heart:[], clubs:[]});

console.log(reduce)
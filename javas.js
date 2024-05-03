// const a = [1, 2, 2, 4]
// // a.push = ('hello world')- добавление в конец масива

// // pop - удаление с конца массива 
// a.pop()

// //shift - удаление с нацала массива 
// a.shift()

// // unshift-добавление в начало масива 
// a.unshift('hello world')

// console.log(a.indexOf(true));
// console.log(a.at(4));

// // splice - вырезать массив 
// console.log(a.slice(0, 4, ));
// console.log(a.slice(0, 4, 'hello')); //replace-меняет

// //map - проходит по каждому элементу

// Array.mar((item, idx) => {
//     console.log(idx);
//     item.age++;
// })

// console.log(arrgit push -u origin main);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
// const iseven = (num) => num % 2 === 0;
// const even = numbers.filter(iseven)

// const isodd = (num) => num % 2 !== 0;
// const odd = numbers.filter(isodd);

// console.log(even);
// console.log(odd);


// const devide5 = (num) => num % 5 === 0
// const abc = numbers.filter(devide5)

// const devide3 = (num) => num % 3 === 0
// const bc = numbers.filter(devide3)

// const devide3and5 = (num) => num % 5 === 0 & num % 3 ===0;
// const c = numbers.filter(devide3and5)


// console.log(devide3);
// console.log(devide5);
// console.log(devide3and5);

// if (devide3) {

// } else {
    
// }

// const arr = [1, 2, 2, 1, 123, 12, 31, 231, 23, 123, 123]
//map, filter, find 

// const filteredArray = arr.filter((item) => item > 100)

// console.log(filteredArray);

// const find = arr.find((item, idx) => {
//     if (item > 100) {console.log({el: item, index: idx});
//     return item;    
//     }
// })

let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]
let count = 0;

for (let i = 0; i < arr.length; i +=1 ) {
    if (arr[i] === 1) {
      count += 1;
    }
  }








// const countItems = {};
// for (const item of numbers) {
//     countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
// }
// const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
// console.dir(result); 

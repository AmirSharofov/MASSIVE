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


const devide5 = (num) => num % 5 === 0
const abc = numbers.filter(devide5)

const devide3 = (num) => num % 3 === 0
const bc = numbers.filter(devide3)

const devide3and5 = (num) => num % 5 === 0 & num % 3 ===0;
const c = numbers.filter(devide3and5)


console.log(devide3);
console.log(devide5);
console.log(devide3and5);

if (devide3) {

} else {
    
}
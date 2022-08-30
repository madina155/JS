//Функции

// function microwave(a) {
//     return typeof a
// }
// console.log(microwave(5))

// function calc (a, b) {
//     return a + b
// }


// console.log(calc(5, 10))
// console.log(calc(5, 101))
// console.log(calc(5, 12))
// console.log(calc(5, 103))


// function num (a) {
//     if (a % 2) {
//         return 'нечетный'
//     }
//      return 'четный'
// }

// console.log(num(10))
// console.log(num(20))
// console.log(num(15))


//function ананимная не используем но помним

// const calcMinus = function (a ,b) {
//     return a - b
// // }
// console.log(calcMinus(9, 6))

// const messageHalf = (message) => {  //получаем половину
//     return message.slice(0 , Math.round(message.length / 2))
// }


// const messageHalf = (message) => {  //ищем есть ли такое слово
//     if (message.includes('hello')) {
//         return 'есть'
//     }
//     return 'нету такого слова'
// }
// console.log(messageHalf('world'))


// const searchItemInArray = (arr, item) => {
//     if (arr.includes(item)) {
//         return 'найдено'
//     }
//     return 'не найдено'
// }
//
// console.log(searchItemInArray(['bmw', 'lexus', 'honda'], 'bmw'))
// console.log(searchItemInArray(['bmw', 'lexus', 'honda'], 'mers'))


// const changeEveryItemInArray = (arr) => {
//     let results = [];
//     for (let i = 0; i < arr.length; i++){
//         results = [...results, ... arr[i] * 3]
//         if (arr % 2 === 0) {
//             results = [...results, ...arr[i]]
//         }
//     }
//     return results
// }
// console.log(changeEveryItemInArray([5, 6, 3,5,10]))

//
// const checkItemOnPalindrome = (item) => {
//     if (item === item.split('').reverse().join('')) {
//         return 'палиндром'
//     }
//     return 'не полинадром'
// }
//
//
//
// console.log(checkItemOnPalindrome('anna'))
// console.log(checkItemOnPalindrome('abracadabra'))
//
// function MasterYoda(a) {
//     if ( a % 3 === 0 && a % 5 === 0) {
//         return 'MasterYoda'
//     } else if (a % 3 === 0) {
//         return 'Master'
//     } else  if  (a % 5 === 0){
//         return 'Yoda'
//     }
//     return a
// }






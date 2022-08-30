//циклы
// let i = 1 // менее опопулярный
// while (i <= 10) {
//     console.log(i)
//     i++
// }


// let i = 1;
// do {
//     console.log(i)
//     i++
// } while (i <= 10)


// for (let i = 1 ; i <= 10; i++){
//     if (i % 2)
//         console.log('нечетный')
//     // continue , break
//     else {
//         console.log('четный')
//     }
// }

// let word = 'ghkhjbl'
//  for (let i = 0 ; i < Math.floor(word.length / 2); i++ ) {
//      console.log(word[i])
//  }
//}
//
// let wordReverse = ''
// for (let i = 0; i < word.length; i++){
//     wordReverse = word[i] + wordReverse  //наобарот
// }
//
// console.log(wordReverse)

//
// for (let i = 0; i < word.length; i++){ берет каждую вторую
//     if (i % 2 ) {
//         console.log(word[i])
//     }
// }
// получить каждый элемент


// let word = ['a', 'b', 'c', 'd' , 'e', 'f', 'g']  делаем каждую вторую в верчнем регистре
// for (let i = 0; i < word.length; i++) {
//     if (i % 2){
//         console.log(word[i] = word[i].toUpperCase())
//     } else {
//         console.log(word[i] = word[i].toLowerCase())
//     }
// }

// let  cars = ['BMW' , 'Lexus', 'MERS' , 'HONDA' , 'SUBARU']
// for (let i = 0; i < cars.length; i++){
//     if (cars[i].length > 4) {
//         console.log(cars[i])
//     }
// }
//
// let arr = [[1,2], [3,4], [5,6]]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i][0] + arr[i][1])
// }

// let words =['dwd', 'edwwd', 'wefwf', 'efwfw'] //получаем каждую букву элемента
// for (let i = 0; i < words.length; i++){
//
//     for (let j = 0; j < words[i].length ;j++){
//         console.log(words[i][j] )
//
//     }
// }

// let numbers = [7, 3, 56, 21, 8, 22]
// let results =  0
//
// for (let i = 0; i < numbers.length; i++){
//     results += numbers[i]
// }
// console.log(results)

// let years = ['january' , 'февраль' ,'март', 'апрель', 'май', 'Июнь','Июль','Август','Сентрябрь','Октябрь','Ноябрь','Декабрь']
// for (let i = 0; i < years.length; i++){
//     switch (years[i]){
//         case 'january':
//         case 'февраль':
//         case 'Декабрь':
//             console.log('winter')
//             break
//         case 'март':
//         case 'апрель':
//         case 'май':
//             console.log('spring')
//             break
//         case 'Июнь':
//         case 'Июль':
//         case 'Август':
//             console.log('summer')
//             break
//         case 'Сентрябрь':
//         case 'Октябрь':
//         case 'Ноябрь':
//             console.log('осень')
//     }
// }

// обьекты
// let a = 'turbo'
// let car = {
//     'model car': 'bmw',
//     color: 'black',
//     year: 2020,
//     turbo: true,
//     wheels: {
//         size: 245,
//         radius:17,
//         type: 'winter'
//     }
// }
// console.log(car.year)
// console.log(car.color)
// console.log(car.wheels.radius)
// console.log(car["model car"])
// console.log(car[a])


// let car = {
//     'model car': 'bmw',
//     color: 'black',
//     year: 2020,
//     turbo: true,
//     wheels: {
//         size: 245,
//         radius:17,
//         type: 'winter'
//     }
// }
//
//
// Object.freeze(car) //не используем но знаем
// car.turbo = false  //изменение
// car.price = 20000  // добавление
// delete car.color  //удаление
//
// Object.freeze(car.wheels)//замарозка обекта
//
// console.log(car)


// const car = {
//     'model car': 'bmw',
//     color: 'black',
//     year: 2020,
//     turbo: true,
//     wheels: {
//         size: 245,
//         radius:17,
//         type: 'winter'
//     }
// }
//
// car.color = 'white'
// console.log(car)
//
// let name = 'max'
// let name2 = name
//
// let name2 = 'macsat'
//
// console.log(name)


// let car = {
//     'model car': 'bmw',
//     color: 'black',
//     year: 2020,
//     turbo: true,
//     wheels: {
//         size: 245,
//         radius:17,
//         type: 'winter'
//     }
// }


// let car2 = Object.assign({name:'max'}, car)
// car2.turbo = false
// car2.wheels.radius = 20
// let car2 = car //не правильно
//
// car2.color = 'white'


//спрет оператор
// let car2 = {name: 'max', ...car} // легче

// console.log(car)
// console.log(car2)

// let car = {
//     'model car': 'bmw',
//     color: 'black',
//     year: 2020,
//     turbo: true,
//     wheels: {
//         size: 245,
//         radius:17,
//         type: 'winter'
//     }
// }

// console.log(car + '')// когда переводим обект на строку мы получаем [object Object]
// console.log(car.toString())


// let car2 = JSON.parse(JSON.stringify(car))  //правильное кланирование
// car2.color = 'white'

// console.log(car)
// console.log(car2)
// console.log( typeof JSON.stringify(car))


// let a = '{"model car":"bmw","color":"black","year":2020,"turbo":true,"wheels":{"size":245,"radius":17,"type":"winter"}}'
//
// console.log(JSON.parse(a))

// let arr = [
//     1,4,'hello65',[
//         'fbsdfbs'
//     ]
// ]
// console.log(arr.length - 1)

// let arr = [1,2,3,4,5]
// let arr2 = {
//     name: 'max'
// }
// arr[0] = 6
// arr[5] = 7
//
// console.log(arr)


// console.log(typeof arr === 'object')
// console.log(Array.isArray(arr))
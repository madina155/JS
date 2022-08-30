// const mapFunc = (arr) => {
//     return arr.map((item, index, array) => {
//         return typeof item
//     })
// }
// console.log(mapFunc([1,2,3,4,5]))

// const mapFunc2 = (arr) => {
//     return arr.map((item , idx, array) => {
//         if (typeof  item === "number" || typeof item === 'string') {
//             return null
//         }
//         return item
//     })
// }
// console.log(mapFunc2([1,'ivan',true,4,[]]))

// const mapFunc = (arr) => {
//     return arr.map((item)=> {
//         return item.length
//     })
// }
//
// console.log(mapFunc(['ivan', 'fvrfv', 'rfveqrqf']))

// const mapFunc = (arr, num) => {
//     return arr.map((item ) => {
//         return `${item} кратность ${num} = ${item % num}`
//     })
// }
// console.log(mapFunc([15, 12, 8, 20, 45], 5))

//filter
// const filterFunc = (arr) => {
//     return arr.filter((item) => {
//         return item !== 5
//     })
// }
// console.log(filterFunc([5,1,2,3,4,5]))


// const filterFunc = (arr) => {
//     return arr.filter((item) => {
//         return item < 5
//     })
// }
// console.log(filterFunc([10,13,2,3,4,5]))

// const filterFunc = (arr) => {
//     return arr.filter((item) => {
//         return !item.includes('hello')
//     })
// }
// console.log(filterFunc(['hello' , 'hello world', 'world', 'hello wo']))

// const filterFunc = (arr) => {
//     return arr.filter((item) => {
//         if (typeof item === 'string') {
//             return item.length > 3
//         }
//         return item > 10
//     })
// }
// console.log(filterFunc(['ivan',10,20,'max',40,]))

// const findFunc = (arr) => {
//     return arr.find((item) => {
//         return item === 5
//     })
// }
// console.log(findFunc([5,1,2,3,4,1]))

// const someFunc = (arr) => {
//     return arr.some((item) => {
//         return item > 3
//     })
// }
// console.log(someFunc([5,1,2,3,4,1]))

// const everyFunc = (arr) => {
//     return arr.every((item) => {
//         return item === 5
//     })
// }
// console.log(everyFunc([5,1,2,3,4,1]))


const sortFunc = (arr) => {
    return arr.sort((a, b) => {
        return a - b
    })
}
console.log(sortFunc([5,1,2,3,4,1]))

//
// const func = (arr) => {
//     return arr.map((item) => {
//         return item * 2
//     }).filter((item) => {
//        return isFinite(item)
//     }).map((item)=>{
//         return item % 5
//     }).some((item) =>{
//         return item > 0
//     })
// }
//
// console.log(func(['Ivan', 5, 6,'10']))


// const func = (arr) => {
//     return arr.filter((item) => {
//         return item.split('').filter((el) => el === el.toUpperCase()).length >=3
//     })
// }
// console.log(func(['BMW','Mers','HONDA','Lexus', 'Subaru']))


// const func = (arr) => {
//     // return Object.values(arr)  //получает значения
//     // return Object.keys(arr) // получает ключи
//     return Object.entries(arr) //массив из массивов через запятую
//
//
// }
// console.log(func({id: 1, name: 'Max', age: 23, stack : 'React'}))


// const func = (arr) => {
//     return arr.filter((item) => {
//         return item.name === 'mus'
//     })
// }
// console.log(func([{id:1, name: 'Max'}, {id:2, name: 'ali'}, {id:3, name: 'mus'}]))













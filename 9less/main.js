//Метод reduce

// const calcSum = (arr) => {
//     let sum = 0;
//     arr.map((item) => {
//         sum += item
//     })
//         return sum
// }
// console.log(calcSum([1,2,3,4,5,6]))


// const setObj = (arr) => {
//     let obj = {};
//     arr.map((item, idx) => {
//         obj = {...obj, [idx] : item}
//     })
//     return obj
// }
// console.log(setObj(['Ivan','car',true]))


// const calcSum = (arr) => {
//    return arr.reduce((acc, rec) => {
//        return  acc + rec
//    }, 0)
// }
// console.log(calcSum([1,2,3,4,5,6]))


// const calcSum = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec * 2]
//     }, [])
// }
// console.log(calcSum([1,2,3,4,5]))


// const filterArr = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (typeof === 'string') {
//             return  [...acc + rec]
//         }
//         return acc
//     }, [])
// }
// console.log(filterArr(['Ivan','max',true]))
//1
// const calcSum = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec * 2]
//     }, [])
// }
// console.log(calcSum([1,2,3]))
// console.log(calcSum([4,1,1,1,4]))
// console.log(calcSum([2,2,2,2,2]))

//2
// const calcSum = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec % 2) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(calcSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(calcSum(['Привет', 'Пока', 'Снова привет']))
// const mapFunc = (arr) => {
//     return arr.map((item) => {
//         for(let i = 0; i < item.length; i++) {
//         if (item[i] === false) {
//             item[i] = true
//         } else {
//              item[i] = false
//         }
//     }
//             return item
//     })
// }
// console.log(mapFunc([-1,2,3,4,5]))
//3
// const calcSum = (arr) => {
//     return arr.reduce((acc, rec) => {
//         for (let i = 0; i < acc.length; i++) {
//             if (rec[i] === false) {
//                 rec[i] = true
//             }else {
//                 rec[i] = false
//             }
//         }
//         return rec
//     }, [])
// }
// console.log(calcSum([1, 2, 3, 4, 5]))

// const filterArr = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (typeof rec === 'string') {
//             return  [...acc ,rec === 'null']
//         }
//         return acc
//     }, [])
// }
// console.log(filterArr([4, 6, 'Ivan', 5, 'Denis ']))


// const task8 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec ** 3 % 3 === 0 && rec ** 3 % 5 === 0) {
//             return [...acc,0]
//         }
//         return [...acc,rec ** 3]
//     }, [])
// }
// console.log(task8( [7, 8, 15, 30, 2]))


// const task9 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec.length]
//     }, [])
// }
// console.log(task9(  ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] ))



// const task9 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec]
//     }, [])
// }
// console.log(task9(  ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] ))










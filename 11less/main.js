//recursive
// let i = 0
// const  recursiveFunc = () => {
//     i++
//     if (i > 5) {
//         return 'end'
//     }
//     console.log(i)
//     recursiveFunc()
//
// }
// recursiveFunc()

//closure


// const task1 = (str) => {
//     return str.map((item) => {
//         if (item === '_') {
//             return item.toLowerCase()
//         }
//         return item
//     })
// }
// console.log(task1("the-stealth-warrior"))














// const sortStr = (arr) => {
//     return arr.sort()
//
// }
// console.log(sortStr(['is2', 'Thi1s', 'T4est', '3a']))

// const num = parseInt("a4r t 4r43 43a b345b 123 cc gaeg4".replace(/\D+/g,""));
// console.log(num);
// console.log(typeof num);
//
// const accum = str => str
//     .split('')
//     .map((ch, i) => (ch = ch.toLowerCase().repeat(i + 1)) && ch.charAt(0).toUpperCase() + ch.slice(1))
//     .join('-');
//
// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"


// function accum(str) {
//     const accum = str => str
//         .split('')
//         .map((ch, i) => (ch = ch.toLowerCase().repeat(i + 1)) && ch.charAt(0).toUpperCase() + ch.slice(1))
//         .join('-');
// }
// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));

// function getMiddle(str) {
//     if(str.length % 2) {
//         return str.length % 2
//     }
//     return str
// }
// function getMiddle(s) {
//     return s.substr((s.length - 1) / 2, 2 - s.length % 2);
// }
//
// console.log(getMiddle('test'))
// console.log(getMiddle('testing'))

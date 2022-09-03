//получение элементов DOM2
//удаление элементов DOM2

// let title = document.querySelector('.title')
//
// let h1 = document.createElement('h1')
// h1.textContent = 'hello world'
// title.prepend(h1)  //before
// title.append(h1) //after
//
//
// console.log(h1)
//
// title.before(h1)   //добав ление элемена до указанного
// title.after(h1)   //добав ление элемена после указанного
//
// console.log(listItem.nextElementSibling)
// console.log(listItem.previousElementSibling)


// let box = document.querySelector('.box')
// // императивный
// let h1 = document.createElement('h1')
// h1.textContent = 'Title'
// h1.classList.add('title')
// box.prepend(h1)
//
//
// let p  = document.createElement('p')
// p.textContent = 'Hello world'
// p.setAttribute('id', 'text')
// box.append(p)
//
//
// let button = document.createElement('button')
// button.textContent = 'Отправить'
// button.setAttribute('type', "button")
// button.classList.add('btn')
// box.append('button')

// декларативный
// box.innerHTML = '<h1>title</h1>'

// //remove
// let box = document.querySelector('.list-item')
// // box.remove()
//
// let ul = document.querySelector('ul')

// ul.removeChild(box)
// ul.replaceChild(p, box)



let base = [
    {id: 1,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 2,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 3,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 4,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 5,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 6,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 7,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 8,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 9,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 10,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 11,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
    {id: 12,img: '1.png',title : 'Дом для двух поколений', subTitle : 'Уютная студия в ЖК Адмирал', button: 'Delete'},
]

let row = document.querySelector('.row')
const addCard =  () => {
    base.forEach((item) => {
        row.innerHTML +=
            `<div class="card" id="${item.id}">
            <img src="./${item.img}" alt="">
            <h2 class="title">${item.title}</h2>
            <h3 class="subtitle">${item.subTitle}</h3>
            <button class="delete" data-id="${item.id}">Delete</button>
        </div>`
    })

    let deleteBtn =  document.querySelectorAll('.delete')
    deleteBtn.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item)
            base = base.filter((el) => {
                return +item.dataset.id !== el.id
            })
            row.innerHTML = ''
            addCard()
        })
    })
}
addCard()

let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    base = [...base, {
        id : base[base.length -1].id + 1,
        img: 'img1.webp', title: "Sweet Home", subtitle: "Welcome"
    }]
    row.innerHTML = ''
    addCard()
})












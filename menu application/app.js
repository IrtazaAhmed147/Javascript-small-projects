let ul = document.getElementById('ul')
let btn = document.querySelector('.btn')
let btnBox = document.querySelector('#btnBox')

btns.forEach((btn) => {
    let button = document.createElement('button')
    button.setAttribute('class', 'btn')
    button.setAttribute('onClick', `getItems('${btn.title}')`)
    button.innerHTML = `${btn.title}`
    btnBox.appendChild(button)
})



function getItems(category = 'All') {
    ul.innerHTML = ''
    menu.filter((item) => {
        return category === 'All' || item.category === category
    }).forEach((item) => {
        let li = document.createElement('li')

        li.innerHTML = `<img src=${item.image} alt="">
                    <div class="detailBox">
                        <div class="upperBox">${item.title} <span class="price">$${item.price}</span></div>
                        <div>
                            <p>${item.description}</p>
                        </div>
                    </div>`
        ul.appendChild(li)
    })
}

getItems()
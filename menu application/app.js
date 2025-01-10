let ul = document.getElementById('ul')
let btn = document.querySelector('.btn')
let btnBox = document.querySelectorAll('.btnBox')
let heading = document.getElementById('heading')



btnBox.forEach((box) => {
    btns.forEach((btn) => {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.setAttribute('onClick', `getItems('${btn.title}')`);

        button.innerHTML = `${btn.title}`;
        box.appendChild(button);
    });
});


function getItems(category = 'All') {
    ul.innerHTML = ''
    if(category === 'All') {
        heading.innerHTML = 'Our Menu'
    } else {

        heading.innerHTML = category
    }
    menu.filter((item) => {
        return category === 'All' || item.category === category
    }).forEach((item) => {
        let li = document.createElement('li')
        li.setAttribute('class', 'li')

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
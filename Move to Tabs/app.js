const btnArr = [
    'History',
    'Vision',
    'Goals',
]

const contentArr = [
    {
        heading: 'History',
        Para: 'The history of any organization, idea, or concept represents its journey from inception to the present. It includes the foundational moments, key achievements, and challenges overcome. For example, many successful startups began in a small garage or dorm room and later became global brands. History reflects the evolution of values, strategies, and innovations that shaped the present.',
    },
    {
        heading: 'Vision',
        Para: "Vision defines the long-term aspirations and purpose of an entity. It serves as a guiding light, inspiring individuals and organizations to work toward a shared dream. A strong vision sets a clear direction and helps in decision-making. For instance, a company's vision might be 'to make the world more sustainable through green technologies.' This motivates stakeholders to focus on impactful innovations."
    },
    {
        heading: 'Goals',
        Para: 'Goals are specific, actionable steps designed to achieve the vision. They are measurable, time-bound objectives that keep teams aligned and focused. For instance, a company aiming to reduce carbon emissions might set a goal like "achieve net-zero emissions by 2030." Goals provide clarity and a sense of accomplishment as milestones are reached.'
    },
]


let details = document.getElementById('details')
let btnBox = document.getElementById('btn-box')

    
btnArr.map((item) => {
    let button = document.createElement('button')
    button.classList.add('btn')
    button.innerHTML = item
    btnBox.appendChild(button)
})


let btn = document.querySelectorAll('.btn')

btn.forEach((button) => {

    button.addEventListener('click', function (e) {
        btn.forEach((btn) => {
            btn.style.backgroundColor = '#707070';
        });
        e.target.style.backgroundColor = '#414141';

        const selectedContent = contentArr.find((arr) => arr.heading === e.target.innerHTML.trim())

        if (selectedContent) {
            details.innerHTML = `<h3>${selectedContent.heading}</h3>
                <p>${selectedContent.Para}</p>`
        } else {
            details.innerHTML = 'Content not Found'
        }

    })
})
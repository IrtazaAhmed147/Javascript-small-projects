let userInput = document.getElementById("userInput")
let btn = document.getElementById("btn")
let card = document.querySelector(".card")

const url = `https://restcountries.com/v3.1/name/${userInput.value}`

btn.addEventListener('click', async (e) => {
    e.preventDefault()
    if (!userInput.value.trim()) {
        return
    }

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${userInput.value}`)
        const data = await response.json()

        if (data.status === 404) {
            throw new Error("Invalid Country")
        }
        const [value] = data

        const currencies = Object.values(value.currencies)
            .map(currency => `${currency.name} (${currency.symbol})`)
            .join('');


        const borders = value.borders
            ? value.borders.map(border => `<span>${border}</span>, `).join('')
            : 'No borders';

        card.innerHTML = `
            <div class="imgBox">
                <img src="${value.flags.png}" alt="Flag of ${value.name.common}">
            </div>
            <div>
                <h1>${value.name.common}</h1>
                <p>${value.continents[0]}</p>
                <ul id="list">
                    <li>Capital: ${value.capital ? value.capital[0] : 'N/A'}</li>
                    <li>Currency: ${currencies}</li>
                    <li>Borders: ${borders}</li>
                </ul>
            </div>
        `;

        userInput.value = ''

    } catch (error) {
        alert('Invalid Country')
        console.log("error ==>>>", error.message);

    }
})
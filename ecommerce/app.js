let productsBox = document.getElementById("productsBox")


let data;
let cartItems = JSON.parse(localStorage.getItem("products")) || []
const fetchProducts = async () => {
    try {
        productsBox.innerHTML = "Loading"
        const response = await fetch("https://fakestoreapi.com/products")

        const res = await response.json()
        data = res
        if (!data) {
            productsBox.innerHTML = "Error occured"
            return
        }
        productsBox.innerHTML = ""
        data.map((product) => {
            let div = document.createElement("div")
            div.classList.add("product-card")
            div.innerHTML = `
            <img src=${product.image} alt="Product 1">
                <h3>${(product.title).slice(0, 20)}</h3>
                <p>${(product.description).slice(0, 50)}...</p>
                <p>$${product.price}</p>
                <button onClick="handleAddItem(${product.id})">Add to Cart</button>`

            productsBox.appendChild(div)
        })
    } catch (error) {

    }
}

fetchProducts()

function handleAddItem(id) {
    console.log(id);
    const specificProduct = data.find((product) => product.id === id)
    cartItems.push(specificProduct)
    console.log(cartItems);
    localStorage.setItem("products", JSON.stringify(cartItems))


}
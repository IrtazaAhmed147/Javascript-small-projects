let limit = 10
let dataResponse;

let searchBtn = document.getElementById("searchBtn")
let nextBtn = document.getElementById("nextBtn")
let prevBtn = document.getElementById("prevBtn")
let bookMarkListBtn = document.getElementById("bookMarkListBtn")
let right = document.querySelector(".right")
let cardList = document.querySelector(".card-list")
let searchInput = document.getElementById("searchInput")
let bookMarkList = []
let bookMarkBox = document.querySelector(".bookMarkBox")
let selected;


bookMarkListBtn.addEventListener("mouseover", () => bookMarkBox.style.display = "block")
bookMarkListBtn.addEventListener("mouseout", () => bookMarkBox.style.display = "none")
bookMarkBox.addEventListener("mouseover", () => bookMarkBox.style.display = "block")
bookMarkBox.addEventListener("mouseout", () => bookMarkBox.style.display = "none")


function showMessage(info) {
    return `
    <div class="infoMsg">
                        <p>
                            <i class="fa-solid fa-triangle-exclamation"></i> ${info}
                        </p>

                    </div>
    `
}

function renderHtml(response) {
    cardList.innerHTML = ''
    response.data.recipes.slice(limit - 10, limit).map((recipe) => {
        let div = document.createElement('div')
        div.classList.add("card")
        div.addEventListener("click", () => {
            document.querySelectorAll(".card").forEach((box) => {
                let imgSrc = box.querySelector("img")?.src;
                if (imgSrc === recipe.image_url) {
                    box.style.backgroundColor = "#f9f5f3";
                } else {
                    box.style.backgroundColor = "#fff";
                }
            });
            detailRecipe(recipe.id)
        });

        div.innerHTML = `
             <div class="card-img">
             <img src=${recipe.image_url} alt="">
             </div>
                            <div class="card-prdct">
                                <h5>${recipe.title}</h5>
                                <p>A${recipe.publisher}</p>
                            </div>
            `

        cardList.appendChild(div)
    })
}

function renderLoader() {
    return `
         <div class="loader">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                                <div class="bar4"></div>
                                <div class="bar5"></div>
                                <div class="bar6"></div>
                                <div class="bar7"></div>
                                <div class="bar8"></div>
                                <div class="bar9"></div>
                                <div class="bar10"></div>
                                <div class="bar11"></div>
                                <div class="bar12"></div>
                            </div>
        `
}

async function searchRecipe() {

    limit = 10
    document.querySelector(".pgs").style.display = "none"
    try {
        cardList.innerHTML = renderLoader()
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput.value}`)
        const res = await response.json()

        if (res.status !== "success") {
            return
        }
        if (res.results === 0) {
            cardList.innerHTML = showMessage("No recipes found for your query! Please try again;")
            return
        }
        if (res.results >= 10) {
            document.querySelector(".pgs").style.display = "flex"
        }

        dataResponse = res
        renderHtml(res)
        searchInput.value = ""
    } catch (error) {
        cardList.innerHTML = showMessage(error.message)
        console.log(error);
    }
}

async function nextRecipe() {
    prevBtn.style.display = "block"
    document.querySelector(".pgs").style.justifyContent = "space-between"
    if (limit + 10 > dataResponse.results) {
        nextBtn.style.display = "none"

    }
    limit += 10
    renderHtml(dataResponse)

}
async function prevRecipe() {
    nextBtn.style.display = "block"
    if (limit === 20) {
        document.querySelector(".pgs").style.justifyContent = "end"
        prevBtn.style.display = "none"
    }
    limit -= 10
    renderHtml(dataResponse)
}


async function detailRecipe(id) {

    try {

        right.innerHTML = renderLoader()
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        const res = await response.json()

        if (res.status !== "success") {
            return
        }


        let recipe = res.data.recipe

        right.innerHTML = ""
        right.innerHTML = `
        <div class="detailBox">
          <div class="recipe-img">
                        <img src=${recipe.image_url} alt="" width="100%" height="330px">
                    </div>
                    <div class="recipe-title">
                        <h1>${recipe.title}</h1>
                    </div>
                    <div class="recipe-details">
                        <ul>
                            <li><i class="fa-regular fa-clock"></i> ${recipe.cooking_time} Minutes</li>
                            <li><i class="fa-solid fa-users"></i> ${recipe.servings} Servings</li>
                        </ul>
                        <button class="bookMarkBtn" >
                        <i class="fa-regular fa-bookmark"></i>
                        </button>
                    </div>
                    <div class="recipe-ingredients">
                        <h2>RECIPE INGREDIENTS</h2>
                        <ul class="recipe-ingredients-list">
                        </ul>
                    </div>
                    <div class="recipe-directions">
                        <h3>How to cook it</h3>
                        <p>This recipe was carefully designed and tested by <b>${recipe.publisher}</b>. Please check out
                            directions at their website.</p>
                        <a href=${recipe.source_url} target="_blank"><button>Direction →</button></a>
                    </div>
                    </div>
        `

        let existingRecipe = bookMarkList.find((recipess) => recipess.id === recipe.id)


        let bookMarkBtn = document.querySelector(".bookMarkBtn")
        if (existingRecipe) {
            bookMarkBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i>`
        }
        bookMarkBtn.addEventListener('click', () => {

            let existingRecipesIndex = bookMarkList.findIndex((recipess) => recipess.id === recipe.id);

            if (existingRecipesIndex !== -1) {
                bookMarkList = [
                    ...bookMarkList.slice(0, existingRecipesIndex),
                    ...bookMarkList.slice(existingRecipesIndex + 1)
                ];

                bookMarkBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i>`;
            } else {
                bookMarkList.push(recipe);
                bookMarkBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;
            }

            bookMark()
        })
        let ul = document.querySelector(".recipe-ingredients-list")
        recipe.ingredients.map((ingredient) => {
            let li = document.createElement("li")
            li.classList.add("ingredients-name")
            li.innerHTML = `
                            <i class="fa-solid fa-check"></i> ${ingredient?.quantity || ""} ${ingredient.unit} ${ingredient.description}
                            `
            ul.appendChild(li)
        })

    } catch (error) {
        right.innerHTML = showMessage(error.message)
        console.log(error);
    }
}


function bookMark() {

    bookMarkBox.innerHTML = "";

    if (bookMarkList.length === 0) {
        bookMarkBox.innerHTML = showMessage("No bookmarks yet. Find a nice recipe and bookmark it")
        return;
    }

    bookMarkList.forEach((recipe) => {
        let div = document.createElement("div");
        div.classList.add("card");
        div.addEventListener("click", () => {
            document.querySelectorAll(".card").forEach((box) => {
                let imgSrc = box.querySelector("img")?.src;
                if (imgSrc === recipe.image_url) {
                    box.style.backgroundColor = "#f9f5f3";
                } else {
                    box.style.backgroundColor = "#fff";
                }
            });
            detailRecipe(recipe.id);
        });

        div.innerHTML = `
            <div class="card-img">
                <img src=${recipe.image_url} alt="">
            </div>
            <div class="card-prdct">
                <h5>${recipe.title}</h5>
                <p>${recipe.publisher}</p>
            </div>
          
        `;

        bookMarkBox.appendChild(div);
    });


}


searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    searchRecipe()
})
nextBtn.addEventListener("click", nextRecipe)
prevBtn.addEventListener("click", prevRecipe)



function getHTMLForMenu (category) {
    return `
             <div class="category">
                <div class="category-head">
                    <div class="c-content"> 
                        <img src="" alt="">
                        <h2>${category}</h2>
                    </div>
                </div>
                <div id="dishes-${category}" class="dishes"
                </div>
             </div>`
}
function getHTMLForDishes (dish, i) {
    return `
             <div class="dish" id="${i}">
                <img src="${dish.url}">
                <div class="dish-info">
                    <div class="dish-info-head">
                        <h2>${dish.name}</h2>
                        <span>${dish.price}</span>
                    </div>
                    <div class="dish-info-main">
                        <span>${dish.description}</span>
                    </div>
                    <div class="dish-info-footer">
                        <button onclick="addToBasket(${dish.id})">Add to basket</button>
                    </div>
             </div>`
}
function getHTMLForBasket (count, dish, id) {
    return `
             <div class="basket-dish">
                    <div class="basket-dish-head">
                        <h2>${dish.name}</h2>
                    </div>
                <div class="basket-dish-info-main">
                    <div>
                    <button onclick="reduceCount(${id}, ${count})">-</button>
                    <span id="count${id}">${count}</span>
                    <button onclick="addToBasket(${id})">+</button>
                    </div>
                    <span>${dish.price}</span>
                </div> `
}

function getHTMLForCount (count) {
    return `
        ${count}`
}
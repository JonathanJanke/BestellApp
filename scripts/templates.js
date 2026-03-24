
function getHTMLForMenu (category, i) {
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
function getHTMLForDishes (dish) {
    return `
             <div class="dish">
                <img src="#">
                <div class="dish-info">
                    <div class="dish-info-head">
                        <h2>${dish.name}</h2>
                        <span>${dish.price}</span>
                    </div>
                    <div class="dish-info-main">
                        <span>${dish.description}</span>
                    </div>
                    <div class="dish-info-footer">
                        <button>Add to basket</button>
                    </div>
             </div>`
}
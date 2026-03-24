function init () {
    // Callstack einbauen
    renderCategories();
};

function getHTMLForMenu (category, i) {
    return `
             <div class="category">
                <img src="" alt="">
                <h2>${category}</h2>
                <div id="dishes-${category}"
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

function renderCategories () {
    const menu = document.getElementById("menu");
    
    for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        menu.innerHTML += getHTMLForMenu(category, i);
    }
    renderDishes();
}

function renderDishes () {
    
    for (let j = 0; j < categories.length; j++) {
        const dishesByCategory = menu.filter(dish => dish.category === categories[j]);
        let category = categories[j];
        
        for(let i= 0; i < dishesByCategory.length; i++){
            let dish = dishesByCategory[i];
            let dishes = document.getElementById(`dishes-${category}`);
            dishes.innerHTML += getHTMLForDishes(dish);
            }
    }
}
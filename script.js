function init () {
    // Callstack einbauen
    renderCategories();
};


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
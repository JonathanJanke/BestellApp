function init () {
    renderCategories();
};
// Renderfunktion für eingepflegte URLs schreiben

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
            dishes.innerHTML += getHTMLForDishes(dish, i);
            }
    }
}

function addToBasket(id){
    const basket = document.getElementById("order");

    let dish = menu[id];

    if(!basketData.includes(dish.name)){
    count = 1;
    basketData.push(dish.name);
    basket.innerHTML += getHTMLForBasket(dish, count);
    }else{
        const renderCount= document.getElementById(`count${id}`);
        count++;
        renderCount.innerHTML = getHTMLForCount(count, dish);
    }  
}

function removeFromBasket(id) {
 // addTOBasket, nur anders herum -- Heute nach dem Schwimmen.
}
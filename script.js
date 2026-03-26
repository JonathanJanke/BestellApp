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
    let counter = parseInt(dish.amount);
    let count = counter;

    if(!basketData.includes(dish.name)){
    count++;
    dish.amount = count.toString()
    basketData.push(dish.name);
    basket.innerHTML += getHTMLForBasket(dish, id);
    }else{
        const renderCount= document.getElementById(`count${id}`);
        count++;
        dish.amount = count.toString()
        renderCount.innerHTML = "";
        renderCount.innerHTML = getHTMLForCount(count);
    }  
}
// Fehlt: Deletedish-Function, entsprechendes Icon und Neupositionierung

function reduceCount(id) {
    let dish = menu[id];
    let counter = parseInt(dish.amount);
    let count = counter;
    if (counter === 1) {
        deleteFromBasket(id);
    }else {
        count--;
        dish.amount = count.toString();
        const renderCount= document.getElementById(`count${id}`);
        renderCount.innerHTML = getHTMLForCount(count);
    }
}

function deleteFromBasket (id) {
    let dish = menu[id];
    const basket = document.getElementById("order");
    basket.innerHTML -= getHTMLForBasket(dish, id);
}
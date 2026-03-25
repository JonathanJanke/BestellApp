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
    let dishid = dish.id;
    if(!basketData.includes(dish.name)){
    count = 1;
    basketData.push(dish.name);
    basket.innerHTML += getHTMLForBasket(count, dish, dishid);
    }else{
        const renderCount= document.getElementById(`count${id}`);
        count++;
        renderCount.innerHTML = getHTMLForCount(count, dish, dishid);
    }  
}
// Fehlt: Deletedish-Function, entsprechendes Icon und Neupositionierung

function reduceCount(dishid, count) {
    if (count.innerHTML.value === 0) {
        deleteFromBasket();
    }else {
        count--;
        const renderCount= document.getElementById(`count${dishid}`);
        renderCount.innerHTML = getHTMLForCount(count, dishid);
    }
 // addTOBasket, nur anders herum -- Heute nach dem Schwimmen.
}
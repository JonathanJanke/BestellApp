let total = 0;

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
    renderBasketFooter(total);
}

function renderDishes () {
    
    for (let j = 0; j < categories.length; j++) {
        const dishesByCategory = menu.filter(dish => dish.category === categories[j]);
        let category = categories[j];
        
        for(let i= 0; i < dishesByCategory.length; i++){
            let dish = dishesByCategory[i];
            let dishes = document.getElementById(`dishes-${category}`);
            let dishPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(dish.price);
            dishes.innerHTML += getHTMLForDishes(dish, i, dishPrice);
            }
    }
}

function renderBasketFooter (total) {
    const basketFooter = document.getElementById("basket-footer");

    basketFooter.innerHTML = getHTMLForBasketFooter(total);
}

function addToBasket(id){
    const basket = document.getElementById("order");
    let dish = menu[id];
    let counter = parseInt(dish.amount);
    let count = counter;
    const msg = document.getElementById("welcome");
    let dishPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(dish.price);

    if(!basketData.includes(dish.name)){
    count++;
    dish.amount = count.toString()
    basketData.push(dish.name);
    basket.innerHTML += getHTMLForBasketDish(dish, id, dishPrice);
    msg.innerHTML = "";
    }else{
        const renderCount= document.getElementById(`count${id}`);
        count++;
        dish.amount = count.toString()
        renderCount.innerHTML = "";
        renderCount.innerHTML = getHTMLForCount(count);
        changeIcon(id);
    }
    calcTotal(id);
    updateCartCount();  
}


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
    calcTotal(id);
    updateCartCount();
}

function deleteFromBasket (id) {
    let dish = menu[id];
    let count = 0;
    const msg = document.getElementById("welcome");

    dish.amount = count.toString();
    const basket = document.getElementById("order");
    basket.children[id].remove();
    basketData.splice(dish.name);

    if (basketData.length === 0) {
        msg.innerHTML = "Deine Bestellung bitte."
    }
    calcTotal(id);
    updateCartCount();
}

function calcTotal() {
    const sum = menu.reduce((total, item) => {
        return total + item.amount * item.price;
    }, 0);

    let eurSum =  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(sum);
    document.getElementById("total").innerHTML = eurSum;
}

function changeIcon (id){
    const btn = document.getElementById(`remove${id}`);
    const addbtn = document.getElementById(`addbtn${id}`);

    if (btn.classList.contains("remove")) { 
        btn.innerHTML = "-";
        btn.classList.remove("remove");
        addbtn.innerHTML += getHTMLForBtn(id);
    }   
}

function openDialog(){
    const dialogRef = document.getElementById("orderDialog");
    dialogRef.showModal();
    deleteBasket();

    setTimeout(() => {
        closeDialog();
    }, 5000);
}

function closeDialog () {
    const dialogRef = document.getElementById("orderDialog");
    dialogRef.close();
    const dialogBasketRef = document.getElementById("mobile-basket");
    dialogBasketRef.close();
}

function propagationHandler(event) {
    event.stopPropagation();
}

function deleteBasket () {
    const msg = document.getElementById("welcome");
    const basket = document.getElementById("order");
    const total = document.getElementById("total");

    basketData = [];
    basket.innerHTML = "";

    for (let i= 0; i < menu.length; i++){
        dish = menu[i];
        dish.amount = 0;
    }
    let number = 0;
    total.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(number);
    msg.innerHTML = "Deine Bestellung bitte."
}


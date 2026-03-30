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

function renderBasketFooter () {
    const basketFooter = document.getElementById("basket-footer");

    basketFooter.innerHTML = getHTMLForBasketFooter();
}

function addToBasket(id){
    let dish = menu[id];
    let counter = parseInt(dish.amount);
    let count = counter;
    renderBasketFooter();

    if(!basketData.includes(dish.name)){
        createNewCart(id,dish,count)
    }else{
        updateCart(id, count)
    }
    calcTotal(id);
    updateCartCount();

}

function createNewCart (id) {
    const basket = document.getElementById("order");
    const msg = document.getElementById("welcome");
    let dish = menu[id];
    let counter = parseInt(dish.amount);
    let count = counter;
    let dishPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(dish.price);

    count++;
    dish.amount = count.toString()
    basketData.push(dish.name);
    basket.innerHTML += getHTMLForBasketDish(dish, id, dishPrice);
    msg.innerHTML = "";
}

function updateCart (id,count) {
        const pricespan = document.getElementById("price");
        const renderCount= document.getElementById(`count${id}`);
        let dish = menu[id];
        count++;
        dish.amount = count.toString()
        let newprice = dish.amount * dish.price;
        let dishPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(newprice);
        renderCount.innerHTML = "";
        renderCount.innerHTML = `${count}`;
        pricespan.innerHTML = `${dishPrice}`;
        changeIcon(id);
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
        renderCount.innerHTML = `${count}`;
    }
    calcTotal(id);
    updateCartCount();
}

function deleteFromBasket (id) {
    let dish = menu[id];
    let count = 0;
    const msg = document.getElementById("welcome");
    const basketFooter = document.getElementById("basket-footer");

    dish.amount = count.toString();
    const basket = document.getElementById("order");
    const bDataIndex = basketData.findIndex(basketData => basketData === menu[id].name);
    if (bDataIndex !== -1) {
    basketData.splice(bDataIndex, 1);
    }
    for (let i = 0; i < basket.children.length; i++){
        const name = basket.children[i].querySelector(".basket-dish-head h2").textContent;
        if (dish.name === name){
            basket.children[i].remove();
        }
    }
    if (basketData.length === 0) {
        msg.innerHTML = getHTMLForMsg();
        basketFooter.innerHTML= "";
    }
    calcTotal(id);
    updateCartCount();
}

function calcTotal() {
    const sum = menu.reduce((total, item) => {
        return total + item.amount * item.price;
    }, 0);

    if (basketData.length >= 1){
        let eurSum =  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(sum);
        document.getElementById("total").innerHTML = eurSum;
        document.getElementById("subtotal").innerHTML = eurSum;
        document.getElementById("order-btn").innerHTML = `Jetzt kaufen (${eurSum})`;
    }
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
}

function propagationHandler(event) {
    event.stopPropagation();
}

function deleteBasket () {
    const msg = document.getElementById("welcome");
    const basket = document.getElementById("order");
    const total = document.getElementById("total");
    const basketFooter = document.getElementById("basket-footer");

    basketData = [];
    basket.innerHTML = "";

    for (let i= 0; i < menu.length; i++){
        dish = menu[i];
        dish.amount = 0;
    }
    let number = 0;
    total.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(number);
    msg.innerHTML = getHTMLForMsg();
    basketFooter.innerHTML = "";
}

function updateCartCount() {
    const countElement = document.getElementById("cartCount");
    countElement.textContent = basketData.length;
}

function showBasket() {
    basket = document.getElementById("showBasket").classList.add("show");
    basket = document.getElementById("basket").classList.add("show");
}
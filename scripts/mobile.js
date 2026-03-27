function addToMobileBasket(id){
    const basket = document.getElementById("mobile-order");
    let dish = menu[id];
    let counter = parseInt(dish.amountMobile);
    let count = counter;
    const msg = document.getElementById("welcome");
    let dishPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(dish.price);

    if(!basketDataMobile.includes(dish.name)){
    count++;
    dish.amount = count.toString()
    basketDataMobile.push(dish.name);
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

function updateCartCount() {
    const countElement = document.getElementById("cartCount");
    countElement.textContent = basketDataMobile.length;
}

function openBasket() {
    const basket = document.getElementById("mobile-basket");
    basket.showModal();
}
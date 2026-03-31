
function updateCartCount() {
    const countElement = document.getElementById("cartCount");
    countElement.textContent = basketData.length;
}

function createNewMobileCard (id) {
    const basket = document.getElementById("mobile-order");
    const msg = document.getElementById("welcome-mobile");
    let dish = menu[id];
    let dishPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(dish.price);

    basket.innerHTML += getHTMLForMobileBasketDish(dish, id, dishPrice);
    msg.innerHTML = "";
}

function renderMobileDishes () {
    for (let i = 0; i < basketData.length; i++) {
        let indexFromDish = menu.findIndex(menu => menu.name === basketData[i]);
        createNewMobileCard(indexFromDish);
    }
    renderMobileBasketFooter();
    calcTotalMobile();
}

function renderMobileBasket () {
    const basket = document.getElementById("mobile-basket");

    if (basketData.length > 0) {
        basket.innerHTML += getHTMLForMobileBasket();
        basket.showModal();
        renderMobileDishes();
    }
}

function updateMobileCard (id,count) {
        const pricespan = document.getElementById(`m-price${id}`);
        const renderCount= document.getElementById(`m-count${id}`);
        let dish = menu[id];
        count++;
        dish.amount = count.toString()
        let newprice = dish.amount * dish.price;
        let dishPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(newprice);
        renderCount.innerHTML = "";
        renderCount.innerHTML = `${count}`;
        pricespan.innerHTML = `${dishPrice}`;
        changeMobileIcon(id);
}

function addToMobileBasket(id){
    let dish = menu[id];
    let counter = parseInt(dish.amount);
    let count = counter;
    renderMobileBasketFooter();

    if(!basketData.includes(dish.name)){
        createNewCart(id,dish,count)
    }else{
        updateMobileCard(id, count)
    }
    calcTotalMobile();
    updateCartCount();
}

function reduceMobileCount(id) {
    const pricespan = document.getElementById(`m-price${id}`);
    let dish = menu[id];
    let counter = parseInt(dish.amount);
    let count = counter;
    if (counter <= 1) {
        deleteFromMobileBasket(id);
    }else {
        count--;
        dish.amount = count.toString();
        const renderCount= document.getElementById(`m-count${id}`);
        renderCount.innerHTML = `${count}`;
        let newprice = dish.amount * dish.price;
        let dishPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(newprice);
        pricespan.innerHTML = `${dishPrice}`;
        if(count === 1){
            rechangeMobileIcon(id);
        }
    }
    calcTotalMobile();
    updateCartCount();
}

function changeMobileIcon (id){
    const btn = document.getElementById(`m-remove${id}`);
    const addbtn = document.getElementById(`m-addbtn${id}`);

    if (btn.classList.contains("remove")) { 
        btn.innerHTML = "-";
        btn.classList.remove("remove");
        addbtn.innerHTML += getHTMLForMobileBtn(id);
    }   
}

function renderMobileBasketFooter () {
    const basketFooter = document.getElementById("m-basket-footer");

    basketFooter.innerHTML = getHTMLForMobileBasketFooter();
}

function calcTotalMobile() {
    const sum = menu.reduce((total, item) => {
        return total + item.amount * item.price;
    }, 0);

    if (basketData.length >= 1){
        let eurSum =  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(sum);
        document.getElementById("m-total").innerHTML = eurSum;
        document.getElementById("m-subtotal").innerHTML = eurSum;
        document.getElementById("m-order-btn").innerHTML = `Jetzt kaufen (${eurSum})`;
    }
}

function deleteFromMobileBasket (id) {
    let dish = menu[id];
    let count = 0;
    const msg = document.getElementById("welcome-mobile");
    const basketFooter = document.getElementById("m-basket-footer");

    dish.amount = count.toString();
    const basket = document.getElementById("mobile-order");
    const bDataIndex = basketData.findIndex(basketData => basketData === dish.name);
    if (bDataIndex !== -1) {
    basketData.splice(bDataIndex, 1);
    }
    for (let i = 0; i < basket.children.length; i++){
        const name = basket.children[i].querySelector(".basket-dish-head h2").textContent;
        if (dish.name === name){
            basket.children[i].remove();
        }
        calcTotal(id);
    }
    if (basketData.length === 0) {
        msg.innerHTML = getHTMLForMsg();
        basketFooter.innerHTML= "";
    }
    updateCartCount();
}

function closeDialog () {
    const dialogRef = document.getElementById("mobile-basket");
    dialogRef.innerHTML = "";
    dialogRef.close();
}

function rechangeMobileIcon (id){
    let dish = menu[id];

    const btn = document.getElementById(`m-remove${id}`);
    const addbtn = document.getElementById(`m-addbtn${id}`);

    if (!btn.classList.contains("remove")) { 
        btn.classList.add("remove");
        addbtn.innerHTML = `<h2>${dish.name}</h2>`
        btn.innerHTML = `<svg width="23px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17ZM14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17Z" fill="#363534"/>
                        </svg>` 
    }   
}
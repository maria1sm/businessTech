function createCard(params, type) {
    let h4 = document.createElement("h4");
    h4.innerHTML = params.name;
    let p = document.createElement("p");
    p.innerHTML = params.category;
    let stars = document.createElement("img");
    if (type === "product") {
        stars.src = "";
    } else if (type === "service") {
        stars.src = "";
    }
    let newPrice = document.createElement("span");
    newPrice.className = "u-pull-right";
    newPrice.innerHTML = `${params.newPrice}`;
    let oldPrice = document.createElement("p");
    oldPrice.className = "precio";
    //oldPrice.innerHTML = `${params.oldPrice}  `;
    oldPrice.appendChild(newPrice);
    let a = document.createElement("a");
    a.href = "#";
    a.className = "u-full-width button-primary button input agregar-carrito"
    a.innerHTML = "add to cart";
    a.setAttribute("data-id", params.id);
    let divInfo = document.createElement("div");
    divInfo.className = "info-card";
    divInfo.appendChild(h4);
    divInfo.appendChild(p);
    divInfo.appendChild(stars);
    divInfo.appendChild(oldPrice);
    divInfo.appendChild(a);
    let img = document.createElement("img");
    img.src = params.img;
    img.className = "imagen-curso u-full-width";
    let mainDiv = document.createElement("div");
    mainDiv.className = "card";
    mainDiv.appendChild(img);
    mainDiv.appendChild(divInfo);
    return mainDiv;
}
function createUserCard(params, type) {
    let h4 = document.createElement("h4");
    h4.innerHTML = params.name;
    let p = document.createElement("p");
    p.innerHTML = params.job;
    let p2 = document.createElement("p");
    p2.innerHTML = params.description;
    let a = document.createElement("a");
    let divInfo = document.createElement("div");
    divInfo.className = "info-card";
    divInfo.appendChild(h4);
    divInfo.appendChild(p);
    divInfo.appendChild(p2);
    let img = document.createElement("img");
    img.src = params.img;
    img.className = "imagen-curso u-full-width";
    let mainDiv = document.createElement("div");
    mainDiv.className = "card";
    mainDiv.appendChild(img);
    mainDiv.appendChild(divInfo);
    return mainDiv;
}
function addCard(params, f, type) {
    let card = f(params, type);
    let cardContainer = document.querySelector(".cardContainer");
    cardContainer.appendChild(card);
}

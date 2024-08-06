let title = document.querySelector("h1");
title.textContent = "ვენეცია";
title.className = "title";
let pText = document.querySelector("p");
pText.textContent = "ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.";
pText.style.fontSize = "20px";
pText.style.color = "#ffff00";
let circle = document.createElement("section");
circle.className = "circle";
let box = document.querySelector("div");
box.appendChild(circle);
circle.addEventListener("mouseover", () => {
    circle.style.backgroundColor = "red"
});
circle.addEventListener("mouseout", () => {
    circle.style.backgroundColor = "yellow"
});

let button = document.createElement("button");
button.className = "button";
box.appendChild(button);
button.textContent = "DELETE CIRCLE";
button.addEventListener("click", () => {
    if (button.textContent === "DELETE CIRCLE") {
        button.textContent = "RETURN CIRCLE";
        circle.style.display = "none";
    } else {
        button.textContent = "DELETE CIRCLE";
        circle.style.display = "block"
    }
});

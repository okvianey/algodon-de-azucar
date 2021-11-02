const el = document.getElementById("hero-tenis");
const moveIn = (e) => {
    el.style.left = 10 + "px";
}
const moveOut = (e) => {
    el.style.left = 0 + "px";
}

el.addEventListener("mouseover", moveIn);
el.addEventListener("mouseout", moveOut);
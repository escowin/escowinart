const sidescrollEl = document.querySelector(".sidescroll");

sidescrollEl.addEventListener("wheel", (e) => {
    e.preventDefault();
    sidescrollEl.scrollLeft += e.deltaY;
});
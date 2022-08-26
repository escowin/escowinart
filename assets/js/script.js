let date = new Date().getFullYear();

let currentYear = function() {
    const dateEl = document.querySelector("#date");
    dateEl.textContent = date; 
}

currentYear();
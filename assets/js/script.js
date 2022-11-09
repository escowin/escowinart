// dom
const portfolioLinkEl = document.getElementById('portfolio-link');
const aboutLinkEl = document.getElementById('about-link');
const contactLinkEl = document.getElementById('contact-link');

// logic
function clickedLink() {
    console.log('hey')
};

function currentYear() {
    let date = new Date().getFullYear();
    console.log(`
    \u00A9 ${date} Edwin M. Escobar
    https://github.com/escowin/escowinart
    `);
    const dateEl = document.querySelector("#date");
    dateEl.textContent = date; 
};

// calls
portfolioLinkEl.addEventListener('click', () => clickedLink());
aboutLinkEl.addEventListener("click", () => clickedLink());
contactLinkEl.addEventListener("click", () => clickedLink());
currentYear();
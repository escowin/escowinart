// dom
const portfolioLinkEl = document.getElementById('portfolio-link');
const aboutLinkEl = document.getElementById('about-link');
const contactLinkEl = document.getElementById('contact-link');

// logic
function resetStyles(resetValue) {
    // note | need to work out the logic in resetting class values of the previously clicked element with each click
    let resetEl = document.getElementById(`${resetValue}`);

    console.log(resetEl);
};

function portfolioFocus(section) {
    resetClassName(section);
    let focusEl = document.getElementById(`${section}`);

    focusEl.className = 'focus';
    console.log(focusEl);
}

function clickedLink(link) {
    // linking the menu link with its corresponding section
    portfolioFocus(link);
    // console.log(link)
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

// calls | passing in the constant value to alter visuals
portfolioLinkEl.addEventListener('click', (e) => {
    const value = 'portfolio';
    clickedLink(value)
});
aboutLinkEl.addEventListener("click", (e) => {
    const value = 'about';
    clickedLink(value)
});
contactLinkEl.addEventListener("click", (e) => {
    const value = 'contact';
    clickedLink(value)
});
currentYear();
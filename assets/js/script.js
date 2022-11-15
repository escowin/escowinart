// - gets & displays current year
function currentYear() {
    let date = new Date().getFullYear();
    console.log(`
    \u00A9 ${date} Edwin M. Escobar
    https://github.com/escowin/escowinart
    `);
    const dateEl = document.querySelector("#date");
    dateEl.textContent = date; 
};
currentYear();

// note: either modularize code base, or do an if statement. if (this page = ./index.html) { run code blow }

// dom
const portfolioLinkEl = document.getElementById('portfolio-link');
const aboutLinkEl = document.getElementById('about-link');
const contactLinkEl = document.getElementById('contact-link');
const portfolioSection = document.getElementById('portfolio');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

// logic
// - removes .focus from element
function resetStyles(element) {
    element.removeAttribute('class');
};

// - when user clicks on nav link, section bg color changes
function portfolioFocus(section) {
    // needed for desktop styling
    const desktop = window.matchMedia("(min-width: 1024px)");

    // checks for existing elements that have .focus
    const currentFocus = document.querySelector('.focus');

    if (currentFocus) {
        // runs reset logic for any existing .focus elements 
        resetStyles(currentFocus);
    }
    // sets .focus to corresponding section
    let focusEl = document.getElementById(`${section}`);
 
    if (focusEl.id === 'about' && desktop.matches) {
        focusEl.setAttribute('class', 'focus about-focus');
    } else {
        focusEl.setAttribute('class', 'focus');
    }
    console.log(focusEl)
}

// - links the menu link with its corresponding section
function clickedLink(link) {
    portfolioFocus(link);
};

// calls | passing in the constant value to alter visuals
portfolioLinkEl.addEventListener('click', () => {
    if (portfolioSection.className === 'focus') {
        portfolioSection.classList.remove('focus');
    }
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
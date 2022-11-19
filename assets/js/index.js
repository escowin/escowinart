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

// data
let illustrationsArr = [
    'img 1', 'img 2', 'img 3', 'img 4', 'img 5'
];
let fineartArr = [ 'art 1', 'art 2', 'art 3', 'art 4'];
let graphicdesignArr = ['graphic 1', 'graphic 2', 'graphic 3', 'graphic 4'];

// logic
// - random css background style on #fine-art, #illustration and #graphic-design
function randomizePortfolioImages(portfolios){
    // const random = Math.floor(Math.random() * illustrations.length);
    // let image = illustrations[random];

    // iterate through each index, each art portfolio goes through the randomzer
    for (let i = 0; i < portfolios.length; i++) {
        const random = Math.floor(Math.random() * portfolios[i].length);
        let image = portfolios[i][random]
        console.log(image)
    }
}

function displayPortfolios(illustrations, fineart, graphicdesign) {
    const illustrationPortfolio = document.getElementById('illustration');
    const fineartPortfolio = document.getElementById('fine-art');
    const graphicdesignPortfolio = document.getElementById('graphic-design');
    // pass in each artwork array as an argument in the randomize function call
    // consolidates the arrays as one object
    const portfolios = [illustrations, fineart, graphicdesign];
    randomizePortfolioImages(portfolios);
}

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
displayPortfolios(illustrationsArr, fineartArr, graphicdesignArr);

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
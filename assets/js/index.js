// - gets & displays current year
function currentYear() {
  let date = new Date().getFullYear();
  console.log(`
    \u00A9 ${date} Edwin M. Escobar
    https://github.com/escowin/escowinart
    `);
  const dateEl = document.querySelector("#date");
  dateEl.textContent = date;
}
currentYear();

// note: either modularize code base, or do an if statement. if (this page = ./index.html) { run code blow }

// dom
const portfolioLinkEl = document.getElementById("portfolio-link");
const aboutLinkEl = document.getElementById("about-link");
const contactLinkEl = document.getElementById("contact-link");
const portfolioSection = document.getElementById("portfolio");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

// data
let fineartArr = ["art 1", "art 2", "art 3", "art 4", "art 5"];
let illustrationArr = ["img 1", "img 2", "img 3", "img 4", "img 5"];
let graphicdesignArr = [
  "graphic 1",
  "graphic 2",
  "graphic 3",
  "graphic 4",
  "graphic 5",
];

// portfolio display logic | read from bottom to top
// - displays the randomly chosen portfolio bg urls each time the user loads the page
function displayPortfolios(portfolio) {
  const illustrationPortfolio = document.getElementById("illustration");
  const fineartPortfolio = document.getElementById("fine-art");
  const graphicdesignPortfolio = document.getElementById("graphic-design");

  console.log(portfolio[0]); // fine art
  console.log(portfolio[1]); // illustration
  console.log(portfolio[2]); // graphic design
}

// - shuffles the portfolio array
function randomizePortfolioImages(portfolios) {
  let randomizedImages = [];

  // iterates through array. Math & each index's length determines what value random will be.
  for (let i = 0; i < portfolios.length; i++) {
    const random = Math.floor(Math.random() * portfolios[i].length);
    let portfolioImage = portfolios[i][random];
    // pushes the selected values into the randomized array
    randomizedImages.push(portfolioImage);
  }

  // randomized array is what will be used to determine which url is used
  displayPortfolios(randomizedImages);
}

// - coalesces artwork arrays into a single array. this new array will have its indexes randomized
function getPortfolios(fineart, illustrations, graphicdesign) {
  const portfolios = [fineart, illustrations, graphicdesign];
  randomizePortfolioImages(portfolios);
}

// - removes .focus from element
function resetStyles(element) {
  element.removeAttribute("class");
}

// - when user clicks on nav link, section bg color changes
function portfolioFocus(section) {
  // needed for desktop styling
  const desktop = window.matchMedia("(min-width: 1024px)");

  // checks for existing elements that have .focus
  const currentFocus = document.querySelector(".focus");

  if (currentFocus) {
    // runs reset logic for any existing .focus elements
    resetStyles(currentFocus);
  }
  // sets .focus to corresponding section
  let focusEl = document.getElementById(`${section}`);

  if (focusEl.id === "about" && desktop.matches) {
    focusEl.setAttribute("class", "focus about-focus");
  } else {
    focusEl.setAttribute("class", "focus");
  }
  console.log(focusEl);
}

// - links the menu link with its corresponding section
function clickedLink(link) {
  portfolioFocus(link);
}

// calls | passing in the constant value to alter visuals
getPortfolios(fineartArr, illustrationArr, graphicdesignArr);

portfolioLinkEl.addEventListener("click", () => {
  if (portfolioSection.className === "focus") {
    portfolioSection.classList.remove("focus");
  }
  const value = "portfolio";
  clickedLink(value);
});
aboutLinkEl.addEventListener("click", (e) => {
  const value = "about";
  clickedLink(value);
});
contactLinkEl.addEventListener("click", (e) => {
  const value = "contact";
  clickedLink(value);
});

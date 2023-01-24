const page = document.title;
// note: either modularize code base, or do an if statement. if (this page = ./index.html) { run code blow }
// dom
const portfolioLinkEl = document.getElementById("portfolio-link");
const aboutLinkEl = document.getElementById("about-link");
const contactLinkEl = document.getElementById("contact-link");
const portfolioSection = document.getElementById("portfolio");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

// data

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

// portfolio display logic | read from bottom to top
// - displays the randomly chosen portfolio bg urls each time the user loads the page
function displayPortfolios(portfolio) {
  const illustrationPortfolio = document.getElementById("illustration");
  const fineartPortfolio = document.getElementById("fine-art");
  const graphicdesignPortfolio = document.getElementById("graphic-design");

  fineartPortfolio.style.backgroundImage = portfolio[0];
  illustrationPortfolio.style.backgroundImage = portfolio[1];
  graphicdesignPortfolio.style.backgroundImage = portfolio[2];
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

function script(title) {
  if (title === "Esᴄᴏᴡɪɴ ᴀʀᴛ") {
    let fineartArr = [
      'url("./assets/images/artwork/fineart/edwin-escobar-set-001.jpg")',
      'url("./assets/images/artwork/fineart/edwin-escobar-set-002.jpg")',
      'url("./assets/images/artwork/fineart/edwin-escobar-set-003.jpg")',
      'url("./assets/images/artwork/fineart/edwin-escobar-set-004.jpg")',
      'url("./assets/images/artwork/fineart/edwin-escobar-set-005.jpg")',
    ];
    let illustrationArr = [
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20171018-bluestrawberry-01.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20171025-bluestrawberry-02.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20171112-bluestrawberry-03.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20180502-bluestrawberry-04.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20180509-bluestrawberry-05.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20180516-bluestrawberry-06.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20180523-bluestrawberry-07.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20180530-bluestrawberry-08.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20200819-bluestrawberry-hungover-03.jpg")',
      'url("./assets/images/artwork/illustration/bluestrawberry/edwin-escobar-20201002-bluestrawberry-gertrude.jpg")',
    ];
    let graphicdesignArr = [
      'url("./assets/images/artwork/graphic-design/edwin-escobar-20210220-capitalism.png")',
      'url("./assets/images/artwork/graphic-design/edwin-escobar-20210225-made-in-a-lab.png")',
      'url("./assets/images/artwork/graphic-design/edwin-escobar-20220515-cool-with-coolidge.jpg")',
      'url("./assets/images/artwork/graphic-design/edwin-escobar-20220515-mindlessly-parrot-social-media.png")',
      'url("./assets/images/artwork/graphic-design/edwin-escobar-20220515-stop-being-poor.png")',
    ];
    
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
  }
}

// calls
currentYear();
script(page);

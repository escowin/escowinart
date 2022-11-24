const graphicsContainerEl = document.getElementById('graphics-container')
console.log(graphicsContainerEl);

const portfolio = [
    {
        name: "id",
        img: "./assets/images/artwork/graphic-design/edwin-escobar-20220515-cool-with-coolidge.jpg"
    },
    {
        name: "ego",
        img: "./assets/images/artwork/graphic-design/edwin-escobar-20220515-stop-being-poor.png"
    },
    {
        name: "super-ego",
        img: "./assets/images/artwork/graphic-design/edwin-escobar-20220515-mindlessly-parrot-social-media.png"
    }
];

function displayPortfolio(graphicdesign) {
    // console.log(graphicdesign);
    let template;
    for (let i = 0; i < graphicdesign.length; i++) {
        let result = `<article></article>`
        // console.log(graphicdesign[i])
        console.log(result)
    }
};

displayPortfolio(portfolio)
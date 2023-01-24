// data | each array object holds a unqieu name & img url
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

// logic | displays portfolio
function displayPortfolio(graphicdesign) {
    // dom element to hold master template
    const graphicsContainerEl = document.getElementById('graphics-container');
    let htmlArr = [];

    // iterates through the array, each index pushes a template literal into the master html array
    for (let i = 0; i < graphicdesign.length; i++) {
        let result = `
        <article class="container">
            <h3 class="dark graphic-header shadow">${graphicdesign[i].name}</h3>
            <div class="artwork-container">
                <img src="${graphicdesign[i].img}"/>
            </div>
        </article>`;
        
        htmlArr.push(result);
    }

    // converts html array into a string, removing the comma between objects. this string is the inner html of graphics container
    let template = htmlArr.toString().replace(/>,/g, '>');
    graphicsContainerEl.innerHTML = template;

    // final output
    return graphicsContainerEl;
};

// call
displayPortfolio(portfolio);
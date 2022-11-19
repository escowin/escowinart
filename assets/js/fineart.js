const artworkEl = document.getElementById("artwork");

const art = [
  {
    set: "set-005",
    subtitle: "frequency",
    medium: "oil on canvas",
    year: 2021,
    artworks: [
      {
        title: "003120210912 · r-g",
        length: 36,
        width: 24,
      },
      {
        title: "003220210913 · b-w",
        length: 36,
        width: 24,
      },
      {
        title: "003320210914 · y-b",
        length: 36,
        width: 24,
      },
    ],
  },
  // {
  //   set: "set-004",
  //   subtitle: "time",
  //   medium: "oil on canvas",
  //   year: 2021,
  //   artworks: [
  //     {
  //       title: "002620210902 · onset",
  //       length: 24,
  //       width: 18,
  //     },
  //     {
  //       title: "002720210902 · float",
  //       length: 24,
  //       width: 18,
  //     },
  //     {
  //       title: "002820210902 · stare",
  //       length: 24,
  //       width: 18,
  //     },
  //     {
  //       title: "002920210902 · seated",
  //       length: 18,
  //       width: 18,
  //     },
  //     {
  //       title: "003020210902 · done",
  //       length: 24,
  //       width: 18,
  //     },
  //   ],
  // },
];

// console.log(sidescrollEl);

function getDetails(artworks) {
  console.log(artworks[0].title)
  console.log(artworks[0].length)
  console.log(artworks[0].width)


  // console.log(container)
  // const detailsEl = document.createElement("section");
  // detailsEl.className = "artwork-details dark";

  // for (let i = 0; i < artworks.length; i++) {
  //   const titleEl = document.createElement("p");
  //   titleEl.className = "artwork-title";
  //   titleEl.innerText = `« ${artworks[i].title} »`;

  //   const dimensionsEl = document.createElement("p");
  //   dimensionsEl.className = "artwork-dimensions";
  //   dimensionsEl.innerText = `${artworks[i].length} in &times; ${artworks[i].width} in`;

  //   detailsEl.appendChild(titleEl);
  //   detailsEl.appendChild(dimensionsEl);
  // }
}

function getArtwork(art) {
  for (let i = 0; i < art.length; i++) {
    const containerEl = document.createElement("article");
    containerEl.setAttribute("id", art[i].set);
    containerEl.className = "container";
    containerEl.innerHTML = `
      <section class="artwork-header dark">
        <h3>${art[i].set} [ ${art[i].subtitle} ]</h3>
        <p class="medium">${art[i].medium}</p>
      </section>
      <section class="artwork-container"></section>
       ${getDetails(art[i].artworks)}
    `;

    sidescrollEl.appendChild(containerEl);
    console.log(containerEl);
    // console.log(art[i].artworks[i])
  }
}

getArtwork(art);

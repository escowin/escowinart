const artworkEl = document.getElementById("artwork");

const art = [
  {
    set: "set-003",
    subtitle: "thought",
    medium: "oil on canvas",
    year: 2021,
    artworks: [
      {
        title: "002420210525 · closed-loop",
        length: 36,
        width: 24,
      },
      {
        title: "002520210525 · interlinked",
        length: 36,
        width: 24,
      },
    ],
  },
  {
    set: "set-004",
    subtitle: "time",
    medium: "oil on canvas",
    year: 2021,
    artworks: [
      {
        title: "002620210902 · onset",
        length: 24,
        width: 18,
      },
      {
        title: "002720210902 · float",
        length: 24,
        width: 18,
      },
      {
        title: "002820210902 · stare",
        length: 24,
        width: 18,
      },
      {
        title: "002920210902 · seated",
        length: 18,
        width: 18,
      },
      {
        title: "003020210902 · done",
        length: 24,
        width: 18,
      },
    ],
  },
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
];

// console.log(sidescrollEl);

function getArtwork(ouvre) {
  let art = ouvre.reverse();
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
      <section class="artwork-details dark">${getDetails(
        art[i].artworks
      )}</section>
    `;

    sidescrollEl.appendChild(containerEl);
  }
}

function getDetails(details) {
  let arr = [];
  let result;
  // ned to remove ',' before display
  for (let i = 0; i < details.length; i++) {
    result = `<p class='artwork-title'>« ${details[i].title} »</p><p class='artwork-dimensions'>${details[i].length} in &times; ${details[i].width} in</p>`;
    arr.push(result)
  }
  console.log(arr)
  return arr
};

getArtwork(art);

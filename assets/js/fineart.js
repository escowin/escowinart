// data | dom
const artworkEl = document.getElementById("artwork");

// data | artwork array
const art = [
  {
    set: "set-001",
    subtitle: "self",
    medium: "oil on canvas",
    year: 2021,
    artworks: [
      {
        title: "0013202110130 : psyche",
        length: 36,
        width: 24,
      },
      {
        title: "0012202110129 : super-ego",
        length: 36,
        width: 24,
      },
      {
        title: "0010202110127 : ego",
        length: 36,
        width: 24,
      },
      {
        title: "0011202110128 : id",
        length: 36,
        width: 24,
      },
    ],
  },
  {
    set: "set-002",
    subtitle: "focus",
    medium: "oil on canvas",
    year: 2021,
    artworks: [
      {
        title: "001520210210 : white",
        length: 20,
        width: 16,
      },
      {
        title: "001620210211 : grey",
        length: 20,
        width: 16,
      },
      {
        title: "001720210212 : black",
        length: 20,
        width: 16,
      },
    ],
  },
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

// logic | displaying artwork
function getArtwork(ouvre) {
  // reverses index order. latest set is 0 index
  let art = ouvre.reverse();
  // itereates through the new art array, each index populates the container template with data. individual canvas details are retrieved from getDetails.
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
    // appends container to its intended parent div
    sidescrollEl.appendChild(containerEl);
  };
};

// logic | gets the details of the the individual paintings that make up their respective set
function getDetails(details) {
  let setDetails = [];
  let result;
  // loop through the the details array to return the needed inner html
  for (let i = 0; i < details.length; i++) {
    result = `<p class='artwork-title'>« ${details[i].title} »</p><p class='artwork-dimensions'>${details[i].length} in &times; ${details[i].width} in</p>`;
    
    // each painting's details are pushed into setDetails
    setDetails.push(result)
  }
  // final output | the setDetails array converts to a string. using a regex to find & remove the ',' between indexes
  return setDetails.toString().replace(/>,/g, '>');
};

// call
getArtwork(art);

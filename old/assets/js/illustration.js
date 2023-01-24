// data | global dom
const mainEl = document.getElementById("illustration-portfolio");

// data | array of illustrations sorted by series, subdivided by volume
const illustrations = [
  // {
  //   series: "bluestrawberry",
  //   volumes: [
  //     {
  //       title: "vol 1",
  //       id: "bluestraberry-001",
  //       img: [
  //         { url: "./assets/images/artwork/illustration/bluestrawberry/.jpg" },
  //       ],
  //     },
  //   ],
  // },
  {
    series: "days",
    volumes: [
      {
        title: "01 | 0001-0005",
        id: "days-01",
        img: [
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210305-0001.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210306-0002.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210309-0003.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210310-0004.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210310-0005.jpg",
          },
        ],
      },
      {
        title: "02 | 0006-0010",
        id: "days-02",
        img: [
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210312-0006.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210313-0007.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210314-0008.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210315-0009.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210316-0010.jpg",
          },
        ],
      },
      {
        title: "03 | 0011-0015",
        id: "days-03",
        img: [
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210317-0011.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210318-0012.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210319-0013.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210320-0014.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210321-0015.jpg",
          },
        ],
      },
      {
        title: "04 | 0016-0020",
        id: "days-04",
        img: [
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0016.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0017.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0018.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0019.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0020.jpg",
          },
        ],
      },
      {
        title: "05 | 0021-0025",
        id: "days-05",
        img: [
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210330-0021.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210331-0022.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210401-0023.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210402-0024.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210403-0025.jpg",
          },
        ],
      },
      {
        title: "06 | 0026-0030",
        id: "days-06",
        img: [
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210420-0026.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210421-0027.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210422-0028.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210423-0029.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210424-0030.jpg",
          },
        ],
      },
      {
        title: "07 | 0031-0035",
        id: "days-07",
        img: [
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210425-0031.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210426-0032.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210427-0033.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210428-0034.jpg",
          },
          {
            url: "./assets/images/artwork/illustration/days/edwin-escobar-days-20210429-0035.jpg",
          },
        ],
      },
    ],
  },
];

// logic | displays illustration portfolio by extracting data from illustrations array
function displayPortfolio(illustrations) {
  // the last series will display first
  let seriesArr = illustrations.reverse();

  // each .section will correspond with each object in the series array
  for (let i = 0; i < seriesArr.length; i++) {
    let title = seriesArr[i].series;
    const titleEl = document.createElement("h3");
    titleEl.className = "series dark";
    titleEl.innerText = `[ ${title} ]`;

    const volume = getDetails(seriesArr[i].volumes).replace(/>,/g, ">");

    mainEl.innerHTML = `<h2 class="subhead dark shadow">Illustration portfolio</h2> ${titleEl.outerHTML} ${volume}`;
  }
  return mainEl;
};

// logic | gets & displays the volume details of each series
function getDetails(volumes) {
  // rearranging the volumes from most recent
  let detailsArr = volumes.reverse();
  let htmlArr = [];

  for (let i = 0; i < detailsArr.length; i++) {
    let subheaderEl = document.createElement("h4");
    subheaderEl.className = "artwork-header dark";
    subheaderEl.innerText = `« ${detailsArr[i].title} »`;

    let sidescrollEl = document.createElement("div");
    sidescrollEl.className = "horizontal-wrapper dark sidescroll";
    sidescrollEl.setAttribute("id", detailsArr[i].id);
    sidescrollEl.innerHTML = `
      <article class="container">
        <section class="artwork-container">
          ${displayIllustrations(detailsArr[i].img)}
        </section>
      </article>`;

    let result = subheaderEl.outerHTML + sidescrollEl.outerHTML;
    htmlArr.push(result);
  }
  return htmlArr.toString();
};

// logic | generating the inner html to display each volume img elements
function displayIllustrations(imgArr) {
  let htmlArr = [];
  for (let i = 0; i < imgArr.length; i++) {
    let imgEl = `<img src="${imgArr[i].url}"/>`;
    htmlArr.push(imgEl);
  }
  return htmlArr.toString().replace(/>,/g, ">");
};

// calls
displayPortfolio(illustrations);
// user can rearrange artwork
$(".artwork-container").sortable();
// data | array of illustrations sorted by series, subdivided by volume
const illustrations = [
  {
    series: "days",
    volumes: [
      {
        title: "01 | 0001-0005",
        id: "days-01",
        img: [
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210305-0001.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210306-0002.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210309-0003.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210310-0004.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210310-0005.jpg',
        ],
      },
      {
        title: "02 | 0006-0010",
        id: "days-02",
        img: [
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210312-0006.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210313-0007.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210314-0008.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210315-0009.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210316-0010.jpg',
        ],
      },
      {
        title: "03 | 0011-0015",
        id: "days-03",
        img: [
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210317-0011.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210318-0012.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210319-0013.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210320-0014.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210321-0015.jpg',
        ],
      },
      {
        title: "04 | 0016-0020",
        id: "days-04",
        img: [
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0016.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0017.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0018.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0019.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210329-0020.jpg',
        ],
      },
      {
        title: "05 | 0021-0025",
        id: "days-05",
        img: [
          './assets/images/artwork/illustration/days/edwin-escobar-days-.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-.jpg',
        ],
      },
      {
        title: "06 | 0026-0030",
        id: "days-06",
        img: [
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210425-0031.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210426-0032.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210427-0033.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210428-0034.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210429-0035.jpg',
        ],
      },
      {
        title: "07 | 0031-0035",
        id: "days-07",
        img: [
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210425-0031.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210426-0032.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210427-0033.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210428-0034.jpg',
          './assets/images/artwork/illustration/days/edwin-escobar-days-20210429-0035.jpg',
        ],
      },
    ],
  },
];

console.log(illustrations[0].volumes);
// user can rearrange artwork
$(".artwork-container").sortable();

export interface GeomType {
  type?: string;
  coordinates: number[];
}

export interface CityDataType {
  province?: string;
  county?: string;
  district?: string;
  city?: string;
  region: string;
  neighborhood?: string;
  title?: string;
  address: string;
  type?: string;
  fclass?: string;
  geom: GeomType;
}

export const cityData = [
  {
    province: "تهران",
    county: "رباط کریم",
    district: " رباط کریم",
    city: "رباط کریم",
    region: "",
    neighborhood: "",
    title: "رباط کریم",
    address: "تهران، رباط کریم، بلوار امام خمینی",
    type: "point",
    fclass: "city",
    geom: {
      type: "Point",
      coordinates: [51.0781534, 35.480576],
    },
  },
  {
    province: "خراسان رضوی",
    county: "مشهد",
    district: "مشهد",
    city: "مشهد",
    region: "منطقه ۷",
    neighborhood: "محله رباط",
    title: "رباط",
    address: "خراسان رضوی، مشهد، محله رباط",
    type: "polygon",
    fclass: "neighbourhood",
    geom: {
      type: "Point",
      coordinates: [59.6249163, 36.2069121],
    },
  },
  {
    province: "خراسان رضوی",
    county: "مشهد",
    district: "مشهد",
    city: "مشهد",
    region: "منطقه ۷",
    neighborhood: "محله رباط",
    title: "رباط",
    address: "خراسان رضوی، مشهد، محله رباط، بولوار خدمت",
    type: "point",
    fclass: "neighbourhood",
    geom: {
      type: "Point",
      coordinates: [59.6301627, 36.2022437],
    },
  },
  {
    province: "خراسان رضوی",
    county: "نیشابور",
    district: "نیشابور",
    city: "نیشابور",
    region: "",
    neighborhood: "محله کریم آباد",
    title: "کریم آباد",
    address:
      "خراسان رضوی، نیشابور، محله کریم آباد، بلوار رسالت شرقی، رسالت شرقی ۲۰",
    type: "polygon",
    fclass: "neighbourhood",
    geom: {
      type: "Point",
      coordinates: [58.764633, 36.2046052],
    },
  },
  {
    province: "مازندران",
    county: "تنکابن",
    district: "تنکابن",
    city: "تنکابن",
    region: "",
    neighborhood: "محله کریم آباد",
    title: "کریم آباد",
    address: "مازندران، تنکابن، محله کریم آباد، بامداد، بامداد ۱، کوچه دوم",
    type: "polygon",
    fclass: "neighbourhood",
    geom: {
      type: "Point",
      coordinates: [50.8451986, 36.8314434],
    },
  },
  {
    province: "تهران",
    county: "رباط کریم",
    district: " رباط کریم",
    city: "رباط کریم",
    region: null,
    neighborhood: null,
    title: "رباط کریم",
    address: "تهران، رباط کریم",
    type: "polygon",
    fclass: "city",
    geom: {
      type: "Point",
      coordinates: [51.0824236977937, 35.4807449919563],
    },
  },
  {
    province: "مازندران",
    county: "تنکابن",
    district: "تنکابن",
    city: "تنکابن",
    region: "",
    neighborhood: "محله کریم آباد",
    title: "کریم آباد",
    address: "مازندران، تنکابن، محله کریم آباد، بلوار کریم آباد، ظفر",
    type: "point",
    fclass: "neighbourhood",
    geom: {
      type: "Point",
      coordinates: [50.8476429, 36.8340531],
    },
  },
  {
    province: "اردبیل",
    county: "اردبیل",
    district: "",
    city: "اردبیل",
    region: "",
    neighborhood: "محله وحدت",
    title: "کریم آباد",
    address:
      "اردبیل، محله وحدت، بزرگراه سردار شهید میرمحمود بنی‌هاشم، رمضانی، هادی ۱۱",
    type: "point",
    fclass: "neighbourhood",
    geom: {
      type: "Point",
      coordinates: [48.2738766, 38.2781346],
    },
  },
  {
    province: "خراسان رضوی",
    county: "مشهد",
    district: "مشهد",
    city: "",
    region: "",
    neighborhood: "",
    title: "کریم آباد",
    address:
      "خراسان رضوی، شهید مفتح شرقی ۲۶ + عباس آباد، امیرالمومنین، امیرالمومنین ۷/۲",
    type: "point",
    fclass: "neighbourhood",
    geom: {
      type: "Point",
      coordinates: [59.6951258, 36.286159],
    },
  },
  {
    province: "تهران",
    county: "رباط کریم",
    district: " رباط کریم",
    city: "شهر جدید پرند",
    region: "",
    neighborhood: "فاز شش",
    title: "فاز شش",
    address: "تهران، شهر جدید پرند، فاز شش، بلوار رسول اکرم",
    type: "polygon",
    fclass: "neighbourhood",
    geom: {
      type: "Point",
      coordinates: [50.9226443, 35.4925419],
    },
  },
];

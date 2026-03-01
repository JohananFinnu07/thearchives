export interface StateInfo {
  id: string;
  name: string;
  capital: string;
  area: string;
  population: string;
  language: string;
  description: string;
}

export const stateData: Record<string, StateInfo> = {
  an: {
    id: "an",
    name: "Andaman and Nicobar Islands",
    capital: "Port Blair",
    area: "8,249 km²",
    population: "3.8 Lakh",
    language: "Hindi, English",
    description:
      "A union territory of India comprising 572 islands in the Bay of Bengal.",
  },
  ap: {
    id: "ap",
    name: "Andhra Pradesh",
    capital: "Amaravati",
    area: "162,975 km²",
    population: "4.96 Cr",
    language: "Telugu",
    description:
      "Located on the southeastern coast, known for Tirupati and rich cultural heritage.",
  },
  ar: {
    id: "ar",
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    area: "83,743 km²",
    population: "13.8 Lakh",
    language: "English, Hindi",
    description: "The Land of the Dawn-Lit Mountains in northeastern India.",
  },
  as: {
    id: "as",
    name: "Assam",
    capital: "Dispur",
    area: "78,438 km²",
    population: "3.12 Cr",
    language: "Assamese",
    description:
      "Known for its tea plantations, silk, and the one-horned rhinoceros.",
  },
  br: {
    id: "br",
    name: "Bihar",
    capital: "Patna",
    area: "94,163 km²",
    population: "10.41 Cr",
    language: "Hindi",
    description: "An ancient land of learning, home to Nalanda and Bodh Gaya.",
  },
  ch: {
    id: "ch",
    name: "Chandigarh",
    capital: "Chandigarh",
    area: "114 km²",
    population: "10.5 Lakh",
    language: "Hindi, Punjabi",
    description: "A union territory serving as capital of Punjab and Haryana.",
  },
  ct: {
    id: "ct",
    name: "Chhattisgarh",
    capital: "Raipur",
    area: "135,192 km²",
    population: "2.55 Cr",
    language: "Hindi, Chhattisgarhi",
    description: "Rich in natural resources with dense forests and waterfalls.",
  },
  dn: {
    id: "dn",
    name: "Dadra and Nagar Haveli",
    capital: "Silvassa",
    area: "491 km²",
    population: "3.4 Lakh",
    language: "Gujarati, Hindi",
    description:
      "A union territory known for its tribal culture and natural beauty.",
  },
  dd: {
    id: "dd",
    name: "Daman and Diu",
    capital: "Daman",
    area: "112 km²",
    population: "2.4 Lakh",
    language: "Gujarati, Hindi",
    description: "A coastal union territory with Portuguese colonial heritage.",
  },
  dl: {
    id: "dl",
    name: "Delhi",
    capital: "New Delhi",
    area: "1,484 km²",
    population: "1.68 Cr",
    language: "Hindi, English",
    description:
      "The capital territory of India, a blend of ancient and modern.",
  },
  ga: {
    id: "ga",
    name: "Goa",
    capital: "Panaji",
    area: "3,702 km²",
    population: "14.6 Lakh",
    language: "Konkani",
    description:
      "India's smallest state, famous for beaches and Portuguese architecture.",
  },
  gj: {
    id: "gj",
    name: "Gujarat",
    capital: "Gandhinagar",
    area: "196,024 km²",
    population: "6.04 Cr",
    language: "Gujarati",
    description:
      "The land of Mahatma Gandhi, known for vibrant culture and industry.",
  },
  hr: {
    id: "hr",
    name: "Haryana",
    capital: "Chandigarh",
    area: "44,212 km²",
    population: "2.54 Cr",
    language: "Hindi",
    description: "An agricultural state surrounding Delhi on three sides.",
  },
  hp: {
    id: "hp",
    name: "Himachal Pradesh",
    capital: "Shimla",
    area: "55,673 km²",
    population: "68.6 Lakh",
    language: "Hindi",
    description:
      "A Himalayan state known for hill stations and apple orchards.",
  },
  jk: {
    id: "jk",
    name: "Jammu and Kashmir",
    capital: "Srinagar / Jammu",
    area: "42,241 km²",
    population: "1.22 Cr",
    language: "Urdu, Hindi",
    description:
      "Known as 'Paradise on Earth' for its stunning natural beauty.",
  },
  jh: {
    id: "jh",
    name: "Jharkhand",
    capital: "Ranchi",
    area: "79,710 km²",
    population: "3.29 Cr",
    language: "Hindi",
    description: "Rich in minerals and forests, known for its tribal culture.",
  },
  ka: {
    id: "ka",
    name: "Karnataka",
    capital: "Bengaluru",
    area: "191,791 km²",
    population: "6.11 Cr",
    language: "Kannada",
    description:
      "Home to India's Silicon Valley and ancient Vijayanagara empire.",
  },
  kl: {
    id: "kl",
    name: "Kerala",
    capital: "Thiruvananthapuram",
    area: "38,863 km²",
    population: "3.34 Cr",
    language: "Malayalam",
    description:
      "God's Own Country, known for backwaters, spices, and high literacy.",
  },
  ld: {
    id: "ld",
    name: "Lakshadweep",
    capital: "Kavaratti",
    area: "32 km²",
    population: "64,473",
    language: "Malayalam",
    description: "A tropical archipelago of 36 islands in the Arabian Sea.",
  },
  mp: {
    id: "mp",
    name: "Madhya Pradesh",
    capital: "Bhopal",
    area: "308,252 km²",
    population: "7.26 Cr",
    language: "Hindi",
    description:
      "The Heart of India, home to Khajuraho and numerous tiger reserves.",
  },
  mh: {
    id: "mh",
    name: "Maharashtra",
    capital: "Mumbai",
    area: "307,713 km²",
    population: "11.24 Cr",
    language: "Marathi",
    description:
      "India's financial capital, known for Bollywood and diverse culture.",
  },
  mn: {
    id: "mn",
    name: "Manipur",
    capital: "Imphal",
    area: "22,327 km²",
    population: "28.6 Lakh",
    language: "Meitei",
    description:
      "The Jewel of India, known for Loktak Lake and classical dance.",
  },
  ml: {
    id: "ml",
    name: "Meghalaya",
    capital: "Shillong",
    area: "22,429 km²",
    population: "29.7 Lakh",
    language: "Khasi, English",
    description: "The Abode of Clouds, home to the wettest place on earth.",
  },
  mz: {
    id: "mz",
    name: "Mizoram",
    capital: "Aizawl",
    area: "21,081 km²",
    population: "10.9 Lakh",
    language: "Mizo",
    description: "Land of the Highlanders with near-universal literacy.",
  },
  nl: {
    id: "nl",
    name: "Nagaland",
    capital: "Kohima",
    area: "16,579 km²",
    population: "19.8 Lakh",
    language: "English",
    description: "Land of Festivals, known for the Hornbill Festival.",
  },
  or: {
    id: "or",
    name: "Odisha",
    capital: "Bhubaneswar",
    area: "155,707 km²",
    population: "4.19 Cr",
    language: "Odia",
    description:
      "Known for Konark Sun Temple, Jagannath Puri, and classical dance.",
  },
  pb: {
    id: "pb",
    name: "Punjab",
    capital: "Chandigarh",
    area: "50,362 km²",
    population: "2.77 Cr",
    language: "Punjabi",
    description: "The Land of Five Rivers, home to the Golden Temple.",
  },
  rj: {
    id: "rj",
    name: "Rajasthan",
    capital: "Jaipur",
    area: "342,239 km²",
    population: "6.86 Cr",
    language: "Hindi, Rajasthani",
    description:
      "Land of Kings, famous for majestic forts, palaces, and Thar Desert.",
  },
  sk: {
    id: "sk",
    name: "Sikkim",
    capital: "Gangtok",
    area: "7,096 km²",
    population: "6.1 Lakh",
    language: "Nepali",
    description: "A small Himalayan state with stunning mountain scenery.",
  },
  tn: {
    id: "tn",
    name: "Tamil Nadu",
    capital: "Chennai",
    area: "130,058 km²",
    population: "7.21 Cr",
    language: "Tamil",
    description:
      "A Dravidian cultural heartland with ancient temples and cuisine.",
  },
  tg: {
    id: "tg",
    name: "Telangana",
    capital: "Hyderabad",
    area: "112,077 km²",
    population: "3.51 Cr",
    language: "Telugu",
    description:
      "India's newest state, known for Hyderabad's tech industry and biryani.",
  },
  tr: {
    id: "tr",
    name: "Tripura",
    capital: "Agartala",
    area: "10,486 km²",
    population: "36.7 Lakh",
    language: "Bengali, Kokborok",
    description:
      "A northeastern state known for bamboo crafts and royal palaces.",
  },
  up: {
    id: "up",
    name: "Uttar Pradesh",
    capital: "Lucknow",
    area: "240,928 km²",
    population: "19.98 Cr",
    language: "Hindi",
    description:
      "India's most populous state, home to the Taj Mahal and Varanasi.",
  },
  ut: {
    id: "ut",
    name: "Uttarakhand",
    capital: "Dehradun",
    area: "53,483 km²",
    population: "1.01 Cr",
    language: "Hindi",
    description: "The Land of Gods, home to sacred rivers and Himalayan peaks.",
  },
  wb: {
    id: "wb",
    name: "West Bengal",
    capital: "Kolkata",
    area: "88,752 km²",
    population: "9.13 Cr",
    language: "Bengali",
    description:
      "Known for Durga Puja, Darjeeling tea, and rich literary tradition.",
  },
  py: {
    id: "py",
    name: "Puducherry",
    capital: "Puducherry",
    area: "479 km²",
    population: "12.4 Lakh",
    language: "Tamil, French",
    description: "A former French colony with unique Franco-Tamil culture.",
  },
  la: {
    id: "la",
    name: "Ladakh",
    capital: "Leh",
    area: "59,146 km²",
    population: "2.7 Lakh",
    language: "Ladakhi, Hindi",
    description:
      "A high-altitude desert known for monasteries and stunning landscapes.",
  },
};

export const getStateInfo = (id: string): StateInfo | undefined => {
  return stateData[id];
};

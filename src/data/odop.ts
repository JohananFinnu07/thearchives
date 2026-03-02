// ODOP (One District One Product) data for Andhra Pradesh
// Source: Official MoFPI ODOP list

export interface ODOPDistrict {
  id: string;
  name: string;
  anchorProduct: string;
  anchorProductDescription: string;
  culturalSignificance: string;
  hiddenGems: {
    name: string;
    description: string;
  }[];
}

export const odopAndhraPradesh: ODOPDistrict[] = [
  {
    id: "ananthapur",
    name: "Ananthapur",
    anchorProduct: "Groundnut Products",
    anchorProductDescription:
      "One of India's largest groundnut producing regions, yielding peanuts rich in oil content and flavor.",
    culturalSignificance:
      "The red soils and semi-arid climate create the perfect conditions for groundnuts that have sustained farmers here for generations.",
    hiddenGems: [
      {
        name: "Groundnut Oil (Cold-Pressed)",
        description: "Traditional wooden press extraction preserving nutrients",
      },
      {
        name: "Peanut Chikki",
        description: "Jaggery-coated peanut brittle, a regional favorite",
      },
    ],
  },
  {
    id: "chittoor",
    name: "Chittoor",
    anchorProduct: "Tomato Products",
    anchorProductDescription:
      "The tomato bowl of South India, producing uniquely tangy varieties perfect for processing.",
    culturalSignificance:
      "Chittoor's tomatoes travel across the country, yet the best sun-dried varieties stay local.",
    hiddenGems: [
      {
        name: "Sun-Dried Tomatoes",
        description: "Preserved using traditional methods, intensely flavored",
      },
      {
        name: "Tomato Pickle",
        description: "Spiced preserves that last through monsoons",
      },
    ],
  },
  {
    id: "east-godavari",
    name: "East Godavari",
    anchorProduct: "Coconut Products",
    anchorProductDescription:
      "The palm-fringed delta produces coconuts prized for their sweetness and high oil yield.",
    culturalSignificance:
      "Every part of the coconut finds use here—from temple offerings to cottage industries.",
    hiddenGems: [
      {
        name: "Virgin Coconut Oil",
        description: "Cold-processed oil for cooking and skin care",
      },
      {
        name: "Coconut Jaggery",
        description: "Natural sweetener from coconut palm sap",
      },
    ],
  },
  {
    id: "guntur",
    name: "Guntur",
    anchorProduct: "Spices (Chilli & Turmeric)",
    anchorProductDescription:
      "Home to the famous Guntur Sannam chilli—fiery red, intensely hot, and globally exported.",
    culturalSignificance:
      "The Mirchi Yard here is Asia's largest chilli market, yet the best varieties rarely leave the district.",
    hiddenGems: [
      {
        name: "Guntur Sannam Chilli",
        description: "GI-tagged variety with 35,000+ Scoville units",
      },
      {
        name: "Lakadong Turmeric",
        description: "High curcumin content, deep orange hue",
      },
    ],
  },
  {
    id: "kadapa",
    name: "Kadapa",
    anchorProduct: "Banana Products",
    anchorProductDescription:
      "Indigenous banana varieties thrive in the mineral-rich soils of Kadapa.",
    culturalSignificance:
      "From temple prasadam to daily nutrition, the Kadapa banana is woven into local life.",
    hiddenGems: [
      {
        name: "Banana Chips",
        description: "Thin-sliced and fried in coconut oil",
      },
      {
        name: "Banana Powder",
        description: "Sun-dried and ground for baby food and health drinks",
      },
    ],
  },
  {
    id: "krishna",
    name: "Krishna",
    anchorProduct: "Mango Products",
    anchorProductDescription:
      'The Banganapalli mango from here is called the "King of Mangoes" for its honeyed sweetness.',
    culturalSignificance:
      "Mango orchards here date back centuries, with trees passed down through generations.",
    hiddenGems: [
      {
        name: "Mango Pickle (Avakaya)",
        description: "The iconic Andhra pickle, tangy and spicy",
      },
      {
        name: "Mamidi Tandra",
        description: "Sun-dried mango leather, a natural candy",
      },
    ],
  },
  {
    id: "kurnool",
    name: "Kurnool",
    anchorProduct: "Onion Products",
    anchorProductDescription:
      "The red onions of Kurnool are smaller but pack intense flavor and longer shelf life.",
    culturalSignificance:
      "Farmers here have perfected storage techniques that keep onions fresh for months without refrigeration.",
    hiddenGems: [
      {
        name: "Dehydrated Onion Flakes",
        description: "Traditional sun-drying for year-round use",
      },
      {
        name: "Onion Pickle",
        description: "A rare delicacy from surplus harvests",
      },
    ],
  },
  {
    id: "nellore",
    name: "Nellore",
    anchorProduct: "Citrus Products",
    anchorProductDescription:
      "Sweet limes and lemons flourish in Nellore's coastal climate.",
    culturalSignificance:
      "The district's citrus groves provide vitamin-rich fruits that sustain fishing communities.",
    hiddenGems: [
      {
        name: "Lime Pickle",
        description: "Preserved whole limes, aged for months",
      },
      {
        name: "Citrus Marmalade",
        description: "Small-batch preserves from local fruits",
      },
    ],
  },
  {
    id: "prakasam",
    name: "Prakasam",
    anchorProduct: "Spices (Chilli & Turmeric)",
    anchorProductDescription:
      "Complementing Guntur, Prakasam produces milder chilli varieties and aromatic turmeric.",
    culturalSignificance:
      "The sandy soils here give turmeric a distinctive earthy aroma prized in Ayurveda.",
    hiddenGems: [
      {
        name: "Finger Turmeric",
        description: "Whole rhizomes dried naturally, high curcumin",
      },
      {
        name: "Byadgi-style Chilli",
        description: "Less heat, more color—perfect for gravies",
      },
    ],
  },
  {
    id: "srikakulam",
    name: "Srikakulam",
    anchorProduct: "Cashewnut Products",
    anchorProductDescription:
      "The cashew orchards along the coast produce nuts with a distinctively sweet, buttery flavor.",
    culturalSignificance:
      "Cashew processing here is still largely manual, creating employment for thousands of women.",
    hiddenGems: [
      {
        name: "Roasted Cashews",
        description: "Wood-fire roasted for smoky flavor",
      },
      {
        name: "Cashew Feni",
        description: "Traditional fermented cashew apple drink",
      },
    ],
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    anchorProduct: "Sugarcane Products",
    anchorProductDescription:
      "The Agency areas produce sugarcane that becomes some of the purest jaggery in India.",
    culturalSignificance:
      "Tribal communities here have preserved ancient methods of jaggery-making that maintain nutritional value.",
    hiddenGems: [
      {
        name: "Palm Jaggery",
        description: "From palmyra palms, mineral-rich and aromatic",
      },
      {
        name: "Sugarcane Vinegar",
        description: "Fermented naturally for culinary use",
      },
    ],
  },
  {
    id: "vizianagaram",
    name: "Vizianagaram",
    anchorProduct: "Mango Products",
    anchorProductDescription:
      'Specialized in processing—mango pulp, jams, and the famed "mango leather" originate here.',
    culturalSignificance:
      "The district's mango-processing heritage dates back to royal kitchens of the Vizianagaram estate.",
    hiddenGems: [
      {
        name: "Mango Jam",
        description: "Made from bruised mangoes, reducing waste",
      },
      {
        name: "Aam Papad",
        description: "Mango fruit leather rolled with spices",
      },
    ],
  },
  {
    id: "west-godavari",
    name: "West Godavari",
    anchorProduct: "Fish & Marine Products",
    anchorProductDescription:
      "The delta's backwaters yield prawns, crabs, and fish that define coastal Andhra cuisine.",
    culturalSignificance:
      "Fishing communities here have techniques passed down for centuries, including sustainable prawn farming.",
    hiddenGems: [
      {
        name: "Dried Prawns",
        description: "Sun-cured for intense umami flavor",
      },
      {
        name: "Fish Pickle",
        description: "Spiced preserved fish, a coastal delicacy",
      },
    ],
  },
];
export const odopTelangana: ODOPDistrict[] = [
  {
    id: "adilabad",
    name: "Adilabad",
    anchorProduct: "Soybean based products",
    anchorProductDescription:
      "Soybean cultivation supports oil extraction and protein-rich food production.",
    culturalSignificance:
      "Soybean farming contributes significantly to the district’s agrarian economy.",
    hiddenGems: [],
  },
  {
    id: "bhadadri-kothagudem",
    name: "Bhadadri Kothagudem",
    anchorProduct: "Chillies based Products",
    anchorProductDescription:
      "Locally grown chillies known for their heat and vibrant color.",
    culturalSignificance:
      "Chilli cultivation supports tribal and rural livelihoods.",
    hiddenGems: [],
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    anchorProduct: "Ready to eat (Snacks and Savouries)",
    anchorProductDescription:
      "Processed snacks and savory products catering to urban markets.",
    culturalSignificance:
      "Hyderabad’s food industry blends tradition with large-scale processing.",
    hiddenGems: [],
  },
  {
    id: "jagitial",
    name: "Jagitial",
    anchorProduct: "Mango based Products",
    anchorProductDescription:
      "Seasonal mango cultivation used for pulp, pickles, and processed goods.",
    culturalSignificance:
      "Mango farming is deeply integrated into rural income cycles.",
    hiddenGems: [],
  },
  {
    id: "jangaon",
    name: "Jangaon",
    anchorProduct: "Rice based products (Scented Rice- Chittimuthyalu)",
    anchorProductDescription:
      "Traditional aromatic rice variety known for its fragrance and taste.",
    culturalSignificance:
      "Chittimuthyalu rice represents Telangana’s native grain heritage.",
    hiddenGems: [],
  },
  {
    id: "jayashankar-bhupalpally",
    name: "Jayashankar Bhupalpally",
    anchorProduct: "Chillies based Products",
    anchorProductDescription:
      "Spice cultivation contributing to regional spice trade.",
    culturalSignificance:
      "Chillies form a key agricultural output for small farmers.",
    hiddenGems: [],
  },
  {
    id: "jogulamba-gadwal",
    name: "Jogulamba Gadwal",
    anchorProduct: "Groundnut based products",
    anchorProductDescription:
      "Groundnut farming supports oil and snack production.",
    culturalSignificance:
      "Groundnut cultivation sustains dryland farming communities.",
    hiddenGems: [],
  },
  {
    id: "kamareddy",
    name: "Kamareddy",
    anchorProduct: "Soybean based products",
    anchorProductDescription:
      "Soybean used for oil extraction and protein-based products.",
    culturalSignificance:
      "Soybean farming plays a key role in local agriculture.",
    hiddenGems: [],
  },
  {
    id: "karimnagar",
    name: "Karimnagar",
    anchorProduct: "Rice based products",
    anchorProductDescription:
      "Rice processing and milling units serve domestic markets.",
    culturalSignificance:
      "Rice cultivation has shaped Karimnagar’s agrarian identity.",
    hiddenGems: [],
  },
  {
    id: "khammam",
    name: "Khammam",
    anchorProduct: "Chillies based Products",
    anchorProductDescription:
      "High-quality red chillies grown for spice markets.",
    culturalSignificance:
      "Chilli trade has historically connected Khammam to regional markets.",
    hiddenGems: [],
  },
  {
    id: "komaram-bheem",
    name: "Komaram Bheem",
    anchorProduct: "Millet based products",
    anchorProductDescription:
      "Millets cultivated in tribal regions for nutrition and resilience.",
    culturalSignificance:
      "Millets are integral to tribal diets and sustainable farming.",
    hiddenGems: [],
  },
  {
    id: "mahabubabad",
    name: "Mahabubabad",
    anchorProduct: "Chillies based Products",
    anchorProductDescription:
      "Chilli farming supports small-scale cultivators.",
    culturalSignificance:
      "Chillies contribute significantly to local spice production.",
    hiddenGems: [],
  },
  {
    id: "mahabubnagar",
    name: "Mahabubnagar",
    anchorProduct: "Millet based products",
    anchorProductDescription:
      "Nutritious millets grown in semi-arid conditions.",
    culturalSignificance:
      "Millet farming has sustained generations in drought-prone regions.",
    hiddenGems: [],
  },
  {
    id: "mancherial",
    name: "Mancherial",
    anchorProduct: "Mango based Products",
    anchorProductDescription:
      "Mango orchards produce fruit for fresh and processed markets.",
    culturalSignificance: "Mango cultivation boosts seasonal employment.",
    hiddenGems: [],
  },
  {
    id: "medak",
    name: "Medak",
    anchorProduct: "Ready to eat (Snacks and Savouries)",
    anchorProductDescription:
      "Snack production units catering to regional demand.",
    culturalSignificance:
      "Food processing adds value to local agricultural produce.",
    hiddenGems: [],
  },
  {
    id: "medchal-malkajgiri",
    name: "Medchal-Malkajgiri",
    anchorProduct: "Ready to eat (Snacks and Savouries)",
    anchorProductDescription:
      "Processed food sector supporting urban consumption.",
    culturalSignificance:
      "Proximity to Hyderabad fuels packaged snack industries.",
    hiddenGems: [],
  },
  {
    id: "mulugu",
    name: "Mulugu",
    anchorProduct: "Chillies based Products",
    anchorProductDescription: "Chillies cultivated in forest-adjacent regions.",
    culturalSignificance:
      "Agriculture supports tribal communities in the district.",
    hiddenGems: [],
  },
  {
    id: "nagarkurnool",
    name: "Nagarkurnool",
    anchorProduct: "Mango based Products",
    anchorProductDescription: "Mango cultivation for pulp and pickles.",
    culturalSignificance: "Mango orchards are key to seasonal farm income.",
    hiddenGems: [],
  },
  {
    id: "nalgonda",
    name: "Nalgonda",
    anchorProduct: "Sweet Orange based Products",
    anchorProductDescription:
      "Citrus orchards produce sweet oranges for fresh and processed markets.",
    culturalSignificance:
      "Citrus cultivation strengthens horticulture in the district.",
    hiddenGems: [],
  },
  {
    id: "narayanpet",
    name: "Narayanpet",
    anchorProduct: "Groundnut based products",
    anchorProductDescription:
      "Groundnuts processed into oil and snack products.",
    culturalSignificance: "Groundnut farming supports dryland agriculture.",
    hiddenGems: [],
  },
  {
    id: "nirmal",
    name: "Nirmal",
    anchorProduct: "Soyabean based products",
    anchorProductDescription:
      "Soybean contributes to edible oil and feed industries.",
    culturalSignificance: "Soybean cultivation supports farmer livelihoods.",
    hiddenGems: [],
  },
  {
    id: "nizamabad",
    name: "Nizamabad",
    anchorProduct: "Turmeric",
    anchorProductDescription:
      "High-curcumin turmeric known for quality and export potential.",
    culturalSignificance:
      "Turmeric farming plays a central role in the district’s spice economy.",
    hiddenGems: [],
  },
  {
    id: "peddapalli",
    name: "Peddapalli",
    anchorProduct: "Rice based products",
    anchorProductDescription: "Rice processing supports local grain markets.",
    culturalSignificance:
      "Rice cultivation forms a major part of the rural economy.",
    hiddenGems: [],
  },
  {
    id: "rajanna-sircilla",
    name: "Rajanna Sircilla",
    anchorProduct: "Fish based products",
    anchorProductDescription: "Inland fisheries and processed fish products.",
    culturalSignificance:
      "Aquaculture supports livelihoods across water bodies.",
    hiddenGems: [],
  },
  {
    id: "ranga-reddy",
    name: "Ranga Reddy",
    anchorProduct: "Vegetable processing",
    anchorProductDescription:
      "Processing of vegetables for urban supply chains.",
    culturalSignificance:
      "Proximity to Hyderabad supports agri-processing growth.",
    hiddenGems: [],
  },
  {
    id: "sangareddy",
    name: "Sangareddy",
    anchorProduct: "Milk based Products",
    anchorProductDescription:
      "Dairy processing including milk and value-added products.",
    culturalSignificance: "Dairy farming strengthens rural household incomes.",
    hiddenGems: [],
  },
  {
    id: "siddipet",
    name: "Siddipet",
    anchorProduct: "Vegetable processing",
    anchorProductDescription:
      "Vegetable cultivation and processing for regional markets.",
    culturalSignificance: "Vegetable farming supports diversified agriculture.",
    hiddenGems: [],
  },
  {
    id: "suryapet",
    name: "Suryapet",
    anchorProduct: "Milk based Products",
    anchorProductDescription: "Dairy and milk-based food production.",
    culturalSignificance: "Dairy cooperatives contribute to rural prosperity.",
    hiddenGems: [],
  },
  {
    id: "vikarabad",
    name: "Vikarabad",
    anchorProduct: "Vegetable processing",
    anchorProductDescription: "Processing units for locally grown vegetables.",
    culturalSignificance: "Vegetable farming supports small farmers.",
    hiddenGems: [],
  },
  {
    id: "wanaparthy",
    name: "Wanaparthy",
    anchorProduct: "Groundnut products",
    anchorProductDescription: "Groundnut oil and snack production.",
    culturalSignificance: "Groundnut farming thrives in semi-arid soils.",
    hiddenGems: [],
  },
  {
    id: "warangal-rural",
    name: "Warangal Rural",
    anchorProduct: "Chillies (Bamboo Chilli) based Products",
    anchorProductDescription: "Specialty bamboo chillies grown in rural belts.",
    culturalSignificance:
      "Unique chilli varieties contribute to regional spice identity.",
    hiddenGems: [],
  },
  {
    id: "warangal-urban",
    name: "Warangal Urban",
    anchorProduct: "Ready to eat (Snacks and Savouries)",
    anchorProductDescription:
      "Snack processing industries catering to urban demand.",
    culturalSignificance:
      "Urban food enterprises connect tradition with scale.",
    hiddenGems: [],
  },
  {
    id: "yadadri-bhuvanagiri",
    name: "Yadadri Bhuvanagiri",
    anchorProduct: "Milk based Products",
    anchorProductDescription: "Dairy farming and milk-based processing.",
    culturalSignificance:
      "Dairy supports agricultural livelihoods across the district.",
    hiddenGems: [],
  },
];
/* ---------------- SCALABLE STATE REGISTRY ---------------- */

/**
 * Central ODOP registry by state
 * Add new states here when expanding
 */
export const odopData: Record<string, ODOPDistrict[]> = {
  "andhra-pradesh": odopAndhraPradesh,
  telangana: odopTelangana,

  // Future states:
  // "telangana": odopTelangana,
  // "karnataka": odopKarnataka,
  // "kerala": odopKerala,
};

/* ---------------- UPDATED HELPERS (STATE AWARE) ---------------- */

/**
 * Get ODOP district by state + district ID
 */
export const getODOPDistrict = (
  state: string,
  id: string,
): ODOPDistrict | undefined => {
  return odopData[state]?.find((d) => d.id === id);
};

/**
 * Get all ODOP districts for a state
 */
export const getAllODOPDistricts = (state: string): ODOPDistrict[] => {
  return odopData[state] || [];
};

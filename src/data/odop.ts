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
    id: 'ananthapur',
    name: 'Ananthapur',
    anchorProduct: 'Groundnut Products',
    anchorProductDescription: 'One of India\'s largest groundnut producing regions, yielding peanuts rich in oil content and flavor.',
    culturalSignificance: 'The red soils and semi-arid climate create the perfect conditions for groundnuts that have sustained farmers here for generations.',
    hiddenGems: [
      { name: 'Groundnut Oil (Cold-Pressed)', description: 'Traditional wooden press extraction preserving nutrients' },
      { name: 'Peanut Chikki', description: 'Jaggery-coated peanut brittle, a regional favorite' },
    ]
  },
  {
    id: 'chittoor',
    name: 'Chittoor',
    anchorProduct: 'Tomato Products',
    anchorProductDescription: 'The tomato bowl of South India, producing uniquely tangy varieties perfect for processing.',
    culturalSignificance: 'Chittoor\'s tomatoes travel across the country, yet the best sun-dried varieties stay local.',
    hiddenGems: [
      { name: 'Sun-Dried Tomatoes', description: 'Preserved using traditional methods, intensely flavored' },
      { name: 'Tomato Pickle', description: 'Spiced preserves that last through monsoons' },
    ]
  },
  {
    id: 'east-godavari',
    name: 'East Godavari',
    anchorProduct: 'Coconut Products',
    anchorProductDescription: 'The palm-fringed delta produces coconuts prized for their sweetness and high oil yield.',
    culturalSignificance: 'Every part of the coconut finds use here—from temple offerings to cottage industries.',
    hiddenGems: [
      { name: 'Virgin Coconut Oil', description: 'Cold-processed oil for cooking and skin care' },
      { name: 'Coconut Jaggery', description: 'Natural sweetener from coconut palm sap' },
    ]
  },
  {
    id: 'guntur',
    name: 'Guntur',
    anchorProduct: 'Spices (Chilli & Turmeric)',
    anchorProductDescription: 'Home to the famous Guntur Sannam chilli—fiery red, intensely hot, and globally exported.',
    culturalSignificance: 'The Mirchi Yard here is Asia\'s largest chilli market, yet the best varieties rarely leave the district.',
    hiddenGems: [
      { name: 'Guntur Sannam Chilli', description: 'GI-tagged variety with 35,000+ Scoville units' },
      { name: 'Lakadong Turmeric', description: 'High curcumin content, deep orange hue' },
    ]
  },
  {
    id: 'kadapa',
    name: 'Kadapa',
    anchorProduct: 'Banana Products',
    anchorProductDescription: 'Indigenous banana varieties thrive in the mineral-rich soils of Kadapa.',
    culturalSignificance: 'From temple prasadam to daily nutrition, the Kadapa banana is woven into local life.',
    hiddenGems: [
      { name: 'Banana Chips', description: 'Thin-sliced and fried in coconut oil' },
      { name: 'Banana Powder', description: 'Sun-dried and ground for baby food and health drinks' },
    ]
  },
  {
    id: 'krishna',
    name: 'Krishna',
    anchorProduct: 'Mango Products',
    anchorProductDescription: 'The Banganapalli mango from here is called the "King of Mangoes" for its honeyed sweetness.',
    culturalSignificance: 'Mango orchards here date back centuries, with trees passed down through generations.',
    hiddenGems: [
      { name: 'Mango Pickle (Avakaya)', description: 'The iconic Andhra pickle, tangy and spicy' },
      { name: 'Mamidi Tandra', description: 'Sun-dried mango leather, a natural candy' },
    ]
  },
  {
    id: 'kurnool',
    name: 'Kurnool',
    anchorProduct: 'Onion Products',
    anchorProductDescription: 'The red onions of Kurnool are smaller but pack intense flavor and longer shelf life.',
    culturalSignificance: 'Farmers here have perfected storage techniques that keep onions fresh for months without refrigeration.',
    hiddenGems: [
      { name: 'Dehydrated Onion Flakes', description: 'Traditional sun-drying for year-round use' },
      { name: 'Onion Pickle', description: 'A rare delicacy from surplus harvests' },
    ]
  },
  {
    id: 'nellore',
    name: 'Nellore',
    anchorProduct: 'Citrus Products',
    anchorProductDescription: 'Sweet limes and lemons flourish in Nellore\'s coastal climate.',
    culturalSignificance: 'The district\'s citrus groves provide vitamin-rich fruits that sustain fishing communities.',
    hiddenGems: [
      { name: 'Lime Pickle', description: 'Preserved whole limes, aged for months' },
      { name: 'Citrus Marmalade', description: 'Small-batch preserves from local fruits' },
    ]
  },
  {
    id: 'prakasam',
    name: 'Prakasam',
    anchorProduct: 'Spices (Chilli & Turmeric)',
    anchorProductDescription: 'Complementing Guntur, Prakasam produces milder chilli varieties and aromatic turmeric.',
    culturalSignificance: 'The sandy soils here give turmeric a distinctive earthy aroma prized in Ayurveda.',
    hiddenGems: [
      { name: 'Finger Turmeric', description: 'Whole rhizomes dried naturally, high curcumin' },
      { name: 'Byadgi-style Chilli', description: 'Less heat, more color—perfect for gravies' },
    ]
  },
  {
    id: 'srikakulam',
    name: 'Srikakulam',
    anchorProduct: 'Cashewnut Products',
    anchorProductDescription: 'The cashew orchards along the coast produce nuts with a distinctively sweet, buttery flavor.',
    culturalSignificance: 'Cashew processing here is still largely manual, creating employment for thousands of women.',
    hiddenGems: [
      { name: 'Roasted Cashews', description: 'Wood-fire roasted for smoky flavor' },
      { name: 'Cashew Feni', description: 'Traditional fermented cashew apple drink' },
    ]
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    anchorProduct: 'Sugarcane Products',
    anchorProductDescription: 'The Agency areas produce sugarcane that becomes some of the purest jaggery in India.',
    culturalSignificance: 'Tribal communities here have preserved ancient methods of jaggery-making that maintain nutritional value.',
    hiddenGems: [
      { name: 'Palm Jaggery', description: 'From palmyra palms, mineral-rich and aromatic' },
      { name: 'Sugarcane Vinegar', description: 'Fermented naturally for culinary use' },
    ]
  },
  {
    id: 'vizianagaram',
    name: 'Vizianagaram',
    anchorProduct: 'Mango Products',
    anchorProductDescription: 'Specialized in processing—mango pulp, jams, and the famed "mango leather" originate here.',
    culturalSignificance: 'The district\'s mango-processing heritage dates back to royal kitchens of the Vizianagaram estate.',
    hiddenGems: [
      { name: 'Mango Jam', description: 'Made from bruised mangoes, reducing waste' },
      { name: 'Aam Papad', description: 'Mango fruit leather rolled with spices' },
    ]
  },
  {
    id: 'west-godavari',
    name: 'West Godavari',
    anchorProduct: 'Fish & Marine Products',
    anchorProductDescription: 'The delta\'s backwaters yield prawns, crabs, and fish that define coastal Andhra cuisine.',
    culturalSignificance: 'Fishing communities here have techniques passed down for centuries, including sustainable prawn farming.',
    hiddenGems: [
      { name: 'Dried Prawns', description: 'Sun-cured for intense umami flavor' },
      { name: 'Fish Pickle', description: 'Spiced preserved fish, a coastal delicacy' },
    ]
  }
];

// Helper function to get ODOP district by ID
export const getODOPDistrict = (id: string): ODOPDistrict | undefined => {
  return odopAndhraPradesh.find(d => d.id === id);
};

// Get all ODOP districts
export const getAllODOPDistricts = (): ODOPDistrict[] => {
  return odopAndhraPradesh;
};

import { Recipe } from "../types";

/* ============== WHITE TOWN ================== */
import pondicherryCrepes from "@/assets/PD/Recipes/WTCP.jpg";
import baguetteSandwich from "@/assets/PD/Recipes/WTBS.jpg";

/* ============== PARADISE BEACH ================== */
import grilledSeafoodPlatter from "@/assets/PD/Recipes/PSP.jpg";
import coconutPrawnCurry from "@/assets/PD/Recipes/PCP.jpg";

/* ============== AUROVILLE ================== */
import milletEnergyBalls from "@/assets/PD/Recipes/AMB.jpg";
import veganCoconutStew from "@/assets/PD/Recipes/AVCS.jpg";

/* ============== SERENITY BEACH ================== */
import beachStyleFishFry from "@/assets/PD/Recipes/SBF.jpg";
import tropicalFruitBowl from "@/assets/PD/Recipes/STF.jpg";

/* ============== OUSTERI LAKE ================== */
import villageStyleVegRice from "@/assets/PD/Recipes/OVR.jpg";
import lotusStemCurry from "@/assets/PD/Recipes/OLC.jpg";

export const pondiRecipes: Recipe[] = [
  {
    name: "Pondicherry Crepes",
    state: "py",
    id: "white-town",
    destination: "White Town",

    description:
      "Soft French-style crepes filled with vegetables, cheese, and mild Indian spices inspired by Pondicherry's colonial cafés.",

    image: pondicherryCrepes,

    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Easy",

    ingredients: [
      "1 cup All-purpose flour",
      "2 Eggs",
      "1 cup Milk",
      "Butter",
      "Mixed vegetables",
      "Cheese",
      "Black pepper",
      "Salt",
    ],

    steps: [
      "Prepare a smooth batter using flour, eggs, milk, and butter.",
      "Cook thin crepes on a heated pan.",
      "Fill with sautéed vegetables and cheese.",
      "Fold gently and serve warm.",
    ],

    story:
      "White Town reflects Pondicherry's French heritage, where cafés blended European recipes with South Indian flavors to create unique street-style fusion dishes.",

    season: "All Year",
    buyLink: "",
  },

  {
    name: "Baguette Sandwich",
    state: "py",
    id: "white-town",
    destination: "White Town",

    description:
      "Crispy French baguette layered with paneer, vegetables, sauces, and herbs inspired by Pondicherry's café culture.",

    image: baguetteSandwich,

    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "Serves 2",
    difficulty: "Easy",

    ingredients: [
      "French baguette",
      "Paneer",
      "Tomatoes",
      "Onions",
      "Lettuce",
      "Mayonnaise",
      "Butter",
      "Pepper",
    ],

    steps: [
      "Slice and toast the baguette lightly.",
      "Layer vegetables, paneer, and sauces.",
      "Season with pepper and serve fresh.",
    ],

    story:
      "French bakeries became iconic in White Town, and baguette sandwiches evolved into a quick café favorite for travelers exploring Pondicherry.",

    season: "All Year",
    buyLink: "",
  },

  {
    name: "Grilled Seafood Platter",
    state: "py",
    id: "paradise-beach",
    destination: "Paradise Beach",

    description:
      "Freshly grilled prawns, fish, and squid marinated with coastal spices and cooked beside the shores of Paradise Beach.",

    image: grilledSeafoodPlatter,

    prepTime: "25 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "Fish fillets",
      "Prawns",
      "Squid",
      "Lemon juice",
      "Red chilli powder",
      "Garlic paste",
      "Pepper",
      "Salt",
    ],

    steps: [
      "Marinate seafood with spices and lemon juice.",
      "Heat grill and cook seafood evenly.",
      "Brush lightly with butter while grilling.",
      "Serve hot with lime wedges.",
    ],

    story:
      "Beachside food stalls near Paradise Beach are known for serving freshly caught seafood grilled over charcoal with local coastal spices.",

    season: "Winter & Monsoon",
    buyLink: "",
  },

  {
    name: "Coconut Prawn Curry",
    state: "py",
    id: "paradise-beach",
    destination: "Paradise Beach",

    description:
      "Creamy coastal curry made with prawns simmered in coconut milk and aromatic Pondicherry spices.",

    image: coconutPrawnCurry,

    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "Serves 5",
    difficulty: "Medium",

    ingredients: [
      "Prawns",
      "Coconut milk",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Turmeric",
      "Curry leaves",
      "Sesame oil",
    ],

    steps: [
      "Cook onions, tomatoes, and spices until aromatic.",
      "Add prawns and sauté lightly.",
      "Pour coconut milk and simmer gently.",
      "Serve hot with steamed rice.",
    ],

    story:
      "Pondicherry's coastal communities perfected coconut-based seafood curries using fresh catch from nearby fishing villages.",

    season: "All Year",
    buyLink: "",
  },

  {
    name: "Millet Energy Balls",
    state: "py",
    id: "auroville",
    destination: "Auroville",

    description:
      "Healthy millet-based sweet balls packed with nuts, dates, and jaggery reflecting Auroville's organic food culture.",

    image: milletEnergyBalls,

    prepTime: "20 mins",
    cookTime: "10 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "Millet flour",
      "Dates",
      "Jaggery",
      "Cashews",
      "Almonds",
      "Dry coconut",
      "Cardamom powder",
    ],

    steps: [
      "Roast millet flour until aromatic.",
      "Blend nuts, dates, and jaggery.",
      "Mix all ingredients together.",
      "Shape into small balls and cool.",
    ],

    story:
      "Auroville's sustainable lifestyle encouraged millet-based nutrition-focused recipes served in wellness cafés and community kitchens.",

    season: "All Year",
    buyLink: "",
  },

  {
    name: "Vegan Coconut Stew",
    state: "py",
    id: "auroville",
    destination: "Auroville",

    description:
      "A mild coconut milk stew loaded with vegetables and herbs inspired by Auroville's global vegan cuisine.",

    image: veganCoconutStew,

    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "Coconut milk",
      "Carrots",
      "Beans",
      "Potatoes",
      "Garlic",
      "Pepper",
      "Curry leaves",
      "Salt",
    ],

    steps: [
      "Cook vegetables until tender.",
      "Add garlic and spices.",
      "Pour coconut milk and simmer gently.",
      "Serve warm with bread or rice.",
    ],

    story:
      "Auroville brought together international vegan cooking methods and traditional South Indian coconut-based recipes.",

    season: "All Year",
    buyLink: "",
  },

  {
    name: "Beach Style Fish Fry",
    state: "py",
    id: "serenity-beach",
    destination: "Serenity Beach",

    description:
      "Crispy fish fry marinated with spicy coastal masala and served fresh near Serenity Beach shacks.",

    image: beachStyleFishFry,

    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Easy",

    ingredients: [
      "Fish slices",
      "Red chilli powder",
      "Turmeric",
      "Ginger garlic paste",
      "Lemon juice",
      "Rice flour",
      "Oil",
      "Salt",
    ],

    steps: [
      "Marinate fish with spices and lemon juice.",
      "Coat lightly with rice flour.",
      "Shallow fry until crisp and golden.",
      "Serve hot with onion slices.",
    ],

    story:
      "Serenity Beach cafés and surf shacks popularized spicy fish fry dishes served fresh to tourists after beach activities.",

    season: "Winter",
    buyLink: "",
  },

  {
    name: "Tropical Fruit Bowl",
    state: "py",
    id: "serenity-beach",
    destination: "Serenity Beach",

    description:
      "Refreshing tropical fruit bowl featuring mangoes, papaya, banana, coconut, and local honey.",

    image: tropicalFruitBowl,

    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: "Serves 2",
    difficulty: "Easy",

    ingredients: [
      "Mango",
      "Papaya",
      "Banana",
      "Dragon fruit",
      "Fresh coconut",
      "Honey",
      "Mint leaves",
    ],

    steps: [
      "Chop all fruits evenly.",
      "Arrange in a serving bowl.",
      "Top with coconut and honey.",
      "Garnish with mint leaves.",
    ],

    story:
      "Health cafés near Serenity Beach introduced tropical smoothie bowls and fruit platters inspired by Pondicherry's wellness tourism culture.",

    season: "Summer",
    buyLink: "",
  },

  {
    name: "Village Style Veg Rice",
    state: "py",
    id: "ousteri-lake",
    destination: "Ousteri Lake",

    description:
      "Simple countryside vegetable rice cooked with mild spices and fresh herbs near Ousteri Lake villages.",

    image: villageStyleVegRice,

    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "Rice",
      "Beans",
      "Carrots",
      "Peas",
      "Green chillies",
      "Coriander leaves",
      "Oil",
      "Salt",
    ],

    steps: [
      "Cook vegetables lightly with spices.",
      "Add rice and water.",
      "Cook until soft and aromatic.",
      "Garnish with coriander leaves.",
    ],

    story:
      "Villages surrounding Ousteri Lake traditionally prepared simple rice dishes using locally grown vegetables and herbs.",

    season: "All Year",
    buyLink: "",
  },

  {
    name: "Lotus Stem Curry",
    state: "py",
    id: "ousteri-lake",
    destination: "Ousteri Lake",

    description:
      "A rustic curry prepared using lotus stems, coconut, and regional spices inspired by wetland-side cooking traditions.",

    image: lotusStemCurry,

    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "Lotus stems",
      "Coconut paste",
      "Onions",
      "Tomatoes",
      "Turmeric",
      "Green chillies",
      "Curry leaves",
      "Salt",
    ],

    steps: [
      "Clean and slice lotus stems carefully.",
      "Cook onions and tomatoes with spices.",
      "Add lotus stems and simmer until tender.",
      "Mix coconut paste and cook briefly.",
      "Serve warm with rice.",
    ],

    story:
      "Wetland communities around Ousteri Lake traditionally used edible aquatic plants in everyday cooking, especially during monsoon seasons.",

    season: "Monsoon",
    buyLink: "",
  },
];

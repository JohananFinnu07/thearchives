import { Recipe } from "../types";

/* ============== WARANGAL ================== */
import sarvapindi from "@/assets/TG/Recipes/WSP.jpg";
import jonnaRotte from "@/assets/TG/Recipes/WJR.jpg";
import pachiPulusu from "@/assets/TG/Recipes/WPP.jpg";
import sakinalu from "@/assets/TG/Recipes/WS.jpg";

/* ============== ADILABAD ================== */
import jonnaAmbali from "@/assets/TG/Recipes/AJA.jpg";
import bambooShootCurry from "@/assets/TG/Recipes/ABSC.jpg";
import gondliPorridge from "@/assets/TG/Recipes/AMP.jpg";
import mahuaLaddoo from "@/assets/TG/Recipes/AMFL.jpg";

/* ============== HYDERABAD ================== */
import hyderabadiBiryani from "@/assets/TG/Recipes/HB.jpg";
import hyderabadiHaleem from "@/assets/TG/Recipes/HH.jpg";
import khubaniKaMeetha from "@/assets/TG/Recipes/HKKM.jpg";
import doubleKaMeetha from "@/assets/TG/Recipes/HDKM.jpg";
import bagaraBaingan from "@/assets/TG/Recipes/HBB.jpg";
import hyderabadiLukhmi from "@/assets/TG/Recipes/HLS.jpg";
import hyderabadiKhattiDal from "@/assets/TG/Recipes/HKD.jpg";

export const telanganaRecipes: Recipe[] = [
  {
    name: "Sarvapindi",
    state: "telangana",
    id: "warangal",
    destination: "Warangal",

    description:
      "A traditional Telangana rice flour pancake mixed with peanuts, onions, and spices, slowly roasted in an iron pan until crisp and golden.",

    image: sarvapindi,

    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "1 cup Rice flour",
      "1/4 cup Peanuts (crushed)",
      "1 Onion (finely chopped)",
      "2 Green chillies (chopped)",
      "1 tbsp Sesame seeds",
      "Curry leaves (chopped)",
      "Salt to taste",
      "2 tbsp Oil",
    ],

    steps: [
      "In a bowl, mix rice flour, crushed peanuts, chopped onions, green chillies, sesame seeds, curry leaves, and salt.",
      "Add a little water to form a thick dough-like mixture.",
      "Heat an iron pan and grease lightly with oil.",
      "Spread the dough evenly on the pan using your fingers, making small holes across the surface.",
      "Drizzle oil into the holes and along the edges.",
      "Cook on low flame until the bottom becomes crisp and golden.",
      "Flip carefully and cook the other side until fully cooked.",
      "Serve hot with chutney or pickle.",
    ],

    story:
      "Sarvapindi is a beloved homemade snack in Telangana households, especially in the Warangal region. Traditionally cooked in heavy iron pans, it was often prepared as an evening meal for farmers returning from fields. The dish reflects the region's simple, hearty cooking style using pantry staples.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Jonna Rotte",
    state: "telangana",
    id: "warangal",
    destination: "Warangal",

    description:
      "A rustic sorghum flatbread that has been a staple food of Telangana farmers for generations, often served with spicy chutneys or curries.",

    image: jonnaRotte,

    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Medium",

    ingredients: [
      "1 cup Sorghum flour (Jowar flour)",
      "Warm water as needed",
      "Salt to taste",
      "1 tsp Oil or ghee (optional)",
    ],

    steps: [
      "In a bowl, mix sorghum flour and salt.",
      "Slowly add warm water and knead into a soft dough.",
      "Take a small ball of dough and flatten it gently using your hands.",
      "Pat it into a thin circular roti on a flat surface.",
      "Heat a tawa or iron griddle and place the roti carefully.",
      "Cook both sides until light brown spots appear.",
      "Apply a little ghee if desired and serve hot.",
    ],

    story:
      "Jonna Rotte is deeply connected to Telangana's dryland farming culture. Sorghum grows well in the semi-arid climate of the region, making it a traditional staple grain for centuries. In villages around Warangal, these rotis are commonly eaten with gongura chutney or spicy curries.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Pachi Pulusu",
    state: "telangana",
    id: "warangal",
    destination: "Warangal",

    description:
      "A refreshing raw tamarind broth mixed with onions, green chillies, and jaggery, commonly served as a cooling summer dish in Telangana.",

    image: pachiPulusu,

    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "Small lemon-sized Tamarind",
      "1 Onion (finely chopped)",
      "2 Green chillies (chopped)",
      "1 tbsp Jaggery",
      "Salt to taste",
      "Curry leaves",
      "1 tbsp Coriander leaves (chopped)",
    ],

    steps: [
      "Soak tamarind in warm water and extract a thin tamarind juice.",
      "Add chopped onions, green chillies, and curry leaves.",
      "Mix in jaggery and salt.",
      "Stir well until jaggery dissolves completely.",
      "Garnish with fresh coriander leaves.",
      "Serve fresh with steamed rice.",
    ],

    story:
      "Pachi Pulusu is a signature Telangana comfort dish, especially popular during hot summers. Unlike regular pulusu, it is not heavily cooked, preserving the fresh tangy flavors of tamarind. Farmers in Warangal often enjoy it with hot rice as a light midday meal.",

    season: "Summer",
    buyLink: "",
  },
  {
    name: "Sakinalu",
    state: "telangana",
    id: "warangal",
    destination: "Warangal",

    description:
      "A crispy spiral snack made from rice flour and sesame seeds, traditionally prepared during Sankranti celebrations in Telangana.",

    image: sakinalu,

    prepTime: "20 mins",
    cookTime: "20 mins",
    servings: "Serves 6",
    difficulty: "Medium",

    ingredients: [
      "2 cups Rice flour",
      "2 tbsp Sesame seeds",
      "Salt to taste",
      "Water as needed",
      "Oil for deep frying",
    ],

    steps: [
      "Mix rice flour, sesame seeds, and salt in a bowl.",
      "Add water gradually to make a soft dough.",
      "Take small portions and roll them into thin ropes.",
      "Shape the ropes into spiral patterns on a clean cloth.",
      "Heat oil in a deep pan and carefully slide the spirals into the oil.",
      "Fry until golden and crispy.",
      "Remove and drain excess oil before serving.",
    ],

    story:
      "Sakinalu are closely associated with the Sankranti festival across Telangana. Families traditionally prepare large batches at home and share them with relatives and neighbors. The snack symbolizes celebration, hospitality, and festive joy.",

    season: "Seasonal",
    buyLink: "",
  },

  {
    name: "Jonna Ambali",
    state: "telangana",
    id: "adilabad",
    destination: "Adilabad",

    description:
      "A traditional fermented drink made from sorghum flour, known for its cooling effect and nutritional benefits during hot summers.",

    image: jonnaAmbali,

    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: "Serves 3",
    difficulty: "Easy",

    ingredients: [
      "1/2 cup Sorghum flour (Jowar flour)",
      "3 cups Water",
      "Salt to taste",
      "1 cup Buttermilk",
      "1 Small onion (optional, chopped)",
    ],

    steps: [
      "Mix sorghum flour with water to form a smooth mixture.",
      "Cook the mixture on low flame, stirring continuously to avoid lumps.",
      "Once it thickens, remove from heat and allow it to cool.",
      "Add buttermilk and salt, mixing thoroughly.",
      "Optional: add chopped onions for extra flavor.",
      "Serve chilled as a refreshing summer drink.",
    ],

    story:
      "Jonna Ambali has been a staple drink among farmers and tribal communities in Adilabad for generations. Made from locally grown sorghum, it provides hydration, energy, and natural probiotics, making it ideal for the region’s hot climate.",

    season: "Summer",
    buyLink: "",
  },
  {
    name: "Bamboo Shoot Curry",
    state: "telangana",
    id: "adilabad",
    destination: "Adilabad",

    description:
      "A flavorful tribal curry made from tender bamboo shoots cooked with spices and local herbs.",

    image: bambooShootCurry,

    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "1 cup Bamboo shoots (cleaned and chopped)",
      "1 Onion (chopped)",
      "2 Green chillies",
      "1 tsp Turmeric",
      "1 tsp Red chilli powder",
      "Salt to taste",
      "2 tbsp Oil",
    ],

    steps: [
      "Boil chopped bamboo shoots for 10 minutes to remove bitterness.",
      "Heat oil in a pan and sauté chopped onions and green chillies.",
      "Add turmeric, chilli powder, and salt.",
      "Add the boiled bamboo shoots and cook for 10–12 minutes.",
      "Stir occasionally until the curry thickens.",
      "Serve hot with rice or millet rotis.",
    ],

    story:
      "Bamboo shoots are widely used by tribal communities in forest regions of Adilabad. Harvested during monsoon seasons, they form an important seasonal ingredient in many traditional tribal dishes.",

    season: "Monsoon",
    buyLink: "",
  },
  {
    name: "Mahua Flower Laddoo",
    state: "telangana",
    id: "adilabad",
    destination: "Adilabad",

    description:
      "A traditional tribal sweet made from naturally sweet mahua flowers mixed with jaggery and nuts, commonly prepared in forest villages of Adilabad.",

    image: mahuaLaddoo,

    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "1 cup Dried Mahua flowers",
      "1/2 cup Grated jaggery",
      "2 tbsp Ghee",
      "1/4 cup Roasted peanuts or cashews",
      "1 tbsp Grated coconut (optional)",
      "1 pinch Cardamom powder",
    ],

    steps: [
      "Wash dried mahua flowers lightly and soak them in warm water for 5–10 minutes to soften.",
      "Drain the water and chop the softened flowers finely.",
      "Heat ghee in a pan and sauté the mahua flowers on low flame until aromatic.",
      "Add grated jaggery and mix well until it melts and combines with the flowers.",
      "Stir in roasted peanuts or cashews, coconut, and cardamom powder.",
      "Cook the mixture until it thickens slightly and becomes sticky.",
      "Allow the mixture to cool slightly, then shape it into small round laddoos using your palms.",
      "Serve fresh or store in an airtight container.",
    ],

    story:
      "Mahua trees are deeply sacred to tribal communities across the forests of Adilabad. During the flowering season, families collect fallen mahua blossoms early in the morning and dry them for later use. Their natural sweetness makes them perfect for preparing simple traditional sweets like Mahua Laddoo, which are often shared during gatherings and seasonal celebrations.",

    season: "Spring",
    buyLink: "",
  },
  {
    name: "Gondli Millet Porridge",
    state: "telangana",
    id: "adilabad",
    destination: "Adilabad",

    description:
      "A wholesome porridge made from local millets, providing nourishment and sustained energy for rural communities.",

    image: gondliPorridge,

    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Easy",

    ingredients: [
      "1/2 cup Millet flour",
      "2 cups Water",
      "Salt to taste",
      "1 cup Buttermilk or milk",
    ],

    steps: [
      "Mix millet flour with water to form a smooth mixture.",
      "Cook on medium flame while stirring continuously.",
      "Allow the mixture to thicken into a porridge consistency.",
      "Add salt and buttermilk or milk according to preference.",
      "Serve warm as a nourishing meal.",
    ],

    story:
      "Millets have been the backbone of tribal diets in Adilabad for centuries. Simple dishes like millet porridge provided sustainable nutrition for communities living in forest and farming regions.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Hyderabadi Dum Biryani",
    state: "telangana",
    id: "hyderabad",
    destination: "Hyderabad",

    description:
      "A royal rice dish layered with marinated meat and aromatic spices, slow-cooked using the traditional dum technique.",

    image: hyderabadiBiryani,

    prepTime: "30 mins",
    cookTime: "45 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "2 cups Basmati rice",
      "500 g Chicken or mutton",
      "1 cup Yogurt",
      "2 Onions (fried)",
      "1 tsp Garam masala",
      "Saffron soaked in milk",
      "Mint and coriander leaves",
      "Salt and oil",
    ],

    steps: [
      "Marinate the meat with yogurt, spices, and herbs for at least 30 minutes.",
      "Partially cook basmati rice with whole spices.",
      "Layer marinated meat and rice inside a heavy pot.",
      "Add saffron milk, fried onions, and herbs.",
      "Seal the pot and cook on low flame (dum) for 30–40 minutes.",
      "Mix gently and serve hot.",
    ],

    story:
      "Hyderabadi Dum Biryani evolved in the royal kitchens of the Nizams, blending Persian cooking techniques with local Deccan flavors. The dum method traps steam inside the pot, infusing every grain of rice with aromatic spices.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Hyderabadi Haleem",
    state: "telangana",
    id: "hyderabad",
    destination: "Hyderabad",

    description:
      "A thick and nourishing stew made from wheat, lentils, and meat slow-cooked for hours.",

    image: hyderabadiHaleem,

    prepTime: "20 mins",
    cookTime: "2 hours",
    servings: "Serves 5",
    difficulty: "Medium",

    ingredients: [
      "500 g Mutton",
      "1 cup Broken wheat",
      "1/2 cup Lentils",
      "2 Onions (fried)",
      "1 tsp Garam masala",
      "Ginger garlic paste",
      "Mint leaves",
      "Ghee",
    ],

    steps: [
      "Soak wheat and lentils for 30 minutes.",
      "Cook meat with spices until tender.",
      "Add wheat and lentils and cook slowly until soft.",
      "Mash the mixture continuously to achieve a smooth paste.",
      "Top with fried onions, mint leaves, and ghee before serving.",
    ],

    story:
      "Haleem was introduced to Hyderabad through Persian and Middle Eastern influences during the Nizam era. Today it is a celebrated Ramadan specialty and holds a GI tag.",

    season: "Seasonal",
    buyLink: "",
  },
  {
    name: "Khubani Ka Meetha",
    state: "telangana",
    id: "hyderabad",
    destination: "Hyderabad",

    description:
      "A royal dessert made from dried apricots slow-cooked into a rich syrup and topped with cream.",

    image: khubaniKaMeetha,

    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "1 cup Dried apricots",
      "1/2 cup Sugar",
      "1 cup Water",
      "Fresh cream",
      "Almonds and pistachios",
    ],

    steps: [
      "Soak dried apricots overnight.",
      "Cook them with water until soft.",
      "Add sugar and simmer until syrup thickens.",
      "Garnish with cream and nuts.",
      "Serve chilled.",
    ],

    story:
      "This dessert was introduced to Hyderabad through Persian traders and became a royal delicacy served in Nizam banquets.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Double Ka Meetha",
    state: "telangana",
    id: "hyderabad",
    destination: "Hyderabad",

    description:
      "A traditional Hyderabadi dessert made from fried bread soaked in saffron-flavored milk.",

    image: doubleKaMeetha,

    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "4 Bread slices",
      "2 cups Milk",
      "1/2 cup Sugar",
      "Ghee",
      "Cardamom powder",
      "Almonds and pistachios",
    ],

    steps: [
      "Cut bread into triangles and fry in ghee until golden.",
      "Boil milk with sugar and cardamom.",
      "Soak fried bread in the milk mixture.",
      "Cook briefly until the flavors combine.",
      "Garnish with nuts and serve warm.",
    ],

    story:
      "Double ka Meetha has Mughal culinary roots and became a popular festive dessert in Hyderabad weddings and celebrations.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Bagara Baingan",
    state: "telangana",
    id: "hyderabad",
    destination: "Hyderabad",

    description:
      "A flavorful eggplant curry cooked with peanuts, sesame seeds, and tamarind.",

    image: bagaraBaingan,

    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "8 Small eggplants",
      "2 tbsp Peanuts",
      "1 tbsp Sesame seeds",
      "1 Onion",
      "Tamarind paste",
      "Red chili powder",
      "Oil and salt",
    ],

    steps: [
      "Roast peanuts and sesame seeds and grind into a paste.",
      "Fry eggplants lightly until soft.",
      "Prepare gravy using onions, spices, and tamarind.",
      "Add the ground paste and cooked eggplants.",
      "Simmer until the curry thickens.",
    ],

    story:
      "Bagara Baingan is traditionally served alongside Hyderabadi biryani during weddings and festive feasts.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Hyderabadi Lukhmi",
    state: "telangana",
    id: "hyderabad",
    destination: "Hyderabad",

    description:
      "A traditional Hyderabadi snack similar to a square samosa, filled with spiced minced meat and deep-fried to a crisp golden finish.",
    image: hyderabadiLukhmi,

    prepTime: "25 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "2 cups All-purpose flour",
      "300 g Minced mutton or chicken",
      "1 Onion (finely chopped)",
      "1 tsp Ginger garlic paste",
      "1 tsp Garam masala",
      "1 tsp Red chili powder",
      "Salt to taste",
      "Oil for frying",
    ],

    steps: [
      "Prepare dough using flour, salt, and water and set aside.",
      "Cook minced meat with onions, ginger garlic paste, and spices until dry.",
      "Roll dough into thin sheets and cut into squares.",
      "Place filling inside and fold into square parcels.",
      "Deep fry until golden brown and crisp.",
      "Serve hot with mint chutney.",
    ],

    story:
      "Lukhmi is a classic Hyderabadi snack that was traditionally served in royal Nizam banquets and weddings. Unlike samosas, it has a distinctive square shape and a rich meat filling.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Hyderabadi Khatti Dal",
    state: "telangana",
    id: "hyderabad",
    destination: "Hyderabad",

    description:
      "A tangy lentil curry made with tamarind and spices, commonly served with rice in Hyderabadi households.",

    image: hyderabadiKhattiDal,

    prepTime: "10 mins",
    cookTime: "25 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "1 cup Toor dal (pigeon peas)",
      "1 tbsp Tamarind pulp",
      "2 Green chilies",
      "1 Tomato (chopped)",
      "1 tsp Turmeric",
      "1 tsp Mustard seeds",
      "Curry leaves",
      "2 tbsp Oil",
      "Salt to taste",
    ],

    steps: [
      "Cook the toor dal with turmeric until soft.",
      "Add tamarind pulp, chopped tomatoes, and green chilies.",
      "Simmer for a few minutes to develop the tangy flavor.",
      "Prepare tempering using mustard seeds, curry leaves, and red chilies in hot oil.",
      "Pour the tempering over the dal and mix well.",
      "Serve hot with steamed rice and ghee.",
    ],

    story:
      "Khatti Dal is a staple comfort food in Hyderabadi homes. The tangy flavor from tamarind distinguishes it from other Indian dals and pairs perfectly with rice, papad, and pickles.",

    season: "All Year",
    buyLink: "",
  },
];

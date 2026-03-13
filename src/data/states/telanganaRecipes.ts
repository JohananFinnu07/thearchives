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

/* ============== GADWAL ================== */
import muddaPappu from "@/assets/TG/Recipes/GMP.jpg";
import palliChutney from "@/assets/TG/Recipes/GPC.jpg";
import ulavaCharu from "@/assets/TG/Recipes/GUC.jpg";
import korraAnnam from "@/assets/TG/Recipes/GKA.jpg";
import sajjaRotte from "@/assets/TG/Recipes/GSR.jpg";

/* ============== BHADRADRI ================== */
import bambooChicken from "@/assets/TG/Recipes/BBC.jpg";
import godavariFishCurry from "@/assets/TG/Recipes/BGCP.jpg";
import templePulihora from "@/assets/TG/Recipes/BTR.jpg";
import godavariPullattu from "@/assets/TG/Recipes/BPA.jpg";
import teegalaKura from "@/assets/TG/Recipes/BPSC.jpg";
import isukaDonthuluFry from "@/assets/TG/Recipes/BIDF.jpg";

/* ============== BUPALAPALLY ================== */
import chiliPickle from "@/assets/TG/Recipes/JBCP.jpg";

/* ============== SIRCILLA ================== */
import jonnaGatka from "@/assets/TG/Recipes/RSJG.jpg";

/* ==============  ================== */

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
  {
    name: "Mudda Pappu",
    state: "telangana",
    id: "jogulamba-gadwal",
    destination: "Jogulamba Gadwal",

    description:
      "A simple yet comforting dish made from boiled toor dal, traditionally served with rice and ghee.",

    image: muddaPappu,

    prepTime: "5 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "1 cup Toor dal",
      "2 cups Water",
      "Salt to taste",
      "1 tbsp Ghee",
      "Optional: green chilies",
    ],

    steps: [
      "Wash the toor dal thoroughly.",
      "Cook the dal with water in a pressure cooker until soft.",
      "Mash the dal lightly to achieve a smooth texture.",
      "Add salt and mix well.",
      "Serve hot with rice and a spoon of ghee.",
    ],

    story:
      "Mudda Pappu is a comfort food across Telangana and Andhra homes. In Gadwal, it is often made with locally grown Chennangi dal, known for its rich aroma and creamy texture.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Palli Chutney",
    state: "telangana",
    id: "jogulamba-gadwal",
    destination: "Jogulamba Gadwal",

    description:
      "A spicy peanut chutney made from roasted groundnuts, reflecting the region’s groundnut farming tradition.",

    image: palliChutney,

    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "1 cup Roasted groundnuts",
      "3 dried red chilies",
      "2 cloves Garlic",
      "1 tbsp Tamarind pulp",
      "Salt to taste",
      "Water as needed",
    ],

    steps: [
      "Roast groundnuts lightly and remove skins.",
      "Add peanuts, chilies, garlic, tamarind, and salt to a grinder.",
      "Grind into a smooth paste with a little water.",
      "Transfer to a bowl and optionally add a tempering of mustard seeds and curry leaves.",
      "Serve with rotte, dosa, or rice.",
    ],

    story:
      "Because Gadwal produces high-quality groundnuts, peanut-based chutneys are extremely popular in local households. The nutty flavor adds richness to otherwise simple millet meals.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Ulava Charu",
    state: "telangana",
    id: "jogulamba-gadwal",
    destination: "Jogulamba Gadwal",

    description:
      "A rich and earthy soup made from slow-cooked horse gram, known for its deep flavor and nutritional value.",

    image: ulavaCharu,

    prepTime: "15 mins",
    cookTime: "45 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "1 cup Horse gram (Ulava)",
      "1 Onion chopped",
      "2 Green chilies",
      "1 tsp Tamarind pulp",
      "Salt to taste",
      "1 tsp Mustard seeds",
      "Curry leaves",
    ],

    steps: [
      "Wash and soak horse gram for a few hours.",
      "Cook the gram until soft and grind part of it into a paste.",
      "Add tamarind pulp, onions, chilies, and salt to the broth.",
      "Simmer until the flavors combine.",
      "Prepare a tempering with mustard seeds and curry leaves.",
      "Serve hot with rice or rotte.",
    ],

    story:
      "Ulava Charu has long been a nourishing dish among farming communities in the Deccan. Packed with protein and warmth, it is traditionally eaten during cooler months or after long hours of labor in the fields.",

    season: "Winter",
    buyLink: "",
  },
  {
    name: "Gadwal Korra Annam",
    state: "telangana",
    id: "jogulamba-gadwal",
    destination: "Jogulamba Gadwal",

    description:
      "A nutritious Foxtail Millet (Korra) preparation that has been a staple in the dry regions of Gadwal for centuries.",

    image: korraAnnam,

    prepTime: "30 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "2 cups Foxtail Millet (Korra)",
      "5 cups Water",
      "1/2 tsp Salt",
      "1 tsp Ghee (optional)",
    ],

    steps: [
      "Wash the foxtail millet thoroughly under running water.",
      "Soak the millet in water for at least 30 minutes to ensure even cooking.",
      "Bring 5 cups of water to a boil in a thick-bottomed vessel.",
      "Add the soaked millet and salt to the boiling water.",
      "Reduce the flame to low, cover with a lid, and simmer until all water is absorbed.",
      "Fluff with a fork and add a dollop of ghee before serving.",
    ],

    story:
      "Before the green revolution, millets like Korra were the primary grains of Gadwal. Unlike rice, these hardy grains thrive in the local semi-arid soil. It is traditionally served with spicy groundnut chutney or 'Pappu' (dal) made from local Chennangi varieties.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Sajja Rotte (Pearl Millet Flatbread)",
    state: "telangana",
    id: "jogulamba-gadwal",
    destination: "Jogulamba Gadwal",

    description:
      "A hearty, gluten-free flatbread made from pearl millet, providing essential warmth and energy.",

    image: sajjaRotte,

    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "Serves 2",
    difficulty: "Hard",

    ingredients: [
      "2 cups Pearl Millet flour (Sajja pindi)",
      "1 cup Hot water",
      "A pinch of salt",
      "1 tsp Sesame seeds (optional)",
    ],

    steps: [
      "Sieve the flour into a wide mixing bowl and add salt.",
      "Gradually add hot water and knead into a soft, pliable dough while it's still warm.",
      "Take a small ball of dough and pat it into a thin circle using your palms on a dusted surface (the tapping method).",
      "Optional: sprinkle sesame seeds on top while patting.",
      "Place the rotte on a hot iron tawa.",
      "Apply a little water on the top surface with a cloth and cook both sides until brown spots appear.",
    ],

    story:
      "Sajja Rotte is the strength food of Gadwal's farming community. Tapping the rotte by hand is a traditional skill passed down through generations. It is famously paired with Jonna Ambali or spicy garlic chutneys.",

    season: "Winter",
    buyLink: "",
  },
  {
    name: "Bamboo Chicken (Bongu Chicken)",
    state: "telangana",
    id: "bhadradri-kothagudem",
    destination: "Bhadradri Kothagudem",

    description:
      "A tribal delicacy where marinated chicken is slow-cooked inside a bamboo tube over an open fire.",

    image: bambooChicken,

    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "500 g Chicken pieces",
      "2 tbsp Ginger garlic paste",
      "1 tsp Turmeric",
      "2 tbsp Red chili powder",
      "Salt to taste",
      "Fresh coriander leaves",
      "1 fresh bamboo tube",
    ],

    steps: [
      "Clean and marinate the chicken with spices, ginger-garlic paste, and salt.",
      "Stuff the marinated chicken into a hollow bamboo tube.",
      "Seal the opening with banana leaf or dough.",
      "Place the bamboo tube over a slow wood fire.",
      "Rotate occasionally until the chicken cooks inside its own juices.",
      "Break open the bamboo and serve hot.",
    ],

    story:
      "This dish originates from tribal communities living in the forests around the Godavari basin. Cooking inside bamboo gives the meat a smoky aroma and keeps it incredibly tender.",

    season: "Winter",
    buyLink: "",
  },
  {
    name: "Godavari Chepala Pulusu",
    state: "telangana",
    id: "bhadradri-kothagudem",
    destination: "Bhadradri Kothagudem",

    description:
      "A tangy and spicy fish curry prepared with fresh river fish from the Godavari.",

    image: godavariFishCurry,

    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "500 g Fresh river fish",
      "2 tbsp Tamarind pulp",
      "1 Onion chopped",
      "2 Tomatoes chopped",
      "2 tsp Red chili powder",
      "1 tsp Turmeric",
      "Salt to taste",
      "Curry leaves",
    ],

    steps: [
      "Heat oil in a clay pot and sauté onions until golden.",
      "Add tomatoes, turmeric, and chili powder and cook until soft.",
      "Pour tamarind pulp and water to create the curry base.",
      "Add fish pieces gently and simmer without stirring too much.",
      "Cook until the fish absorbs the spicy gravy.",
      "Garnish with curry leaves and serve hot.",
    ],

    story:
      "Fishing communities along the Godavari river have prepared this fiery fish curry for generations. The strong tamarind and chili flavors reflect the bold taste preferences of the region.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Temple Style Pulihora",
    state: "telangana",
    id: "bhadradri-kothagudem",
    destination: "Bhadradri Kothagudem",

    description:
      "A tangy tamarind rice commonly served as prasadam in temples across the Bhadrachalam region.",

    image: templePulihora,

    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "3 cups Cooked rice",
      "2 tbsp Tamarind pulp",
      "2 tbsp Peanuts",
      "1 tsp Mustard seeds",
      "Curry leaves",
      "2 dried red chilies",
      "Turmeric",
      "Salt to taste",
    ],

    steps: [
      "Heat oil and fry peanuts until golden.",
      "Add mustard seeds, red chilies, and curry leaves.",
      "Mix tamarind pulp, turmeric, and salt.",
      "Add cooked rice and mix well until evenly coated.",
      "Cook for a few minutes for the flavors to blend.",
      "Serve warm or at room temperature.",
    ],

    story:
      "Pulihora is a staple temple offering across Andhra and Telangana. In Bhadrachalam, it is prepared daily as prasadam for devotees visiting the Sri Rama temple.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Godavari Pullattu",
    state: "telangana",
    id: "bhadrachalam",
    destination: "Bhadradri Kothagudem",

    description:
      "A tangy, fermented crepe made from aged dosa batter, a breakfast staple found in the small eateries along the Godavari ghats.",

    image: godavariPullattu,

    prepTime: "12 hours (fermentation)",
    cookTime: "10 mins",
    servings: "Serves 2",
    difficulty: "Easy",

    ingredients: [
      "2 cups Sour dosa batter",
      "1 tsp Cumin seeds",
      "2 Green chilies, finely chopped",
      "1/2 cup Finely chopped onions",
      "Oil for drizzling",
    ],

    steps: [
      "Ensure the batter is slightly sour for the authentic Pullattu taste.",
      "Mix cumin seeds, green chilies, and onions into the batter.",
      "Heat a cast-iron tawa and grease lightly with oil.",
      "Pour a ladle of batter and spread it thick like a pancake.",
      "Cook on medium flame until the edges turn golden and crisp.",
      "Flip and cook the other side briefly. Serve hot with ginger chutney.",
    ],

    story:
      "In Bhadrachalam, breakfast often begins with the tangy taste of Pullattu. Originally a clever way to use leftover fermented batter in the humid Godavari climate, it has become a beloved local delicacy often paired with the famous Gottam Chitti snack.",

    season: "All Year",
    buyLink: "",
  },
  {
    name: "Teegala Kura (Palmyra Sprout Curry)",
    state: "telangana",
    id: "kothagudem-agency",
    destination: "Bhadradri Kothagudem",

    description:
      "A rare, seasonal tribal curry made from the tender sprouts of the Palmyra palm (Gunjalu/Teegalu).",

    image: teegalaKura,

    prepTime: "20 mins",
    cookTime: "25 mins",
    servings: "Serves 3",
    difficulty: "Medium",

    ingredients: [
      "2 cups Boiled and sliced Palmyra sprouts",
      "1 large Onion, sliced",
      "2 tsp Red chili powder (Dummugudem style)",
      "1/4 tsp Turmeric",
      "1/2 cup Grated coconut or poppy seed paste",
      "Salt and tempering spices",
    ],

    steps: [
      "Peel the tough outer skin of the sprouts and boil them until tender.",
      "Slice the boiled sprouts into thin discs.",
      "Heat oil in a pan, add tempering, and sauté onions until translucent.",
      "Add sprout slices, salt, turmeric, and chili powder.",
      "Mix in coconut or poppy seed paste for richness.",
      "Simmer for 10 minutes until the flavors combine. Serve with Sajja Rotte.",
    ],

    story:
      "This is a traditional dish from the Koya tribal regions around Kothagudem. Palmyra sprouts are a seasonal forest ingredient known for their earthy flavor and high fiber content.",

    season: "Winter",
    buyLink: "",
  },
  {
    name: "Godavari Isuka Donthulu Fry",
    state: "telangana",
    id: "bhadrachalam",
    destination: "Bhadradri Kothagudem",

    description:
      "A spicy, crispy fry made with small fresh-water fish caught from the Godavari river.",

    image: isukaDonthuluFry,

    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "Serves 2",
    difficulty: "Medium",

    ingredients: [
      "250 g Fresh-water small fish",
      "1 tbsp Ginger-garlic paste",
      "2 tbsp Rice flour",
      "1 tsp Garam masala",
      "Curry leaves",
      "Green chilies",
      "Oil for frying",
    ],

    steps: [
      "Clean the small fish thoroughly while keeping them whole.",
      "Marinate with ginger-garlic paste, chili powder, and salt.",
      "Dust lightly with rice flour for crispiness.",
      "Heat oil and fry the fish with curry leaves and green chilies.",
      "Cook until deep brown and crunchy.",
      "Serve hot as a snack or side dish.",
    ],

    story:
      "Communities along the Godavari river consider Isuka Donthulu a prized catch. These tiny fish gather near river sandbanks and are known for their intense flavor and crunchy texture when fried.",

    season: "Winter",
    buyLink: "",
  },
  {
    name: "Chili Pickle (Telangana Pachadi)",
    state: "telangana",
    id: "jayashankar-bhupalpally",
    destination: "Jayashankar Bhupalpally",

    description:
      "A fiery traditional pickle made using fresh or dried red chillies, oil, and aromatic spices.",

    image: chiliPickle,

    prepTime: "20 mins",
    cookTime: "10 mins",
    servings: "Serves 10",
    difficulty: "Easy",

    ingredients: [
      "250 g Fresh red or green chillies",
      "2 tbsp Mustard powder",
      "1 tbsp Fenugreek powder",
      "2 tbsp Tamarind pulp",
      "1 cup Sesame oil",
      "Salt to taste",
      "Garlic cloves",
    ],

    steps: [
      "Wash and dry the chillies completely.",
      "Cut them into small pieces or grind lightly.",
      "Mix mustard powder, fenugreek powder, tamarind pulp, salt, and garlic.",
      "Heat sesame oil until warm and mix into the spice blend.",
      "Combine with the chopped chillies and mix thoroughly.",
      "Store in a clean jar and allow the pickle to mature for a few days.",
    ],

    story:
      "Pickles are an essential part of Telangana cuisine. In Bhupalpally villages, chili pickle is often prepared during harvest seasons and stored for months to accompany simple millet meals.",

    season: "Summer",
    buyLink: "",
  },
  {
    name: "Siricilla Sarvapindi",
    state: "telangana",
    id: "rajanna-sircilla",
    destination: "Rajanna Sircilla",

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
    name: "Jonna Gatka",
    state: "telangana",
    id: "rajanna-sircilla",
    destination: "Rajanna Sircilla",

    description:
      "A traditional sorghum-based porridge made from jowar flour, commonly eaten in rural Telangana as a nutritious staple meal.",

    image: jonnaGatka,

    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Easy",

    ingredients: [
      "1 cup Jowar flour (Sorghum flour)",
      "3 cups Water",
      "Salt to taste",
      "1 cup Buttermilk (optional)",
      "1 Small onion (optional, chopped)",
    ],

    steps: [
      "Bring water to a boil in a pot.",
      "Slowly add jowar flour while stirring continuously to avoid lumps.",
      "Cook on low flame until the mixture thickens into a smooth porridge.",
      "Add salt and mix well.",
      "Serve hot, optionally with buttermilk or chopped onions.",
      "Traditionally eaten with spicy chutney or pickle.",
    ],

    story:
      "Jonna Gatka has been a staple meal for farmers in Telangana for generations. Made from locally grown sorghum, it provides long-lasting energy and keeps the body cool during hot summer days.",

    season: "Summer",
    buyLink: "",
  },
  {
    name: "Sarvapindi",
    state: "telangana",
    id: "narayanpet",
    destination: "Narayanpet",

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
    id: "narayanpet",
    destination: "Narayanpet",

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
    name: "Jonna Ambali",
    state: "telangana",
    id: "narayanpet",
    destination: "Narayanpet",

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
];

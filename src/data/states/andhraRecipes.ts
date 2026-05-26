// src/data/recipes.ts
import { Recipe } from "../../types";

import nigerseedChutneyImage from "@/assets/Recipes/NSCH.jpg";
import bambooChickenImage from "@/assets/Recipes/BCH.jpg";
import bambooBiryaniImage from "@/assets/Recipes/BBH.jpg";
import ragiSankatiImage from "@/assets/Recipes/RSH.jpg";
import tribalriceWineImage from "@/assets/Recipes/TRWH.jpg";

import spicycountryChickenImage from "@/assets/Recipes/SCCH.jpg";
import tribalPickelsImage from "@/assets/Recipes/TPSH.jpg";
import strawberryDelightImage from "@/assets/Recipes/SDH.jpg";
import wildmushroomFryImage from "@/assets/Recipes/WFMF.jpg";

import andhrapulaoImage from "@/assets/Recipes/ACP.jpg";
import mirapakaiBajjiImage from "@/assets/Recipes/MBH.jpg";

import paderuturmericRasamImage from "@/assets/Recipes/PTRH.jpg";
import milletUpmaImage from "@/assets/Recipes/MUH.jpg";
import milletIdlyImage from "@/assets/Recipes/MIH.jpg";

import bambooShootImage from "@/assets/Recipes/BSCH.jpg";
import adividumpalakuraImage from "@/assets/Recipes/ATDCH.jpg";
import foresthoneyRiceImage from "@/assets/Recipes/FHRH.jpg";
import jackfruitCurryImage from "@/assets/Recipes/JFCH.jpg";

import marichiAnnamImage from "@/assets/Recipes/MAH.jpg";
import reniguntaAppamImage from "@/assets/Recipes/RAH.jpg";
import potcurdPulihoraImage from "@/assets/Recipes/PCPH.jpg";

import murimixtureImage from "@/assets/Recipes/MMH.jpg";
import bellamParamannamImage from "@/assets/Recipes/BPH.jpg";
import ulavacharuImage from "@/assets/Recipes/UCH.jpg";

import pottikalluImage from "@/assets/Recipes/JFLIH.jpg";
import lakkapidathalaImage from "@/assets/Recipes/PCH.jpg";
import dividiviImage from "@/assets/Recipes/DDTH.jpg";

import dibbarottiImage from "@/assets/Recipes/DRH.jpg";
import pachipulusuImage from "@/assets/Recipes/PPH.jpg";

import matihandichickenImage from "@/assets/Recipes/MHH.jpg";

import kobbariPulaoImage from "@/assets/Recipes/KPPH.jpg";
import pulasapulusuImage from "@/assets/Recipes/PCPKH.jpg";
import pootharekuluImage from "@/assets/Recipes/PH.jpg";
import kakindagottamkajaImage from "@/assets/Recipes/KGK.jpg";

import munagaPulihoraImage from "@/assets/Recipes/MPH.jpg";
import jonnarottiImage from "@/assets/Recipes/JRAH.jpg";

import sarvaPindiImage from "@/assets/Recipes/SPH.jpg";
import jonnaGatkaImage from "@/assets/Recipes/MJGH.jpg";

import cheppalairuguImage from "@/assets/Recipes/CIH.jpg";
import neyyikaramDosaImage from "@/assets/Recipes/NKDH.jpg";
import pindiMiriamImage from "@/assets/Recipes/PMH.jpg";

import rayaRagiImage from "@/assets/Recipes/RRSH.jpg";
import rayaGroundChutney from "@/assets/Recipes/RGCH.jpg";
import rayaMirchibajji from "@/assets/Recipes/RMBH.jpg";

import bandarHalwa from "@/assets/Recipes/BH.jpg";
import RoyyalaPacchadi from "@/assets/Recipes/MRP.jpg";

import madugulaHalwa from "@/assets/Recipes/PMDH.jpg";

export const andhraRecipes: Recipe[] = [
  {
    name: "Niger Seed Chutney",
    state: "andhra-pradesh",
    id: "araku valley",
    destination: "Araku Valley",
    description:
      "A deeply roasted tribal-style chutney made from niger seeds, traditionally served with hot millet rotis and steamed rice in the Eastern Ghats.",

    image: nigerseedChutneyImage,

    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "Serves 4",
    difficulty: "Easy",

    ingredients: [
      "1 cup Niger seeds (Valise)",
      "4 Dry red chillies",
      "3 Garlic cloves",
      "Salt to taste",
      "1 tsp Tamarind (optional)",
    ],

    steps: [
      "Place a thick iron pan on low flame and dry roast the niger seeds slowly. Stir continuously until they release a nutty aroma and turn slightly darker.",
      "Transfer the roasted seeds onto a plate and allow them to cool completely. This helps preserve their natural oils.",
      "In the same pan, lightly roast the dry red chillies and garlic until fragrant.",
      "Using a stone grinder or mixer, grind everything together into a coarse, slightly oily texture — not too smooth.",
      "Serve fresh with hot steamed rice and a drizzle of ghee, or alongside ragi rotis.",
    ],
    story:
      "Niger Seed Chutney, locally known as 'Valise Pachadi', is a staple among tribal communities in Araku Valley. The seeds are rich in natural oils and provide warmth during colder months in the hills. Traditionally prepared using stone grinders, the chutney reflects the simplicity and depth of forest-based cuisine.",
    season: "Winter",
    buyLink: "https://amzn.to/4s4Oio5",
  },
  {
    name: "Bamboo Chicken",
    state: "andhra-pradesh",
    id: "araku valley",
    destination: "Araku Valley",
    description:
      "A smoky tribal delicacy where marinated chicken is slow-cooked inside bamboo over open fire, sealing in aroma and forest flavours.",

    image: bambooChickenImage,

    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: "Serves 3–4",
    difficulty: "Medium",

    ingredients: [
      "500g country chicken (cut into pieces)",
      "1 fresh bamboo shoot (hollow section)",
      "2 tbsp red chilli powder",
      "1 tbsp ginger-garlic paste",
      "½ tsp turmeric",
      "Salt to taste",
      "Fresh coriander leaves",
      "1 tbsp mustard oil",
    ],

    steps: [
      "Wash the chicken pieces thoroughly and drain excess water.",
      "In a bowl, mix red chilli powder, turmeric, ginger-garlic paste, salt and mustard oil.",
      "Add the chicken pieces and coat evenly. Marinate for at least 30 minutes.",
      "Take a fresh hollow bamboo shoot and clean the inside properly.",
      "Stuff the marinated chicken tightly into the bamboo.",
      "Seal the open end using banana leaf or natural bamboo cap.",
      "Place the bamboo directly over a medium wood fire.",
      "Rotate slowly every few minutes to ensure even cooking.",
      "Cook for about 35–40 minutes until the chicken is tender.",
      "Carefully split open the bamboo and serve hot.",
    ],

    story:
      "Bamboo Chicken, locally known as Bongulo Chicken, is a signature tribal dish of Araku Valley, often prepared during weekly markets and forest gatherings. Slow-cooked inside fresh bamboo over an open fire, the method seals in natural juices while infusing a deep, earthy smokiness that modern kitchens struggle to replicate.",
    season: "All Year",
    buyLink: "https://amzn.to/4s4Oio5",
  },
  {
    name: "Bamboo Biryani",
    state: "andhra-pradesh",
    id: "araku valley",
    destination: "Araku Valley",
    description:
      "A forest-style biryani layered inside bamboo and slow-cooked over fire, absorbing smoky and woody undertones.",

    image: bambooBiryaniImage,

    prepTime: "30 mins",
    cookTime: "45 mins",
    servings: "Serves 4",
    difficulty: "Medium",

    ingredients: [
      "2 cups basmati rice",
      "500g chicken or vegetables",
      "1 large bamboo hollow",
      "2 onions (sliced)",
      "2 tomatoes (chopped)",
      "Biryani masala",
      "Fresh mint and coriander",
      "Salt to taste",
      "Ghee",
    ],

    steps: [
      "Wash basmati rice and soak for 20 minutes.",
      "Boil water with salt and cook rice until 70% done. Drain and keep aside.",
      "Heat oil in a pan and sauté sliced onions until golden brown.",
      "Add ginger-garlic paste and cook until raw smell disappears.",
      "Add tomatoes, chilli powder and biryani masala. Cook until oil separates.",
      "Add chicken or vegetables and cook until 80% done.",
      "Take a clean bamboo hollow and layer rice and masala alternately.",
      "Seal the bamboo using banana leaf.",
      "Place over medium fire and rotate occasionally.",
      "Cook for 40–45 minutes until rice is fully done and flavours blend.",
      "Open carefully and serve hot.",
    ],

    story:
      "Bamboo Biryani in Araku Valley is a modern twist on traditional tribal bamboo cooking. Inspired by ancient forest techniques, rice and marinated country chicken are sealed inside fresh bamboo and slow-cooked over a wood fire. This method locks in moisture and infuses a natural smoky aroma, making it one of Araku’s most unique and sought-after food experiences in the Eastern Ghats.",
    season: "All Year",
  },
  {
    name: "Ragi Sankati - Natu Kodi",
    state: "andhra-pradesh",
    id: "araku valley",
    destination: "Araku Valley",
    description:
      "A nourishing millet staple served with fiery country chicken curry, deeply rooted in the Eastern Ghats tribal diet.",

    image: ragiSankatiImage,

    prepTime: "15 mins",
    cookTime: "40 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "1 cup ragi flour",
      "2 cups water",
      "Salt",
      "500g country chicken",
      "Red chilli powder",
      "Garam masala",
      "Onions, ginger, garlic",
      "Oil",
    ],

    steps: [
      "Boil 2 cups of water in a thick-bottomed pot and add salt.",
      "When water starts boiling, reduce flame and slowly add ragi flour while stirring continuously.",
      "Keep stirring to avoid lumps until mixture thickens.",
      "Cover and cook on low flame for 5–7 minutes.",
      "Mix well again and shape into round balls using a wooden spoon.",
      "In another pan, heat oil and sauté onions until soft.",
      "Add ginger-garlic paste and cook briefly.",
      "Add country chicken pieces, chilli powder and spices.",
      "Cook covered until chicken becomes tender and gravy thickens.",
      "Serve hot ragi sankati with natu kodi curry.",
    ],

    story:
      "Ragi Sankati is a traditional millet-based staple of Araku Valley, valued for providing warmth and sustained energy in the region’s cool, hilly climate. Made from finger millet and served with naturally raised country chicken, it reflects the agricultural lifestyle and food wisdom of local tribal communities, where millets remain central to daily nourishment and seasonal eating.",
  },
  {
    name: "Madapa - Tribal Rice Wine",
    state: "andhra-pradesh",
    id: "araku valley",
    destination: "Araku Valley",
    description:
      "A traditionally fermented rice drink prepared during festivals and community gatherings in Araku's tribal villages.",

    image: tribalriceWineImage,

    prepTime: "2 days fermentation",
    cookTime: "Minimal active time",
    servings: "Serves community sharing",
    difficulty: "Hard",

    ingredients: [
      "2 cups cooked rice",
      "Traditional fermentation starter (herbal yeast)",
      "Clay pot",
      "Clean muslin cloth",
    ],

    steps: [
      "Cook rice completely and allow it to cool to room temperature.",
      "Spread rice evenly on a clean plate to remove excess moisture.",
      "Powder the traditional fermentation starter.",
      "Mix the starter evenly with cooled rice using clean hands.",
      "Transfer the mixture into a clean clay pot.",
      "Cover with muslin cloth and keep in a cool, dark place.",
      "Allow fermentation for 48 hours without disturbing.",
      "After fermentation, gently press the rice to extract liquid.",
      "Strain the liquid into a clean vessel.",
      "Serve fresh or lightly chilled.",
    ],

    story:
      "Madapa is more than a traditional drink in Araku Valley — it is a ceremonial beverage shared during harvest festivals and weddings. Each tribal community preserves its own unique fermentation method, passed down orally through generations, reflecting deep-rooted cultural identity, seasonal rhythms, and ancestral knowledge of forest-based ingredients and natural brewing practices.",
    season: "Winter",
  },
  {
    name: "Spicy Country Chicken - Lambasingi Style",
    state: "andhra-pradesh",
    id: "lambasingi",
    destination: "Lambasingi",
    description:
      "A bold hill-style country chicken curry slow-cooked with strong spices, perfect for Lambasingi’s cold and misty evenings.",
    image: spicycountryChickenImage,
    prepTime: "20 mins",
    cookTime: "50 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "500g country chicken",
      "2 onions (chopped)",
      "2 tbsp red chilli powder",
      "1 tbsp coriander powder",
      "1 tsp garam masala",
      "1 tbsp ginger-garlic paste",
      "Oil",
      "Salt",
    ],
    steps: [
      "Clean and wash the country chicken pieces thoroughly.",
      "Heat oil in a heavy pan and sauté chopped onions until golden.",
      "Add ginger-garlic paste and cook for 1 minute.",
      "Add chicken pieces and sauté for 5–7 minutes.",
      "Add chilli powder, coriander powder and salt.",
      "Cover and cook on low flame until chicken releases juices.",
      "Add water if required and cook until chicken becomes tender.",
      "Sprinkle garam masala and simmer for 5 minutes before serving.",
    ],
    story:
      "Spicy Country Chicken from Lambasingi is a bold hill-style curry known for its deep red gravy and intense heat. Popular throughout the year and especially comforting during winter, this dish reflects the region’s cold climate and love for strong spices. Made with free-range country chicken, it remains a signature Lambasingi comfort food.",
  },
  {
    name: "Tribal Pickles & Hill Spices",
    state: "andhra-pradesh",
    id: "lambasingi",
    destination: "Lambasingi",
    description:
      "Sun-cured tribal pickles and freshly ground spice blends prepared in hill households using locally grown produce.",
    image: tribalPickelsImage,
    prepTime: "30 mins",
    cookTime: "Sun-curing time",
    servings: "Multiple servings",
    difficulty: "Easy",
    season: "Summer",
    ingredients: [
      "Raw mango or forest vegetables",
      "Red chilli powder",
      "Mustard powder",
      "Fenugreek seeds",
      "Sesame oil",
      "Salt",
    ],
    steps: [
      "Wash and completely dry raw mango or forest vegetables.",
      "Cut into uniform pieces.",
      "Mix chilli powder, mustard powder and salt in a bowl.",
      "Combine vegetable pieces with spice mixture evenly.",
      "Heat sesame oil and allow it to cool slightly.",
      "Pour oil over the mixture and mix thoroughly.",
      "Store in airtight jars and keep under sunlight for 3–5 days.",
      "Stir occasionally before using.",
    ],
    story:
      "Lambasingi Tribal Pickles are traditionally prepared during summer using sun-dried spices and locally grown produce. The hill climate allows natural preservation through sunlight curing. These homemade pickles and spice blends are essential to village kitchens, adding heat and flavor throughout the year. Summer is the prime season for preparing these long-lasting condiments.",
  },
  {
    name: "Strawberry Delight",
    state: "andhra-pradesh",
    id: "lambasingi",
    destination: "Lambasingi",
    description:
      "A fresh hill-style dessert made from locally grown Lambasingi strawberries, lightly sweetened to preserve natural flavor.",
    image: strawberryDelightImage,
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "Winter",
    ingredients: [
      "2 cups fresh strawberries",
      "2 tbsp sugar",
      "1 tsp lemon juice",
      "Fresh cream (optional)",
    ],
    steps: [
      "Wash fresh Lambasingi strawberries and remove stems.",
      "Chop half the strawberries into small pieces.",
      "Blend the remaining strawberries into a smooth puree.",
      "Heat the puree with sugar for 5 minutes.",
      "Add chopped strawberries and lemon juice.",
      "Cook for another 2 minutes.",
      "Allow to cool completely.",
      "Serve chilled with fresh cream if desired.",
    ],
    story:
      "Strawberry Delight celebrates Lambasingi’s winter strawberry harvest. Known as Andhra Pradesh’s coldest hill station, Lambasingi produces fresh strawberries during winter months. This simple dessert preserves the fruit’s natural sweetness without heavy processing. Seasonal and refreshing, it highlights the region’s unique winter cultivation and growing reputation for hill-grown strawberries.",
  },
  {
    name: "Wild Forest Mushroom Fry",
    state: "andhra-pradesh",
    id: "lambasingi",
    destination: "Lambasingi",
    description:
      "A monsoon-only delicacy made from freshly foraged wild mushrooms sautéed with hill spices.",
    image: wildmushroomFryImage,
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Medium",
    season: "Monsoon",
    ingredients: [
      "Fresh wild forest mushrooms",
      "2 onions (sliced)",
      "2 green chillies",
      "½ tsp turmeric",
      "1 tsp red chilli powder",
      "Oil",
      "Salt",
    ],
    steps: [
      "Clean wild forest mushrooms thoroughly with water.",
      "Chop into medium-sized pieces.",
      "Heat oil in a pan and sauté sliced onions until soft.",
      "Add green chillies and cook briefly.",
      "Add mushrooms and sauté on medium flame.",
      "Add turmeric, chilli powder and salt.",
      "Cook uncovered until moisture evaporates.",
      "Fry until slightly crisp and serve hot.",
    ],
    story:
      "Wild Forest Mushroom Fry is a monsoon-only specialty in Lambasingi. These mushrooms appear naturally during the rainy season and are carefully foraged by local villagers. Not commercially cultivated, they remain a seasonal treasure of the Eastern Ghats. The earthy flavor and limited availability make this monsoon dish one of Lambasingi’s most authentic culinary experiences.",
  },
  {
    name: "Andhra Chicken Pulao - Vanjangi Style",
    state: "andhra-pradesh",
    id: "vanajangi",
    destination: "Vanajangi",
    description:
      "A fragrant village-style chicken pulao cooked with whole spices and slow-simmered rice, reflecting Vanjangi’s rustic hill cooking traditions.",
    image: andhrapulaoImage,
    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken pieces",
      "2 onions (sliced)",
      "Whole spices (cloves, cardamom, cinnamon)",
      "Green chillies",
      "Ginger-garlic paste",
      "Mint leaves",
      "Oil",
      "Salt",
    ],
    steps: [
      "Wash and soak basmati rice for 20 minutes.",
      "Heat oil in a heavy pot and sauté whole spices.",
      "Add sliced onions and cook until golden.",
      "Add ginger-garlic paste and green chillies.",
      "Add chicken pieces and sauté for 5–7 minutes.",
      "Add salt and cook until chicken is partially tender.",
      "Add soaked rice and required water.",
      "Cover and cook on low flame until rice is fully done.",
      "Rest for 5 minutes before serving hot.",
    ],
    story:
      "Andhra Chicken Pulao in Vanjangi is a rustic hill-style rice dish prepared with whole spices and locally sourced chicken. Cooked slowly over a low flame, it reflects the simple yet aromatic cooking traditions of tribal villages. Available throughout the year, this pulao remains a staple for family gatherings and festive meals.",
  },
  {
    name: "Mirapakaya Bajji - Vanjangi Style",
    state: "andhra-pradesh",
    id: "vanajangi",
    destination: "Vanajangi",
    description:
      "A crispy deep-fried green chilli snack coated in gram flour batter, commonly enjoyed in Vanjangi’s cool evenings.",
    image: mirapakaiBajjiImage,
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "8 large green chillies",
      "1 cup gram flour (besan)",
      "½ tsp turmeric",
      "½ tsp red chilli powder",
      "Salt",
      "Water",
      "Oil for deep frying",
    ],
    steps: [
      "Wash and slit green chillies vertically, removing seeds if desired.",
      "In a bowl, mix gram flour, turmeric, chilli powder and salt.",
      "Add water gradually to form a thick batter.",
      "Heat oil in a deep pan.",
      "Dip each chilli into batter, coating evenly.",
      "Carefully drop into hot oil.",
      "Fry until golden brown and crisp.",
      "Remove and drain excess oil before serving hot.",
    ],
    story:
      "Mirapakaya Bajji is a beloved snack in Vanjangi village, especially during cool hill evenings. Prepared using fresh green chillies and gram flour batter, it is commonly sold near viewpoints and village gatherings. Available throughout the year, this crispy snack reflects the simplicity and warmth of Vanjangi’s local food culture.",
  },
  {
    name: "Paderu Turmeric Rasam",
    state: "andhra-pradesh",
    id: "paderu",
    destination: "Paderu",
    description:
      "A warm and healing rasam prepared using high-curcumin Paderu turmeric, traditionally consumed during monsoon and winter.",
    image: paderuturmericRasamImage,
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "Monsoon",
    ingredients: [
      "Fresh Paderu turmeric",
      "Tamarind extract",
      "Crushed black pepper",
      "Garlic cloves",
      "Mustard seeds",
      "Curry leaves",
      "Salt",
    ],
    steps: [
      "Boil tamarind water in a pot.",
      "Add crushed garlic and black pepper.",
      "Grate fresh turmeric and add to the boiling liquid.",
      "Simmer for 10 minutes on low flame.",
      "Heat oil separately and temper mustard seeds and curry leaves.",
      "Pour tempering into rasam and mix well.",
      "Serve hot.",
    ],
    story:
      "Paderu is known for its organically grown, high-curcumin turmeric cultivated in the Eastern Ghats. This turmeric rasam is especially popular during monsoon and winter for its warmth and immunity benefits. Simple yet powerful, it reflects the region’s agricultural richness and traditional medicinal knowledge.",
  },
  {
    name: "Madugula Halwa",
    state: "andhra-pradesh",
    id: "paderu",
    destination: "Paderu",

    description:
      "A famous traditional wheat halwa from Madugula village near Visakhapatnam, known for its rich ghee flavor, chewy texture, and slow-cooked preparation.",

    image: madugulaHalwa,

    prepTime: "8 hrs (wheat soaking & extraction)",
    cookTime: "1 hr",
    servings: "Serves 6",
    difficulty: "Medium",

    ingredients: [
      "2 cups whole wheat",
      "1½ cups sugar",
      "1 cup ghee",
      "4 tbsp cashews",
      "2 tbsp raisins",
      "4 cardamom pods (powdered)",
      "3 cups water",
    ],

    steps: [
      "Soak whole wheat overnight and grind it with water to extract thick wheat milk.",
      "Strain the mixture to separate the wheat milk and allow it to settle for a few hours.",
      "Heat a heavy-bottomed pan and cook the wheat milk slowly while stirring continuously.",
      "Add sugar gradually and continue stirring as the mixture thickens.",
      "Pour ghee little by little while cooking until the halwa becomes glossy and leaves the sides of the pan.",
      "Add roasted cashews, raisins, and cardamom powder for aroma.",
      "Cook until the mixture reaches a chewy halwa consistency and serve warm.",
    ],

    story:
      "Madugula Halwa is one of the most famous traditional sweets from the Madugula region near Visakhapatnam. The sweet gained popularity during the local zamindari period when it was prepared for royal guests and festivals. Even today, Madugula sweet shops continue the slow-cooking method that gives the halwa its signature chewy texture and deep ghee aroma.",

    season: "All Year",

    buyLink: "https://amzn.to/4s4Oio5",
  },
  {
    name: "Korra Upma",
    state: "andhra-pradesh",
    id: "paderu",
    destination: "Paderu",
    description:
      "A nutritious foxtail millet(Korra) breakfast prepared using simple spices, reflecting Paderu’s millet-based diet.",
    image: milletUpmaImage,
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "1 cup foxtail millet",
      "1 onion (chopped)",
      "Green chillies",
      "Mustard seeds",
      "Curry leaves",
      "Oil",
      "Salt",
    ],
    steps: [
      "Wash foxtail millet thoroughly and drain.",
      "Heat oil and temper mustard seeds and curry leaves.",
      "Add chopped onions and green chillies.",
      "Add millet and lightly roast for 2 minutes.",
      "Add water and salt.",
      "Cover and cook on low flame until millet softens.",
      "Fluff gently and serve hot.",
    ],
    story:
      "Millets like korra are staple foods in Paderu’s tribal communities. Cultivated in hill terrains with minimal water, foxtail millet provides strength and sustained energy. This simple upma is prepared throughout the year, showcasing the region’s commitment to sustainable farming and traditional nutrition.",
  },
  {
    name: "Millet Idly - Paderu Style",
    state: "andhra-pradesh",
    id: "paderu",
    destination: "Paderu",
    description:
      "Soft steamed idlies made using millets instead of rice, a healthier adaptation of a traditional staple.",
    image: milletIdlyImage,
    prepTime: "8 hours fermentation",
    cookTime: "15 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: ["1 cup foxtail millet", "½ cup urad dal", "Salt", "Water"],
    steps: [
      "Soak millet and urad dal separately for 4 hours.",
      "Grind into smooth batter.",
      "Mix and allow to ferment overnight.",
      "Add salt and mix gently.",
      "Pour batter into idly moulds.",
      "Steam for 12–15 minutes.",
      "Serve hot with chutney.",
    ],
    story:
      "Millet idlies are a healthier variation of traditional idli, widely adopted in Paderu’s hill communities. Using locally grown millets instead of polished rice, this dish supports sustainable farming and balanced nutrition. Prepared throughout the year, it represents the integration of traditional grains into everyday meals.",
  },

  {
    name: "Bamboo Shoot Curry - Maredumilli",
    state: "andhra-pradesh",
    id: "maredumilli",
    destination: "Maredumilli",
    description:
      "A seasonal forest delicacy prepared using tender bamboo shoots harvested during monsoon in the Eastern Ghats.",
    image: bambooShootImage,
    prepTime: "20 mins",
    cookTime: "25 mins",
    servings: "Serves 3",
    difficulty: "Medium",
    season: "Monsoon",
    ingredients: [
      "Fresh bamboo shoots",
      "Onions",
      "Green chillies",
      "Turmeric",
      "Red chilli powder",
      "Oil",
      "Salt",
    ],
    steps: [
      "Peel outer layers of fresh bamboo shoots.",
      "Slice thinly and boil for 15 minutes to remove bitterness.",
      "Heat oil and sauté onions and green chillies.",
      "Add boiled bamboo shoots and turmeric.",
      "Add chilli powder and salt.",
      "Cook covered for 10 minutes.",
      "Stir occasionally and serve hot.",
    ],
    story:
      "Bamboo Shoot Curry is a monsoon specialty in Maredumilli, where fresh shoots sprout after heavy rains. Tribal communities carefully process the shoots to remove bitterness before cooking. Rich in fiber and nutrients, this seasonal dish reflects the deep forest knowledge and sustainable food traditions of the Eastern Ghats.",
  },
  {
    name: "Adavi Tega Dumpala Koora",
    state: "andhra-pradesh",
    id: "maredumilli",
    destination: "Maredumilli",
    description:
      "A traditional curry made from wild forest tubers foraged from the hills of Maredumilli.",
    image: adividumpalakuraImage,
    prepTime: "25 mins",
    cookTime: "30 mins",
    servings: "Serves 3",
    difficulty: "Medium",
    season: "Monsoon",
    ingredients: [
      "Wild forest tubers",
      "Onions",
      "Turmeric",
      "Red chilli powder",
      "Curry leaves",
      "Oil",
      "Salt",
    ],
    steps: [
      "Wash and peel forest tubers thoroughly.",
      "Cut into small cubes.",
      "Boil lightly to soften.",
      "Heat oil and sauté onions and curry leaves.",
      "Add tubers, turmeric and chilli powder.",
      "Add salt and cook covered until tender.",
      "Serve hot with rice or millet roti.",
    ],
    story:
      "Adavi Tega Dumpala Koora is prepared using wild tubers gathered from Maredumilli forests. Tribal families rely on these roots during monsoon and cooler months. This earthy curry showcases the community’s self-sufficient lifestyle and deep understanding of seasonal forest produce.",
  },
  {
    name: "Forest Honey Rice - Maredumilli",
    state: "andhra-pradesh",
    id: "maredumilli",
    destination: "Maredumilli",
    description:
      "A simple sweet dish made by mixing warm rice with raw forest honey collected from hill regions.",
    image: foresthoneyRiceImage,
    prepTime: "5 mins",
    cookTime: "15 mins",
    servings: "Serves 2",
    difficulty: "Easy",
    season: "All Year",
    ingredients: ["Cooked rice", "Raw forest honey", "Ghee (optional)"],
    steps: [
      "Cook rice until soft.",
      "Allow it to cool slightly but keep warm.",
      "Add a spoon of raw forest honey.",
      "Mix gently without mashing the rice.",
      "Add a little ghee if desired.",
      "Serve immediately.",
    ],
    story:
      "Forest Honey Rice is a comforting sweet prepared using raw honey collected by tribal groups in Maredumilli. Often enjoyed during winter evenings and gatherings, this dish highlights the abundance of forest resources and the community’s close connection with nature.",
  },
  {
    name: "Jackfruit Curry - Panasa Koora",
    state: "andhra-pradesh",
    id: "maredumilli",
    destination: "Maredumilli",
    description:
      "A summer specialty made with tender raw jackfruit cooked using traditional tribal spice blends.",
    image: jackfruitCurryImage,
    prepTime: "25 mins",
    cookTime: "30 mins",
    servings: "Serves 3",
    difficulty: "Medium",
    season: "Summer",
    ingredients: [
      "Raw jackfruit",
      "Onions",
      "Green chillies",
      "Turmeric",
      "Red chilli powder",
      "Oil",
      "Salt",
    ],
    steps: [
      "Peel and cube raw jackfruit carefully.",
      "Boil pieces until slightly tender.",
      "Heat oil and sauté onions and green chillies.",
      "Add jackfruit cubes and turmeric.",
      "Add chilli powder and salt.",
      "Cook covered for 15 minutes.",
      "Stir occasionally and serve hot.",
    ],
    story:
      "Panasa Koora is widely prepared in Maredumilli during summer when raw jackfruit is abundant. The fibrous texture absorbs tribal spice blends beautifully. This seasonal curry represents the agricultural rhythm of the region and the tradition of cooking with locally available produce.",
  },
  {
    name: "Marichi Annam - Tirupati Style",
    state: "andhra-pradesh",
    id: "tirupati",
    destination: "Tirupati",
    description:
      "A traditional pepper-infused rice dish prepared with ghee and whole spices, commonly associated with temple-style cooking.",
    image: marichiAnnamImage,
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "Cooked rice",
      "Crushed black pepper",
      "Cumin seeds",
      "Ghee",
      "Curry leaves",
      "Cashews",
      "Salt",
    ],
    steps: [
      "Cook rice and allow it to cool slightly.",
      "Heat ghee in a pan.",
      "Add cumin seeds and allow them to splutter.",
      "Add curry leaves and cashews, sauté until golden.",
      "Add freshly crushed black pepper and salt.",
      "Mix cooked rice gently into the tempering.",
      "Stir evenly without mashing the grains.",
      "Serve warm.",
    ],
    story:
      "Marichi Annam, or pepper rice, is a simple yet sacred dish associated with temple-style cooking in Tirupati. Made using black pepper, ghee, and cumin, it is valued for its digestive benefits and warming properties. Traditionally prepared during cooler months and religious occasions, this sattvic rice dish reflects the spiritual and culinary heritage of the temple town.",
  },
  {
    name: "Renigunta Appam",
    state: "andhra-pradesh",
    id: "tirupati",
    destination: "Tirupati",
    description:
      "A traditional sweet appam prepared with rice flour and jaggery, popular in Renigunta households during festivals.",
    image: reniguntaAppamImage,
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "Rice flour",
      "Jaggery",
      "Grated coconut",
      "Cardamom powder",
      "Water",
      "Oil for frying",
    ],
    steps: [
      "Dissolve jaggery in warm water and strain impurities.",
      "Mix rice flour with jaggery syrup.",
      "Add grated coconut and cardamom powder.",
      "Prepare a thick batter without lumps.",
      "Heat oil in a deep pan.",
      "Pour small portions of batter into hot oil.",
      "Fry until golden brown on both sides.",
      "Drain excess oil and serve warm.",
    ],
    story:
      "Renigunta Appam is a festive sweet prepared in households near Tirupati, especially during temple celebrations and family rituals. Made with jaggery and rice flour, this deep-fried delicacy symbolizes prosperity and devotion. The simplicity of ingredients reflects traditional Rayalaseema cooking practices passed down through generations.",
  },
  {
    name: "Pot-Curd Pulihora",
    state: "andhra-pradesh",
    id: "tirupati",
    destination: "Tirupati",
    description:
      "A cooling rice dish mixed with fresh curd and tempered spices, traditionally served in clay pots.",
    image: potcurdPulihoraImage,
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "Summer",
    ingredients: [
      "Cooked rice",
      "Fresh curd",
      "Mustard seeds",
      "Green chillies",
      "Curry leaves",
      "Ginger",
      "Salt",
    ],
    steps: [
      "Cook rice and allow it to cool completely.",
      "Whisk fresh curd until smooth.",
      "Mix curd and salt into the rice.",
      "Heat oil and temper mustard seeds.",
      "Add ginger, green chillies and curry leaves.",
      "Pour tempering over curd rice.",
      "Mix gently and serve in a clay pot.",
      "Chill slightly before serving.",
    ],
    story:
      "Pot-Curd Pulihora, similar to temple-style daddojanam, is a cooling dish widely consumed in Tirupati during hot summers. Served traditionally in clay pots, it balances the region’s warm climate with soothing curd and mild tempering. This humble dish represents the sattvic culinary traditions of the temple town.",
  },
  {
    name: "Murri Mixture - Vizag Style",
    state: "andhra-pradesh",
    id: "visakhapatnam",
    destination: "Visakhapatnam",
    description:
      "A spicy puffed rice snack mixed with peanuts, onions, and coastal spices, popular as a street-side treat in Vizag.",
    image: murimixtureImage,
    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "Puffed rice (murri)",
      "Roasted peanuts",
      "Finely chopped onions",
      "Green chillies",
      "Red chilli powder",
      "Salt",
      "Lemon juice",
      "Curry leaves",
      "Oil",
    ],
    steps: [
      "Heat a small amount of oil in a pan.",
      "Add curry leaves and sauté briefly.",
      "In a large bowl, combine puffed rice and roasted peanuts.",
      "Add chopped onions and green chillies.",
      "Sprinkle red chilli powder and salt.",
      "Add sautéed curry leaves and mix thoroughly.",
      "Squeeze fresh lemon juice and toss well.",
      "Serve immediately for best crunch.",
    ],
    story:
      "Murri Mixture is a beloved street snack in Visakhapatnam, often sold near beaches and busy markets. Light yet spicy, it reflects the coastal city’s fast-paced lifestyle and love for bold flavors. Made fresh and served instantly, this puffed rice mixture captures the everyday culinary spirit of Vizag’s vibrant street culture.",
  },
  {
    name: "Bellam Paramannam",
    state: "andhra-pradesh",
    id: "visakhapatnam",
    destination: "Visakhapatnam",
    description:
      "A traditional jaggery rice pudding prepared during festivals and temple celebrations in coastal Andhra.",
    image: bellamParamannamImage,
    prepTime: "10 mins",
    cookTime: "30 mins",
    servings: "Serves 4",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "Raw rice",
      "Jaggery",
      "Milk",
      "Ghee",
      "Cardamom powder",
      "Cashews",
      "Raisins",
    ],
    steps: [
      "Cook rice until soft.",
      "Dissolve jaggery in a little water and strain impurities.",
      "Add jaggery syrup to cooked rice.",
      "Pour milk and cook on low flame.",
      "Add cardamom powder.",
      "Heat ghee separately and fry cashews and raisins.",
      "Add fried nuts to the mixture.",
      "Simmer until slightly thick and serve warm.",
    ],
    story:
      "Bellam Paramannam is a sacred sweet widely prepared in Visakhapatnam during temple rituals and festivals. Made with jaggery and rice, it symbolizes prosperity and devotion. The rich aroma of ghee and cardamom enhances its festive appeal. This traditional dessert remains an integral part of coastal Andhra’s spiritual and culinary celebrations.",
  },
  {
    name: "Ulava Charu - Coastal Andhra Style",
    state: "andhra-pradesh",
    id: "visakhapatnam",
    destination: "Visakhapatnam",
    description:
      "A hearty horse gram soup simmered for hours, served with rice and cream in coastal Andhra households.",
    image: ulavacharuImage,
    prepTime: "15 mins",
    cookTime: "1 hour",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "Horse gram (ulavalu)",
      "Tamarind extract",
      "Garlic",
      "Black pepper",
      "Mustard seeds",
      "Curry leaves",
      "Salt",
    ],
    steps: [
      "Soak horse gram for 6 hours.",
      "Pressure cook until soft.",
      "Strain and reserve the thick extract.",
      "Add tamarind extract and crushed garlic.",
      "Simmer for 20 minutes.",
      "Temper mustard seeds and curry leaves in oil.",
      "Add tempering to the charu.",
      "Serve hot with rice.",
    ],
    story:
      "Ulava Charu is a traditional Andhra delicacy prepared by slow-cooking horse gram to extract its rich flavor. Popular in Visakhapatnam and across coastal Andhra, it is valued for its strength-giving properties. Often served with rice and a touch of cream, this hearty dish reflects the region’s rustic yet deeply satisfying culinary heritage.",
  },
  {
    name: "Pottikkalu - Jackfruit Leaf Idlis",
    state: "andhra-pradesh",
    id: "etikoppaka",
    destination: "Etikoppaka",
    description:
      "A unique twist on the traditional idli, steamed inside handmade jackfruit leaf cups to infuse a woody, herbal aroma.",
    image: pottikalluImage,
    prepTime: "8 hours (includes fermentation)",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Hard",
    season: "All Year",
    ingredients: [
      "Urad dal",
      "Rice rava (idli rava)",
      "Fresh Jackfruit leaves (16-20 leaves)",
      "Small coconut sticks (for pinning)",
      "Salt",
      "Water",
    ],
    steps: [
      "Soak urad dal and rice rava separately for 4 hours.",
      "Grind dal into a smooth batter and mix with rava.",
      "Ferment the batter overnight for 8 hours.",
      "Wash jackfruit leaves and pin 4 leaves together using sticks to form a small cup (Pottikka).",
      "Add salt to the fermented batter and pour into the leaf cups.",
      "Place cups in a steamer or idli cooker.",
      "Steam for 15-20 minutes until the leaves change color.",
      "Carefully peel off the leaves and serve with ginger chutney.",
    ],
    story:
      "Pottikkalu is a labor of love synonymous with the Konaseema and Etikoppaka regions. The jackfruit tree is considered sacred and medicinal; steaming the batter in its leaves is believed to aid digestion. Crafting the leaf cups requires immense patience, a skill passed down through generations of women in Andhra households.",
  },
  {
    name: "Lakkapidathala Vantalu - Miniature Heritage",
    state: "andhra-pradesh",
    id: "etikoppaka",
    destination: "Etikoppaka",
    description:
      "A cultural 'recipe' where traditional lacquer toy sets are used to teach children the basics of Andhra culinary arts.",
    image: lakkapidathalaImage,
    prepTime: "5 mins",
    cookTime: "N/A (Mock Cooking)",
    servings: "For 1 Child",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "Miniature lacquered wooden pots",
      "Salt",
      "Dried chilies",
      "Local grains",
      "Hand-pressed flower petals",
    ],
    steps: [
      "Introduce the child to the miniature wooden rolling pin and stove.",
      "Demonstrate how to store salt and pickles in the safe, lacquer-coated jars.",
      "Simulate the process of pounding spices using the wooden mortar and pestle.",
      "Explain the significance of the natural 'Alekha' (lacquer) finish.",
      "Encourage the child to arrange a 'mock thali' for the family.",
    ],
    story:
      "While not a dish consumed by adults, this 'recipe for tradition' is how Etikoppaka preserves its identity. On a child's first birthday, they are gifted these non-toxic toys. It turns cooking into a play-based ritual, ensuring that the reverence for handmade craftsmanship and traditional food is instilled at a very young age.",
  },
  {
    name: "Divi-Divi Heritage Brew",
    state: "andhra-pradesh",
    id: "etikoppaka",
    destination: "Etikoppaka",
    description:
      "A traditional forest tea made from the pods of the Divi-Divi tree, known for its medicinal tannins and earthy flavor.",
    image: dividiviImage,
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: "Serves 2",
    difficulty: "Medium",
    season: "Winter",
    ingredients: [
      "Dried Divi-Divi pods (Caesalpinia coriaria)",
      "Water",
      "Ginger",
      "Honey (Forest-sourced)",
    ],
    steps: [
      "Lightly crush the dried pods to release the inner seeds.",
      "Boil 2 cups of water with crushed ginger.",
      "Add the pods and simmer until the water turns a deep amber/red.",
      "Strain the liquid into cups.",
      "Stir in honey and drink while warm.",
    ],
    story:
      "The Divi-Divi tree provided the natural red dye for Etikoppaka toys for centuries. Beyond the craft, tribal elders used the pods to create a potent brew. Rich in tannins, this 'forest tea' was a household remedy for inflammation and stomach health, representing a time when the village lived in total synergy with its flora.",
  },
  {
    name: "Dibba Rotti - Gandikota Style",
    state: "andhra-pradesh",
    id: "gandikota",
    destination: "Gandikota",
    description:
      "A thick and crispy rice-based pancake cooked slowly in an iron pan, popular in Rayalaseema households.",
    image: dibbarottiImage,
    prepTime: "6 hours soaking",
    cookTime: "20 mins",
    servings: "Serves 3",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "Idli rice",
      "Urad dal",
      "Chopped onions",
      "Green chillies",
      "Cumin seeds",
      "Salt",
      "Oil",
    ],
    steps: [
      "Soak rice and urad dal for 5–6 hours.",
      "Grind into coarse thick batter.",
      "Add chopped onions, green chillies, cumin and salt.",
      "Heat oil in a thick iron pan.",
      "Pour batter thickly and spread gently.",
      "Cover and cook on low flame for 8–10 minutes.",
      "Flip carefully and cook until golden brown.",
      "Serve hot with chutney.",
    ],
    story:
      "Dibba Rotti is a signature Rayalaseema breakfast known for its thick texture and crispy edges. In Gandikota’s dry terrain, this hearty dish provides sustained energy for daily labor. Traditionally cooked in iron pans over slow flame, it reflects the rustic, bold culinary identity of the region.",
  },
  {
    name: "Pachi Pulusu - Gandikota Style",
    state: "andhra-pradesh",
    id: "gandikota",
    destination: "Gandikota",
    description:
      "A raw tamarind-based cooling rasam prepared without boiling, ideal for Rayalaseema’s hot climate.",
    image: pachipulusuImage,
    prepTime: "10 mins",
    cookTime: "No cooking required",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "Summer",
    ingredients: [
      "Tamarind pulp",
      "Finely chopped onions",
      "Green chillies",
      "Crushed garlic",
      "Red chilli powder",
      "Salt",
      "Coriander leaves",
    ],
    steps: [
      "Soak tamarind in water and extract pulp.",
      "Add chopped onions and green chillies.",
      "Add crushed garlic and red chilli powder.",
      "Add salt and mix well.",
      "Stir in fresh coriander leaves.",
      "Adjust consistency with water.",
      "Serve fresh without boiling.",
    ],
    story:
      "Pachi Pulusu is a refreshing Rayalaseema specialty prepared without cooking. In the hot climate of Gandikota, this tangy tamarind mixture cools the body while delivering bold flavors. Simple yet powerful, it represents the region’s ability to adapt food to harsh weather conditions using minimal ingredients.",
  },
  {
    name: "Matihandi Chicken - Madagada Style",
    state: "andhra-pradesh",
    id: "madagada",
    destination: "Madagada",
    description:
      "A rustic tribal chicken curry slow-cooked in an earthen pot over wood fire.",
    image: matihandichickenImage,
    prepTime: "20 mins",
    cookTime: "45 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "Country chicken",
      "Onions",
      "Green chillies",
      "Ginger-garlic paste",
      "Turmeric",
      "Red chilli powder",
      "Salt",
      "Oil",
    ],
    steps: [
      "Clean and wash chicken pieces thoroughly.",
      "Heat oil in a clay pot over wood fire.",
      "Add onions and sauté until soft.",
      "Add ginger-garlic paste and cook briefly.",
      "Add chicken pieces and spices.",
      "Mix well and cover with lid.",
      "Cook slowly on low flame for 40–45 minutes.",
      "Stir occasionally and serve hot.",
    ],
    story:
      "Matihandi Chicken is a signature tribal dish of Madagada, cooked slowly in an earthen pot over open fire. The clay enhances flavor while retaining moisture, giving the curry its smoky depth. This traditional cooking method reflects the community’s reliance on natural materials and time-honored culinary practices passed through generations.",
  },
  {
    name: "Kobbari Paalu Pulao",
    state: "andhra-pradesh",
    id: "konaseema",
    destination: "Konaseema - Godavari",
    description:
      "A fragrant rice dish cooked in fresh coconut milk, popular in coastal Andhra households.",
    image: kobbariPulaoImage,
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "Basmati rice",
      "Fresh coconut milk",
      "Green chillies",
      "Whole spices",
      "Mint leaves",
      "Salt",
      "Oil",
    ],
    steps: [
      "Wash and soak rice for 20 minutes.",
      "Heat oil and sauté whole spices.",
      "Add green chillies and mint leaves.",
      "Add soaked rice and stir gently.",
      "Pour fresh coconut milk and required water.",
      "Add salt and mix well.",
      "Cook covered on low flame until rice is soft.",
      "Fluff gently before serving.",
    ],
    story:
      "Kobbari Paalu Pulao reflects the coconut-rich culinary tradition of the Godavari region. Fresh coconut milk gives the rice a creamy texture and delicate sweetness. Prepared for family gatherings and festive occasions, this dish highlights the coastal abundance of coconuts and the refined flavor profile of Andhra’s riverine cuisine.",
  },
  {
    name: "Pulasa Pulusu",
    state: "andhra-pradesh",
    id: "konaseema",
    destination: "Konaseema - Godavari",
    description:
      "A prized seasonal curry made with Pulasa (Hilsa) fish cooked in tangy tamarind gravy.",
    image: pulasapulusuImage,
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "Monsoon",
    ingredients: [
      "Pulasa fish pieces",
      "Tamarind extract",
      "Onions",
      "Green chillies",
      "Turmeric",
      "Red chilli powder",
      "Salt",
      "Oil",
    ],
    steps: [
      "Clean fish pieces gently without breaking.",
      "Heat oil and sauté onions and green chillies.",
      "Add turmeric and chilli powder.",
      "Pour tamarind extract and bring to boil.",
      "Add fish pieces carefully.",
      "Cook on low flame without stirring frequently.",
      "Simmer until gravy thickens.",
      "Rest before serving.",
    ],
    story:
      "Pulasa fish migrates into the Godavari River during monsoon, making it a prized seasonal delicacy. Known for its rich flavor and high value, Pulasa Pulusu is cooked gently in tangy tamarind gravy. The dish represents the river’s bounty and the deep cultural connection between the Godavari and coastal Andhra cuisine.",
  },
  {
    name: "Potharekulu",
    state: "andhra-pradesh",
    id: "konaseema",
    destination: "Konaseema - Godavari",
    description:
      "A delicate layered sweet made from thin rice starch sheets filled with sugar or jaggery and ghee.",
    image: pootharekuluImage,
    prepTime: "Varies",
    cookTime: "20 mins",
    servings: "Multiple pieces",
    difficulty: "Hard",
    season: "All Year",
    ingredients: [
      "Rice starch sheet",
      "Powdered sugar or jaggery",
      "Ghee",
      "Cardamom powder",
    ],
    steps: [
      "Prepare ultra-thin rice starch sheets.",
      "Spread ghee evenly over sheet.",
      "Sprinkle powdered sugar or jaggery.",
      "Add cardamom for flavor.",
      "Fold gently into layers.",
      "Roll and cut into portions.",
      "Store in airtight container.",
    ],
    story:
      "Potharekulu, meaning ‘paper sweet,’ originates from the Godavari region, especially Atreyapuram. The sweet is crafted using delicate rice starch sheets layered with ghee and sugar. Known for its intricate preparation, it represents Andhra’s refined sweet-making tradition and is widely prepared during weddings and festive occasions.",
  },
  {
    name: "Kakinada Gottam Kaja",
    state: "andhra-pradesh",
    id: "konaseema",
    destination: "Konaseema - Godavari",
    description:
      "A crispy layered sweet soaked in sugar syrup, famous in Kakinada.",
    image: kakindagottamkajaImage,
    prepTime: "30 mins",
    cookTime: "40 mins",
    servings: "Multiple pieces",
    difficulty: "Hard",
    season: "All Year",
    ingredients: ["Maida flour", "Sugar", "Ghee", "Cardamom", "Oil"],
    steps: [
      "Prepare dough using maida and ghee.",
      "Roll into thin sheets and layer with ghee.",
      "Fold repeatedly to create layers.",
      "Cut into tube shapes.",
      "Deep fry until golden brown.",
      "Prepare sugar syrup separately.",
      "Dip fried kajas into syrup briefly.",
      "Allow to cool and serve.",
    ],
    story:
      "Kakinada Gottam Kaja is a renowned sweet from the coastal town of Kakinada. Known for its crisp layers and syrup-filled center, it is prepared during festivals and celebrations. The intricate folding technique gives it a flaky texture, making it one of Andhra Pradesh’s most iconic traditional sweets.",
  },
  {
    name: "Munagaku Pulihora - Papikondalu Style",
    state: "andhra-pradesh",
    id: "papikondalu",
    destination: "Papikondalu",
    description:
      "A nutritious tamarind rice prepared with fresh drumstick leaves, combining tangy flavor with forest-grown greens.",
    image: munagaPulihoraImage,
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "Cooked rice",
      "Fresh drumstick leaves (munagaku)",
      "Tamarind pulp",
      "Mustard seeds",
      "Dry red chillies",
      "Turmeric",
      "Peanuts",
      "Curry leaves",
      "Salt",
      "Oil",
    ],
    steps: [
      "Cook rice and spread it to cool completely.",
      "Wash drumstick leaves thoroughly and drain.",
      "Heat oil in a pan and add mustard seeds.",
      "Add dry red chillies, peanuts and curry leaves.",
      "Add drumstick leaves and sauté until slightly wilted.",
      "Add turmeric and tamarind pulp.",
      "Cook until raw tamarind smell disappears.",
      "Mix the prepared tempering with cooled rice gently.",
      "Adjust salt and serve.",
    ],
    story:
      "Munagaku Pulihora is a wholesome variation of Andhra’s iconic tamarind rice, enriched with drumstick leaves grown in the fertile Godavari belt. In Papikondalu villages, moringa leaves are valued for their nutrition and availability throughout the year. This dish combines tangy tamarind with earthy greens, creating a balanced meal suited for river journeys and temple offerings alike.",
  },
  {
    name: "Jonna Rotte & Ambali - Papikondalu Style",
    state: "andhra-pradesh",
    id: "papikondalu",
    destination: "Papikondalu",
    description:
      "A traditional millet-based meal featuring sorghum flatbread paired with spicy chutney and fermented millet porridge.",
    image: jonnarottiImage,
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "Serves 3",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "Jowar (sorghum) flour",
      "Ragi flour",
      "Water",
      "Salt",
      "Forest-grown green chillies",
      "Garlic",
      "Curd (for ambali fermentation)",
    ],
    steps: [
      "Mix jowar flour with warm water and salt to form soft dough.",
      "Shape into flat discs and pat gently.",
      "Cook on hot tawa until both sides are done.",
      "For ambali, mix ragi flour with water and cook into thin porridge.",
      "Allow to cool and ferment overnight with a spoon of curd.",
      "Add salt and dilute slightly before serving.",
      "Grind green chillies and garlic into spicy chutney.",
      "Serve jonna rotte with chutney and chilled ambali.",
    ],
    story:
      "Jonna Rotte and Ambali form the backbone of tribal food traditions in Papikondalu. Millets like jowar and ragi thrive in the forested terrain and provide sustained energy. Ambali, a lightly fermented millet drink, keeps the body cool and hydrated in humid conditions. Together, this simple meal reflects climate-adaptive nutrition and the self-sufficient lifestyle of river-belt communities.",
  },
  {
    name: "Sarva Pindi - Nallamala Style",
    state: "andhra-pradesh",
    id: "srisailam",
    destination: "Srisailam – Nallamala Forest",
    description:
      "A crispy spiced rice flour flatbread cooked slowly on an iron pan, popular in forest-fringe villages.",
    image: sarvaPindiImage,
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "Rice flour",
      "Chopped onions",
      "Green chillies",
      "Cumin seeds",
      "Curry leaves",
      "Peanuts",
      "Salt",
      "Oil",
    ],
    steps: [
      "Mix rice flour with chopped onions, chillies, cumin and salt.",
      "Add water gradually to form soft dough.",
      "Grease an iron pan lightly with oil.",
      "Press dough evenly into thick round shape on pan.",
      "Make small holes on surface for oil.",
      "Drizzle oil into holes and around edges.",
      "Cook on low flame until golden and crisp.",
      "Flip carefully and cook other side.",
      "Serve hot.",
    ],
    story:
      "Sarva Pindi is a traditional forest-region flatbread prepared in Nallamala villages. Made using rice flour and simple spices, it is cooked slowly over iron pans to achieve crisp edges. This filling dish provides long-lasting energy for agricultural and forest work, reflecting the rustic, practical food culture of the region.",
  },
  {
    name: "Makka Jonna Gatka - Srisailam Style",
    state: "andhra-pradesh",
    id: "srisailam",
    destination: "Srisailam – Nallamala Forest",
    description:
      "A simple maize-based porridge prepared in forest villages for hydration and sustained energy.",
    image: jonnaGatkaImage,
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "Serves 3",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "Maize flour (makka jonna)",
      "Water",
      "Salt",
      "Buttermilk (optional)",
    ],
    steps: [
      "Boil water in a thick-bottomed pot.",
      "Add salt and stir.",
      "Slowly add maize flour while stirring continuously.",
      "Cook on low flame until thick and smooth.",
      "Stir continuously to avoid lumps.",
      "Cook until mixture leaves sides of pot.",
      "Serve hot or allow to cool slightly.",
      "Add buttermilk for summer consumption.",
    ],
    story:
      "Makka Jonna Gatka is a staple in Nallamala’s forest settlements. Made from maize flour, it is easy to prepare and highly sustaining. During hot summers near Srisailam, the dish is often paired with buttermilk for hydration. This simple preparation reflects the region’s climate-adaptive and agrarian lifestyle.",
  },
  {
    name: "Chintha Chepala Iguru - Nellore Style",
    state: "andhra-pradesh",
    id: "nellore",
    destination: "Nellore",
    description:
      "A bold and tangy tamarind-based fish curry known for its rich spice and deep coastal flavor.",
    image: cheppalairuguImage,
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "Serves 4",
    difficulty: "Medium",
    season: "All Year",
    ingredients: [
      "Fresh fish pieces",
      "Tamarind pulp",
      "Onions",
      "Green chillies",
      "Turmeric",
      "Red chilli powder",
      "Garlic",
      "Salt",
      "Oil",
    ],
    steps: [
      "Clean fish pieces gently and keep aside.",
      "Heat oil and sauté onions and garlic.",
      "Add turmeric and chilli powder.",
      "Pour tamarind pulp and bring to boil.",
      "Add fish pieces carefully.",
      "Cook on low flame without stirring too much.",
      "Simmer until gravy thickens.",
      "Rest before serving for enhanced flavor.",
    ],
    story:
      "Chintha Chepala Iguru is a signature fish curry of Nellore, known for its fiery spice and tangy tamarind base. Located near the coast and Penna River, Nellore is famous for its fresh seafood. This curry reflects the bold Andhra palate and remains a staple in coastal households throughout the year.",
  },
  {
    name: "Neyyi Karam Dosa - Nellore",
    state: "andhra-pradesh",
    id: "nellore",
    destination: "Nellore",
    description:
      "A crispy dosa generously spread with spicy karam powder and finished with ghee.",
    image: neyyikaramDosaImage,
    prepTime: "8 hours fermentation",
    cookTime: "10 mins",
    servings: "Serves 3",
    difficulty: "Medium",
    season: "All Year",
    ingredients: ["Dosa batter", "Karam podi (spice powder)", "Ghee", "Salt"],
    steps: [
      "Prepare dosa batter through fermentation.",
      "Heat tawa and pour thin layer of batter.",
      "Spread evenly in circular motion.",
      "Sprinkle karam podi evenly on top.",
      "Drizzle generous ghee around edges.",
      "Cook until crisp and golden.",
      "Fold and serve hot.",
    ],
    story:
      "Neyyi Karam Dosa is a beloved breakfast in Nellore, combining crisp dosa with spicy karam powder and aromatic ghee. The bold spice reflects Rayalaseema influence, while the ghee adds richness. This simple yet flavorful dish showcases Nellore’s love for heat-balanced, satisfying morning meals.",
  },
  {
    name: "Pindi Miriyam - Nellore Style",
    state: "andhra-pradesh",
    id: "nellore",
    destination: "Nellore",
    description:
      "A pepper-spiced rice flour snack prepared traditionally in Nellore households.",
    image: pindiMiriamImage,
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "Serves 4",
    difficulty: "Easy",
    season: "All Year",
    ingredients: [
      "Rice flour",
      "Crushed black pepper",
      "Cumin seeds",
      "Salt",
      "Water",
      "Oil",
    ],
    steps: [
      "Mix rice flour with pepper, cumin and salt.",
      "Add water gradually to form dough.",
      "Shape into small rounds or discs.",
      "Heat oil in a deep pan.",
      "Fry pieces until golden and crisp.",
      "Drain excess oil.",
      "Cool and store in airtight container.",
    ],
    story:
      "Pindi Miriyam is a traditional pepper-flavored snack from Nellore, often prepared during winter and festive gatherings. The warmth of black pepper balances the region’s humid climate. Simple ingredients and bold flavor define this rustic snack, reflecting Andhra’s time-tested culinary traditions.",
  },
  {
    id: "anantapur",
    name: "Ragi Sangati with Natukodi Pulusu",
    state: "andhra-pradesh",
    destination: "Anantapur",
    description:
      "A traditional Rayalaseema meal made with soft ragi balls served alongside spicy country chicken curry.",
    image: rayaRagiImage,

    prepTime: "15 mins",
    cookTime: "45 mins",
    servings: "4",
    difficulty: "Medium",

    ingredients: [
      "1 cup ragi flour",
      "½ cup rice",
      "Country chicken pieces",
      "2 onions (chopped)",
      "2 tomatoes",
      "2 tbsp ginger garlic paste",
      "2 tsp red chili powder",
      "1 tsp turmeric",
      "Curry leaves",
      "Whole spices (cloves, cinnamon)",
      "Oil",
      "Salt",
    ],

    steps: [
      "Cook rice in water until soft.",
      "Add ragi flour gradually and mix continuously to form a thick dough.",
      "Shape the mixture into soft balls (Sangati).",
      "Heat oil in a pan and sauté onions, ginger garlic paste, and whole spices.",
      "Add chicken pieces and cook until browned.",
      "Add tomatoes, turmeric, chili powder, and salt.",
      "Pour water and simmer until the chicken is tender.",
      "Serve hot ragi sangati with natukodi pulusu.",
    ],

    story:
      "Ragi Sangati is the staple food of Rayalaseema farmers. Rich in calcium and energy, it helped agricultural workers sustain long hours in the dry fields of Anantapur.",
    season: "All Year",
  },
  {
    id: "anantapur",
    name: "Rayalaseema Groundnut Chutney",
    state: "andhra-pradesh",
    destination: "Anantapur",
    description:
      "A creamy and spicy chutney made from roasted peanuts, commonly served with dosa, idli, or ragi sangati.",
    image: rayaGroundChutney,

    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: "4",
    difficulty: "Easy",

    ingredients: [
      "1 cup roasted groundnuts",
      "3 dried red chilies",
      "2 garlic cloves",
      "Small piece tamarind",
      "Salt",
      "Water",
      "1 tsp mustard seeds",
      "Curry leaves",
      "1 tbsp oil",
    ],

    steps: [
      "Roast groundnuts until aromatic.",
      "Grind groundnuts, red chilies, garlic, tamarind, salt, and water into a smooth paste.",
      "Heat oil in a small pan and add mustard seeds.",
      "Once they splutter, add curry leaves.",
      "Pour the tempering over the chutney.",
      "Serve with dosa, idli, or rice.",
    ],

    story:
      "Groundnuts are the backbone crop of Anantapur's drylands. This chutney evolved as a simple protein-rich accompaniment for farmers' meals.",
    season: "All Year",
  },
  {
    id: "anantapur",
    name: "Rayalaseema Mirapakaya Bajji",
    state: "andhra-pradesh",
    destination: "Anantapur",
    description:
      "A spicy street snack made with large green chilies coated in gram flour batter and deep fried.",
    image: rayaMirchibajji,

    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "4",
    difficulty: "Easy",

    ingredients: [
      "8 large green chilies",
      "1 cup gram flour (besan)",
      "2 tbsp rice flour",
      "1 tsp chili powder",
      "½ tsp turmeric",
      "Salt",
      "Water",
      "Oil for frying",
    ],

    steps: [
      "Slit the green chilies and remove seeds if desired.",
      "Mix gram flour, rice flour, chili powder, turmeric, salt, and water to make a thick batter.",
      "Dip each chili into the batter.",
      "Deep fry in hot oil until golden and crisp.",
      "Serve hot with chopped onions and lemon.",
    ],

    story:
      "Mirapakaya Bajji is a beloved evening snack across Rayalaseema towns, where roadside stalls serve it fresh during cooler evenings.",
    season: "Winter",
  },
  {
    id: "machilipatnam",
    name: "Bandar Halwa",
    state: "andhra-pradesh",
    destination: "Machilipatnam",
    description:
      "A traditional wheat-based halwa known for its glossy texture and rich ghee flavor.",
    image: bandarHalwa,

    prepTime: "8 hours",
    cookTime: "45 mins",
    servings: "6",
    difficulty: "Hard",

    ingredients: [
      "1 cup wheat flour",
      "2 cups sugar",
      "½ cup ghee",
      "Cashews",
      "Cardamom powder",
      "Water",
    ],

    steps: [
      "Soak wheat flour overnight and extract wheat milk.",
      "Strain the liquid to remove solids.",
      "Heat the mixture in a thick pan.",
      "Add sugar and cook while stirring continuously.",
      "Add ghee gradually until the halwa thickens.",
      "Add cashews and cardamom.",
      "Cook until glossy and non-sticky.",
      "Serve warm.",
    ],

    story:
      "Bandar Halwa was once a specialty sweet sold in traditional sweet shops of Machilipatnam but gradually lost popularity to Bandar Laddu.",
    season: "All Year",
  },
  {
    id: "machilipatnam",
    name: "Royyala Pachadi (Coastal Prawn Pickle)",
    state: "andhra-pradesh",
    destination: "Machilipatnam",
    description:
      "A fiery coastal Andhra pickle made with prawns preserved in red chili, garlic, and aromatic spices. Popular in Machilipatnam’s fishing communities, it is served as a bold accompaniment with hot rice and ghee.",
    image: RoyyalaPacchadi,

    prepTime: "20 mins",
    cookTime: "25 mins",
    servings: "6",
    difficulty: "Medium",

    ingredients: [
      "500 g fresh prawns (cleaned and deveined)",
      "6–8 garlic cloves",
      "2 tbsp ginger garlic paste",
      "3 tbsp red chili powder",
      "1 tsp turmeric powder",
      "1 tsp fenugreek powder",
      "1 tbsp mustard seeds",
      "2 tbsp lemon juice or tamarind pulp",
      "1 cup gingelly oil (sesame oil)",
      "Salt to taste",
      "Curry leaves",
    ],

    steps: [
      "Clean and devein the prawns thoroughly and pat them dry.",
      "Heat a pan and fry the prawns lightly in a little oil until they release moisture and become slightly firm.",
      "Remove and keep them aside to cool.",
      "In another pan heat sesame oil and add mustard seeds and curry leaves.",
      "Add ginger garlic paste and sauté until fragrant.",
      "Add turmeric, chili powder, fenugreek powder, and salt.",
      "Mix in the fried prawns and cook on low heat for 5–7 minutes.",
      "Add lemon juice or tamarind pulp and stir well.",
      "Allow the mixture to cool and store in a clean airtight glass jar.",
      "The pickle develops deeper flavor after resting for a day.",
    ],

    story:
      "Royyala Pachadi reflects the coastal food traditions of Machilipatnam, where fishermen preserve fresh prawns using oil, chili, and spices so that seafood can be enjoyed even when the catch is scarce. The pickle is known for its intense flavor and long shelf life.",

    season: "All Year",
  },
];

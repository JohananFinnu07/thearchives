import arakuImage from "@/assets/araku-card.jpg";
import lambasingiImage from "@/assets/lambasingi-card.jpg";
import vanajangiImage from "@/assets/vanajangi-card.jpg";
import paderuImage from "@/assets/paderu-card.jpg";
import maredumilliImage from "@/assets/maredumilli-card.jpg";

// Product images
import arakuCoffeeImage from "@/assets/products/araku-coffee-beans.jpg";
import tribalBambooCraftImage from "@/assets/products/tribal-bamboo-craft.jpg";
import wildTurmericImage from "@/assets/products/wild-turmeric.jpg";
import blackPepperImage from "@/assets/products/black-pepper.jpg";
import wildHoneyImage from "@/assets/products/wild-honey.jpg";
import forestStrawberriesImage from "@/assets/products/forest-strawberries.jpg";
import tribalShawlImage from "@/assets/products/tribal-shawl.jpg";
import hillRiceImage from "@/assets/products/hill-rice.jpg";
import dhokraArtImage from "@/assets/products/dhokra-art.jpg";
import bambooChickenImage from "@/assets/products/bamboo-chicken.jpg";
import marketSpicesImage from "@/assets/products/market-spices.jpg";
import silkCocoonsImage from "@/assets/products/silk-cocoons.jpg";
import jackfruitChipsImage from "@/assets/products/jackfruit-chips.jpg";
import mahuaFlowersImage from "@/assets/products/mahua-flowers.jpg";
import palmWineImage from "@/assets/products/palm-wine.jpg";
import meadowHerbsImage from "@/assets/products/meadow-herbs.jpg";

export interface Product {
  name: string;
  type: "famous" | "underrated";
  description: string;
  significance: string;
  makingProcess: string;
  uses: string[];
  image?: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  heroDescription: string;
  elevation: string;
  bestTime: string;
  temperature: string;
  about: string;
  products: Product[];
}

export const destinations: Destination[] = [
  {
    id: "araku-valley",
    name: "Araku Valley",
    tagline: "Coffee Haven in the Hills",
    image: arakuImage,
    heroDescription:
      "A stunning hill station nestled in the Eastern Ghats, famous for its organic coffee plantations and tribal heritage.",
    elevation: "1,300m",
    bestTime: "October - February",
    temperature: "15°C - 28°C",
    about:
      "Araku Valley is a picturesque hill station located about 115 km from Visakhapatnam. This verdant valley is home to various indigenous tribes who have preserved their unique culture and traditions for centuries. The valley is renowned for its coffee plantations, bamboo forests, and the famous Borra Caves.",
    products: [
      {
        name: "Araku Valley Coffee",
        type: "famous",
        description:
          "Internationally acclaimed organic Arabica coffee grown at high altitudes by tribal farmers using traditional methods.",
        significance:
          "Araku coffee has won the prestigious Prix Epicures Or award in Paris. It's one of the finest organic coffees in the world, grown without pesticides or chemicals in the shade of silver oak and jackfruit trees.",
        makingProcess:
          "The coffee cherries are hand-picked when perfectly ripe, then sun-dried on bamboo mats for 15-20 days. The dried beans are hulled using traditional methods, sorted by hand, and roasted in small batches. The entire process from cherry to cup takes about 4-6 weeks.",
        uses: [
          "Morning brew",
          "Filter coffee",
          "Espresso",
          "Cold brew",
          "Coffee-based desserts",
        ],
        image: arakuCoffeeImage,
      },
      {
        name: "Tribal Bamboo Craft",
        type: "famous",
        description:
          "Intricate handwoven baskets, furniture, and decorative items made from locally sourced bamboo.",
        significance:
          "These crafts represent centuries of tribal artisanship passed down through generations. Each piece tells a story of the forest and the community's deep connection with nature.",
        makingProcess:
          "Mature bamboo is harvested during winter when moisture content is lowest. It's treated with lime water to prevent insect attack, then split into thin strips. Artisans weave these strips using traditional patterns unique to each tribe, taking 3-15 days per piece depending on complexity.",
        uses: [
          "Home décor",
          "Storage containers",
          "Furniture",
          "Kitchen utilities",
          "Gift items",
        ],
        image: tribalBambooCraftImage,
      },
      {
        name: "Wild Turmeric (Kasturi Manjal)",
        type: "underrated",
        description:
          "A rare variety of turmeric found in the forests of Araku, known for its exceptional fragrance and potency.",
        significance:
          "Unlike regular turmeric, wild turmeric has a distinct camphor-like aroma and is considered more potent for medicinal and cosmetic use. Tribal communities have used it for centuries in rituals and healing.",
        makingProcess:
          "The rhizomes are carefully dug out from forest floors during spring. They're washed, boiled for 45 minutes, sun-dried for 10-15 days, and then ground using stone mills. The powder retains its aromatic properties for up to 2 years.",
        uses: [
          "Face packs",
          "Ayurvedic medicine",
          "Religious ceremonies",
          "Natural antiseptic",
          "Skin brightening",
        ],
        image: wildTurmericImage,
      },
      {
        name: "Konda Reddi Palm Wine",
        type: "underrated",
        description:
          "Traditional fermented drink made from sago palm sap, unique to the Konda Reddi tribe.",
        significance:
          "This natural beverage is central to tribal ceremonies and social gatherings. It's rich in probiotics and was traditionally consumed for its digestive benefits.",
        makingProcess:
          "Sap is collected at dawn from incisions made in palm flowers using clay pots. The fresh sap (sweet neera) ferments naturally within hours due to wild yeasts. It's consumed the same day or within 24 hours while still mildly alcoholic.",
        uses: [
          "Traditional ceremonies",
          "Social gatherings",
          "Digestive aid",
          "Natural probiotic drink",
        ],
        image: palmWineImage,
      },
      {
        name: "Araku Black Pepper",
        type: "underrated",
        description:
          "Organic black pepper grown in the shade of coffee plantations, prized for its exceptional aroma and heat.",
        significance:
          "Grown alongside coffee plants, Araku black pepper benefits from the same ideal growing conditions. The pepper has higher essential oil content due to the slow ripening in cool mountain air, making it sought after by gourmet chefs.",
        makingProcess:
          "Pepper vines are trained to climb silver oak trees in coffee plantations. Berries are harvested when they begin turning red, then sun-dried on bamboo mats for 5-7 days until they shrivel and blacken. Hand-sorted to remove imperfect corns.",
        uses: [
          "Gourmet cooking",
          "Ayurvedic medicine",
          "Digestive remedy",
          "Meat preservation",
          "Spice blends",
        ],
        image: blackPepperImage,
      },
      {
        name: "Bodeng Purugu",
        type: "underrated",
        description:
          "It is a rare tribal food found inside Eetha Dumpa in the forests of Araku valley.",
        significance:
          "Grown alongside coffee plants, Araku black pepper benefits from the same ideal growing conditions. The pepper has higher essential oil content due to the slow ripening in cool mountain air, making it sought after by gourmet chefs.",
        makingProcess:
          "Pepper vines are trained to climb silver oak trees in coffee plantations. Berries are harvested when they begin turning red, then sun-dried on bamboo mats for 5-7 days until they shrivel and blacken. Hand-sorted to remove imperfect corns.",
        uses: [
          "Gourmet cooking",
          "Ayurvedic medicine",
          "Digestive remedy",
          "Meat preservation",
          "Spice blends",
        ],
        image: blackPepperImage,
      },
    ],
  },
  {
    id: "lambasingi",
    name: "Lambasingi",
    tagline: "Kashmir of Andhra",
    image: lambasingiImage,
    heroDescription:
      "Known as the only place in South India where temperature drops below freezing, Lambasingi offers misty mornings and pepper plantations.",
    elevation: "1,000m",
    bestTime: "November - January",
    temperature: "0°C - 20°C",
    about:
      'Lambasingi, often called the "Kashmir of Andhra Pradesh," is a small village in the Chintapalli mandal. It\'s the only place in South India that experiences sub-zero temperatures, with frost covering the fields during winter mornings. The village is surrounded by dense forests and pepper plantations.',
    products: [
      {
        name: "Lambasingi Black Pepper",
        type: "famous",
        description:
          "Premium quality black pepper grown in the cool, misty climate of Lambasingi, known for its exceptional pungency and aroma.",
        significance:
          "The unique microclimate with heavy mist and cold temperatures produces pepper with higher piperine content, making it more flavorful and medicinally potent than lowland varieties.",
        makingProcess:
          "Pepper vines climb on silver oak trees for 3-4 years before first harvest. Green berries are hand-picked when they turn yellow-red, then sun-dried on bamboo mats for 7-10 days until they shrivel and turn black. No artificial processing is used.",
        uses: [
          "Culinary spice",
          "Ayurvedic medicine",
          "Natural preservative",
          "Digestive aid",
          "Cold remedies",
        ],
        image: blackPepperImage,
      },
      {
        name: "Forest Strawberries",
        type: "famous",
        description:
          "Small, intensely flavored wild strawberries that grow naturally in the cold forests around Lambasingi.",
        significance:
          "These strawberries are unique to the region's cold climate and are smaller but much more flavorful than cultivated varieties. Locals consider them a seasonal delicacy available only in winter.",
        makingProcess:
          "Wild strawberries are hand-foraged from forest clearings during December-February. They're too delicate to store, so they're sold fresh within hours of picking. Some are sun-dried for use in traditional medicine.",
        uses: [
          "Fresh consumption",
          "Jams and preserves",
          "Traditional medicine",
          "Natural sweetener",
        ],
        image: forestStrawberriesImage,
      },
      {
        name: "Konda Dora Tribal Shawls",
        type: "underrated",
        description:
          "Handwoven woolen shawls made by the Konda Dora tribe using traditional backstrap looms.",
        significance:
          "These shawls are woven using techniques unchanged for centuries. The geometric patterns represent tribal stories and natural elements. They're essential for surviving Lambasingi's cold winters.",
        makingProcess:
          "Wool is carded and spun by hand using spindles. Natural dyes from forest plants create colors. Women weave on backstrap looms, taking 2-4 weeks per shawl. Each pattern is memorized, not documented.",
        uses: [
          "Winter wear",
          "Ceremonial clothing",
          "Gifting",
          "Home décor",
          "Cultural preservation",
        ],
        image: tribalShawlImage,
      },
      {
        name: "Misty Mountain Honey",
        type: "underrated",
        description:
          "Rare multifloral honey collected from wild bee colonies in the fog-shrouded forests.",
        significance:
          "The bees forage on rare medicinal flowers found only in Lambasingi's ecosystem. The honey has a distinctive taste and is believed to have superior medicinal properties.",
        makingProcess:
          "Traditional honey hunters climb trees to locate wild hives during spring. Smoke from specific leaves calms bees. Only 60% of honey is taken, leaving enough for the colony. The honey is strained through cloth and stored in clay pots.",
        uses: [
          "Natural sweetener",
          "Cough remedy",
          "Wound healing",
          "Ayurvedic medicine",
          "Skin care",
        ],
        image: wildHoneyImage,
      },
    ],
  },
  {
    id: "vanajangi",
    name: "Vanajangi",
    tagline: "Meadows Above the Clouds",
    image: vanajangiImage,
    heroDescription:
      "An untouched paradise featuring vast grassland meadows that appear to float above the clouds during misty mornings.",
    elevation: "1,100m",
    bestTime: "September - February",
    temperature: "12°C - 26°C",
    about:
      "Vanajangi is a hidden gem that offers breathtaking views of endless meadows surrounded by dense forests. The village sits at the edge of vast grasslands that seem to merge with the sky during foggy mornings, creating a surreal landscape that attracts photographers and nature lovers.",
    products: [
      {
        name: "Vanajangi Grass Honey",
        type: "famous",
        description:
          "Light-colored, mild honey produced by bees that forage primarily on the flowering grasses of the meadows.",
        significance:
          "This honey is distinctively light in color and flavor compared to forest honey. The unique meadow ecosystem produces honey with subtle floral notes not found elsewhere.",
        makingProcess:
          "Local beekeepers maintain traditional log hives at meadow edges. Honey is harvested twice yearly - post-monsoon and spring. Comb is cut carefully, crushed gently, and strained through muslin. No heat processing preserves enzymes.",
        uses: [
          "Tea sweetener",
          "Children's remedy",
          "Face masks",
          "Energy drink",
          "Traditional medicine",
        ],
        image: wildHoneyImage,
      },
      {
        name: "Organic Hill Rice",
        type: "famous",
        description:
          "Traditional red rice varieties grown on terraced hillsides using ancient farming methods.",
        significance:
          "These indigenous rice varieties are highly nutritious and adapted to the local ecosystem. They require no fertilizers and are grown sustainably by tribal communities for generations.",
        makingProcess:
          "Seeds saved from previous harvest are planted with onset of monsoon. No transplanting - direct sowing into terraces. Harvest is manual, grains are sun-dried, and hulled using stone mills or wooden pounders to retain the red bran layer.",
        uses: [
          "Daily staple",
          "Traditional porridge",
          "Rice flour products",
          "Fermented beverages",
          "Ritual offerings",
        ],
        image: hillRiceImage,
      },
      {
        name: "Silkworm Cocoons",
        type: "underrated",
        description:
          "Wild eri and tasar silkworms are collected from forest trees, producing unique non-violent silk.",
        significance:
          'Unlike commercial silk, this "ahimsa silk" is harvested after the moth emerges naturally. It\'s rougher but highly valued for its ethical production and natural golden color.',
        makingProcess:
          "Wild cocoons are collected from sal and asan trees after moths emerge. Empty cocoons are degummed by boiling in ash water, then hand-reeled using simple spindles. Thread is woven on pit looms into textured fabric.",
        uses: [
          "Traditional sarees",
          "Scarves",
          "Shawls",
          "Home textiles",
          "Eco-fashion",
        ],
        image: silkCocoonsImage,
      },
      {
        name: "Meadow Herbs Collection",
        type: "underrated",
        description:
          "Dried medicinal herbs foraged from Vanajangi's unique grassland ecosystem.",
        significance:
          "The meadows host medicinal plants found nowhere else in the region. Tribal healers have catalogued over 100 species used for various ailments.",
        makingProcess:
          "Herbs are collected during specific lunar phases believed to maximize potency. They're shade-dried to preserve volatile compounds, then stored in bamboo containers. Knowledge of preparation is passed orally through generations.",
        uses: [
          "Herbal teas",
          "Poultices",
          "Digestive remedies",
          "Fever treatment",
          "Joint pain relief",
        ],
        image: meadowHerbsImage,
      },
    ],
  },
  {
    id: "paderu",
    name: "Paderu",
    tagline: "Tribal Heritage Gateway",
    image: paderuImage,
    heroDescription:
      "The commercial hub of the Eastern Ghats tribal region, known for its weekly markets and rich tribal culture.",
    elevation: "900m",
    bestTime: "October - March",
    temperature: "15°C - 30°C",
    about:
      "Paderu serves as the administrative headquarters and commercial hub for the surrounding tribal villages. The town is famous for its weekly tribal markets where indigenous communities gather to trade their produce. It's surrounded by coffee plantations and serves as a gateway to explore the tribal heartland.",
    products: [
      {
        name: "Paderu Weekly Market Spices",
        type: "famous",
        description:
          "A variety of organic spices including dried chilies, cinnamon, and cardamom traded in the famous Saturday market.",
        significance:
          "The weekly market is where tribes from dozens of villages converge to trade. Spices here are grown in small forest gardens without chemicals, using ancient agricultural wisdom.",
        makingProcess:
          "Each spice follows traditional processing - chilies are sun-dried for weeks, cinnamon bark is peeled and rolled by hand, cardamom pods are dried in bamboo baskets over gentle heat. All sold in traditional leaf wrappings.",
        uses: [
          "Daily cooking",
          "Pickling",
          "Medicinal preparations",
          "Aromatic uses",
          "Traditional ceremonies",
        ],
        image: marketSpicesImage,
      },
      {
        name: "Tribal Dhokra Art",
        type: "famous",
        description:
          "Ancient lost-wax metal casting technique producing unique brass figurines and jewelry.",
        significance:
          "Dhokra is one of the oldest metal crafting techniques in the world, dating back 4,500 years. Each piece is one-of-a-kind as the mold is destroyed in the casting process.",
        makingProcess:
          "A clay core is covered with beeswax threads to form the design. This is coated with clay and heated - wax melts out, creating a mold. Molten brass is poured in, cooled, and clay broken away to reveal the unique piece.",
        uses: [
          "Religious icons",
          "Jewelry",
          "Home décor",
          "Collectibles",
          "Gifts",
        ],
        image: dhokraArtImage,
      },
      {
        name: "Jack Fruit Chips & Products",
        type: "underrated",
        description:
          "Dried jackfruit chips and preserves made from the abundant jackfruit trees of the region.",
        significance:
          "While jackfruit is common, the tribal preparation methods create unique flavors. The chips provide income during the fruiting season and nutrition year-round.",
        makingProcess:
          "Ripe jackfruit bulbs are separated, deseeded, sliced thin, and sun-dried for 3-4 days. Some are lightly salted or spiced before drying. Unripe jackfruit is similarly prepared for savory chips.",
        uses: [
          "Healthy snacking",
          "Cooking ingredient",
          "Travel food",
          "Export product",
          "Natural sweetener",
        ],
        image: jackfruitChipsImage,
      },
      {
        name: "Forest Mahua Flowers",
        type: "underrated",
        description:
          "Dried flowers of the Mahua tree, sacred to tribal communities and used for various purposes.",
        significance:
          "The Mahua tree is considered sacred and provides food security during lean seasons. Flowers are a traditional sweetener and important income source for forest-dwelling communities.",
        makingProcess:
          "Flowers fall naturally in early summer and are collected before dawn while still moist. They're spread on clean ground to sun-dry for 4-5 days, turning regularly. Dried flowers are stored in breathable sacks for year-round use.",
        uses: [
          "Traditional liquor",
          "Natural sweetener",
          "Medicine",
          "Cooking oil (from seeds)",
          "Animal feed",
        ],
        image: mahuaFlowersImage,
      },
    ],
  },
  {
    id: "maredumilli",
    name: "Maredumilli",
    tagline: "Eco-Tourism Paradise",
    image: maredumilliImage,
    heroDescription:
      "A pristine forest destination in the heart of the Eastern Ghats, renowned for its eco-tourism initiatives and rich biodiversity.",
    elevation: "500m",
    bestTime: "October - March",
    temperature: "18°C - 32°C",
    about:
      "Maredumilli is a biodiversity hotspot located in the East Godavari district, surrounded by dense deciduous forests. Known as one of the best eco-tourism destinations, it offers trekking trails, waterfalls, and an immersive experience of tribal life. The area is home to the Koya and Konda Reddi tribes who have lived in harmony with the forests for centuries.",
    products: [
      {
        name: "Wild Forest Honey",
        type: "famous",
        description:
          "Pure, unprocessed honey harvested from wild bee colonies deep within the Maredumilli forests by tribal honey hunters.",
        significance:
          "Maredumilli wild honey is considered among the purest in India due to the untouched forest ecosystem. The bees forage on diverse medicinal plants, giving the honey unique therapeutic properties. It supports the livelihood of forest-dwelling communities.",
        makingProcess:
          "Skilled tribal honey hunters identify wild hives in ancient trees. Using smoke from forest herbs to calm bees, they climb using traditional rope techniques. Honeycomb is carefully extracted, leaving enough for the colony. The honey is strained through muslin and stored in earthen pots.",
        uses: [
          "Natural medicine",
          "Immunity booster",
          "Wound healing",
          "Ayurvedic preparations",
          "Premium sweetener",
        ],
        image: wildHoneyImage,
      },
      {
        name: "Bamboo Chicken",
        type: "famous",
        description:
          "Iconic tribal dish where chicken is slow-cooked inside fresh bamboo stems over an open fire, infusing it with a unique smoky flavor.",
        significance:
          "This ancient cooking technique is unique to the tribal regions of Andhra Pradesh. The bamboo imparts a distinctive flavor and keeps the meat incredibly tender. It has become synonymous with Maredumilli tourism.",
        makingProcess:
          "Fresh green bamboo stems are cut and one end is sealed naturally. Marinated chicken with tribal spices is stuffed inside and the open end is sealed with leaves. The bamboo is placed over slow-burning coals for 2-3 hours, rotating regularly.",
        uses: [
          "Traditional cuisine",
          "Tourist attraction",
          "Special occasions",
          "Cultural experience",
        ],
        image: bambooChickenImage,
      },
      {
        name: "Koya Tribal Jewelry",
        type: "underrated",
        description:
          "Handcrafted beaded jewelry and metal ornaments made by Koya women using traditional techniques.",
        significance:
          "Each piece of jewelry tells a story of the wearer's clan, marital status, and social position. The designs have remained unchanged for centuries and are an important cultural identifier.",
        makingProcess:
          "Beads are strung on natural fiber threads in specific patterns taught from mother to daughter. Metal pieces are hammered and shaped using simple tools. Some incorporate forest seeds, shells, and animal teeth.",
        uses: [
          "Ceremonial wear",
          "Daily adornment",
          "Gifting",
          "Cultural identity",
          "Collector items",
        ],
        image: dhokraArtImage,
      },
      {
        name: "Forest Turmeric",
        type: "underrated",
        description:
          "Potent wild turmeric harvested from the forest floors of Maredumilli, known for high curcumin content.",
        significance:
          "Forest turmeric from Maredumilli has been tested to contain significantly higher curcumin levels than cultivated varieties. It's been used by tribal healers for centuries for its powerful anti-inflammatory properties.",
        makingProcess:
          "Rhizomes are dug from forest soils during the dry season. They're cleaned, boiled in large pots for hours, then sun-dried on raised platforms. The dried fingers are ground in stone mills to preserve medicinal properties.",
        uses: [
          "Traditional medicine",
          "Cooking spice",
          "Beauty treatments",
          "Religious rituals",
          "Natural dye",
        ],
        image: wildTurmericImage,
      },
    ],
  },
];

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find((dest) => dest.id === id);
};

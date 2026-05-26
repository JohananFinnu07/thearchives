import { Place } from "../types";

/* ============== AUROVILLE ================== */
import matrimandir from "@/assets/Pondi/Places/AM.jpg";
import aurovilleVisitorCentre from "@/assets/Pondi/Places/AVC.jpg";
import sadhanaForest from "@/assets/Pondi/Places/SF.jpg";

/* ============== SERENITY BEACH ================== */
import kottakuppamBeachRoad from "@/assets/Pondi/Places/KBR.jpg";
import auroBeach from "@/assets/Pondi/Places/AB.jpg";
import serenitySurfSchool from "@/assets/Pondi/Places/SSS.jpg";

/* ============== OUSTERI LAKE ================== */
import ousteriBirdSanctuary from "@/assets/Pondi/Places/OBS.jpg";
import bahourLake from "@/assets/Pondi/Places/BL.jpg";

/* ============== PARADISE BEACH ================== */
import chunnambarBoatHouse from "@/assets/Pondi/Places/CBH.jpg";
import veerampattinamBeach from "@/assets/Pondi/Places/VB.jpg";
import arikamedu from "@/assets/Pondi/Places/AR.jpg";

/* ============== WHITE TOWN ================== */
import promenadeBeach from "@/assets/Pondi/Places/PB.jpg";
import sriAurobindoAshram from "@/assets/Pondi/Places/SAA.jpg";
import sacredHeartBasilica from "@/assets/Pondi/Places/SHB.jpg";

export const pondiPlaces: Place[] = [
  {
    destination: "Paradise Beach",
    state: "puducherry",
    name: "Chunnambar Boat House",
    slug: "chunnambar-boat-house",
    type: "nearby-attraction",

    image: chunnambarBoatHouse,

    description:
      "A scenic backwater boating spot that serves as the gateway to Paradise Beach.",

    about:
      "Located along the Chunnambar River, this boat house is the main access point to Paradise Beach. Visitors can enjoy calm backwater rides surrounded by mangroves and lush greenery before reaching the sandy shoreline. The place is popular for family outings, photography, and peaceful boating experiences.",

    distance: "1 km from Paradise Beach",

    highlights: [
      "Backwater boating experience",
      "Scenic mangrove surroundings",
      "Popular picnic and photography spot",
    ],

    bestTime: "October – March",

    travelTips: [
      "Take the government-operated ferry to Paradise Beach.",
      "Visit during morning or sunset hours for pleasant weather.",
      "Carry sunscreen and water during summer visits.",
    ],

    mapsQuery: "Chunnambar Boat House Puducherry",
  },

  {
    destination: "Paradise Beach",
    state: "puducherry",
    name: "Veerampattinam Beach",
    slug: "veerampattinam-beach",
    type: "nearby-attraction",

    image: veerampattinamBeach,

    description:
      "A peaceful coastal village beach known for its fishing culture and calm shoreline.",

    about:
      "Veerampattinam Beach is one of the longest beaches near Puducherry and is closely connected with the local fishing community. The beach offers a quieter atmosphere compared to the tourist-heavy Paradise Beach and is ideal for relaxed evening walks and local cultural experiences.",

    distance: "6 km from Paradise Beach",

    highlights: [
      "Less crowded beach atmosphere",
      "Traditional fishing village nearby",
      "Beautiful sunrise and evening views",
    ],

    bestTime: "November – February",

    travelTips: [
      "Best visited during sunrise or sunset.",
      "Avoid swimming during rough sea conditions.",
      "Try local seafood near the beach area.",
    ],

    mapsQuery: "Veerampattinam Beach Puducherry",
  },

  {
    destination: "Paradise Beach",
    state: "puducherry",
    name: "Arikamedu",
    slug: "arikamedu",
    type: "historical-site",

    image: arikamedu,

    description:
      "An ancient Roman trade settlement featuring archaeological ruins near Puducherry.",

    about:
      "Arikamedu is an important archaeological site that once served as a trading port between Ancient Rome and South India. Excavations uncovered Roman pottery, beads, and structures dating back centuries, making it a fascinating destination for history enthusiasts.",

    distance: "7 km from Paradise Beach",

    highlights: [
      "Ancient Indo-Roman trade history",
      "Archaeological excavation remains",
      "Unique historical significance near Puducherry",
    ],

    bestTime: "October – February",

    travelTips: [
      "Ideal for history and archaeology enthusiasts.",
      "Visit during daytime as facilities are limited.",
      "Combine with Paradise Beach and Chunnambar visit.",
    ],

    mapsQuery: "Arikamedu Puducherry",
  },

  {
    destination: "White Town",
    state: "puducherry",
    name: "Promenade Beach",
    slug: "promenade-beach",
    type: "must-visit",

    image: promenadeBeach,

    description:
      "A lively beachfront promenade famous for colonial charm, cafes, and sea views.",

    about:
      "Promenade Beach stretches along the Bay of Bengal and is one of the most iconic attractions in White Town. Surrounded by French colonial architecture, heritage buildings, and popular cafes, the promenade becomes especially vibrant during evenings.",

    distance: "Within White Town",

    highlights: [
      "Scenic seaside promenade",
      "French colonial atmosphere",
      "Popular cafes and heritage buildings",
    ],

    bestTime: "October – March",

    travelTips: [
      "Best explored during early morning or evening.",
      "Vehicle access is restricted during certain hours.",
      "Perfect for photography and walking tours.",
    ],

    mapsQuery: "Promenade Beach Puducherry",
  },

  {
    destination: "White Town",
    state: "puducherry",
    name: "Sri Aurobindo Ashram",
    slug: "sri-aurobindo-ashram",
    type: "spiritual-site",

    image: sriAurobindoAshram,

    description:
      "A peaceful spiritual center known for meditation and the teachings of Sri Aurobindo.",

    about:
      "Founded in 1926, Sri Aurobindo Ashram is one of Puducherry’s most important spiritual landmarks. Visitors from around the world come here for meditation, silence, and to experience the calm atmosphere created by the teachings of Sri Aurobindo and The Mother.",

    distance: "500 m from White Town center",

    highlights: [
      "Meditation and peaceful environment",
      "Historic spiritual institution",
      "Simple and serene architecture",
    ],

    bestTime: "Year-round",

    travelTips: [
      "Maintain silence inside the premises.",
      "Photography is restricted in certain areas.",
      "Wear modest clothing during your visit.",
    ],

    mapsQuery: "Sri Aurobindo Ashram Puducherry",
  },

  {
    destination: "White Town",
    state: "puducherry",
    name: "Basilica of the Sacred Heart of Jesus",
    slug: "sacred-heart-basilica",
    type: "heritage-site",

    image: sacredHeartBasilica,

    description:
      "A stunning Gothic-style church known for colorful stained glass interiors.",

    about:
      "Built in the early 20th century, the Basilica of the Sacred Heart of Jesus is one of Puducherry’s finest churches. Its Gothic architecture, stained glass panels, and peaceful ambiance attract both pilgrims and architecture lovers.",

    distance: "2 km from White Town",

    highlights: [
      "Beautiful Gothic architecture",
      "Detailed stained glass artwork",
      "One of Puducherry’s major churches",
    ],

    bestTime: "October – February",

    travelTips: [
      "Visit during morning mass for a peaceful experience.",
      "Photography is best during daylight hours.",
      "Combine with White Town heritage walk.",
    ],

    mapsQuery: "Sacred Heart Basilica Puducherry",
  },
  {
    destination: "Auroville",
    state: "puducherry",
    name: "Matrimandir",
    slug: "matrimandir",
    type: "must-visit",

    image: matrimandir,

    description:
      "A golden meditation dome that serves as the spiritual center of Auroville.",

    about:
      "Matrimandir is the iconic centerpiece of Auroville and represents peace, meditation, and human unity. Surrounded by beautifully maintained gardens, the golden spherical structure attracts visitors from across the world seeking silence and reflection. The inner meditation chamber is designed to provide a deeply calming experience.",

    distance: "Within Auroville",

    highlights: [
      "Iconic golden spherical architecture",
      "Meditation and spiritual atmosphere",
      "Beautiful surrounding gardens and pathways",
    ],

    bestTime: "October – March",

    travelTips: [
      "Advance booking may be required for meditation access.",
      "Maintain silence inside meditation areas.",
      "Visit the visitor center before entering.",
    ],

    mapsQuery: "Matrimandir Auroville",
  },

  {
    destination: "Auroville",
    state: "puducherry",
    name: "Auroville Visitor Centre",
    slug: "auroville-visitor-centre",
    type: "nearby-attraction",

    image: aurovilleVisitorCentre,

    description:
      "A cultural and information hub showcasing Auroville’s philosophy, crafts, and community life.",

    about:
      "The Auroville Visitor Centre introduces travelers to the vision and lifestyle of Auroville through exhibitions, handmade products, cafes, and documentary screenings. It acts as the starting point for exploring the township and learning about its sustainable living practices.",

    distance: "500 m from Matrimandir",

    highlights: [
      "Exhibitions about Auroville’s vision",
      "Handmade crafts and organic products",
      "Cafes and cultural experiences",
    ],

    bestTime: "Year-round",

    travelTips: [
      "Spend time exploring local handicraft stores.",
      "Try organic food at the cafes.",
      "Photography restrictions may apply in some areas.",
    ],

    mapsQuery: "Auroville Visitor Centre",
  },

  {
    destination: "Auroville",
    state: "puducherry",
    name: "Sadhana Forest",
    slug: "sadhana-forest",
    type: "eco-tourism",

    image: sadhanaForest,

    description:
      "A sustainable reforestation community promoting eco-living and environmental awareness.",

    about:
      "Sadhana Forest is an internationally recognized environmental initiative near Auroville focused on reforestation and sustainable living. Visitors can participate in eco-activities, learn about water conservation, and experience community-driven sustainability projects.",

    distance: "6 km from Auroville",

    highlights: [
      "Eco-friendly community initiatives",
      "Reforestation and sustainability projects",
      "Volunteer and educational experiences",
    ],

    bestTime: "November – February",

    travelTips: [
      "Ideal for eco-tourism enthusiasts.",
      "Check activity schedules before visiting.",
      "Carry reusable water bottles and eco-friendly items.",
    ],

    mapsQuery: "Sadhana Forest Auroville",
  },

  {
    destination: "Serenity Beach",
    state: "puducherry",
    name: "Kottakuppam Beach Road",
    slug: "kottakuppam-beach-road",
    type: "nearby-attraction",

    image: kottakuppamBeachRoad,

    description:
      "A scenic coastal stretch filled with cafes, surf spots, and ocean views near Serenity Beach.",

    about:
      "The Kottakuppam coastal road near Serenity Beach is popular among travelers for its relaxed vibe, beachside cafes, and surfing culture. The area offers beautiful sea views and is ideal for leisurely rides and sunset walks.",

    distance: "1 km from Serenity Beach",

    highlights: [
      "Beachside cafes and surfing culture",
      "Relaxed coastal atmosphere",
      "Great sunset photography spot",
    ],

    bestTime: "October – March",

    travelTips: [
      "Visit during evenings for pleasant weather.",
      "Try surfing sessions offered nearby.",
      "Explore local cafes along the beach road.",
    ],

    mapsQuery: "Kottakuppam Beach Road Puducherry",
  },

  {
    destination: "Serenity Beach",
    state: "puducherry",
    name: "Auro Beach",
    slug: "auro-beach",
    type: "beach",

    image: auroBeach,

    description:
      "A calm and less crowded beach known for peaceful surroundings and sunrise views.",

    about:
      "Located close to Serenity Beach, Auro Beach offers a quieter seaside experience with gentle waves and scenic surroundings. The beach is favored by visitors looking for a peaceful atmosphere away from busy tourist areas.",

    distance: "3 km from Serenity Beach",

    highlights: [
      "Peaceful and uncrowded beach",
      "Beautiful sunrise views",
      "Ideal for relaxing walks",
    ],

    bestTime: "November – February",

    travelTips: [
      "Best visited during sunrise hours.",
      "Avoid venturing deep into the sea.",
      "Carry essentials as facilities are limited.",
    ],

    mapsQuery: "Auro Beach Puducherry",
  },

  {
    destination: "Serenity Beach",
    state: "puducherry",
    name: "Serenity Surf School",
    slug: "serenity-surf-school",
    type: "activity",

    image: serenitySurfSchool,

    description:
      "A popular surfing school offering beginner-friendly surf lessons along Serenity Beach.",

    about:
      "Serenity Surf School attracts surf enthusiasts from across India and abroad. The beach’s moderate waves make it suitable for beginners, while experienced instructors provide guided surfing lessons and equipment rentals.",

    distance: "Within Serenity Beach",

    highlights: [
      "Beginner-friendly surfing lessons",
      "Popular adventure activity",
      "Beachside training environment",
    ],

    bestTime: "October – February",

    travelTips: [
      "Book surfing sessions in advance during weekends.",
      "Carry extra clothing and sunscreen.",
      "Morning sessions usually have better wave conditions.",
    ],

    mapsQuery: "Serenity Surf School Puducherry",
  },

  {
    destination: "Ousteri Lake",
    state: "puducherry",
    name: "Ousteri Bird Sanctuary",
    slug: "ousteri-bird-sanctuary",
    type: "nature",

    image: ousteriBirdSanctuary,

    description:
      "A protected wetland ecosystem famous for migratory birds and peaceful boating experiences.",

    about:
      "Ousteri Bird Sanctuary is one of the most important freshwater lakes near Puducherry and attracts migratory birds from different parts of Asia and Europe. The serene environment, wetlands, and biodiversity make it a paradise for bird watchers and nature photographers.",

    distance: "Within Ousteri Lake region",

    highlights: [
      "Migratory bird sightings",
      "Scenic wetland ecosystem",
      "Ideal for photography and boating",
    ],

    bestTime: "November – February",

    travelTips: [
      "Carry binoculars for bird watching.",
      "Visit during early morning for better sightings.",
      "Avoid loud noise to preserve the natural habitat.",
    ],

    mapsQuery: "Ousteri Bird Sanctuary Puducherry",
  },

  {
    destination: "Ousteri Lake",
    state: "puducherry",
    name: "Bahour Lake",
    slug: "bahour-lake",
    type: "nearby-attraction",

    image: bahourLake,

    description:
      "A serene freshwater lake surrounded by rural landscapes and bird habitats.",

    about:
      "Bahour Lake is another scenic waterbody near Ousteri that offers tranquil village scenery and seasonal bird activity. The calm environment makes it suitable for short countryside drives and photography.",

    distance: "12 km from Ousteri Lake",

    highlights: [
      "Peaceful rural lake views",
      "Seasonal birdwatching opportunities",
      "Countryside photography location",
    ],

    bestTime: "November – February",

    travelTips: [
      "Best visited during winter months.",
      "Carry snacks and water as facilities are limited.",
      "Avoid visiting late at night due to isolated surroundings.",
    ],

    mapsQuery: "Bahour Lake Puducherry",
  },
];

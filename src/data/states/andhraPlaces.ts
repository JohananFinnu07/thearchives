import { Place } from "../types";

import borracaves from "@/assets/Places/ABC.jpg";
import padmapuramGardens from "@/assets/Places/APG.jpg";
import tribalMuseum from "@/assets/Places/ATM.jpg";
import coffeeMuseum from "@/assets/Places/ACM.jpg";
import chaparaiWaterfalls from "@/assets/Places/ACW.jpg";
import galikondaViewpoint from "@/assets/Places/AGV.jpg";
import anantagiriHills from "@/assets/Places/AAH.jpg";
import sangdaWaterfalls from "@/assets/Places/ASW.jpg";
import natureTrail from "@/assets/Places/ASNT.jpg";
import arakuPinery from "@/assets/Places/AAP.jpg";

export const andhraPlaces: Place[] = [
  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Borra Caves",
    slug: "borra-caves",
    type: "must-visit",

    image: borracaves,

    description:
      "Massive limestone caves filled with spectacular stalactites and stalagmites hidden inside the Eastern Ghats.",

    about:
      "Borra Caves are among the largest limestone caves in India and one of the most famous natural attractions near Araku Valley. Located in the Ananthagiri hills at about 705 meters above sea level, the caves were formed millions of years ago by the flow of the Gosthani River through limestone formations. Inside the cave, visitors will see dramatic stalactites and stalagmites illuminated by colorful lighting, creating a mystical underground landscape. Local tribal communities consider parts of the cave sacred and many formations resemble mythological figures.",
    distance: "45 km from Araku Valley",
    highlights: [
      "Massive underground limestone chambers",
      "Stalactites and stalagmites resembling animals and mythological shapes",
      "One of the deepest caves in India",
      "Colorfully illuminated cave formations",
    ],

    bestTime: "October – March",

    travelTips: [
      "Good walking shoes are recommended as the steps inside can be slippery.",
      "Early morning visits are less crowded.",
      "Combine with Ananthagiri Hills during the same trip.",
    ],

    mapsQuery: "Borra Caves",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Padmapuram Gardens",
    slug: "padmapuram-gardens",
    type: "must-visit",

    image: padmapuramGardens,

    description:
      "A peaceful botanical garden known for its unique tree-top huts and lush greenery.",

    about:
      "Padmapuram Gardens is one of the most pleasant places to visit in Araku Valley. Originally developed during World War II to supply vegetables to soldiers stationed in the region, the garden later evolved into a botanical park. Today it features landscaped gardens, rare plant species, walking paths, and its famous tree-top huts suspended several meters above the ground. Visitors can enjoy toy train rides around the garden and relax in its calm natural environment surrounded by hills.",

    distance: "2 km from Araku Valley center",

    highlights: [
      "Unique tree-top huts surrounded by greenery",
      "Toy train ride through the garden",
      "Rare botanical plants and landscaped gardens",
      "Peaceful picnic and photography spots",
    ],

    bestTime: "October – March",

    travelTips: [
      "Visit early morning or evening for pleasant weather.",
      "Great place for family visits and photography.",
    ],

    mapsQuery: "Padmapuram Gardens Araku",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Araku Tribal Museum",
    slug: "tribal-museum-araku",
    type: "must-visit",

    image: tribalMuseum,

    description:
      "A cultural museum showcasing the lifestyle, traditions, and crafts of tribal communities of the Eastern Ghats.",

    about:
      "The Tribal Museum in Araku Valley offers visitors an authentic glimpse into the lives of indigenous tribes like the Kondh, Gadaba, and Valmiki communities. The museum displays traditional jewelry, hunting tools, musical instruments, pottery, and everyday household items used by tribal families. Life-sized models recreate tribal homes, farming activities, and traditional festivals, making it one of the best places to understand the cultural heritage of the region.",

    distance: "1 km from Araku Valley center",

    highlights: [
      "Authentic tribal lifestyle displays",
      "Traditional jewelry, pottery, and crafts",
      "Life-size tribal village models",
      "Educational insights into Eastern Ghats tribes",
    ],

    bestTime: "Anytime during the day",

    travelTips: [
      "Spend time exploring each section to understand tribal traditions.",
      "Perfect stop before visiting nearby tribal villages.",
    ],

    mapsQuery: "Araku Tribal Museum",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Araku Coffee Museum",
    slug: "araku-coffee-museum",
    type: "must-visit",

    image: coffeeMuseum,

    description:
      "A small museum explaining the journey of Araku's world-famous organic tribal coffee.",

    about:
      "The Coffee Museum in Araku Valley tells the fascinating story of how tribal farmers transformed the valley into one of India’s most respected organic coffee regions. Visitors can explore displays showing coffee cultivation, roasting techniques, and brewing processes. The museum also allows visitors to taste freshly brewed Araku coffee while learning about the sustainable farming practices used by tribal communities.",

    distance: "1 km from Araku Valley center",

    highlights: [
      "Interactive displays about coffee cultivation",
      "Coffee roasting and brewing demonstrations",
      "Tasting authentic Araku coffee varieties",
      "Learning about tribal organic farming",
    ],

    bestTime: "Morning or afternoon",

    travelTips: [
      "Try freshly brewed coffee inside the museum café.",
      "Buy authentic tribal coffee as souvenirs.",
    ],

    mapsQuery: "Araku Coffee Museum",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Chaparai Waterfalls",
    slug: "chaparai-waterfalls",
    type: "must-visit",

    image: chaparaiWaterfalls,

    description:
      "A natural rock water slide waterfall located near Dumbriguda.",

    about:
      "Chaparai Waterfalls, also known as Dumbriguda waterfalls, is famous for its smooth rock formations where water flows gently like a natural slide. Unlike typical waterfalls that drop vertically, the water here glides smoothly across large rock surfaces, creating a unique and relaxing natural experience. Surrounded by forest and hills, it is a popular picnic destination for visitors exploring Araku Valley.",

    distance: "10 km from Araku Valley",

    highlights: [
      "Unique natural rock water slide",
      "Forest surroundings and scenic landscapes",
      "Relaxing picnic spot popular with locals",
    ],

    bestTime: "September – January",

    travelTips: [
      "Avoid heavy monsoon days when water flow becomes strong.",
      "Carry snacks and drinking water.",
    ],

    mapsQuery: "Chaparai Waterfalls Dumbriguda",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Galikonda Viewpoint",
    slug: "galikonda-viewpoint",
    type: "underrated",

    image: galikondaViewpoint,

    description:
      "The highest viewpoint near Araku Valley offering breathtaking sunrise views.",

    about:
      "Galikonda Viewpoint is one of the highest points in the Eastern Ghats near Araku Valley. The viewpoint provides sweeping panoramic views of valleys, railway tunnels, and dense green hills. Sunrise here is especially magical as the mist slowly lifts from the valleys revealing layers of mountains and forests.",

    distance: "20 km from Araku Valley",

    highlights: [
      "Highest viewpoint near Araku",
      "Spectacular sunrise and valley views",
      "Great photography location",
    ],

    bestTime: "October – February",

    travelTips: [
      "Reach before sunrise for the best views.",
      "Carry warm clothing during winter mornings.",
    ],

    mapsQuery: "Galikonda Viewpoint",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Ananthagiri Hills",
    slug: "ananthagiri-hills",
    type: "underrated",

    image: anantagiriHills,

    description:
      "Scenic hills covered with coffee plantations and quiet forest landscapes.",

    about:
      "Ananthagiri Hills are among the most scenic regions near Araku Valley. The hills are known for their tribal coffee plantations, forest roads, and railway tunnels along the famous Araku train route. The peaceful environment and cool climate make it an excellent location for scenic drives, photography, and nature walks.",

    distance: "26 km from Araku Valley",

    highlights: [
      "Organic tribal coffee plantations",
      "Beautiful mountain roads",
      "Scenic railway tunnels",
    ],

    bestTime: "October – March",

    travelTips: [
      "Best explored during the Araku train journey.",
      "Great spot for landscape photography.",
    ],

    mapsQuery: "Ananthagiri Hills Araku",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Sangda Waterfalls",
    slug: "sangda-waterfalls",
    type: "underrated",

    image: sangdaWaterfalls,

    description: "A peaceful forest waterfall hidden inside the Eastern Ghats.",

    about:
      "Sangda Waterfalls is a relatively unexplored waterfall located deep inside the forests near Araku Valley. Unlike popular tourist waterfalls, Sangda remains quiet and uncrowded. The surrounding dense forest and fresh mountain air make it a beautiful natural escape for travelers looking to explore hidden spots in the Eastern Ghats.",

    distance: "28 km from Araku Valley",

    highlights: [
      "Less crowded forest waterfall",
      "Beautiful natural surroundings",
      "Quiet and peaceful environment",
    ],

    bestTime: "September – January",

    travelTips: [
      "Visit with a local guide for easier access.",
      "Carry water and snacks.",
    ],

    mapsQuery: "Sangda Waterfalls",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Sunkarimetta Nature Trail",
    slug: "sunkarimetta-nature-trail",
    type: "underrated",

    image: natureTrail,

    description:
      "A peaceful forest trail perfect for trekking and bird watching.",

    about:
      "Sunkarimetta is a scenic forest area located in the hills near Araku Valley. The region is surrounded by dense forests, tribal villages, and coffee plantations. The nature trail here offers visitors an opportunity to explore quiet landscapes, listen to forest sounds, and observe local bird species.",

    distance: "35 km from Araku Valley",

    highlights: [
      "Forest trekking trail",
      "Bird watching opportunities",
      "Quiet natural landscapes",
    ],

    bestTime: "October – February",

    travelTips: [
      "Carry trekking shoes and water.",
      "Visit with a local guide for deeper forest exploration.",
    ],

    mapsQuery: "Sunkarimetta",
  },

  {
    destination: "Araku Valley",
    state: "andhra-pradesh",
    name: "Araku Pinery",
    slug: "araku-pinery",
    type: "underrated",

    image: arakuPinery,

    description: "A serene pine forest area offering peaceful nature walks.",

    about:
      "Araku Pinery is a lesser-known pine forest area near Araku Valley. Tall pine trees create a cool shaded environment that feels very different from the surrounding tropical forests. The location is ideal for short nature walks, photography, and enjoying the quiet beauty of the Eastern Ghats.",

    distance: "8 km from Araku Valley",

    highlights: [
      "Unique pine forest landscape",
      "Cool shaded walking paths",
      "Peaceful environment for nature photography",
    ],

    bestTime: "October – March",

    travelTips: [
      "Great place for morning walks.",
      "Visit early morning for the best atmosphere.",
    ],

    mapsQuery: "Araku Pinery",
  },
];

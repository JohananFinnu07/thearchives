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

/* LAMBASINGI */
import sunrisePoint from "@/assets/Places/LSP.jpg";
import strawberryFarms from "@/assets/Places/LSF.jpg";
import kothapalliWaterfalls from "@/assets/Places/LKW.jpg";
import tajangiReservior from "@/assets/Places/LTR.jpg";
import susanGarden from "@/assets/Places/LSG.jpg";

/* ================= VANJANGI ================= */
import vanajangiViewpoint from "@/assets/Places/VVP.jpg";
import foresttrektrail from "@/assets/Places/VFT.jpg";
import tribalHamlets from "@/assets/Places/VTH.jpg";
import nightCamping from "@/assets/Places/VNV.jpg";

/* ================= PADERU ================= */
import tribalMarket from "@/assets/Places/PTM.jpg";
import coffeeplantations from "@/assets/Places/PCP.jpg";
import turmericFarms from "@/assets/Places/PTF.jpg";
import tribalVillages from "@/assets/Places/PTV.jpg";

/* ================= MAREDUMILLI ================= */
import jalatarangiWaterfalls from "@/assets/Places/MJTW.jpg";
import amruthadaraWaterfalls from "@/assets/Places/MAW.jpg";
import manyamViewpoint from "@/assets/Places/MMVP.jpg";
import bamboochickenStalls from "@/assets/Places/MBS.jpg";
import gudisaHill from "@/assets/Places/MGH.jpg";
import rampaWaterfalls from "@/assets/Places/MRW.jpg";
import ecoTrails from "@/assets/Places/MET.jpg";

/* ================= VISAKHAPATNAM ================= */
import rkbeach from "@/assets/Places/VRB.jpg";
import kailasagiri from "@/assets/Places/VKH.jpg";
import rushikonda from "@/assets/Places/VSRB.jpg";
import submarineMuseum from "@/assets/Places/VSSM.jpg";
import thotlakonda from "@/assets/Places/VST.jpg";
import rosshill from "@/assets/Places/VSRH.jpg";
import yaradabeach from "@/assets/Places/VSYB.jpg";

/* ================= GANDIKOTA ================= */
import gandikotaCanyon from "@/assets/Places/GGC.jpg";
import gandikotaFort from "@/assets/Places/GF.jpg";
import raghutemple from "@/assets/Places/GRST.jpg";
import bellamCaves from "@/assets/Places/GBC.jpg";
import mylavaramDam from "@/assets/Places/GMD.jpg";

/* ================= MADAGADA ================= */
import madagadaViewpoint from "@/assets/Places/MVP.jpg";

/* ================= TIRUPATI ================= */
import tirupatiTemple from "@/assets/Places/TTT.jpg";
import kapilaTeertham from "@/assets/Places/TKT.jpg";
import talakonaWaterfalls from "@/assets/Places/TTW.jpg";
import venkatMuseum from "@/assets/Places/TVM.jpg";
import japaliTeertham from "@/assets/Places/TJT.jpg";
import chandragiriFort from "@/assets/Places/TCF.jpg";

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
  /* ================= LAMBASINGI ================= */
  {
    destination: "Lambasingi",
    state: "andhra-pradesh",
    name: "Lambasingi Sunrise Point",
    slug: "lambasingi-sunrise-point",
    type: "must-visit",

    image: sunrisePoint,

    description:
      "The most famous sunrise viewpoint where thick fog blankets the valleys creating a magical winter morning atmosphere.",

    about:
      "Lambasingi Sunrise Point is the most iconic location in the hill village often called the Kashmir of Andhra Pradesh. During winter mornings, the valleys fill with dense fog creating a surreal landscape where the sun slowly rises above the clouds. Visitors gather early in the morning to witness the breathtaking sunrise and the cool mist drifting through the hills.",

    distance: "1 km from Lambasingi center",

    highlights: [
      "Fog covered valleys during winter mornings",
      "Golden sunrise above cloud layers",
      "One of the coldest places in Andhra Pradesh",
    ],

    bestTime: "November – February",

    travelTips: [
      "Reach before sunrise around 5:30 AM.",
      "Carry warm clothes during winter.",
      "Fog can be thick so drive carefully.",
    ],

    mapsQuery: "Lambasingi Sunrise Point",
  },

  {
    destination: "Lambasingi",
    state: "andhra-pradesh",
    name: "Strawberry Farms",
    slug: "lambasingi-strawberry-farms",
    type: "must-visit",

    image: strawberryFarms,

    description:
      "Seasonal strawberry plantations where visitors can see fresh strawberry cultivation in the hills.",

    about:
      "Lambasingi has recently become known for its strawberry cultivation due to its cool climate. During the harvesting season visitors can walk through strawberry farms, interact with farmers and taste freshly picked strawberries. The farms add a unique agricultural charm to the hill station.",

    distance: "2 km from Lambasingi",

    highlights: [
      "Fresh strawberry plantations",
      "Farm visits and seasonal fruit picking",
      "Scenic farmland surrounded by hills",
    ],

    bestTime: "December – March",

    travelTips: [
      "Visit during strawberry harvesting season.",
      "Respect farm areas and avoid stepping on crops.",
      "Try locally sold strawberry products.",
    ],

    mapsQuery: "Lambasingi Strawberry Farms",
  },
  {
    destination: "Lambasingi",
    state: "andhra-pradesh",
    name: "Kothapalli Waterfalls",
    slug: "kothapalli-waterfalls",
    type: "underrated",

    image: kothapalliWaterfalls,

    description:
      "A peaceful hidden waterfall surrounded by dense forest near Lambasingi.",

    about:
      "Kothapalli Waterfalls is a lesser known waterfall located near Lambasingi. Surrounded by thick forest and hills, it offers a calm nature escape away from tourist crowds. During monsoon the waterfall flows strongly and the surrounding greenery becomes vibrant.",

    distance: "15 km from Lambasingi",

    highlights: [
      "Hidden forest waterfall",
      "Quiet nature spot",
      "Beautiful monsoon scenery",
    ],

    bestTime: "July – January",

    travelTips: [
      "Best visited after the monsoon season.",
      "Road access may be narrow so drive carefully.",
      "Carry snacks and water.",
    ],

    mapsQuery: "Kothapalli Waterfalls Lambasingi",
  },

  {
    destination: "Lambasingi",
    state: "andhra-pradesh",
    name: "Tajangi Reservoir",
    slug: "tajangi-reservoir",
    type: "underrated",

    image: tajangiReservior,

    description:
      "A serene reservoir surrounded by forested hills offering peaceful landscapes and reflections.",

    about:
      "Tajangi Reservoir is a beautiful lake surrounded by forest hills located near Lambasingi. The still waters of the reservoir reflect the surrounding greenery making it an excellent spot for peaceful nature walks and photography.",

    distance: "10 km from Lambasingi",

    highlights: [
      "Calm scenic reservoir",
      "Reflections of hills and forests",
      "Peaceful picnic location",
    ],

    bestTime: "October – February",

    travelTips: [
      "Visit during early morning or sunset.",
      "Carry drinking water and snacks.",
      "Avoid swimming in the reservoir.",
    ],

    mapsQuery: "Tajangi Reservoir",
  },

  {
    destination: "Lambasingi",
    state: "andhra-pradesh",
    name: "Susan Garden",
    slug: "susan-garden",
    type: "underrated",

    image: susanGarden,

    description:
      "A quiet flower garden surrounded by hills that remains largely unexplored by tourists.",

    about:
      "Susan Garden is a small but charming garden area near Lambasingi where seasonal flowers bloom across landscaped spaces. The garden provides a peaceful break for visitors who want to relax in nature and enjoy the calm surroundings of the hill station.",

    distance: "3 km from Lambasingi",

    highlights: [
      "Colorful seasonal flowers",
      "Peaceful garden environment",
      "Quiet photography location",
    ],

    bestTime: "October – February",

    travelTips: [
      "Visit during flowering season for the best experience.",
      "Carry water and snacks.",
      "Respect garden areas and avoid damaging plants.",
    ],

    mapsQuery: "Susan Garden Lambasingi",
  },
  /* ================= VANJANGI ================= */

  {
    destination: "Vanajangi",
    state: "andhra-pradesh",
    name: "Vanjangi Hill Sunrise Point",
    slug: "vanjangi-hill-sunrise-point",
    type: "must-visit",

    image: vanajangiViewpoint,

    description:
      "A breathtaking sunrise viewpoint famous for the magical 'Sea of Clouds' phenomenon.",

    about:
      "Vanjangi Hill Sunrise Point is one of the most spectacular sunrise locations in the Eastern Ghats. Located near Paderu and Lambasingi, the hill becomes famous during winter mornings when thick clouds fill the valleys below. From the summit, visitors witness a surreal 'Sea of Clouds' where mountain peaks rise above a white blanket of fog. The sunrise slowly lighting up this cloud ocean creates one of the most unforgettable landscapes in Andhra Pradesh.",

    distance: "8 km from Paderu",

    highlights: [
      "Famous Sea of Clouds sunrise phenomenon",
      "Panoramic Eastern Ghats mountain views",
      "One of the most photographed sunrise spots in Andhra Pradesh",
    ],

    bestTime: "November – February",

    travelTips: [
      "Reach the hill before 5:30 AM for the best sunrise views.",
      "Carry warm clothes during winter mornings.",
      "Roads can be foggy so drive carefully.",
    ],

    mapsQuery: "Vanjangi Hill Sunrise Point",
  },

  {
    destination: "Vanajangi",
    state: "andhra-pradesh",
    name: "Vanjangi Forest Trek Trail",
    slug: "vanjangi-forest-trek-trail",
    type: "underrated",

    image: foresttrektrail,
    description:
      "A quiet trekking trail behind the hill that leads through untouched forest landscapes.",

    about:
      "Beyond the popular sunrise viewpoint, Vanjangi offers hidden trekking trails through dense forest landscapes. These trails pass through coffee plantations, wild grasslands, and scenic ridges. Few tourists explore these routes, making them perfect for nature lovers seeking peaceful trekking experiences away from crowds.",

    distance: "1 km from Vanjangi Hill",

    highlights: [
      "Quiet forest trekking routes",
      "Views of valleys and hills",
      "Coffee plantation landscapes",
    ],

    bestTime: "October – February",

    travelTips: [
      "Start trekking early morning for cooler weather.",
      "Carry water and snacks.",
      "Travel with a local guide if exploring deep forest trails.",
    ],

    mapsQuery: "Vanjangi Hills",
  },

  {
    destination: "Vanajangi",
    state: "andhra-pradesh",
    name: "Vanjangi Tribal Hamlets",
    slug: "vanjangi-tribal-hamlets",
    type: "underrated",

    image: tribalHamlets,

    description:
      "Small tribal settlements offering a glimpse into the traditional lifestyle of Eastern Ghats communities.",

    about:
      "Scattered around the Vanjangi hills are small tribal hamlets where indigenous communities continue traditional lifestyles based on farming, forest produce, and handmade crafts. Visiting these villages offers a rare cultural experience where travelers can learn about tribal traditions, food habits, and local agriculture.",

    distance: "3 km from Vanjangi",

    highlights: [
      "Authentic tribal lifestyle experience",
      "Traditional houses and farming practices",
      "Cultural interaction with local communities",
    ],

    bestTime: "October – March",

    travelTips: [
      "Respect local customs and ask permission before photography.",
      "Support local produce and handmade items.",
      "Travel with a local guide if visiting remote villages.",
    ],

    mapsQuery: "Vanjangi Village",
  },

  {
    destination: "Vanajangi",
    state: "andhra-pradesh",
    name: "Vanjangi Night Sky Camping Spot",
    slug: "vanjangi-night-sky-camping",
    type: "underrated",

    image: nightCamping,

    description:
      "A hidden camping location where visitors can witness star-filled skies and the Milky Way before sunrise.",

    about:
      "The remote hills around Vanjangi offer excellent conditions for night sky observation due to minimal light pollution. Many travelers camp overnight on the hill to witness the Milky Way and a sky full of stars before watching the famous sunrise above the clouds.",

    distance: "Near Vanjangi Hill",

    highlights: [
      "Clear Milky Way views",
      "Perfect sunrise + night sky experience",
      "Peaceful overnight camping",
    ],

    bestTime: "November – February",

    travelTips: [
      "Carry warm camping gear.",
      "Check weather conditions before camping.",
      "Avoid camping alone in remote forest areas.",
    ],

    mapsQuery: "Vanjangi Hills",
  },
  /* ================= PADERU ================= */

  {
    destination: "Paderu",
    state: "andhra-pradesh",
    name: "Paderu Tribal Weekly Shandy",
    slug: "paderu-tribal-weekly-market",
    type: "must-visit",

    image: tribalMarket,

    description:
      "A vibrant weekly tribal market where local communities sell forest produce, vegetables, and handmade goods.",

    about:
      "The weekly tribal market in Paderu is an authentic cultural experience where tribal communities from surrounding villages gather to trade agricultural produce, spices, forest products, and handmade items. The colorful stalls and traditional lifestyle create a lively atmosphere reflecting the local culture of the Eastern Ghats.",

    distance: "Paderu town center",

    highlights: [
      "Traditional tribal market culture",
      "Local produce and forest products",
      "Handmade crafts and spices",
    ],

    bestTime: "Market day mornings",

    travelTips: [
      "Visit during the weekly market day for the full experience.",
      "Support local vendors by purchasing produce or crafts.",
      "Respect local customs and ask before photographing people.",
    ],

    mapsQuery: "Paderu Weekly Market",
  },

  {
    destination: "Paderu",
    state: "andhra-pradesh",
    name: "Paderu Coffee Plantations",
    slug: "paderu-coffee-plantations",
    type: "must-visit",

    image: coffeeplantations,

    description:
      "Scenic coffee plantations spread across the hills surrounding Paderu.",

    about:
      "Paderu is surrounded by lush coffee plantations cultivated by tribal farmers in the Eastern Ghats. Walking through these plantations offers a peaceful experience with cool hill air, dense greenery, and the aroma of coffee. The plantations are an important part of the region’s economy and culture.",

    distance: "Around Paderu region",

    highlights: [
      "Green coffee plantations across hills",
      "Tribal coffee farming traditions",
      "Peaceful nature walks",
    ],

    bestTime: "October – February",

    travelTips: [
      "Visit during harvest season to see coffee processing.",
      "Respect private plantations and seek permission before entering.",
      "Morning walks offer the best experience.",
    ],

    mapsQuery: "Paderu Coffee Plantations",
  },

  {
    destination: "Paderu",
    state: "andhra-pradesh",
    name: "Paderu Turmeric Farms",
    slug: "paderu-turmeric-farms",
    type: "underrated",

    image: turmericFarms,

    description:
      "Local farms growing the famous Paderu turmeric known for its quality and flavor.",

    about:
      "Paderu is well known for its turmeric cultivation, grown by tribal farmers across the hills. The vibrant green farms and traditional farming techniques make these fields an interesting rural experience for visitors interested in agriculture and local produce.",

    distance: "Around Paderu villages",

    highlights: [
      "Famous Paderu turmeric cultivation",
      "Traditional tribal farming practices",
      "Colorful farmland landscapes",
    ],

    bestTime: "October – January",

    travelTips: [
      "Visit during harvest season for the best experience.",
      "Interact respectfully with local farmers.",
      "Avoid stepping into crop fields.",
    ],

    mapsQuery: "Paderu Turmeric Farms",
  },

  {
    destination: "Paderu",
    state: "andhra-pradesh",
    name: "Hidden Tribal Villages of Paderu",
    slug: "paderu-tribal-villages",
    type: "underrated",

    image: tribalVillages,

    description:
      "Remote tribal villages surrounded by forests offering a glimpse into traditional Eastern Ghats lifestyles.",

    about:
      "Scattered across the hills near Paderu are small tribal villages where indigenous communities maintain traditional lifestyles based on farming, forest produce, and handmade crafts. Visiting these villages offers a rare cultural experience far from urban life.",

    distance: "10–20 km around Paderu",

    highlights: [
      "Traditional tribal houses",
      "Local farming and forest lifestyles",
      "Cultural interaction with indigenous communities",
    ],

    bestTime: "October – March",

    travelTips: [
      "Travel with a local guide if visiting remote villages.",
      "Respect local traditions and customs.",
      "Seek permission before photography.",
    ],

    mapsQuery: "Paderu Village",
  },
  /* ================= MAREDUMILLI ================= */

  {
    destination: "Maredumilli",
    state: "andhra-pradesh",
    name: "Jalatarangini Waterfalls",
    slug: "jalatarangini-waterfalls",
    type: "must-visit",

    image: jalatarangiWaterfalls,

    description:
      "A beautiful forest waterfall surrounded by dense greenery inside the Maredumilli eco-tourism region.",

    about:
      "Jalatarangini Waterfalls is one of the most popular attractions near Maredumilli. Located within the forest eco-tourism zone, the waterfall flows gently over layered rocks creating a scenic natural pool. Surrounded by dense forest and cool air, it is a perfect place to relax and enjoy nature.",

    distance: "7 km from Maredumilli",

    highlights: [
      "Scenic forest waterfall",
      "Natural rock formations",
      "Peaceful eco-tourism location",
    ],

    bestTime: "July – February",

    travelTips: [
      "Visit after monsoon when water flow is strong.",
      "Wear comfortable footwear for slippery rocks.",
      "Carry drinking water and snacks.",
    ],

    mapsQuery: "Jalatarangini Waterfalls",
  },

  {
    destination: "Maredumilli",
    state: "andhra-pradesh",
    name: "Amruthadhara Waterfalls",
    slug: "amruthadhara-waterfalls",
    type: "must-visit",

    image: amruthadaraWaterfalls,

    description:
      "A picturesque waterfall cascading down rocky cliffs surrounded by thick forest.",

    about:
      "Amruthadhara Waterfalls is another beautiful natural attraction in the Maredumilli forest region. The waterfall flows from rocky cliffs into a shallow stream below, creating a peaceful atmosphere surrounded by lush greenery and birdsong.",

    distance: "8 km from Maredumilli",

    highlights: [
      "Small scenic waterfall",
      "Dense forest surroundings",
      "Quiet natural environment",
    ],

    bestTime: "July – February",

    travelTips: [
      "Best visited after the monsoon season.",
      "Road access is narrow so drive carefully.",
      "Carry essentials as facilities are limited.",
    ],

    mapsQuery: "Amruthadhara Waterfalls",
  },

  {
    destination: "Maredumilli",
    state: "andhra-pradesh",
    name: "Manyam Viewpoint",
    slug: "manyam-viewpoint",
    type: "must-visit",

    image: manyamViewpoint,

    description:
      "A panoramic viewpoint overlooking the dense forests of the Eastern Ghats.",

    about:
      "Manyam Viewpoint offers stunning panoramic views of the forest-covered hills around Maredumilli. The viewpoint provides a wide perspective of the Eastern Ghats landscape and is a great location to enjoy sunrise or sunset over the forest canopy.",

    distance: "5 km from Maredumilli",

    highlights: [
      "Wide forest valley views",
      "Beautiful sunrise and sunset scenery",
      "Excellent photography spot",
    ],

    bestTime: "October – February",

    travelTips: [
      "Visit early morning for clear views.",
      "Carry water and basic supplies.",
      "Fog can reduce visibility during winter mornings.",
    ],

    mapsQuery: "Manyam Viewpoint Maredumilli",
  },

  {
    destination: "Maredumilli",
    state: "andhra-pradesh",
    name: "Maredumilli Bamboo Chicken Stalls",
    slug: "maredumilli-bamboo-chicken",
    type: "must-visit",

    image: bamboochickenStalls,

    description:
      "Roadside food stalls famous for traditional bamboo chicken cooked over open fire.",

    about:
      "Maredumilli is famous for bamboo chicken, a traditional tribal dish where marinated chicken is cooked inside bamboo sticks over a wood fire. The roadside food stalls along the forest roads attract travelers who come specifically to taste this unique local delicacy.",

    distance: "Maredumilli town",

    highlights: [
      "Traditional bamboo chicken cooking method",
      "Local tribal food culture",
      "Popular roadside food experience",
    ],

    bestTime: "Any time of the year",

    travelTips: [
      "Try freshly prepared bamboo chicken for the best taste.",
      "Food stalls are busiest during weekends.",
      "Carry cash as digital payments may not always work.",
    ],

    mapsQuery: "Maredumilli Bamboo Chicken",
  },

  {
    destination: "Maredumilli",
    state: "andhra-pradesh",
    name: "Gudisa Hill Station",
    slug: "gudisa-hill-station",
    type: "underrated",

    image: gudisaHill,

    description:
      "A hidden hill station offering breathtaking sunrise views above rolling grasslands.",

    about:
      "Gudisa Hill Station is one of the most underrated hill destinations near Maredumilli. Located on a remote hilltop, it offers vast grassland landscapes and spectacular sunrise views above the clouds. Because it is less visited, the area remains peaceful and untouched.",

    distance: "35 km from Maredumilli",

    highlights: [
      "Hidden hill station landscape",
      "Sunrise above clouds",
      "Wide grassland views",
    ],

    bestTime: "November – February",

    travelTips: [
      "Start early morning for sunrise views.",
      "Road access may require a local guide.",
      "Carry water and essentials.",
    ],

    mapsQuery: "Gudisa Hill Station",
  },

  {
    destination: "Maredumilli",
    state: "andhra-pradesh",
    name: "Rampa Waterfalls",
    slug: "rampa-waterfalls",
    type: "underrated",

    image: rampaWaterfalls,

    description:
      "A secluded waterfall hidden deep inside the forests near Maredumilli.",

    about:
      "Rampa Waterfalls is a lesser known waterfall located inside the forest region near Maredumilli. The peaceful surroundings and minimal tourist presence make it a perfect destination for travelers looking to explore hidden nature spots.",

    distance: "20 km from Maredumilli",

    highlights: [
      "Hidden forest waterfall",
      "Peaceful nature environment",
      "Beautiful monsoon scenery",
    ],

    bestTime: "July – February",

    travelTips: [
      "Visit with a local guide if exploring remote forest routes.",
      "Wear trekking shoes for forest paths.",
      "Carry drinking water and snacks.",
    ],

    mapsQuery: "Rampa Waterfalls",
  },

  {
    destination: "Maredumilli",
    state: "andhra-pradesh",
    name: "Maredumilli Forest Eco Trails",
    slug: "maredumilli-eco-trails",
    type: "underrated",

    image: ecoTrails,

    description:
      "Forest trekking trails inside the eco-tourism zone offering immersive jungle experiences.",

    about:
      "The eco-tourism trails around Maredumilli allow visitors to explore the dense forests of the Eastern Ghats. These trails pass through streams, bamboo groves, and wildlife habitats, providing a peaceful nature experience.",

    distance: "Around Maredumilli region",

    highlights: [
      "Forest trekking trails",
      "Dense jungle landscapes",
      "Wildlife and birdwatching",
    ],

    bestTime: "October – February",

    travelTips: [
      "Follow eco-tourism guidelines when trekking.",
      "Carry water and insect repellent.",
      "Do not litter inside the forest.",
    ],

    mapsQuery: "Maredumilli Eco Tourism",
  },
  /* ================= VISAKHAPATNAM ================= */

  {
    destination: "Visakhapatnam",
    state: "andhra-pradesh",
    name: "RK Beach",
    slug: "rk-beach",
    type: "must-visit",
    image: rkbeach,
    description:
      "The city's most iconic coastline, bustling with energy, food stalls, and stunning sunset views.",
    about:
      "Ramakrishna Mission Beach (RK Beach) is the heart of Visakhapatnam’s social life. This expansive sandy stretch is perfect for long walks, offering a vibrant atmosphere with numerous statues, parks, and local street food vendors. It serves as a central hub for both locals and tourists to enjoy the Bay of Bengal breeze.",
    distance: "In Visakhapatnam city center",
    highlights: [
      "Vibrant evening atmosphere",
      "Delicious local street food (Muri Mixture)",
      "Proximity to major city museums",
    ],
    bestTime: "September – March (Evenings)",
    travelTips: [
      "Visit during the evening to see the beach illuminated.",
      "Swimming is not recommended due to strong currents.",
      "Try the local spicy puffed rice snacks from beachside vendors.",
    ],
    mapsQuery: "RK Beach Visakhapatnam",
  },

  {
    destination: "Visakhapatnam",
    state: "andhra-pradesh",
    name: "Kailasagiri Hill Park",
    slug: "kailasagiri-hill-park",
    type: "must-visit",
    image: kailasagiri,
    description:
      "A hilltop park featuring giant statues of Shiva and Parvati with a bird's-eye view of the coastline.",
    about:
      "Perched on a hilltop overlooking the sea, Kailasagiri is a beautifully landscaped park. It is famous for its 40-foot tall statues of Lord Shiva and Goddess Parvati. The park offers a ropeway ride and a circular toy train that provides panoramic views of the entire city and the sweeping Bay of Bengal.",
    distance: "6 km from Visakhapatnam Station",
    highlights: [
      "Panoramic views of the Vizag coastline",
      "Shiva-Parvati monolithic statues",
      "Ropeway and Toy Train rides",
    ],
    bestTime: "October – February",
    travelTips: [
      "Take the ropeway for a scenic ascent to the hilltop.",
      "Great spot for families with children due to the park and train.",
      "Visit just before sunset to see the city lights come on.",
    ],
    mapsQuery: "Kailasagiri Visakhapatnam",
  },

  {
    destination: "Visakhapatnam",
    state: "andhra-pradesh",
    name: "Rushikonda Beach",
    slug: "rushikonda-beach",
    type: "must-visit",
    image: rushikonda,
    description:
      "A pristine Blue Flag certified beach known for golden sands and thrilling water sports.",
    about:
      "Rushikonda Beach is widely regarded as the 'Jewel of the East Coast.' Known for its golden sands and tidy shoreline, it has earned the prestigious Blue Flag certification. Unlike other city beaches, Rushikonda is the primary hub for water sports like surfing, kayaking, and jet-skiing.",
    distance: "12 km from city center",
    highlights: [
      "Blue Flag certified clean beach",
      "Surfing and water sports hub",
      "Scenic hill-and-sea landscape",
    ],
    bestTime: "November – February",
    travelTips: [
      "Ideal beach for those looking to try surfing or kayaking.",
      "Check with local operators for safe water sport timings.",
      "Visit early morning for a peaceful, less crowded experience.",
    ],
    mapsQuery: "Rushikonda Beach",
  },

  {
    destination: "Visakhapatnam",
    state: "andhra-pradesh",
    name: "Submarine Museum",
    slug: "submarine-museum",
    type: "must-visit",
    image: submarineMuseum,
    description:
      "A unique museum housed inside the decommissioned Soviet-built submarine, INS Kurusura.",
    about:
      "The INS Kurusura Submarine Museum is the first of its kind in South Asia. Located right on the sands of RK Beach, this decommissioned Kalvari-class submarine allows visitors to step inside and explore the cramped quarters, control rooms, and torpedo sections, providing a glimpse into the lives of submariners.",
    distance: "Located on RK Beach",
    highlights: [
      "Rare chance to explore a real submarine",
      "Insightful naval history and technology",
      "Guided tours by retired naval personnel",
    ],
    bestTime: "Year-round (Closed on Mondays)",
    travelTips: [
      "The museum usually opens after 2:00 PM; check local timings.",
      "Photography may require a separate ticket.",
      "Space is confined inside; may be difficult for those with claustrophobia.",
    ],
    mapsQuery: "INS Kurusura Submarine Museum",
  },

  {
    destination: "Visakhapatnam",
    state: "andhra-pradesh",
    name: "Thotlakonda Buddhist Ruins",
    slug: "thotlakonda-buddhist-ruins",
    type: "underrated",
    image: thotlakonda,
    description:
      "Ancient Buddhist monastery ruins perched on a hill overlooking the turquoise sea.",
    about:
      "Thotlakonda is a 2,000-year-old Buddhist complex that flourished during the 2nd century BC. The site features rock-cut cisterns, stupas, and viharas. Its location on a hill 128 meters above sea level offers a serene atmosphere and stunning views of the coastline, making it a perfect blend of history and nature.",
    distance: "15 km from city center",
    highlights: [
      "Ancient Buddhist architecture and stupas",
      "Quiet hilltop with sea views",
      "Significant archaeological heritage site",
    ],
    bestTime: "September – March",
    travelTips: [
      "Wear comfortable walking shoes to explore the ruins.",
      "Carry a hat and water as the site is open and sunny.",
      "Combine this with a visit to the nearby Bavikonda ruins.",
    ],
    mapsQuery: "Thotlakonda Buddhist Complex",
  },

  {
    destination: "Visakhapatnam",
    state: "andhra-pradesh",
    name: "Ross Hill Church Viewpoint",
    slug: "ross-hill-church",
    type: "underrated",
    image: rosshill,
    description:
      "A spiritual hilltop offering unique views of the Vizag Port and the busy harbor.",
    about:
      "Ross Hill is part of a unique trio of hills representing three religions (a Church, a Temple, and a Mosque). The Ross Hill Church is a beautiful century-old structure. The viewpoint from here provides an industrial yet fascinating view of the Visakhapatnam Port, the inner harbor, and the massive ships entering the dock.",
    distance: "4 km from Visakhapatnam Station",
    highlights: [
      "Views of the bustling Vizag Port",
      "Unique three-religion hill heritage",
      "Peaceful hilltop chapel atmosphere",
    ],
    bestTime: "Early mornings or late evenings",
    travelTips: [
      "The drive up is steep but offers great views.",
      "Respect the silence of the church premises.",
      "Great spot for watching the sun set over the industrial harbor.",
    ],
    mapsQuery: "Ross Hill Church",
  },

  {
    destination: "Visakhapatnam",
    state: "andhra-pradesh",
    name: "Yarada Beach",
    slug: "yarada-beach",
    type: "underrated",
    image: yaradabeach,
    description:
      "A secluded paradise with lush green hills on three sides and deep blue waters on the fourth.",
    about:
      "Yarada Beach is Vizag’s best-kept secret. Tucked away behind the Dolphin’s Nose hill, it is much cleaner and quieter than the main city beaches. Surrounded by banana and coconut plantations, the drive to Yarada is as beautiful as the beach itself, offering a tropical vibe away from the city noise.",
    distance: "15 km from city center",
    highlights: [
      "Secluded and exceptionally clean sands",
      "Dramatic hill-meets-sea scenery",
      "Less crowded than Rushikonda or RK Beach",
    ],
    bestTime: "October – March",
    travelTips: [
      "Public transport is limited; hire a private cab or bike.",
      "Bring your own snacks as there are fewer commercial stalls.",
      "The road over the hill is narrow; drive with caution.",
    ],
    mapsQuery: "Yarada Beach",
  },
  /* ================= GANDIKOTA ================= */

  {
    destination: "Gandikota",
    state: "andhra-pradesh",
    name: "Gandikota Canyon Viewpoint",
    slug: "gandikota-canyon-viewpoint",
    type: "must-visit",

    image: gandikotaCanyon,

    description:
      "A dramatic canyon carved by the Pennar River, often called the 'Grand Canyon of India'.",

    about:
      "Gandikota Canyon is one of the most breathtaking natural landscapes in Andhra Pradesh. The Pennar River cuts through massive red sandstone cliffs creating a deep gorge that resembles the Grand Canyon. The viewpoint near Gandikota Fort offers stunning panoramic views of the canyon, especially during sunrise and sunset.",

    distance: "Inside Gandikota Fort complex",

    highlights: [
      "Grand Canyon of India landscape",
      "Dramatic red sandstone cliffs",
      "Panoramic Pennar River views",
    ],

    bestTime: "October – February",

    travelTips: [
      "Sunset offers the best canyon views.",
      "Carry water as the area can get very hot.",
      "Be cautious near cliff edges.",
    ],

    mapsQuery: "Gandikota Canyon Viewpoint",
  },

  {
    destination: "Gandikota",
    state: "andhra-pradesh",
    name: "Gandikota Fort",
    slug: "gandikota-fort",
    type: "must-visit",

    image: gandikotaFort,

    description:
      "A historic fort built in the 13th century overlooking the spectacular canyon landscape.",

    about:
      "Gandikota Fort is a massive medieval fortress built by the Kamma Nayaka rulers and later expanded by the Vijayanagara Empire. The fort complex includes temples, mosques, granaries, and ancient structures surrounded by thick stone walls. Its location beside the canyon makes it one of the most scenic forts in India.",

    distance: "Gandikota village",

    highlights: [
      "13th century historic fort",
      "Massive stone fort walls",
      "Spectacular canyon views",
    ],

    bestTime: "October – February",

    travelTips: [
      "Explore the fort early morning to avoid heat.",
      "Wear comfortable walking shoes.",
      "Carry water while exploring the fort complex.",
    ],

    mapsQuery: "Gandikota Fort",
  },

  {
    destination: "Gandikota",
    state: "andhra-pradesh",
    name: "Raghunatha Swamy Temple",
    slug: "raghunatha-swamy-temple",
    type: "must-visit",

    image: raghutemple,

    description:
      "A beautiful Vijayanagara-era temple known for its intricate stone carvings.",

    about:
      "Raghunatha Swamy Temple is an ancient temple located inside the Gandikota Fort complex. Built during the Vijayanagara period, the temple features detailed carvings, tall pillars, and traditional Dravidian architecture. The temple remains an important spiritual landmark within the historic fort.",

    distance: "Inside Gandikota Fort",

    highlights: [
      "Vijayanagara architectural style",
      "Intricate stone carvings",
      "Historic temple inside the fort",
    ],

    bestTime: "October – February",

    travelTips: [
      "Visit along with the fort exploration.",
      "Respect temple customs and maintain silence.",
      "Photography is best during early morning light.",
    ],

    mapsQuery: "Raghunatha Swamy Temple Gandikota",
  },

  {
    destination: "Gandikota",
    state: "andhra-pradesh",
    name: "Belum Caves",
    slug: "belum-caves",
    type: "underrated",

    image: bellamCaves,

    description:
      "One of the longest cave systems in India featuring stunning limestone formations.",

    about:
      "Belum Caves are the second largest cave system in the Indian subcontinent. Located near Gandikota, these underground caves stretch for several kilometers and feature fascinating stalactite and stalagmite formations. The caves were formed over millions of years by underground water flow.",

    distance: "60 km from Gandikota",

    highlights: [
      "India’s longest cave system",
      "Unique stalactite and stalagmite formations",
      "Large underground chambers",
    ],

    bestTime: "October – February",

    travelTips: [
      "Carry comfortable walking shoes.",
      "The cave interior can be humid.",
      "Visit early to avoid crowds.",
    ],

    mapsQuery: "Belum Caves",
  },

  {
    destination: "Gandikota",
    state: "andhra-pradesh",
    name: "Mylavaram Dam",
    slug: "mylavaram-dam",
    type: "underrated",

    image: mylavaramDam,

    description:
      "A peaceful dam surrounded by hills offering scenic views and quiet landscapes.",

    about:
      "Mylavaram Dam is located near Gandikota and provides a calm scenic environment surrounded by hills. The reservoir creates a peaceful setting and is often visited by travelers exploring the Gandikota region.",

    distance: "15 km from Gandikota",

    highlights: [
      "Scenic reservoir views",
      "Quiet nature surroundings",
      "Beautiful sunset landscapes",
    ],

    bestTime: "October – February",

    travelTips: [
      "Visit during sunset for the best scenery.",
      "Carry water and snacks.",
      "Avoid swimming in the reservoir.",
    ],

    mapsQuery: "Mylavaram Dam Kadapa",
  },
  /* ================= MADAGADA ================= */
  {
    destination: "Madagada",
    state: "andhra-pradesh",
    name: "Madagada Sunrise Viewpoint",
    slug: "madagada-sunrise-viewpoint",
    type: "must-visit",
    image: madagadaViewpoint,
    description:
      "A breathtaking vantage point famous for its 'sea of clouds' and spectacular sunrises.",
    about:
      "The Madagada Viewpoint is rapidly becoming a favorite for nature lovers in the Eastern Ghats. During the winter months, the valley below gets completely submerged in a thick blanket of white mist, creating an ethereal 'cloud sea' effect. As the sun rises over the hills, the mist glows in hues of orange and gold, offering a celestial experience similar to the famous Vanjangi hills.",
    distance: "5 km from Madagada Village",
    highlights: [
      "Stunning 'Sea of Clouds' phenomenon",
      "Panoramic 360-degree mountain views",
      "Peaceful, less crowded alternative to Vanjangi",
    ],
    bestTime: "November – February (5:30 AM to 7:30 AM)",
    travelTips: [
      "Reach before 5:30 AM to witness the color transition before sunrise.",
      "Carry warm clothing as it gets very chilly at the peak.",
      "The road is narrow and steep; prefer a local guide or an experienced driver.",
    ],
    mapsQuery: "Madagada sunrise view point",
  },
  /* ================= TIRUPATI ================= */

  {
    destination: "Tirupati",
    state: "andhra-pradesh",
    name: "Tirumala Venkateswara Temple",
    slug: "tirumala-venkateswara-temple",
    type: "must-visit",

    image: tirupatiTemple,

    description:
      "One of the most sacred Hindu temples dedicated to Lord Venkateswara, visited by millions of pilgrims every year.",

    about:
      "Tirumala Venkateswara Temple, located on the Tirumala hills near Tirupati, is one of the richest and most visited temples in the world. Dedicated to Lord Venkateswara, a form of Lord Vishnu, the temple has immense religious significance. Pilgrims from across India and the world visit Tirumala to seek blessings and experience the spiritual atmosphere of the sacred hill temple.",

    distance: "22 km from Tirupati",

    highlights: [
      "One of the most visited temples in the world",
      "Sacred Tirumala hill pilgrimage",
      "Rich Dravidian temple architecture",
    ],

    bestTime: "September – March",

    travelTips: [
      "Book darshan tickets in advance through the official TTD website.",
      "Expect large crowds during festivals and weekends.",
      "Follow temple dress code guidelines.",
    ],

    mapsQuery: "Tirumala Venkateswara Temple",
  },

  {
    destination: "Tirupati",
    state: "andhra-pradesh",
    name: "Kapila Theertham",
    slug: "kapila-theertham",
    type: "must-visit",

    image: kapilaTeertham,

    description:
      "A sacred temple and waterfall located at the foothills of Tirumala hills.",

    about:
      "Kapila Theertham is an ancient temple dedicated to Lord Shiva located at the base of the Tirumala hills. The temple is famous for its natural waterfall that flows down the rocky hills during monsoon season. The serene surroundings and spiritual significance make it an important pilgrimage spot.",

    distance: "3 km from Tirupati",

    highlights: [
      "Sacred Shiva temple",
      "Natural waterfall near temple",
      "Beautiful hill surroundings",
    ],

    bestTime: "July – February",

    travelTips: [
      "Visit during monsoon to see the waterfall flowing.",
      "Morning visits are less crowded.",
      "Be careful on slippery rocks.",
    ],

    mapsQuery: "Kapila Theertham",
  },

  {
    destination: "Tirupati",
    state: "andhra-pradesh",
    name: "Talakona Waterfalls",
    slug: "talakona-waterfalls",
    type: "must-visit",

    image: talakonaWaterfalls,

    description:
      "The tallest waterfall in Andhra Pradesh located inside a beautiful forest reserve.",

    about:
      "Talakona Waterfalls is the tallest waterfall in Andhra Pradesh with water cascading from a height of around 270 feet. Located within the Sri Venkateswara National Park, the waterfall is surrounded by dense forest, wildlife, and scenic trekking trails.",

    distance: "50 km from Tirupati",

    highlights: [
      "Tallest waterfall in Andhra Pradesh",
      "Dense forest surroundings",
      "Scenic trekking trails",
    ],

    bestTime: "July – February",

    travelTips: [
      "Wear comfortable trekking shoes.",
      "Carry water and snacks for the trek.",
      "Avoid visiting late evening.",
    ],

    mapsQuery: "Talakona Waterfalls",
  },

  {
    destination: "Tirupati",
    state: "andhra-pradesh",
    name: "Sri Venkateswara Museum",
    slug: "sri-venkateswara-museum",
    type: "must-visit",

    image: venkatMuseum,

    description:
      "A museum showcasing temple artifacts, sculptures, and historical exhibits related to Tirumala.",

    about:
      "The Sri Venkateswara Museum in Tirupati displays a fascinating collection of temple artifacts, traditional sculptures, ancient coins, and cultural exhibits connected to the Tirumala temple history. It offers visitors a deeper understanding of the religious and cultural heritage of the region.",

    distance: "2 km from Tirupati",

    highlights: [
      "Temple artifacts and sculptures",
      "Historical religious exhibits",
      "Cultural heritage displays",
    ],

    bestTime: "October – March",

    travelTips: [
      "Spend at least 30–40 minutes exploring exhibits.",
      "Photography may be restricted inside.",
      "Visit during daytime hours.",
    ],

    mapsQuery: "Sri Venkateswara Museum Tirupati",
  },

  {
    destination: "Tirupati",
    state: "andhra-pradesh",
    name: "Japali Teertham",
    slug: "japali-teertham",
    type: "underrated",

    image: japaliTeertham,

    description:
      "A peaceful forest temple dedicated to Lord Hanuman located deep inside Tirumala hills.",

    about:
      "Japali Teertham is a small temple dedicated to Lord Hanuman located inside a forested valley of Tirumala hills. According to legend, Lord Hanuman meditated here during the Ramayana period. The calm forest surroundings make it a peaceful spiritual retreat away from crowds.",

    distance: "7 km from Tirumala",

    highlights: [
      "Forest temple atmosphere",
      "Spiritual and peaceful location",
      "Beautiful natural surroundings",
    ],

    bestTime: "October – March",

    travelTips: [
      "Reach by road followed by a short walk.",
      "Carry water and snacks.",
      "Avoid visiting late evening.",
    ],

    mapsQuery: "Japali Teertham",
  },

  {
    destination: "Tirupati",
    state: "andhra-pradesh",
    name: "Chandragiri Fort",
    slug: "chandragiri-fort",
    type: "underrated",

    image: chandragiriFort,

    description:
      "A historic fort associated with the Vijayanagara Empire featuring beautiful palace architecture.",

    about:
      "Chandragiri Fort served as the last capital of the Vijayanagara Empire. The fort complex includes impressive structures such as the Raja Mahal and Rani Mahal built using traditional Indo-Saracenic architecture. Today it stands as an important historical monument near Tirupati.",

    distance: "15 km from Tirupati",

    highlights: [
      "Historic Vijayanagara fort",
      "Raja Mahal palace architecture",
      "Historical museum inside the fort",
    ],

    bestTime: "October – February",

    travelTips: [
      "Visit during sunset for scenic views.",
      "Explore the museum inside Raja Mahal.",
      "Carry water while exploring the fort.",
    ],

    mapsQuery: "Chandragiri Fort",
  },
];

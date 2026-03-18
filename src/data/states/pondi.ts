import { Destination } from "../types";

import whiteTownHero from "@/assets/PD/Destinations/WTH.jpg";
import aurovilleHero from "@/assets/PD/Destinations/AH.jpg";
import serenityHero from "@/assets/PD/Destinations/SB.jpg";

/* ============ WHITE TOWN ===================== */
import cafeHero from "@/assets/PD/Products/WTCH.jpg";
import cafeMaking from "@/assets/PD/Products/WTCM.jpg";
import cafeAmbience from "@/assets/PD/Products/WTCF.jpg";

import paperHero from "@/assets/PD/Products/WTPFH.jpg";
import paperMaking from "@/assets/PD/Products/WTPFM.jpg";
import paperTexture from "@/assets/PD/Products/WTPFF.jpg";

import perfumeHero from "@/assets/PD/Products/WTBPH.jpg";
import perfumeMaking from "@/assets/PD/Products/WTBPM.jpg";
import perfumeDetail from "@/assets/PD/Products/WTBPF.jpg";

import embroideryHero from "@/assets/PD/Products/WTCLEH.jpg";
import embroideryMaking from "@/assets/PD/Products/WTCLEM.jpg";
import embroideryDetail from "@/assets/PD/Products/WTCLEF.jpg";

import ironHero from "@/assets/PD/Products/WTWIH.jpg";
import ironForging from "@/assets/PD/Products/WTWIM.avif";
import ironDetail from "@/assets/PD/Products/WTWIF.jpg";

/* ============ AUROVILLE ===================== */
import organicHero from "@/assets/PD/Products/AOPH.jpg";
import organicMaking from "@/assets/PD/Products/AOPM.jpg";
import organicDetail from "@/assets/PD/Products/AOPF.jpg";

import potteryHero from "@/assets/PD/Products/APH.jpg";
import potteryMaking from "@/assets/PD/Products/APM.jpg";
import potteryTexture from "@/assets/PD/Products/APF.jpg";

import svaramHero from "@/assets/PD/Products/ASIH.jpg";
import svaramMaking from "@/assets/PD/Products/ASIM.jpg";
import svaramDetail from "@/assets/PD/Products/ASIF.jpg";

import indigoHero from "@/assets/PD/Products/AIDH.jpg";
import indigoVat from "@/assets/PD/Products/AIDM.jpg";
import indigoFabric from "@/assets/PD/Products/AIDF.jpg";

/* ============ SERENITY BEACH ===================== */
import surfHero from "@/assets/PD/Products/SSH.jpg";
import surfLearning from "@/assets/PD/Products/SSM.jpg";
import surfWave from "@/assets/PD/Products/SSF.jpg";

import seafoodHero from "@/assets/PD/Products/SSFH.jpg";
import fishingMaking from "@/assets/PD/Products/SSFM.jpg";
import seafoodDish from "@/assets/PD/Products/SSFF.jpg";

import netHero from "@/assets/PD/Products/SFNH.jpg";
import netMaking from "@/assets/PD/Products/SFNM.jpg";
import netDetail from "@/assets/PD/Products/SFNF.jpg";

import yogaHero from "@/assets/PD/Products/SSYH.jpg";
import yogaSession from "@/assets/PD/Products/SSYM.jpg";
import yogaDetail from "@/assets/PD/Products/SSYH.jpg";

import shellHero from "@/assets/PD/Products/SSSHH.jpg";
import shellMaking from "@/assets/PD/Products/SSSHM.jpg";
import shellDetail from "@/assets/PD/Products/SSSHF.jpg";

export const puducherryDestinations: Destination[] = [
  {
    id: "white-town",
    slug: "white-town",
    state: "py",
    name: "White Town",
    tagline: "The French Heart of Coastal India",
    image: whiteTownHero,
    mapsQuery: "White Town Puducherry",

    heroDescription:
      "White Town is where Puducherry reveals its most iconic identity — a coastal district of sunlit bougainvillea streets, mustard-yellow colonial facades, and slow café culture. Every corner blends European elegance with tropical calm, creating an atmosphere that feels both timeless and transportive.",

    elevation: "Sea level",
    bestTime: "October – March",
    temperature: "24°C – 32°C",

    about:
      "White Town, also known as the French Quarter, stands as the cultural and visual centerpiece of Puducherry. Designed during French rule, its grid-like streets are lined with heritage villas, churches, and vibrant cafés. Beyond aesthetics, it is a living district where history, hospitality, design, and coastal life converge into a deeply immersive travel experience that attracts artists, photographers, and slow travelers alike.",

    culture:
      "The culture of White Town is defined by a unique Franco-Tamil fusion, where colonial-era architecture coexists with Indian traditions. Early mornings begin with quiet promenade walks, while afternoons transition into café conversations and boutique explorations. Evenings bring a social buzz along the seafront. The lifestyle here celebrates leisure, aesthetics, and a deep appreciation for art, food, and heritage.",

    products: [
      {
        name: "French Cafe Culture",
        type: "famous",
        image: cafeHero,
        makingImage: cafeMaking,
        flavorImage: cafeAmbience,
        description:
          "White Town’s café culture is a defining experience, offering a blend of French baking traditions and modern artisanal coffee practices. From croissants and sourdough breads to handcrafted beverages, these cafés create spaces that combine culinary craftsmanship with relaxed, aesthetic-driven social environments.",
        significance:
          "Cafés are not just food spaces but cultural landmarks that define Puducherry’s identity. They attract global travelers, digital nomads, and artists, turning White Town into a hub of slow living and creative exchange while preserving its colonial-era European charm.",
        makingProcess:
          "Fresh dough is prepared daily using traditional French baking techniques, often involving long fermentation processes for depth of flavor. Ingredients are carefully sourced, and baking is done in small batches. Coffee is brewed using manual methods, emphasizing quality, aroma, and presentation.",
        uses: [
          "Authentic French breakfast and brunch",
          "Social hubs for creative collaboration",
          "Aesthetic backdrops for cinematic photography",
        ],
      },
      {
        name: "Handmade Paper",
        type: "famous",
        image: paperHero,
        makingImage: paperMaking,
        flavorImage: paperTexture,
        description:
          "Handmade paper from Puducherry is an eco-conscious craft created using recycled cotton waste and natural fibers. Known for its unique textures and durability, it is widely used in artistic, decorative, and stationery products that emphasize sustainability and craftsmanship.",
        significance:
          "This craft represents Puducherry’s commitment to sustainable production and artistic expression. It has gained international recognition for its eco-friendly processes and high-quality output, making it a signature product that blends environmental responsibility with design innovation.",
        makingProcess:
          "Cotton rags are collected, cleaned, and pulped into a fine slurry. The pulp is then spread evenly onto mesh screens, pressed to remove water, and sun-dried. Each sheet is carefully finished by hand, resulting in distinct textures and natural variations.",
        uses: [
          "Premium sustainable stationery",
          "Artistic journaling and painting",
          "Eco-friendly interior decor and lampshades",
        ],
      },
      {
        name: "Boutique Perfumes",
        type: "underrated",
        image: perfumeHero,
        makingImage: perfumeMaking,
        flavorImage: perfumeDetail,
        description:
          "Boutique perfumes in Puducherry draw inspiration from French perfumery traditions, offering handcrafted fragrances made from essential oils and natural extracts. These scents are often subtle, layered, and designed to evoke moods rather than overpower with intensity.",
        significance:
          "Though less visible than cafés, these perfumes reflect the deep French cultural influence in Puducherry. They represent a niche luxury craft that combines artistry, chemistry, and sensory storytelling, appealing to travelers seeking unique and personalized fragrance experiences.",
        makingProcess:
          "Natural essential oils are blended in precise proportions to create balanced fragrance compositions. The mixtures are aged over time to enhance depth and harmony. Final products are filtered, bottled, and often handcrafted in small batches to maintain quality.",
        uses: [
          "Personalized luxury fragrance",
          "Scent-based therapeutic relaxation",
          "Unique cultural souvenirs and gifts",
        ],
      },
      {
        name: "Cluny Lace & Embroidery",
        type: "underrated",
        image: embroideryHero,
        makingImage: embroideryMaking,
        flavorImage: embroideryDetail,
        description:
          "Hidden within a 200-year-old French mansion, Cluny Embroidery is a traditional workshop where local women master the delicate art of 'Point de Beauvais' and intricate lace-making. This needlework is known for its extreme precision, often featuring floral motifs and fine textures on premium linens.",
        significance:
          "It is one of the last remaining bastions of authentic French hand-embroidery in Asia. The workshop serves a dual purpose: preserving an endangered colonial craft and providing social empowerment and financial independence to local women through artistic labor.",
        makingProcess:
          "Artisans use specialized needles to create fine chain stitches on fabric stretched across wooden frames. Each piece can take weeks to complete, as the patterns are built layer by layer using high-quality cotton and silk threads to ensure a raised, tactile finish.",
        uses: [
          "High-end textile art and collectibles",
          "Sustainable heritage fashion",
          "Cultural preservation and social enterprise",
        ],
      },
      {
        name: "Artisanal Wrought Iron Craft",
        type: "underrated",
        image: ironHero,
        makingImage: ironForging,
        flavorImage: ironDetail,
        description:
          "The ornate gates, window grills, and balconies of White Town are masterpieces of wrought iron artistry. These metal features often incorporate complex scrolls, fleur-de-lis, and geometric patterns that provide a stark, elegant contrast against the soft pastel walls of the French Quarter.",
        significance:
          "This craft is a silent witness to the town's evolution, blending European metal-working traditions with local Indian blacksmithing expertise. It adds a layer of 'Old World' security and ornamentation that defines the streetscape's upscale, vintage atmosphere.",
        makingProcess:
          "Raw iron is heated in traditional forges until malleable, then hand-hammered and bent into intricate shapes using customized jigs. The finished pieces are treated with anti-corrosive coatings to withstand the salty sea breeze before being hand-painted in classic black or white.",
        uses: [
          "Heritage-style architectural gate design",
          "Urban landscape photography",
          "Boutique interior and exterior decor",
        ],
      },
    ],
  },
  {
    id: "auroville",
    slug: "auroville",
    state: "py",
    name: "Auroville",
    tagline: "The Universal Township of Conscious Living",
    image: aurovilleHero,
    mapsQuery: "Auroville Puducherry",

    heroDescription:
      "Auroville is not just a destination but a living experiment in human unity, where sustainability, spirituality, and creativity shape everyday life. Surrounded by forested landscapes and innovative architecture, it offers a deeply immersive escape into mindful and conscious living.",

    elevation: "60 m",
    bestTime: "November – February",
    temperature: "22°C – 34°C",

    about:
      "Founded in 1968, Auroville is an international township where people from across the world live together beyond nationality and religion. It focuses on sustainable practices, organic farming, and alternative lifestyles. The area is dotted with eco-communities, craft centers, and meditation spaces that offer visitors a unique blend of innovation and introspection.",

    culture:
      "Auroville’s culture revolves around conscious living, creativity, and collaboration. It emphasizes sustainability, minimalism, and global unity. Residents engage in farming, crafts, music, and wellness practices, creating a community that values inner growth as much as external development.",

    products: [
      {
        name: "Organic Auroville Products",
        type: "famous",
        image: organicHero,
        makingImage: organicMaking,
        flavorImage: organicDetail,
        description:
          "Auroville’s organic products include food, skincare, and wellness items made using natural and chemical-free methods. These products emphasize purity, sustainability, and health, offering a conscious alternative to mass-produced goods.",
        significance:
          "These products symbolize Auroville’s commitment to sustainable living and environmental responsibility. They are widely respected for their quality and ethical production methods, making them popular among conscious consumers and global visitors.",
        makingProcess:
          "Ingredients are grown organically without synthetic chemicals. Harvested materials are processed using minimal intervention techniques, preserving natural nutrients. Products are handcrafted in small batches, ensuring quality control and maintaining ecological balance.",
        uses: [
          "Holistic health and wellness routines",
          "Chemical-free personal skincare",
          "Conscious and ethical gift-giving",
        ],
      },
      {
        name: "Auroville Ceramics",
        type: "famous",
        image: potteryHero,
        makingImage: potteryMaking,
        flavorImage: potteryTexture,
        description:
          "Auroville ceramics are handcrafted pottery pieces ranging from functional tableware to artistic sculptures. Known for their minimal design and natural finishes, these products reflect both artistic creativity and everyday usability.",
        significance:
          "Ceramics in Auroville represent a blend of art and utility, attracting designers and collectors worldwide. The craft highlights the township’s emphasis on handmade, sustainable, and aesthetically refined products.",
        makingProcess:
          "Clay is shaped on wheels or by hand, then dried and fired in kilns at high temperatures. After firing, pieces are glazed or finished naturally, resulting in durable and visually appealing ceramics with unique textures.",
        uses: [
          "Modern minimalist home decor",
          "Durable artisanal everyday tableware",
          "Handcrafted collector's art pieces",
        ],
      },
      {
        name: "Svaram Sound Instruments",
        type: "underrated",
        image: svaramHero,
        makingImage: svaramMaking,
        flavorImage: svaramDetail,
        description:
          "Svaram instruments are uniquely designed sound tools used for meditation and healing. Crafted from natural materials, they produce harmonic tones that promote relaxation and mindfulness.",
        significance:
          "This niche craft has gained global recognition in wellness communities. It reflects Auroville’s innovative approach to combining art, science, and spirituality through sound-based healing practices.",
        makingProcess:
          "Materials like bamboo, metal, and wood are shaped and tuned to specific frequencies. Each instrument is carefully tested for tonal quality, ensuring it produces balanced and soothing vibrations suitable for meditation and therapy.",
        uses: [
          "Sound healing and vibration therapy",
          "Mindfulness and deep meditation sessions",
          "Acoustic musical exploration and education",
        ],
      },
      {
        name: "Natural Indigo Dyeing",
        type: "underrated",
        image: indigoHero,
        makingImage: indigoVat,
        flavorImage: indigoFabric,
        description:
          "Auroville is home to world-class workshops that have revived the ancient art of 100% natural indigo fermentation. Unlike synthetic dyes, this process uses the Indigofera tinctoria plant to create deep, living blues on organic textiles through a complex, biological 'vat' fermentation method.",
        significance:
          "This craft represents Auroville's dedication to preserving traditional knowledge while ensuring zero environmental impact. It is a niche, high-art form of sustainable fashion that connects the region’s agricultural roots to global slow-fashion movements.",
        makingProcess:
          "Indigo leaves are fermented in lime-stabilized water to create a reduction vat. Fabric is dipped multiple times; it emerges green and turns blue upon contact with oxygen. The depth of the blue depends on the number of dips and the age of the natural fermentation vat.",
        uses: [
          "Sustainable textile production",
          "Artisan fashion and apparel",
          "Workshops on ancient dyeing techniques",
        ],
      },
    ],
  },
  {
    id: "serenity-beach",
    slug: "serenity-beach",
    state: "py",
    name: "Serenity Beach",
    tagline: "Where Waves Meet Coastal Life",
    image: serenityHero,
    mapsQuery: "Serenity Beach Puducherry",

    heroDescription:
      "Serenity Beach is where Puducherry’s coastal rhythm comes alive through crashing waves, early morning fishing activity, and a growing surf culture that attracts travelers seeking both adventure and authenticity.",

    elevation: "Sea level",
    bestTime: "October – March",
    temperature: "25°C – 33°C",

    about:
      "Located north of the main town, Serenity Beach offers a quieter alternative to the promenade. It is known for its clean shoreline, surf-friendly waves, and proximity to traditional fishing communities that define its local character.",

    culture:
      "The culture here blends modern surf lifestyles with traditional fishing practices. Mornings begin with fishermen returning with fresh catch, while later hours bring surfers and travelers, creating a unique mix of old and new coastal identities.",

    products: [
      {
        name: "Surfing Experience",
        type: "famous",
        image: surfHero,
        makingImage: surfLearning,
        flavorImage: surfWave,
        description:
          "Serenity Beach is one of India’s emerging surfing destinations, offering consistent waves suitable for beginners and intermediate surfers. Surf schools provide guided experiences, making it accessible to travelers seeking adventure along Puducherry’s coastline.",
        significance:
          "Surfing has transformed Serenity Beach into a youth-centric destination, attracting both domestic and international travelers. It represents the evolving identity of Puducherry as not just a heritage town but also an adventure hotspot.",
        makingProcess:
          "Surf schools train participants using soft boards and guided instruction. Lessons begin with balance training on land before moving into the water. Instructors assist in wave timing, positioning, and safety techniques, ensuring a structured learning experience.",
        uses: [
          "Recreational coastal adventure",
          "Professional surf training and workshops",
          "Physical fitness and mindfulness through water sports",
        ],
      },
      {
        name: "Fresh Coastal Seafood",
        type: "famous",
        image: seafoodHero,
        makingImage: fishingMaking,
        flavorImage: seafoodDish,
        description:
          "A culinary journey featuring the daily catch, ranging from succulent tiger prawns to spice-crusted kingfish, prepared using a unique fusion of traditional Tamil masalas and refined French culinary techniques found only in this coastal enclave.",
        significance:
          "More than just food, seafood represents the core pulse of coastal life, sustaining generations of fishing families and defining the region's gastronomic identity through seasonal availability and time-honored maritime traditions.",
        makingProcess:
          "The journey begins at dawn with local fishermen navigating traditional catamarans. The catch is immediately auctioned at the shoreline and transitioned to hearths where it is marinated in hand-ground spices and wood-fired to perfection.",
        uses: [
          "Authentic local cuisine",
          "Gourmet beachside dining",
          "Cultural food tours",
        ],
      },
      {
        name: "Fishing Nets & Boat Craft",
        type: "underrated",
        image: netHero,
        makingImage: netMaking,
        flavorImage: netDetail,
        description:
          "An intricate display of maritime engineering, these hand-knotted nylon nets and brightly painted wooden 'vathais' (boats) stand as silent sentinels along the shoreline, representing a functional art form that has remained unchanged for centuries.",
        significance:
          "This craft is the backbone of the blue economy, embodying the resilience of the fishing community. Each knot in the net and curve of the hull tells a story of ancestral knowledge passed down through oral tradition.",
        makingProcess:
          "Artisans spend weeks meticulously weaving durable synthetic fibers into expansive mesh patterns tailored for specific fish species. Meanwhile, boat builders reinforce timber hulls with waterproof resins and vibrant pigments to withstand the corrosive salt air.",
        uses: [
          "Traditional deep-sea fishing",
          "Maritime cultural displays",
          "Coastal heritage photography",
        ],
      },
      {
        name: "Coastal Wellness & Yoga",
        type: "famous",
        image: yogaHero,
        makingImage: yogaSession,
        flavorImage: yogaDetail,
        description:
          "As the sun rises over the Bay of Bengal, Serenity Beach transforms into a natural open-air studio for yoga and meditation. The rhythmic sound of the waves and the high-iodine sea air create an ideal environment for 'Pranayama' and mindfulness practices led by local and international instructors.",
        significance:
          "This trend has shifted the beach's identity from a purely commercial fishing zone to a space for holistic healing. It attracts a global community of wellness seekers, fostering a peaceful, slow-living culture that contrasts with the bustling energy of Pondicherry's city center.",
        makingProcess:
          "Sessions are typically scheduled during the 'Golden Hour' of dawn to harness natural light and cooler temperatures. Instructors focus on flow sequences (Vinyasa) that synchronize with the natural rhythm of the tide, often incorporating sound healing using singing bowls or local instruments.",
        uses: [
          "Holistic physical and mental fitness",
          "Sunrise meditation retreats",
          "Cinematic wellness vlogging",
        ],
      },
      {
        name: "Artisanal Shell Craft",
        type: "underrated",
        image: shellHero,
        makingImage: shellMaking,
        flavorImage: shellDetail,
        description:
          "Serenity Beach's shoreline provides a rich variety of seashells that local artisans transform into delicate jewelry, home decor, and intricate curtains. This craft turns naturally discarded sea elements into sustainable art, reflecting the creative resourcefulness of the coastal inhabitants.",
        significance:
          "Shell craft is a vital supplementary income for many fishing families, particularly the women of the village. It is a form of 'slow-decor' that uses zero synthetic materials, keeping the beach's ecological footprint low while preserving a traditional decorative art form.",
        makingProcess:
          "Shells are ethically collected from the shore, sorted by size and color, and deep-cleaned using natural solutions. Artisans then use fine hand-drills to create tiny holes for threading or use natural adhesives to assemble complex mosaic patterns and figurines.",
        uses: [
          "Sustainable home interior decor",
          "Ethical coastal souvenirs",
          "Handcrafted artisanal jewelry",
        ],
      },
    ],
  },
  {
    id: "paradise-beach",
    slug: "paradise-beach",
    state: "puducherry",
    name: "Paradise Beach",
    tagline: "The Secluded Coastal Escape by the Backwaters",
    image: paradiseHero,
    mapsQuery: "Paradise Beach Puducherry",

    heroDescription:
      "Paradise Beach offers one of Puducherry’s most unique coastal experiences, where a scenic boat ride through mangrove-lined backwaters leads to a pristine stretch of golden sand. Isolated from city noise, it feels like a hidden island shaped by water, wind, and calm.",

    elevation: "Sea level",
    bestTime: "October – March",
    temperature: "25°C – 34°C",

    about:
      "Located near Chunnambar, Paradise Beach is accessible only by boat, making the journey part of the experience. The route passes through calm backwaters and mangroves before opening into a wide, clean beach. It is known for its serenity, scenic beauty, and relatively untouched environment.",

    culture:
      "The culture around Paradise Beach is closely tied to backwater ecosystems and small-scale tourism. Local boat operators and vendors form the backbone of this micro-economy, while the surrounding mangrove environment reflects a delicate balance between nature and livelihood.",

    products: [
      {
        name: "Backwater Boat Experience",
        type: "famous",
        image: boatHero,
        makingImage: boatMaking,
        flavorImage: mangroveView,
        description:
          "The journey to Paradise Beach is defined by a tranquil boat ride through backwaters lined with mangroves and estuarine landscapes. This immersive experience combines scenic beauty with calm waters, offering visitors a unique transition from inland waterways to open sea.",
        significance:
          "This boat ride is not just transport but a defining experience of the destination. It highlights Puducherry’s lesser-known backwater ecosystems and supports local livelihoods, making it an essential part of the region’s eco-tourism narrative.",
        makingProcess:
          "Motorboats operated by trained locals navigate narrow water channels surrounded by mangroves. The ride is carefully regulated to ensure safety while preserving the ecosystem. Timing, route familiarity, and water conditions play a key role in delivering a smooth experience.",
      },
      {
        name: "Beachside Local Snacks",
        type: "underrated",
        image: snackHero,
        makingImage: snackMaking,
        flavorImage: snackDetail,
        description:
          "Small vendors near Paradise Beach serve simple local snacks like fried fish, pakoras, and coconut-based refreshments. These foods reflect the coastal flavors of the region and provide quick, satisfying bites for visitors exploring the beach.",
        significance:
          "Though often overlooked, these snack stalls represent the grassroots tourism economy. They provide livelihood opportunities for local communities and offer visitors an authentic taste of coastal Puducherry beyond formal restaurants.",
        makingProcess:
          "Fresh ingredients are sourced locally and prepared in small batches using traditional frying and seasoning techniques. Cooking is done on-site with simple equipment, ensuring freshness and immediate serving to visitors.",
      },
    ],
  },
  {
    id: "tamil-quarter",
    slug: "tamil-quarter",
    state: "puducherry",
    name: "Tamil Quarter",
    tagline: "The Living Soul of Local Puducherry",
    image: tamilHero,
    mapsQuery: "Muthialpet Puducherry",

    heroDescription:
      "The Tamil Quarter reveals the authentic heartbeat of Puducherry, where vibrant streets, traditional courtyard homes, and temple rhythms shape everyday life. Unlike the polished French Quarter, this area offers a raw, immersive experience rooted in local culture and community.",

    elevation: "Sea level",
    bestTime: "All year",
    temperature: "24°C – 35°C",

    about:
      "Located beyond White Town, the Tamil Quarter is characterized by heritage Tamil houses, bustling streets, and local markets. It reflects the everyday life of Puducherry’s residents, offering deeper cultural insights through architecture, food, and traditions often missed by tourists.",

    culture:
      "The culture here is deeply rooted in Tamil traditions, with daily rituals, temple visits, and strong community interactions. Kolam designs decorate entrances, and local festivals bring streets alive, preserving a lifestyle that has remained unchanged for generations.",

    products: [
      {
        name: "Tamil Street Food",
        type: "famous",
        image: streetFoodHero,
        makingImage: streetFoodMaking,
        flavorImage: streetFoodDetail,
        description:
          "Street food in the Tamil Quarter offers authentic flavors ranging from idli and dosa to spicy snacks and sweets. Prepared fresh in small stalls, these dishes reflect the everyday culinary traditions of Puducherry’s local communities.",
        significance:
          "This food represents the real taste of Puducherry beyond tourist cafés. It connects visitors to local lifestyles and traditions, making it an essential cultural experience that highlights the region’s culinary diversity and affordability.",
        makingProcess:
          "Batter for dishes like dosa and idli is fermented overnight, while snacks are prepared fresh using local ingredients. Cooking is done on small stoves or griddles, ensuring quick preparation and immediate serving.",
      },
      {
        name: "Temple Brass & Ritual Items",
        type: "underrated",
        image: brassHero,
        makingImage: brassMaking,
        flavorImage: brassDetail,
        description:
          "Local shops in the Tamil Quarter sell brass lamps, pooja items, and ritual accessories used in daily worship. These handcrafted items are both functional and symbolic, reflecting the spiritual practices of the region.",
        significance:
          "These items are deeply tied to household and temple rituals, representing an important but under-recognized craft economy. They preserve traditional metalworking skills while supporting local artisans and religious practices.",
        makingProcess:
          "Brass is melted and cast into molds before being shaped and polished. Artisans refine each piece through engraving and finishing processes, ensuring durability and aesthetic appeal for ritual use.",
      },
    ],
  },
  {
    id: "ousteri-lake",
    slug: "ousteri-lake",
    state: "puducherry",
    name: "Ousteri Lake",
    tagline: "The Wetland Sanctuary of Migratory Life",
    image: ousteriHero,
    mapsQuery: "Ousteri Lake Puducherry",

    heroDescription:
      "Ousteri Lake is Puducherry’s hidden natural sanctuary, where calm waters, wetlands, and migratory birds create a peaceful escape from urban life. It offers a rare glimpse into the region’s ecological diversity and quiet beauty.",

    elevation: "15 m",
    bestTime: "November – February",
    temperature: "20°C – 32°C",

    about:
      "Also known as Osudu Lake, this wetland is one of the most important bird habitats in the region. It attracts migratory species and serves as a vital ecological zone. The lake is ideal for birdwatching, photography, and nature exploration.",

    culture:
      "The culture around Ousteri revolves around conservation and rural coexistence with nature. Local communities depend on the ecosystem while maintaining traditional practices that respect environmental balance.",

    products: [
      {
        name: "Birdwatching Experience",
        type: "famous",
        image: birdHero,
        makingImage: birdWatching,
        flavorImage: birdDetail,
        description:
          "Ousteri Lake offers one of the best birdwatching experiences in Puducherry, attracting migratory species during winter. The calm environment and diverse ecosystem make it ideal for nature enthusiasts and photographers.",
        significance:
          "This experience highlights Puducherry’s ecological richness beyond beaches and heritage. It promotes eco-tourism while raising awareness about wetland conservation and biodiversity preservation.",
        makingProcess:
          "Guided visits or independent exploration take place during early mornings or evenings. Observers use binoculars and cameras to spot species, while maintaining distance to avoid disturbing wildlife.",
      },
    ],
  },
  {
    id: "villianur",
    slug: "villianur",
    state: "puducherry",
    name: "Villianur",
    tagline: "The Spiritual and Festive Heartland",
    image: villianurHero,
    mapsQuery: "Villianur Puducherry",

    heroDescription:
      "Villianur is where Puducherry’s spiritual traditions come alive through grand temple festivals, rituals, and community gatherings that reflect deep-rooted cultural heritage.",

    elevation: "20 m",
    bestTime: "Festival season",
    temperature: "24°C – 36°C",

    about:
      "Known for the Thirukameswarar Temple, Villianur is a key religious center. Its annual chariot festival draws thousands of devotees, making it one of the most vibrant cultural events in the region.",

    culture:
      "The culture here revolves around temple rituals, festivals, and agricultural life, creating a strong sense of community and tradition.",

    products: [
      {
        name: "Temple Prasadam",
        type: "famous",
        image: prasadamHero,
        makingImage: prasadamMaking,
        flavorImage: prasadamDetail,
        description:
          "Temple prasadam in Villianur includes traditional offerings prepared during rituals and festivals. These items are simple yet spiritually significant, often made using rice, jaggery, and ghee.",
        significance:
          "Prasadam represents devotion and community participation, making it an integral part of temple culture and spiritual life in the region.",
        makingProcess:
          "Ingredients are prepared within temple kitchens following ritual guidelines. Cooking is done in large batches, and offerings are distributed among devotees after ceremonies.",
      },
    ],
  },
  {
    id: "veerampattinam",
    slug: "veerampattinam",
    state: "puducherry",
    name: "Veerampattinam",
    tagline: "The Coastal Village of Festivals and Fishing",
    image: veeramHero,
    mapsQuery: "Veerampattinam Puducherry",

    heroDescription:
      "Veerampattinam offers a glimpse into Puducherry’s traditional coastal life, where fishing practices, temple festivals, and community living define the rhythm of everyday life.",

    elevation: "Sea level",
    bestTime: "October – March",
    temperature: "25°C – 34°C",

    about:
      "One of the largest fishing villages near Puducherry, Veerampattinam is known for its beach, temple, and annual festivals that attract thousands of devotees and visitors.",

    culture:
      "The culture here is deeply tied to the sea, with fishing as the primary livelihood and festivals celebrating both faith and community.",

    products: [
      {
        name: "Fresh Seafood",
        type: "famous",
        image: fishHero,
        makingImage: fishingMaking,
        flavorImage: fishDetail,
        description:
          "Fresh seafood from Veerampattinam is sourced daily by local fishermen, offering a variety of fish and shellfish that reflect the richness of coastal waters.",
        significance:
          "Seafood forms the backbone of the local economy and cuisine, making it an essential aspect of coastal identity.",
        makingProcess:
          "Fishing boats head out early morning, and the catch is sorted, cleaned, and sold in local markets or prepared fresh in homes and eateries.",
      },
    ],
  },
  {
    id: "goubert-market",
    slug: "goubert-market",
    state: "puducherry",
    name: "Goubert Market",
    tagline: "The Pulse of Everyday Puducherry",
    image: marketHero,
    mapsQuery: "Goubert Market Puducherry",

    heroDescription:
      "Goubert Market is where Puducherry’s everyday life unfolds through bustling stalls of vegetables, flowers, and spices, offering a sensory-rich glimpse into local commerce and culture.",

    elevation: "Sea level",
    bestTime: "Morning",
    temperature: "25°C – 35°C",

    about:
      "This central market serves as a hub for fresh produce and local trade. It reflects the daily rhythm of the city, connecting farmers, vendors, and consumers.",

    culture:
      "The market represents the social and economic fabric of Puducherry, where interactions, bargaining, and community exchanges define the experience.",

    products: [
      {
        name: "Fresh Local Produce",
        type: "famous",
        image: vegHero,
        makingImage: marketMaking,
        flavorImage: vegDetail,
        description:
          "Goubert Market is known for its fresh vegetables, fruits, flowers, and spices sourced from nearby villages. The vibrant displays and variety reflect the agricultural richness of the region.",
        significance:
          "It supports local farmers and serves as a vital link between rural producers and urban consumers, making it an essential part of Puducherry’s food ecosystem.",
        makingProcess:
          "Produce is harvested early morning and transported directly to the market, where vendors sort, display, and sell it throughout the day.",
      },
    ],
  },
  {
    id: "bahour",
    slug: "bahour",
    state: "puducherry",
    name: "Bahour",
    tagline: "The Agricultural Landscape of Quiet Waters",
    image: bahourHero,
    mapsQuery: "Bahour Puducherry",

    heroDescription:
      "Bahour offers a peaceful rural escape defined by agricultural fields, water bodies, and traditional village life that moves at a slower, grounded pace.",

    elevation: "10 m",
    bestTime: "November – February",
    temperature: "22°C – 34°C",

    about:
      "Known for Bahour Lake and surrounding farmland, this region highlights Puducherry’s agricultural side, often overlooked by tourists.",

    culture:
      "Life here revolves around farming, seasonal cycles, and close-knit communities, preserving traditional practices.",

    products: [
      {
        name: "Paddy & Rice Cultivation",
        type: "famous",
        image: paddyHero,
        makingImage: paddyMaking,
        flavorImage: riceDetail,
        description:
          "Bahour’s agricultural fields produce rice and other crops using traditional farming methods. The region’s fertile soil and water resources support a strong agrarian economy.",
        significance:
          "Agriculture forms the backbone of rural Puducherry, sustaining livelihoods and preserving traditional farming knowledge.",
        makingProcess:
          "Fields are prepared, seeds are sown, and crops are cultivated through seasonal irrigation cycles before harvesting and processing.",
      },
    ],
  },
  {
    id: "ariyankuppam",
    slug: "ariyankuppam",
    state: "puducherry",
    name: "Ariyankuppam",
    tagline: "The Riverfront of History and Coastal Trade",
    image: ariyanHero,
    mapsQuery: "Ariyankuppam Puducherry",

    heroDescription:
      "Ariyankuppam blends river life, fishing culture, and ancient trade history, offering a unique perspective of Puducherry beyond its beaches and colonial streets.",

    elevation: "Sea level",
    bestTime: "October – March",
    temperature: "24°C – 34°C",

    about:
      "Located along a river estuary, Ariyankuppam is historically significant as an ancient trading port. Today, it continues to thrive as a fishing and riverside community.",

    culture:
      "The culture reflects a mix of history and livelihood, where fishing traditions and river-based activities shape daily life.",

    products: [
      {
        name: "River & Estuary Fishing",
        type: "famous",
        image: riverFishHero,
        makingImage: riverFishing,
        flavorImage: riverFishDetail,
        description:
          "Fishing in Ariyankuppam takes place in both river and estuary environments, producing a variety of freshwater and brackish fish. This dual ecosystem supports a diverse and sustainable fishing practice.",
        significance:
          "It represents a unique livelihood system that combines river and sea resources, sustaining local communities while preserving traditional fishing knowledge.",
        makingProcess:
          "Fishermen use nets and small boats to navigate calm waters, catching fish based on seasonal patterns and tidal movements.",
      },
    ],
  },
];

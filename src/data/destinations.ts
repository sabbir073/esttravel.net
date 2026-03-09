export interface Destination {
  slug: string;
  city: string;
  country: string;
  region: "west-africa" | "east-africa" | "southern-africa" | "central-africa" | "northeast-africa";
  tagline: string;
  description: string;
  image: string;
  flightDuration: string;
  attractions: string[];
  climate?: string;
  travelTips?: string[];
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
}

export const destinations: Destination[] = [
  {
    slug: "cheap-flights-lagos-nigeria",
    city: "Lagos",
    country: "Nigeria",
    region: "west-africa",
    tagline: "Africa's Most Vibrant City",
    description:
      "Lagos is the largest state in Nigeria and the sixth-largest city in the world by population. This historical city is famous for its beaches, resorts, nightlife, boutiques, art venues, museums, and a coastline of dramatic natural scenery. Lagos today has become one of Africa's most beautiful holiday destinations due to its historical sites and beautiful beaches.",
    image: "/images/lagos2.png",
    flightDuration: "13 hours 33 minutes from Houston",
    attractions: [
      "National Theatre",
      "The New Afrika Shrine",
      "Tarkwa Bay Beach",
      "Terra Kulture",
      "Elegushi Beach",
      "Ikeja City Mall",
      "Lekki Conservation Centre",
      "Badagry",
      "Bogobiri House",
      "Freedom Park",
    ],
    climate:
      "Lagos has a tropical savanna climate with warm temperatures year-round. The rainy season runs from April to October.",
    travelTips: [
      "Multiple airlines offer discounted fares due to high travel volume",
      "Book in advance for lower fares",
      "Our friendly customer service agents are always here to serve you",
    ],
    metaTitle: "Cheap Flights to Lagos Nigeria from USA | Cheapest Flight Tickets",
    metaDescription:
      "Book cheap flights to Lagos Nigeria from USA. EST Travel offers the cheapest flight tickets to Lagos Nigeria — plane tickets, last minute deals & discounted fares from Houston.",
    keywords: [
      "flights to lagos nigeria",
      "cheap flights to lagos nigeria",
      "cheap tickets to lagos nigeria",
      "cheapest flight to lagos nigeria",
      "plane tickets to lagos nigeria",
      "flight ticket to lagos nigeria",
      "cheap flights to lagos from usa",
      "book flights to nigeria",
      "usa to nigeria flight ticket price",
    ],
  },
  {
    slug: "cheap-flights-to-abuja",
    city: "Abuja",
    country: "Nigeria",
    region: "west-africa",
    tagline: "Nigeria's Beautiful Capital",
    description:
      "The capital city of Nigeria, Abuja is situated right at its center. Abuja was built in the 1980s and officially became Nigeria's capital on December 12, 1991. The identity of Abuja is prominently characterized by Aso Rock, a 400-meter tall stone monument left by water erosion. Abuja is also known for being the best structured and planned city in entire Africa and is also one of the wealthiest and most expensive cities.",
    image: "/images/destinations/abuja.jpg",
    flightDuration: "14 hours from Houston",
    attractions: [
      "Abuja Arts and Craft Village",
      "National Arboretum Abuja",
      "Pedam Lake",
      "The National Mosque",
      "Eagle Square",
      "Giri Pottery Centre",
      "The Velodrome",
      "Ladi Kwali Pottery Centre",
      "Ushafa Pottery Centre",
      "IBB Golf and Club",
      "National Children's Park and Zoo",
    ],
    climate:
      "Abuja has a tropical wet and dry climate with three distinct weather seasons.",
    travelTips: [
      "Nnamdi Azikiwe International Airport connects the city to destinations worldwide",
      "Book early to get the best deals on flights",
    ],
    metaTitle: "Cheap Flights to Abuja Nigeria | Book Discount Airline Tickets",
    metaDescription:
      "Book cheap flights to Abuja Nigeria from USA. EST Travel offers discounted airline tickets to Abuja — flight booking, last minute deals & cheapest fares from Houston.",
    keywords: [
      "flights to abuja nigeria",
      "cheap flights to abuja",
      "ticket to abuja",
      "abuja flight booking",
      "cheap flights to abuja nigeria",
      "book flights to nigeria",
      "cheap flights to nigeria from usa",
      "usa to nigeria flight ticket price",
    ],
  },
  {
    slug: "cheap-flights-to-nairobi",
    city: "Nairobi",
    country: "Kenya",
    region: "east-africa",
    tagline: "The Safari Capital of Africa",
    description:
      'Nairobi is the capital and the largest city in Kenya, with a population of 9,354,580 people. Known as the "Green City in the Sun" and the "Safari Capital of Africa," Nairobi is an established business hub housing thousands of local enterprises and over 100 major international corporations, offering cultural richness and proximity to national parks and wildlife attractions.',
    image: "/images/destinations/nairobi.jpg",
    flightDuration: "18 hours from Houston",
    attractions: [
      "Nairobi National Park",
      "Nairobi National Museum",
      "Karura Forest",
      "Kazuri Bead Factory and Pottery Center",
      "Giraffe Center",
      "David Sheldrick Wildlife Trust",
      "Karen Blixen Museum",
      "Nairobi Arboretum Park",
      "Carnivore Restaurant",
      "Ngong Hills",
      "Bomas of Kenya",
    ],
    climate:
      "Nairobi has a warm subtropical climate. At almost 6,000 feet, it has warm summers from December to March, cool winters with chilly evenings in June and July. August temperatures usually range about the low-70s with overcast, drizzly days.",
    travelTips: [
      "Plan travel June-September for moderate temperatures ideal for wildlife safaris",
      "Book flight tickets in advance for lower fares",
      "Travel during rainy season (March-May) for minimal tourist traffic and discounts on both tickets and hotels",
      "Friday departures offer cheapest options",
    ],
    metaTitle:
      "Cheap Flights to Nairobi Kenya | Discounted Airline Tickets",
    metaDescription:
      "Get in touch with us for cheap airline tickets to Nairobi Kenya at EST Int'l Travel. We offer discounted flight tickets & fare to Nairobi.",
  },
  {
    slug: "cheap-flights-to-johannesburg",
    city: "Johannesburg",
    country: "South Africa",
    region: "southern-africa",
    tagline: "South Africa's Economic Powerhouse",
    description:
      "Johannesburg is the largest city and economic engine in South Africa. While many tourists focus on Cape Town and other destinations, Johannesburg offers over 40 art galleries and many cultural centers and studios. Finding cheap flights is now easier than ever before with the abundance of booking engines and sites, and competition between airlines has resulted in reduced fares.",
    image: "/images/destinations/accra.jpg",
    flightDuration: "20 hours from Houston",
    attractions: [
      "40+ Art Galleries",
      "Cultural Centers and Studios",
      "Apartheid Museum",
      "Gold Reef City",
      "Constitution Hill",
    ],
    metaTitle:
      "Cheap Flight Tickets to Johannesburg | Discount Fares South Africa",
    metaDescription:
      "EST Int'l Travel offers discounted flight tickets to Johannesburg, South Africa. Book your cheap flights today.",
  },
  {
    slug: "cheap-flights-to-port-harcourt",
    city: "Port Harcourt",
    country: "Nigeria",
    region: "west-africa",
    tagline: "Nigeria's Garden City",
    description:
      "Port Harcourt is a gulf city in Rivers State in Southeast Nigeria. EST Int'l Travel has daily connections to Port Harcourt. The city features a vibrant cultural scene, beautiful beaches, and lively markets offering everything from fresh seafood to local crafts.",
    image: "/images/portharcourt.png",
    flightDuration: "14 hours from Houston",
    attractions: [
      "Port Harcourt Cultural Center",
      "Mile One Market",
      "Port Harcourt Tourist Beach",
      "Bush-bar Restaurants",
    ],
    travelTips: [
      "Try the local cuisine including roasted plantain and fish in spicy palm oil sauce",
      "Visit the Cultural Center for historical exhibits and African handicraft shops",
      "Enjoy live cultural performances",
    ],
    metaTitle:
      "Cheap Flights to Port Harcourt Nigeria | Discounted Tickets from USA",
    metaDescription:
      "Book cheap flights to Port Harcourt Nigeria from USA. EST Travel offers discounted flight tickets to Port Harcourt with daily connections from Houston.",
    keywords: [
      "flights to port harcourt nigeria",
      "cheap flights to port harcourt",
      "book flights to nigeria",
      "cheap flights to nigeria from usa",
      "nigeria flight ticket",
    ],
  },
  {
    slug: "cheap-flights-to-lome",
    city: "Lome",
    country: "Togo",
    region: "west-africa",
    tagline: "West Africa's Hidden Gem",
    description:
      "Lome serves as Togo's capital and primary port city, situated along the Gulf of Guinea in West Africa. The region features colonial architecture, including a German cathedral, alongside vibrant traditional markets and beachside accommodations. The Koutammakou landscape with Batammariba mud-tower settlements is a UNESCO World Heritage site, designated in 2004.",
    image: "/images/destinations/lagos.jpg",
    flightDuration: "15 hours from Houston",
    attractions: [
      "Grand Market",
      "White Beaches",
      "Fetish Market",
      "Koutammakou UNESCO World Heritage Site",
      "German, Portuguese and British Heritage Sites",
      "Colorful Togo Fabrics Market",
    ],
    travelTips: [
      "Early October is the most affordable travel period",
      "Book through established agencies for budget-friendly options",
      "Flexible travel dates recommended for cost savings",
    ],
    metaTitle: "Cheap Flights to Lome Togo | Discount Flight Tickets",
    metaDescription:
      "Get discounted flight tickets to Lome, Togo. EST Int'l Travel offers affordable fares to this beautiful West African destination.",
  },
  {
    slug: "cheap-flights-to-kinshasa",
    city: "Kinshasa",
    country: "DR Congo",
    region: "central-africa",
    tagline: "Africa's Second Largest City",
    description:
      "Kinshasa is the capital and largest city of the Democratic Republic of Congo, situated along the Congo River. It is the second largest city in Africa. One unforgettable experience is renting a boat with a driver for a Congo River BBQ on sandbars — an experience you will never forget.",
    image: "/images/destinations/kano.jpg",
    flightDuration: "18 hours from Houston",
    attractions: [
      "Congo River BBQ Experience",
      "Kinshasa Central Market",
      "National Museum",
      "Lola Ya Bonobo Sanctuary",
    ],
    metaTitle:
      "Cheap Flights to Kinshasa | Book Online at Discounted Fares",
    metaDescription:
      "Book cheap flights to Kinshasa, DR Congo with EST Int'l Travel. Discounted fares available.",
  },
  {
    slug: "cheap-flights-to-kano",
    city: "Kano",
    country: "Nigeria",
    region: "west-africa",
    tagline: "Nigeria's Ancient Trading City",
    description:
      "Kano is the third largest city in Nigeria and the capital of the Kano Emirate. Kano was an ancient trading city with a rich history and culture. EST Int'l Travel is known for giving you access to the cheapest tickets to Nigeria.",
    image: "/images/destinations/kano.jpg",
    flightDuration: "14 hours from Houston",
    attractions: [
      "Gidan Makama Museum",
      "Kano Marketplace (one of Africa's largest)",
      "Gidan Rumfa (13th century palace)",
      "Kano Central Mosque",
    ],
    metaTitle:
      "Cheap Flights to Kano Nigeria | Discounted Airline Tickets from USA",
    metaDescription:
      "Book cheap flights to Kano Nigeria from USA. EST Travel offers the cheapest airline tickets to Kano with discounted fares from Houston.",
    keywords: [
      "flights to kano nigeria",
      "cheap flights to kano",
      "book flights to nigeria",
      "cheap flights to nigeria from usa",
      "nigeria flight ticket",
    ],
  },
  {
    slug: "cheap-flights-to-freetown",
    city: "Freetown",
    country: "Sierra Leone",
    region: "west-africa",
    tagline: "Where History Meets Natural Beauty",
    description:
      'Freetown is the largest city and the capital of Sierra Leone. It features beautiful cotton trees which are one of the most beautiful sights you will see when fully bloomed. First settled in the 18th century by freed slaves from America, Great Britain, and Nova Scotia, it is a thriving cultural capital on the Atlantic coast.',
    image: "/images/destinations/port-harcourt.jpg",
    flightDuration: "16 hours from Houston",
    attractions: [
      "National Railway Museum",
      "Tacugama Chimpanzee Sanctuary",
      "Charlotte Falls",
      "St. George's Cathedral",
      "Lumley Beach",
      "Bunce Island",
      "Sierra Leone National Museum",
      "Cape Sierra Leone Lighthouse",
      "Ruiter Stone",
      "Bai Bureh's Drum",
    ],
    metaTitle:
      "Cheap Flights to Freetown Sierra Leone | Discount Tickets",
    metaDescription:
      "Book cheap airline flight tickets to Freetown, Sierra Leone with EST Int'l Travel. Discounted fares available.",
  },
  {
    slug: "cheap-flights-to-entebbe",
    city: "Entebbe",
    country: "Uganda",
    region: "east-africa",
    tagline: "Uganda's Gateway on Lake Victoria",
    description:
      "Entebbe is the place where being bored is never an option, located on Lake Victoria's shores. It served as Uganda's capital during the British protectorate era and remains notable for its relaxed atmosphere and natural attractions. Situated 40 kilometers from Kampala, Entebbe hosts Uganda's only international airport.",
    image: "/images/destinations/nairobi.jpg",
    flightDuration: "19 hours from Houston",
    attractions: [
      "Reptile Village",
      "Botanic Gardens",
      "Wildlife Education Center",
      "Sesse Islands",
      "Entebbe Crafts Village",
      "Entebbe Golf Club",
    ],
    travelTips: [
      "Ideal place to finish your trip due to early-morning flight availability",
    ],
    metaTitle:
      "Cheap Flights to Entebbe Uganda | Discounted Airline Tickets",
    metaDescription:
      "Get cheap airline flight tickets to Entebbe, Uganda with EST Int'l Travel. Discounted fares to Uganda.",
  },
  {
    slug: "cheap-flights-to-dar-es-salam",
    city: "Dar Es Salaam",
    country: "Tanzania",
    region: "east-africa",
    tagline: "Haven of Peace",
    description:
      "Dar Es Salaam means 'haven of peace' in Arabic and serves as Tanzania's largest city and commercial hub. Once a modest fishing village, it has grown into a metropolis with over four million residents. The city blends African, Arabic, and Indian cultures, creating an eclectic atmosphere. Its architecture reflects Swahili, German, Asian, and British influences from colonial periods. The city features a vibrant music scene, particularly Bongo Flava.",
    image: "/images/destinations/nairobi.jpg",
    flightDuration: "20 hours from Houston",
    attractions: [
      "Kivukoni Front Fish Market",
      "Lutheran Church",
      "St. Joseph Cathedral",
      "City Museum",
      "Mbudya Island",
      "Bongoyo Island",
    ],
    travelTips: [
      "Summer represents peak travel season",
      "Book early for better rates",
      "Julius Nyerere International Airport is the main airport serving Tanzania",
    ],
    metaTitle:
      "Cheap Flights to Dar Es Salaam Tanzania | Special Fares",
    metaDescription:
      "Get cheap airline tickets to Dar Es Salaam with special fares. EST Int'l Travel offers discounted flights to Tanzania.",
  },
  {
    slug: "cheap-flights-to-dakar",
    city: "Dakar",
    country: "Senegal",
    region: "west-africa",
    tagline: "Senegal's Vibrant Capital",
    description:
      "Dakar serves as Senegal's capital and largest city, positioned on the Cape Verde Peninsula along the Atlantic coast. The metropolitan area has a population of approximately 3.14 million. The destination is celebrated for museums, monuments, vibrant markets, colonial architecture, beautiful beaches, and a rich musical culture.",
    image: "/images/destinations/lagos.jpg",
    flightDuration: "12 hours from Houston",
    attractions: [
      "Island of Goree",
      "Ngor Island",
      "Layen Mausoleum",
      "Cathedral of Dakar",
      "Village des Arts",
      "Pink Lake (Lake Retba)",
      "Les Mamelles Lighthouse",
      "Musee Theodore Monod",
      "Mosque of Divinity",
    ],
    climate:
      "Dakar experiences a hot semi-arid climate. Rainy season runs July-October, optimal travel window is November-May at 24-27°C (75-81°F). Warmer months (May-November) see 29-31°C (84-88°F).",
    travelTips: [
      "Book in advance for lower fares",
      "Maintain flexible travel dates",
      "Friday departures from Houston offer the cheapest options",
    ],
    metaTitle:
      "Cheap Airline Tickets to Dakar Senegal | EST Travel",
    metaDescription:
      "EST Travel offers the cheapest airline tickets to Dakar, Senegal. Discounted fares available from Houston.",
  },
  {
    slug: "cheap-flights-to-asmara",
    city: "Asmara",
    country: "Eritrea",
    region: "northeast-africa",
    tagline: "Africa's Art Deco Capital",
    description:
      "Asmara is Eritrea's largest city with approximately 963,000 residents. At 2,325 meters (7,628 feet), it's the sixth highest capital globally. The city is known for its Italian colonial architecture, art deco buildings, wide streets, cafes, and piazzas.",
    image: "/images/destinations/abuja.jpg",
    flightDuration: "22 hours from Houston",
    attractions: [
      "National Museum Asmara",
      "Great Mosque",
      "Synagogue of Asmara",
      "Greek Orthodox Church",
      "Catholic Cathedral",
      "Simbel Archaeological Site",
      "Kohaito Archaeological Site",
      "Denkalya Desert",
      "Asmara Central Market",
      "Former Imperial Palace",
      "Former Banca d'Italia",
      "Odeon Cinema",
    ],
    climate:
      "Three seasons: rainy, wet, and dry. Summer warm and dry, winter short, cool, wet, windy. Temperature range: 48°F to 77°F annually. Best visit times: late January-late May and mid-October-late November.",
    travelTips: [
      "Flexibility with travel dates yields better prices",
      "Book in advance for cheaper fares",
      "Avoid Fridays — significantly more expensive",
    ],
    metaTitle:
      "Cheap Flights to Asmara Eritrea | Discounted Airline Tickets",
    metaDescription:
      "Get cheap airline tickets to Asmara, Eritrea with EST Int'l Travel. Discounted fares available.",
  },
  {
    slug: "cheap-flights-to-accra",
    city: "Accra",
    country: "Ghana",
    region: "west-africa",
    tagline: "Ghana's Cultural Heart",
    description:
      "Plan your trip with special fares to Accra and make your vacation one to remember forever! Accra features museums, beaches, vibrant nightlife, and markets that establish it as a premier African destination. The city is characterized by vitality and enterprising nature, with youthful energy evident throughout.",
    image: "/images/destinations/accra.jpg",
    flightDuration: "14 hours from Houston",
    attractions: [
      "Nima Neighborhood",
      "Bojo Beach",
      "Labadi Beach",
      "Arts Centre",
      "Miniature Coffins (hand-crafted artisan work)",
    ],
    travelTips: [
      "Kotoka International Airport provides direct flight access",
      "EST Int'l Travel books discounted direct flights on major airlines",
    ],
    metaTitle: "Cheap Airline Tickets to Accra Ghana | EST Travel",
    metaDescription:
      "Get cheap airline tickets to Accra, Ghana with EST Int'l Travel. Plan your trip with special fares.",
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((d) => d.slug === slug);

export const getDestinationsByRegion = (region: Destination["region"]) =>
  destinations.filter((d) => d.region === region);

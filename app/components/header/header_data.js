const HEADER_DATA = {
  nav: {
    logo: "WebApp Name",
    links: ["Home", "Classifieds", "Events", "Directory", "Post"],
  },
  search: {
    locations: ["India", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kozhikode"],
    categories: ["Classifieds", "Directory", "Events"],
    keywords: ["restaurants", "hotels", "jobs", "real estate", "cars"],
  },
  categories: [
    {
      name: "Mobiles",
      icon: "https://img.icons8.com/color/96/smartphone.png",
      subcategories: ["Mobile Phones", "Accessories", "Tablets"]
    },
    {
      name: "Cars",
      icon: "https://img.icons8.com/color/96/car--v1.png",
      subcategories: ["Cars", "Commercial Vehicles", "Other Vehicles"]
    },
    {
      name: "Properties",
      icon: "https://img.icons8.com/color/96/home.png",
      subcategories: ["For Sale: Houses & Apartments", "For Rent: Houses & Apartments", "Lands & Plots", "PG & Guest Houses"]
    },
    {
      name: "Jobs",
      icon: "https://img.icons8.com/color/96/briefcase--v1.png",
      subcategories: ["Data Entry & Back Office", "Sales & Marketing", "BPO & Telecaller", "Driver"]
    },
    {
      name: "Bikes",
      icon: "https://img.icons8.com/color/96/motorcycle.png",
      subcategories: ["Motorcycles", "Scooters", "Spare Parts", "Bicycles"]
    },
    {
      name: "Electronics",
      icon: "https://img.icons8.com/color/96/tv.png",
      subcategories: ["TVs, Video - Audio", "Kitchen & Other Appliances", "Computers & Laptops", "Cameras & Lenses"]
    }
  ],
  directory: [
    { name: "Spice Garden Restaurant", category: "Classifieds", location: "Mumbai", rating: 4.5 },
    { name: "Tech Startup Hub", category: "Directory", location: "Bangalore", rating: 4.2 },
    { name: "Royal Events Co.", category: "Events", location: "Delhi", rating: 4.8 },
    { name: "AutoDeals India", category: "Classifieds", location: "Chennai", rating: 3.9 },
    { name: "Kerala Homestays", category: "Directory", location: "Kozhikode", rating: 4.6 },
    { name: "TechConf 2025", category: "Events", location: "Bangalore", rating: 4.1 },
  ]
};

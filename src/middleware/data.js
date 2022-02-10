let rooms = [
  {
    id: 1,
    name: "Double Room with Lake View",
    image: "/assets/images/rooms/double.jpg",
    images: ["/assets/images/rooms/gallery_22.jpg"],
    // images: ["/assets/images/rooms/gallery_22.jpg", "/assets/images/rooms/gallery_23.jpg", "/assets/images/rooms/gallery_24.jpg", "/assets/images/rooms/gallery_25.jpg"],
    price: 250,
    max: 2,
    size: 25,
    view: "Lake view",
    bed: 1,
    description:
      "Suite Room, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    name: "Queen Room with Garden View",
    image: "/assets/images/rooms/queen.jpg",
    images: ["/assets/images/rooms/gallery_22.jpg", "/assets/images/rooms/gallery_23.jpg", "/assets/images/rooms/gallery_24.jpg", "/assets/images/rooms/gallery_25.jpg"],
    price: 350,
    max: 3,
    size: 40,
    view: "Garden view",
    bed: 1,
    description:
      "Family Room, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    name: "Twin Room with Garden View",
    image: "/assets/images/rooms/twin.jpg",
    images: ["/assets/images/rooms/gallery_22.jpg", "/assets/images/rooms/gallery_23.jpg", "/assets/images/rooms/gallery_24.jpg", "/assets/images/rooms/gallery_25.jpg"],
    price: 450,
    max: 4,
    size: 45,
    view: "Garden view",
    bed: 2,
    description:
      "Deluxe Room, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },

];

let services = [
  {
    name: "Free Wifi",
    icon: "flaticon-wifi-signal",
  },
  {
    name: "Easy Booking",
    icon: "flaticon-online-booking",
  },
  {
    name: "Restaurant",
    icon: "flaticon-cooking",
  },
  {
    name: "Swimming Pool",
    icon: "flaticon-swimming-pool",
  },
  {
    name: "Bicycle",
    icon: "fa fa-bicycle",
  },
  {
    name: "Help & Support",
    icon: "flaticon-reception",
  },
];

let restaurants = [
  {
    id: 1,
    name: "Grilled Beef with potatoes",
    price: "29",
    image: "assets/images/menu-1.jpg",
  },
  {
    id: 2,
    name: "Grilled Beef with potatoes",
    price: "29",
    image: "assets/images/menu-2.jpg",
  },
  {
    id: 3,
    name: "Grilled Beef with potatoes",
    price: "29",
    image: "assets/images/menu-3.jpg",
  },
  {
    id: 4,
    name: "Grilled Beef with potatoes",
    price: "29",
    image: "assets/images/menu-4.jpg",
  },
  {
    id: 5,
    name: "Grilled Beef with potatoes",
    price: "29",
    image: "assets/images/menu-5.jpg",
  },
  {
    id: 6,
    name: "Ultimate Overload",
    price: "29",
    image: "assets/images/menu-6.jpg",
  },
  {
    id: 7,
    name: "Grilled Beef with potatoes",
    price: "29",
    image: "assets/images/menu-7.jpg",
  },
  {
    id: 8,
    name: "Ham & Pineapple",
    price: "29",
    image: "assets/images/menu-8.jpg",
  },
];

let comments = [
  {
    name: "Jessica",
    position: "Canada",
    avatar: "assets/images/avatar-comment.png",
    comment:
      "Absolutely beautiful Had a wonderful stay here! The meals were so delicious. You can tell that so much thought and care goes into running the property.",
  },
  {
    name: "Kim",
    position: "VietNam",
    avatar: "assets/images/avatar-comment.png",
    comment:
      "The staff is super nice and helpful. You can feel they are nice by nature and they are happy to be helpful. Beautiful de",
  },
  {
    name: "Trevor",
    position: "Vietnam",
    avatar: "assets/images/avatar-comment.png",
    comment:
      "Relaxation, nature and beauty sums up the stay perfectly. Will be back many times",
  },
  {
    name: "Margaret",
    position: "United Kingdom",
    avatar: "assets/images/avatar-comment.png",
    comment: "We loved our short stay in this beautiful rural retreat!",
  },
  {
    name: "Veronika",
    position: "DRINKS MANAGER",
    avatar: "assets/images/avatar-comment.png",
    comment:
      "A perfect place to relax and explore Mekong.  Loved the relaxing atmosphere, the staff, the surroundings - and the sunset-view over Mekong river!",
  },
  {
    name: "Time_travellers",
    position: "Switzerland",
    avatar: "assets/images/avatar-comment.png",
    comment:
      "Amazing stay...would book again!Liked · We loved our stay at the Eco Lodge: Amazing staff, relaxed location, great boat trips, free bikes to explore the local village, amazing breakfast.",
  },
  {
    name: "Bertd",
    position: "Netherlands",
    avatar: "assets/images/avatar-comment.png",
    comment:
      "The locstion was grest, the staff unbelievable friendly and helpfull.",
  },
];

let blogs = [
  {
    id: 1,
    name: "Best Hotel Near Beach in Hawaii",
    image: "assets/images/blogs/blog_1.jpg",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Admin",
    createdAt: "DEC. 19, 2021",
  },
  {
    id: 2,
    name: "Best Hotel Near Beach in Hawaii",
    image: "assets/images/blogs/blog_3.jpg",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Admin",
    createdAt: "DEC. 19, 2021",
  },
  {
    id: 3,
    name: "Best Hotel Near Beach in Hawaii",
    image: "assets/images/blogs/blog_5.jpg",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Admin",
    createdAt: "DEC. 19, 2021",
  },
  {
    id: 4,
    name: "Best Hotel Near Beach in Hawaii",
    image: "assets/images/blogs/blog_9.jpg",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Admin",
    createdAt: "DEC. 19, 2021",
  },
  {
    id: 5,
    name: "Best Hotel Near Beach in Hawaii",
    image: "assets/images/blogs/blog_6.jpg",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Admin",
    createdAt: "DEC. 19, 2021",
  },
  {
    id: 6,
    name: "Best Hotel Near Beach in Hawaii",
    image: "assets/images/blogs/blog_7.jpg",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Admin",
    createdAt: "DEC. 19, 2021",
  },
  {
    id: 7,
    name: "Best Hotel Near Beach in Hawaii",
    image: "assets/images/blogs/blog_2.jpg",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Admin",
    createdAt: "DEC. 19, 2021",
  },
  {
    id: 8,
    name: "Best Hotel Near Beach in Hawaii",
    image: "assets/images/image_8.jpg",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Admin",
    createdAt: "DEC. 19, 2021",
  },
];

let galeries = [
  {
    url: "assets/images/gallery_17/gallery_1.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_2.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_3.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_6.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_9.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_10.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_11.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_13.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_16.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_19.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_18.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_14.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_15.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_20.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_21.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_22.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_23.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_24.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_25.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_26.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_27.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_28.jpg",
  },
  {
    url: "assets/images/gallery_17/gallery_29.jpg",
  },
];

export function getRooms() {
  return rooms;
}

export function getServices() {
  return services;
}

export function getRestaurants() {
  return restaurants;
}

export function getComnents() {
  return comments;
}

export function getBlogs() {
  return blogs;
}

export function getGaleries() {
  return galeries;
}

export function getRoomDetail(id) {
  return rooms.find(r => r.id === id)
}
const menu = [
    // Breakfast items
    {
      id: 1,
      category: "Breakfast",
      title: "Pancakes",
      description: "Fluffy pancakes served with maple syrup and butter.",
      image: "https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg",
      price: 6.99,
    },
    {
      id: 2,
      category: "Breakfast",
      title: "Omelette",
      description: "Three-egg omelette with cheese, onions, and peppers.",
      image: "https://www.emborg.com/app/uploads/2023/07/1200x900px_Easy_Cheese_Omelette.png",
      price: 5.99,
    },
    {
      id: 3,
      category: "Breakfast",
      title: "French Toast",
      description: "Golden-brown French toast topped with powdered sugar.",
      image: "https://d1ssu070pg2v9i.cloudfront.net/pex/simonhowie/2021/05/24175524/Cinnamon-Bacon-French-Toast-1200-x-630.jpg",
      price: 7.49,
    },
    {
      id: 4,
      category: "Breakfast",
      title: "Smoothie Bowl",
      description: "Healthy smoothie bowl topped with fresh fruits and granola.",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Smoothie-bowl-16df176.jpg",
      price: 8.99,
    },
    {
      id: 5,
      category: "Breakfast",
      title: "Bagel with Cream Cheese",
      description: "Toasted bagel spread with creamy cheese.",
      image: "https://realfood.tesco.com/media/images/2726-Bagel-1-h-51d92834-3fd1-4c64-b6c2-8c00514d37d0-0-472x310.jpg",
      price: 4.49,
    },
    // Lunch items
    {
      id: 6,
      category: "Lunch",
      title: "Grilled Chicken Salad",
      description: "Fresh greens topped with grilled chicken and dressing.",
      image: "https://assets.epicurious.com/photos/64a845e67799ee8651e4fb8f/4:3/w_5322,h_3991,c_limit/AshaGrilledChickenSalad_RECIPE_070523_56498.jpg",
      price: 10.99,
    },
    {
      id: 7,
      category: "Lunch",
      title: "Spaghetti Bolognese",
      description: "Classic Italian pasta dish with rich meat sauce.",
      image: "https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36.jpg",
      price: 12.99,
    },
    {
      id: 8,
      category: "Lunch",
      title: "Cheeseburger",
      description: "Juicy beef patty with cheese, lettuce, and tomato.",
      image: "https://leitesculinaria.com/wp-content/uploads/2020/02/classic-cheeseburger-1200.jpg",
      price: 9.49,
    },
    {
      id: 9,
      category: "Lunch",
      title: "Vegetable Stir-fry",
      description: "Mixed vegetables stir-fried with soy sauce and spices.",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2008/01/Vegetable-stir-fry-b669c05.jpg",
      price: 8.99,
    },
    {
      id: 10,
      category: "Lunch",
      title: "Chicken Wrap",
      description: "Grilled chicken wrapped with fresh veggies in a tortilla.",
      image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Wrap.jpg",
      price: 7.99,
    },
    {
      id: 11,
      category: "Lunch",
      title: "Fish Tacos",
      description: "Crispy fish tacos served with tangy slaw and salsa.",
      image: "https://www.seriouseats.com/thmb/CW-G1gz5SBWfiIT2HzLmcyTe_4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240720-Baja-Fish-Tacos-Qi-Ai-hero-01-tray-SEA-52ac6ca81d9241df93ca4712614fe14b.jpg",
      price: 11.49,
    },
    // Shakes items
    {
      id: 12,
      category: "Shakes",
      title: "Chocolate Shake",
      description: "Rich and creamy chocolate shake topped with whipped cream.",
      image: "https://recipefairy.com/wp-content/uploads/2019/12/chocolate-milkshake-with-icecream-scaled.jpg",
      price: 4.99,
    },
    
    {
      id: 13,
      category: "Shakes",
      title: "Banana Shake",
      description: "Creamy banana shake made with ripe bananas and milk.",
      image: "https://abeautifulmess.com/wp-content/uploads/2023/04/banana-smoothie-recipe.jpg",
      price: 4.49,
    },
    {
      id: 14,
      category: "Shakes",
      title: "Mango Shake",
      description: "Sweet and refreshing mango shake, perfect for summer.",
      image: "https://veggiedesserts.com/wp-content/uploads/2021/03/mango-shake-5sq.jpg",
      price: 5.49,
    },
  ];
  


  const btns = [

    {
        id: 1,
        title: 'All'
    },
    {
        id: 2,
        title: 'Breakfast'
    },
    {
        id: 3,
        title: 'Lunch'
    },
    {
        id: 4,
        title: 'Shakes'
    },
]
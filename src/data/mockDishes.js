export const dishes = [
  {
    id: 1,
    name: "Paneer Tikka",
    type: "VEG",
    mealType: "STARTER",
    category: { id: 1, name: "North Indian" },
    description: "Chunks of paneer marinated in spices and grilled to perfection.",
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Capsicum", quantity: "1" },
      { name: "Onion", quantity: "1" },
      { name: "Spices", quantity: "2 tbsp" }
    ]
  },
  {
    id: 2,
    name: "Chicken Tikka",
    type: "NON-VEG",
    mealType: "STARTER",
    category: { id: 1, name: "North Indian" },
    description: "Juicy chicken chunks grilled in a clay oven with aromatic spices.",
    image: "https://chefadora.b-cdn.net/medium_Gemini_Generated_Image_fklym8fklym8fkly_e5530149e2.jpeg",
    ingredients: [
      { name: "Chicken", quantity: "300g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "2 tbsp" },
      { name: "Lemon juice", quantity: "1 tbsp" }
    ]
  },
  {
    id: 3,
    name: "Veg Spring Rolls",
    type: "VEG",
    mealType: "STARTER",
    category: { id: 3, name: "Indo-Chinese" },
    description: "Crispy rolls stuffed with noodles and vegetables.",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg",
    ingredients: [
      { name: "Spring roll sheets", quantity: "6" },
      { name: "Cabbage", quantity: "1/2 cup" },
      { name: "Carrot", quantity: "1/2 cup" },
      { name: "Noodles", quantity: "1/2 cup" }
    ]
  },
  {
    id: 4,
    name: "Chilli Chicken",
    type: "NON-VEG",
    mealType: "STARTER",
    category: { id: 3, name: "Indo-Chinese" },
    description: "Fried chicken tossed in a spicy soy-garlic sauce with capsicum.",
    image: "https://images.slurrp.com/prod/recipe_images/transcribe/side%20dish/Chilli_Chicken.webp?impolicy=slurrp-20210601&width=1200&height=675",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Capsicum", quantity: "1" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "5 cloves" }
    ]
  },
  {
    id: 5,
    name: "Hara Bhara Kabab",
    type: "VEG",
    mealType: "STARTER",
    category: { id: 1, name: "North Indian" },
    description: "Healthy kababs made with spinach, peas, and potatoes.",
    image: "https://carveyourcraving.com/wp-content/uploads/2024/03/hara-bhara-kebab_.jpg",
    ingredients: [
      { name: "Spinach", quantity: "1 cup" },
      { name: "Potato", quantity: "2" },
      { name: "Green peas", quantity: "1/2 cup" },
      { name: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 6,
    name: "Tandoori Chicken",
    type: "NON-VEG",
    mealType: "STARTER",
    category: { id: 1, name: "North Indian" },
    description: "Chicken marinated in yogurt & spices, roasted in a tandoor.",
    image: "https://sinfullyspicy.com/wp-content/uploads/2014/07/3-3.jpg",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Tandoori masala", quantity: "2 tbsp" },
      { name: "Lemon juice", quantity: "2 tsp" }
    ]
  },
  {
    id: 7,
    name: "Aloo Tikki",
    type: "VEG",
    mealType: "STARTER",
    category: { id: 5, name: "Street Food" },
    description: "Crispy fried potato patties served with chutneys.",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Crispy-Aloo-Tikki-Recipe.jpg",
    ingredients: [
      { name: "Potato", quantity: "3" },
      { name: "Bread crumbs", quantity: "1/2 cup" },
      { name: "Coriander", quantity: "2 tbsp" },
      { name: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 8,
    name: "Seekh Kebab",
    type: "NON-VEG",
    mealType: "STARTER",
    category: { id: 1, name: "Mughlai" },
    description: "Minced meat skewers spiced and grilled.",
    image: "https://spicecravings.com/wp-content/uploads/2021/03/Chicken-Seekh-Kebab-Featured-1.jpg",
    ingredients: [
      { name: "Minced meat", quantity: "300g" },
      { name: "Onion", quantity: "1 small" },
      { name: "Ginger-garlic paste", quantity: "1 tbsp" },
      { name: "Spices", quantity: "1 tbsp" }
    ]
  },
  {
    id: 9,
    name: "Dahi Puri",
    type: "VEG",
    mealType: "STARTER",
    category: { id: 5, name: "Street Food" },
    description: "Crispy puris filled with yogurt, chutneys, and sev.",
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2023/07/dahi-puri-featured.jpg",
    ingredients: [
      { name: "Puris", quantity: "6" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Chutney", quantity: "2 tbsp" },
      { name: "Sev", quantity: "1/4 cup" }
    ]
  },
  {
    id: 10,
    name: "Veg Manchurian",
    type: "VEG",
    mealType: "STARTER",
    category: { id: 3, name: "Indo-Chinese" },
    description: "Crispy veg balls tossed in tangy and spicy sauce.",
    image: "http://www.maatamanti.com/wp-content/uploads/2017/10/Veg-Manchurian2.jpg",
    ingredients: [
      { name: "Cabbage", quantity: "1 cup" },
      { name: "Carrot", quantity: "1 cup" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Corn flour", quantity: "3 tbsp" }
    ]
  },
  {
  id: 11,
  name: "Butter Chicken",
  type: "NON-VEG",
  mealType: "MAIN COURSE",
  category: { id: 1, name: "North Indian" },
  description: "Chicken cooked in creamy tomato gravy with butter.",
  image: "https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg",
  ingredients: [
    { name: "Chicken", quantity: "500g" },
    { name: "Tomato", quantity: "3 medium" },
    { name: "Butter", quantity: "3 tbsp" },
    { name: "Cream", quantity: "3 tbsp" }
  ]
},
{
  id: 12,
  name: "Palak Paneer",
  type: "VEG",
  mealType: "MAIN COURSE",
  category: { id: 1, name: "North Indian" },
  description: "Paneer cubes simmered in spinach gravy.",
  image: "https://seitansociety.com/wp-content/uploads/2021/10/PalakPaneer1280x903.jpg",
  ingredients: [
    { name: "Spinach", quantity: "300g" },
    { name: "Paneer", quantity: "200g" },
    { name: "Garlic", quantity: "5 cloves" },
    { name: "Cream", quantity: "2 tbsp" }
  ]
},
{
  id: 13,
  name: "Chicken Biryani",
  type: "NON-VEG",
  mealType: "MAIN COURSE",
  category: { id: 2, name: "Hyderabadi" },
  description: "Fragrant rice layered with marinated chicken & spices.",
  image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
  ingredients: [
    { name: "Chicken", quantity: "500g" },
    { name: "Basmati Rice", quantity: "2 cups" },
    { name: "Biryani Masala", quantity: "2 tbsp" },
    { name: "Onions", quantity: "2 fried" }
  ]
},
{
  id: 14,
  name: "Veg Biryani",
  type: "VEG",
  mealType: "MAIN COURSE",
  category: { id: 2, name: "Hyderabadi" },
  description: "Fragrant rice cooked with mixed vegetables and Indian spices.",
  image: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Veg-Biryani-2-3.jpg",
  ingredients: [
    { name: "Basmati Rice", quantity: "2 cups" },
    { name: "Mixed Vegetables", quantity: "1 cup" },
    { name: "Masala", quantity: "2 tbsp" },
    { name: "Onions", quantity: "2 fried" }
  ]
},
{
  id: 15,
  name: "Paneer Butter Masala",
  type: "VEG",
  mealType: "MAIN COURSE",
  category: { id: 1, name: "North Indian" },
  description: "Paneer cooked in buttery tomato-based gravy.",
  image: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg",
  ingredients: [
    { name: "Paneer", quantity: "200g" },
    { name: "Tomato Puree", quantity: "1 cup" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Cream", quantity: "2 tbsp" }
  ]
},
{
  id: 16,
  name: "Dal Makhani",
  type: "VEG",
  mealType: "MAIN COURSE",
  category: { id: 1, name: "North Indian" },
  description: "Black lentils & kidney beans slow cooked with butter & cream.",
  image: "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg",
  ingredients: [
    { name: "Black Lentils (urad dal)", quantity: "1 cup" },
    { name: "Kidney Beans", quantity: "1/4 cup" },
    { name: "Butter", quantity: "3 tbsp" },
    { name: "Cream", quantity: "2 tbsp" }
  ]
},
{
  id: 17,
  name: "Rogan Josh",
  type: "NON-VEG",
  mealType: "MAIN COURSE",
  category: { id: 1, name: "Kashmiri" },
  description: "Aromatic lamb curry with Kashmiri spices.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rogan_Josh_Kashmiri.jpg/330px-Rogan_Josh_Kashmiri.jpg",
  ingredients: [
    { name: "Lamb", quantity: "500g" },
    { name: "Yogurt", quantity: "1/2 cup" },
    { name: "Kashmiri chilli powder", quantity: "2 tsp" },
    { name: "Whole spices (cloves, cardamom, cinnamon)", quantity: "1 tsp each" }
  ]
},
{
  id: 18,
  name: "Kadhai Paneer",
  type: "VEG",
  mealType: "MAIN COURSE",
  category: { id: 1, name: "North Indian" },
  description: "Paneer cubes cooked with bell peppers and kadhai masala.",
  image: "https://orders.popskitchen.in/storage/2024/09/image-265.png",
  ingredients: [
    { name: "Paneer", quantity: "200g" },
    { name: "Bell peppers", quantity: "1 cup assorted" },
    { name: "Tomato", quantity: "1 medium" },
    { name: "Kadhai masala", quantity: "2 tbsp" }
  ]
},
{
  id: 19,
  name: "Fish Curry",
  type: "NON-VEG",
  mealType: "MAIN COURSE",
  category: { id: 1, name: "South Indian" },
  description: "Tangy & spicy fish curry in traditional South Indian style.",
  image: "https://vismaifood.com/storage/app/uploads/public/daa/96d/7bc/thumb__700_0_0_0_auto.jpg",
  ingredients: [
    { name: "Fish", quantity: "500g" },
    { name: "Tamarind", quantity: "2 tbsp" },
    { name: "Coconut milk", quantity: "1/2 cup" },
    { name: "Spices", quantity: "as per taste" }
  ]
},
{
  id: 20,
  name: "Chole Bhature",
  type: "VEG",
  mealType: "MAIN COURSE",
  category: { id: 6, name: "North Indian" },
  description: "Spiced chickpea curry served with deep-fried fluffy bread (bhature).",
  image: "http://www.tasty-indian-recipes.com/wp-content/uploads/2014/08/Chole-Bhature-Recipe.jpg",
  ingredients: [
    { name: "Chickpeas", quantity: "1 cup" },
    { name: "Tomato", quantity: "2 medium" },
    { name: "Bhature (flour)", quantity: "2 cups" },
    { name: "Spices", quantity: "2 tbsp" }
  ]
},
{
  id: 21,
  name: "Gulab Jamun",
  type: "VEG",
  mealType: "DESSERT",
  category: { id: 4, name: "Indian Sweets" },
  description: "Soft fried balls made of khoya, soaked in sugar syrup.",
  image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp",
  ingredients: [
    { name: "Milk powder / Khoya", quantity: "200g" },
    { name: "Sugar syrup", quantity: "1 cup" },
    { name: "Cardamom", quantity: "2 pods" },
    { name: "Rose water", quantity: "1 tsp" }
  ]
},
{
  id: 22,
  name: "Rasgulla",
  type: "VEG",
  mealType: "DESSERT",
  category: { id: 4, name: "Indian Sweets" },
  description: "Soft spongy chhena balls in sugar syrup.",
  image: "https://madhurasrecipe.com/wp-content/uploads/2023/10/Rasgulla-Featured-Image.jpg",
  ingredients: [
    { name: "Chhena", quantity: "1 cup" },
    { name: "Sugar", quantity: "1 cup" },
    { name: "Water", quantity: "2 cups" },
    { name: "Rose water", quantity: "1 tsp" }
  ]
},
{
  id: 23,
  name: "Jalebi",
  type: "VEG",
  mealType: "DESSERT",
  category: { id: 4, name: "Indian Sweets" },
  description: "Deep-fried spirals soaked in saffron sugar syrup.",
  image: "https://static.toiimg.com/photo/53099699.cms",
  ingredients: [
    { name: "Flour (maida)", quantity: "1 cup" },
    { name: "Sugar syrup", quantity: "2 cups" },
    { name: "Saffron", quantity: "a pinch" }
  ]
},
{
  id: 24,
  name: "Kheer",
  type: "VEG",
  mealType: "DESSERT",
  category: { id: 4, name: "Indian Sweets" },
  description: "Traditional Indian rice pudding with milk, rice, and dry fruits.",
  image: "https://shivanilovesfood.com/wp-content/uploads/2024/01/Creamy-Kheer-4.jpg",
  ingredients: [
    { name: "Rice", quantity: "1/4 cup" },
    { name: "Milk", quantity: "2 cups" },
    { name: "Sugar", quantity: "1/2 cup" },
    { name: "Dry fruits", quantity: "2 tbsp" }
  ]
},
{
  id: 25,
  name: "Ice Cream (Kulfi)",
  type: "VEG",
  mealType: "DESSERT",
  category: { id: 4, name: "Indian Sweets" },
  description: "Dense and creamy Indian ice cream flavored with pistachio and cardamom.",
  image: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg",
  ingredients: [
    { name: "Milk / Kulfi mix", quantity: "2 cups" },
    { name: "Pistachio", quantity: "2 tbsp" },
    { name: "Sugar", quantity: "1/2 cup" }
  ]
},
{
  id: 26,
  name: "Garlic Naan",
  type: "VEG",
  mealType: "SIDES",
  category: { id: 6, name: "Indian Breads" },
  description: "Soft and fluffy leavened flatbread flavored with garlic and butter.",
  image: "https://i0.wp.com/kennascooks.com/wp-content/uploads/2024/04/img_6240.jpg?fit=1500%2C2000&ssl=1",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Garlic", quantity: "2 tbsp" },
    { name: "Butter", quantity: "2 tbsp" },
    { name: "Yeast", quantity: "1 tsp" }
  ]
},
{
  id: 27,
  name: "Jeera Rice",
  type: "VEG",
  mealType: "SIDES",
  category: { id: 6, name: "Indian Rice" },
  description: "Fragrant basmati rice tempered with cumin seeds.",
  image: "https://www.funfoodfrolic.com/wp-content/uploads/2022/11/Jeera-Rice-Blog-500x500.jpg",
  ingredients: [
    { name: "Basmati Rice", quantity: "1 cup" },
    { name: "Cumin seeds", quantity: "1 tsp" },
    { name: "Ghee", quantity: "1 tbsp" },
    { name: "Coriander", quantity: "1 tbsp" }
  ]
},
{
  id: 28,
  name: "Raita",
  type: "VEG",
  mealType: "SIDES",
  category: { id: 7, name: "Indian Accompaniments" },
  description: "Refreshing yogurt-side dish with onion & spices.",
  image: "https://cdn.foodfaithfitness.com/uploads/2024/09/Raita-Recipe-A_fff_Raita-Recipe6859_Feature-2.jpg",
  ingredients: [
    { name: "Yogurt", quantity: "1 cup" },
    { name: "Onion", quantity: "1 small" },
    { name: "Cumin powder", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" }
  ]
},
{
  id: 29,
  name: "Green Salad",
  type: "VEG",
  mealType: "SIDES",
  category: { id: 7, name: "Healthy" },
  description: "Fresh mixed salad with corn, tomato, avocado, and greens.",
  image: "https://leelalicious.com/wp-content/uploads/2018/08/Corn-Tomato-Avocado-Salad-Recipe-500x500.jpg",
  ingredients: [
    { name: "Corn", quantity: "½ cup" },
    { name: "Tomato", quantity: "1" },
    { name: "Avocado", quantity: "½" },
    { name: "Lettuce/Greens", quantity: "1 cup" },
    { name: "Lemon juice", quantity: "1 tbsp" }
  ]
},
{
  id: 30,
  name: "Pickle",
  type: "VEG",
  mealType: "SIDES",
  category: { id: 7, name: "Indian Accompaniments" },
  description: "Tangy mango pickle served as a sharp sides to balance meals.",
  image: "https://i.pinimg.com/736x/72/29/33/7229331ce38f820482b9c7048a171669.jpg",
  ingredients: [
    { name: "Raw mango", quantity: "200g" },
    { name: "Mustard oil", quantity: "2 tbsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Chili powder", quantity: "1 tbsp" },
    { name: "Fenugreek seeds", quantity: "½ tsp" }
  ]
}
];

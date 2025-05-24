type MenuItem = {
  name: string
  origin: string
  description: string
  price: string
  image: string
  category: "Breakfast" | "Lunch Special" | "Empanadas" | "Entrees" | "Salad" | "Sopes" | "Burritos" | "Pupusas" | "Quesadillas" | "Mofongo" | "Tacos" | "Sandwiches" | "Antojitos" | "Shakes / Batidos"
}

export const menuItems: MenuItem[] = [
    // Breakfast
  {
      name: "American Breakfast",
      origin: "USA",
      description: "2 eggs over easy or scrambled, sausage, bacon, ham, chorizo, home fries & toast",
      price: "$9.95",
      image: "/img/american_breakfast.avif?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Western Omelette",
      origin: "USA",
      description: "Omelette with onions & peppers, ham, home fries & toast",
      price: "$10.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Veggie White",
      origin: "USA",
      description: "Egg white omelette with spinach, tomato, brocolli, mushrooms & peppers",
      price: "$10.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Chapin",
      origin: "Guatemala",
      description: "2 eggs, black beans, maduros, avocado, sour cream & tortillas",
      price: "$10.50",
      image: "/img/chapin.avif?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Manny's",
      origin: "",
      description: "3 eggs, grilled chicken, aguacate, queso fresco & home fries",
      price: "$13.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Bouton",
      origin: "USA",
      description: "3 eggs, beef steak, beans, home fries & toast",
      price: "$13.95",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Gallo Pinto",
      origin: "Costa Rico",
      description: "2 eggs, gallo pinto & avocado",
      price: "$11.00",
      image: "/img/gallo_pinto.jpg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Pancake",
      origin: "USA",
      description: "2 pancakes, scrambled eggs, bacon or sausage",
      price: "$9.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "French Toast",
      origin: "USA",
      description: "2 french toast, bacon, ham, sausage, chorizo or eggs",
      price: "$10.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "#1 Wrap (Breakfast Wraps/Burritos)",
      origin: "",
      description: "Eggs, sausage, bacon, cheese & home fries",
      price: "$8.00",
      image: "/img/breakfast_wraps_1.jpg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "#2 Wrap (Breakfast Wraps/Burritos)",
      origin: "",
      description: "Eggs, spinach, cheese & home fries",
      price: "$7.00",
      image: "/img/breakfast_wraps_1.jpg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "#3 Wrap (Breakfast Wraps/Burritos)",
      origin: "",
      description: "Egg white omelette with spinach, tomato, brocolli, mushrooms & peppers",
      price: "$8.00",
      image: "/img/breakfast_wraps_1.jpg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Bacon, Egg & Cheese Sandwich",
      origin: "USA",
      description: "Add on a wedge +$3.00",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Sausage, Egg & Cheese Sandwich",
      origin: "USA",
      description: "Add on a wedge +$3.00",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Ham, Egg & Cheese Sandwich",
      origin: "USA",
      description: "Add on a wedge +$3.00",
      price: "5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Steak, Chorizo or Turkey Sandwich",
      origin: "USA",
      description: "Add on a wedge +$3.00",
      price: "$6.75",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },
    {
      name: "Healthy Sandwich",
      origin: "USA",
      description: "Egg Whites, Spinach, Avocado, Cheese on WHOLE WHEAT. Add on a wedge +$3.00",
      price: "$6.75",
      image: "/placeholder.svg?height=300&width=400",
      category: "Breakfast",
    },

    //Lunch Special
    {
      name: "Sopa del dia /  Soup of the day",
      origin: "",
      description: "Served with rice, beans, today's stewed beef special, and a canned soda.",
      price: "$13.00",
      image: "/img/sopa_del_dia.jpg?height=300&width=400",
      category: "Lunch Special",

    },
    {
      name: "Sopa de Marisco / Seafood Soup",
      origin: "",
      description: "House-made daily - always different, always delicious!",
      price: "$15.00",
      image: "/img/sopa_de_marisco.jpg?height=300&width=400",
      category: "Lunch Special",

    },
    {
      name: "Pescado / Fish (Friday & Saturday only)",
      origin: "",
      description: "Rice, tostones and salad",
      price: "$20.00",
      image: "/img/pescado.jpg?height=300&width=400",
      category: "Lunch Special",

    },
    {
      name: "Ceviche de Camarones (Friday & Saturday only)",
      origin: "",
      description: "Served with plantain chips",
      price: "$20.00",
      image: "/img/ceviche_de_camarones.avif?height=300&width=400",
      category: "Lunch Special",

    },

    //Empanadas
    {
      name: "Beef",
      origin: "",
      description: "Freshly fried beef empanada",
      price: "$3.50",
      image: "/img/empanadas.jpg?height=300&width=400",
      category: "Empanadas",

    },
    {
      name: "Beef & Cheese",
      origin: "",
      description: "Freshly fried beef and cheese empanada",
      price: "$3.50",
      image: "/img/empanadas.jpg?height=300&width=400",
      category: "Empanadas",

    },
    {
      name: "Chicken",
      origin: "",
      description: "Freshly fried chicken empanada",
      price: "$3.50",
      image: "/img/empanadas.jpg?height=300&width=400",
      category: "Empanadas",

    },
    {
      name: "Ham & Cheese",
      origin: "",
      description: "Freshly fried ham and cheese empanada",
      price: "$3.50",
      image: "/img/empanadas.jpg?height=300&width=400",
      category: "Empanadas",

    },
    {
      name: "Carne Desmechada",
      origin: "",
      description: "Freshly fried carne desmechada empanada",
      price: "$3.50",
      image: "/img/empanadas.jpg?height=300&width=400",
      category: "Empanadas",

    },

    //Entrees
    {
      name: "Bandeja Paisa",
      origin: "Colombia",
      description: "Rice, Beans, Chicharron, Carne Asada, 2 eggs, chorizo, avocado & sweet plantains",
      price: "$17.95",
      image: "/img/bandeja_paisa.avif?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Chaulafan",
      origin: "Ecuador",
      description: "Chicken, steak or shrimp with mixed rice, eggs, stewed in soy sauce",
      price: "$17.95",
      image: "/img/chaulafan.jpg?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Pechuga a la Plancha",
      origin: "",
      description: "Rice, beans, grilled chicken, avocado & salad",
      price: "$15.95",
      image: "/placeholder.svg?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Chicharron Pork Belly",
      origin: "",
      description: "Tostones, rice, beans & salad",
      price: "$15.95",
      image: "/placeholder.svg?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Carne Asada",
      origin: "",
      description: "Rice, beans, ribeye steak, french fries, salad",
      price: "$18.95",
      image: "/placeholder.svg?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Milanesa de Pollo",
      origin: "",
      description: "Rice, French fries & salad",
      price: "$15.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Tilapia",
      origin: "",
      description: "Tilapia fried or gilled, served with rice, tostones & salad",
      price: "$18.95",
      image: "/img/tilapia.avif?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Camarones al ajillo or grilled",
      origin: "",
      description: "Camarones al ajillo o al grill, rice, french fries, salad",
      price: "$17.95",
      image: "/placeholder.svg?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Lomo Salteado",
      origin: "",
      description: "Ribey, stean ,french fries, tomatoes, rice",
      price: "$18.95",
      image: "/img/lomo_saltado.jpg?height=300&width=400",
      category: "Entrees",

    },
    {
      name: "Picada",
      origin: "",
      description: "Chicharron, friedpork, chicken wings, chorizo, tostones, yuca, sweet plantain & pink sauce",
      price: "$40.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Entrees",

    },

    // Salad
    {
      name: "House Salad",
      origin: "USA",
      description: "Lettuce, tomato, cucumbers, onions, olives, house dressing",
      price: "$9.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Salad",
    },
    {
      name: "Chef Salad",
      origin: "USA",
      description: "Lettuce, tomato, cucumbers, olives, boiled eggs, ham, turkey & provolone cheese",
      price: "$12.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Salad",
    },
    {
      name: "Avocado Salad",
      origin: "Italian",
      description: "Chopped peppers, onions, cilantro, tomato & corn",
      price: "$9.30",
      image: "/placeholder.svg?height=300&width=400",
      category: "Salad",
    },
    {
      name: "Add Chicken",
      origin: "",
      description: "grilled chicken",
      price: "$3.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Salad",
    },
    {
      name: "Add Shrimp",
      origin: "",
      description: "grilled shrimp",
      price: "$4.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Salad",
    },
    
    // Sopes 
    {
      name: "Chicken, Pork, Chorizo",
      origin: "",
      description: "Served with beans, lettuce, tomato, avocado, queso fresco & cream",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sopes",
    },
    {
      name: "Shrimp",
      origin: "",
      description: "Served with beans, lettuce, tomato, avocado, queso fresco & cream",
      price: "$6.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sopes",
    },
    {
      name: "Torta Mexicana",
      origin: "Mexico",
      description: "Chorizo, black beans, cheese, avocado, lettuce, tomato, queso fresco and cream",
      price: "$10.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sopes",
    },
    {
      name: "Mula",
      origin: "",
      description: "Served with beans, lettuce, tomato, avocado, queso fresco & cream",
      price: "$10.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sopes",
    },

    //Burritos
    {
      name: "Beef",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$10.95",
      image: "/placeholder.svg?height=300&width=400",
      category: "Burritos",
    },
    {
      name: "Shrimp",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$13.95",
      image: "/placeholder.svg?height=300&width=400",
      category: "Burritos",
    },
    {
      name: "Chicken",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$10.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Burritos",
    },
    {
      name: "Chorizo",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$10.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Burritos",
    },
    {
      name: "Roasted Pork",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$10.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Burritos",
    },
    
    // Pupusas
    {
      name: "Pupusas",
      origin: "El Salvador",
      description: "Beans, Loroco, Chicharron with cheese. Served curtido y salsa",
      price: "$3.75",
      image: "/img/pupusas.jpg?height=300&width=400",
      category: "Pupusas",
    },

    //Quesadillas
    {
      name: "Beef",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$10.95",
      image: "/img/quesadillas.avif?height=300&width=400",
      category: "Quesadillas",
    },
    {
      name: "Shrimp",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$12.95",
      image: "/img/quesadillas.avif?height=300&width=400",
      category: "Quesadillas",
    },
    {
      name: "Chicken",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$10.50",
      image: "/img/quesadillas.avif?height=300&width=400",
      category: "Quesadillas",
    },
    {
      name: "Chorizo",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$10.50",
      image: "/img/quesadillas.avif?height=300&width=400",
      category: "Quesadillas",
    },
    {
      name: "Roasted Pork",
      origin: "Mexico",
      description: "Served with Rice, Beans, Lettuce, Tomato & Avocado",
      price: "$10.50",
      image: "/img/quesadillas.avif?height=300&width=400",
      category: "Quesadillas",
    },

    //Mofongo
    {
      name: "Carne Frita or Pork",
      origin: "Puerto Rico",
      description: "",
      price: "$16.95",
      image: "/img/mofongo_pork.jpg?height=300&width=400",
      category: "Mofongo",
    },
    {
      name: "Pernil",
      origin: "Puerto Rico",
      description: "",
      price: "$16.95",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mofongo",
    },
    {
      name: "Camarones al Ajillo",
      origin: "Puerto Rico",
      description: "",
      price: "$18.95",
      image: "/img/mofongo_camaroles_al_ajillo.jpg?height=300&width=400",
      category: "Mofongo",
    },
    {
      name: "Grilled Chicken",
      origin: "Puerto Rico",
      description: "",
      price: "$16.95",
      image: "/img/mofongo_chicken.jpg?height=300&width=400",
      category: "Mofongo",
    },

    //Tacos
    {
      name: "Beef",
      origin: "Mexico",
      description: "",
      price: "$4.00",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Al Pastor",
      origin: "Mexico",
      description: "",
      price: "$4.50",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Beef & Cheese",
      origin: "Mexico",
      description: "",
      price: "$4.50",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Birria",
      origin: "Mexico",
      description: "",
      price: "$4.50",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Shrimp",
      origin: "Mexico",
      description: "",
      price: "$5.00",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Carnitas",
      origin: "Mexico",
      description: "",
      price: "$4.00",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Chorizo Mexicano",
      origin: "Mexico",
      description: "",
      price: "$4.00",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Chicken",
      origin: "Mexico",
      description: "",
      price: "$4.00",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Chorizo",
      origin: "Mexico",
      description: "",
      price: "$4.00",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Roasted Pork",
      origin: "Mexico",
      description: "",
      price: "$4.00",
      image: "/img/tacos.jpg?height=300&width=400",
      category: "Tacos",
    },
    {
      name: "Tacos Dorado",
      origin: "Mexico",
      description: "3 Crunchy tacos served with rice and beans, Chicken, Cheese, Lettuce, Tomato, Avocado & Sour Cream",
      price: "$9.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Tacos",
    },

    // Hot and Cold Sandwiches
    {
      name: "(Hot) Cuban",
      origin: "",
      description: "Served on a fresh wedge roll with a side of French fries.",
      price: "$11.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Hot) Roast Pork",
      origin: "",
      description: "Served on a fresh hard roll with a side of French fries. Add on a wedge +$1.75",
      price: "$8.75",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Hot) Chop Cheese",
      origin: "",
      description: "Served on a fresh hard roll with a side of French fries. Add on a wedge +$1.75",
      price: "$8.75",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Hot) Grilled Chicken",
      origin: "",
      description: "Served on a fresh hard roll with a side of French fries. Add on a wedge +$1.75",
      price: "$8.75",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Hot) Philly Cheese Steak",
      origin: "",
      description: "Served on a fresh hard roll with a side of French fries. Add on a wedge +$1.75",
      price: "$8.75",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Hot) Chicken Cutlet",
      origin: "",
      description: "Served on a fresh hard roll with a side of French fries. Add on a wedge +$1.75",
      price: "$8.75",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Hot) Grill Steak",
      origin: "",
      description: "Served on a fresh hard roll with a side of French fries. Add on a wedge +$1.75",
      price: "$8.75",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "Cheese Burger",
      origin: "",
      description: "Served with a side of French fries",
      price: "$9.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Hot) BLT",
      origin: "",
      description: "Served with a side of French fries",
      price: "$6.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Cold) Italian Combo",
      origin: "Italy",
      description: "",
      price: "$11.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Cold) Ham",
      origin: "",
      description: "Served on a fresh hard roll. Add on a wedge +$2.00",
      price: "$6.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
        name: "(Cold) Egg Salad",
        origin: "",
        description: "Served on a fresh hard roll. Add on a wedge +$2.00",
        price: "$8.50",
        image: "/placeholder.svg?height=300&width=400",
        category: "Sandwiches",
    },
    {
      name: "(Cold) Tuna Salad",
      origin: "",
      description: "Served on a fresh hard roll. Add on a wedge +$2.00",
      price: "$8.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Cold) Chicken Salad",
      origin: "",
      description: "Served on a fresh hard roll. Add on a wedge +$2.00",
      price: "$8.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    {
      name: "(Cold) Turkey",
      origin: "",
      description: "Served on a fresh hard roll. Add on a wedge +$2.00",
      price: "$8.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sandwiches",
    },
    
    // Antojitos
    {
      name: "French Fries / Papas Fritas",
      origin: "USA",
      description: "",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Tostones",
      origin: "Ecuador",
      description: "",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Maduros",
      origin: "Ecuador",
      description: "",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Chips",
      origin: "",
      description: "",
      price: "$4.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Chicharron",
      origin: "Ecuador",
      description: "",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Chicharron w/ Yuca",
      origin: "Ecuador",
      description: "",
      price: "$9.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Chicken Wings (4) w/ French Fries",
      origin: "USA",
      description: "",
      price: "$7.50",
      image: "/img/chicken_wings.jpg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Chicken Nuggets (8)",
      origin: "USA",
      description: "",
      price: "$6.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Chicken Tenders (5)",
      origin: "USA",
      description: "",
      price: "$7.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Mozzarella Sticks (6)",
      origin: "",
      description: "",
      price: "$6.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Potato Ball",
      origin: "",
      description: "",
      price: "$4.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Yuca Frita",
      origin: "Ecuador",
      description: "",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Fried Pork",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },
    {
      name: "Home Fries",
      origin: "",
      description: "",
      price: "$5.50",
      image: "/placeholder.svg?height=300&width=400",
      category: "Antojitos",

    },

    
    //Shakes / Batidos
    {
      name: "Banana",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Shakes / Batidos",

    },
    {
      name: "Pineapple",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Shakes / Batidos",

    },
    {
      name: "Blackberry",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Shakes / Batidos",

    },
    {
      name: "Passion Fruit",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Shakes / Batidos",

    },
    {
      name: "Guanabana",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Shakes / Batidos",

    },
    {
      name: "Tomate de Arbol",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/placeholder.svg?height=300&width=400",
      category: "Shakes / Batidos",

    },
    {
      name: "Verde",
      origin: "",
      description: "Spinach, pinneaple, green apple, celery",
      price: "$9.00",
      image: "/img/verde.avif?height=300&width=400",
      category: "Shakes / Batidos",

    },
    {
      name: "Mango",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/img/mango.avif?height=300&width=400",
      category: "Shakes / Batidos",

    },
    {
      name: "Strawberry",
      origin: "",
      description: "",
      price: "$9.00",
      image: "/img/fresa.avif?height=300&width=400",
      category: "Shakes / Batidos",

    }, 
]


type CateringItem = {
  name: string
  description: string
  origin: string
  mediumTray: {
    serves: string
    price: string
  }
  largeTray: {
    serves: string
    price: string
  }
  image: string
  category: string
}


//Catering
export const cateringItems: CateringItem[] = [
    
    // Arroz
    {
      name: "White Rice / Arroz Blanco",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$40.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$60.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Arroz",
    },
    {
      name: "Chaulafan",
      description: "Latin mixed rice with soy sauce, chicken, beef, and shrimp bits. Arroz mezclado con vegetales, carne de pollo, rez y camaron.",
      origin: "Ecuador",
      mediumTray: {
        serves: "10-15",
        price: "$65.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$125.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Arroz",
    },
    {
      name: "Yellow rice w/ grandules / Arroz amarillo con grandules",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$50.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$70.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Arroz",
    },
    {
      name: "Ecuadorian rice with chicken / Arroz Ecuatoriano con pollo",
      description: "",
      origin: "Ecuador",
      mediumTray: {
        serves: "10-15",
        price: "$60.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$90.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Arroz",
    },
    
    // Carne
    {
      name: "Fajitas",
      description: "",
      origin: "Mexico",
      mediumTray: {
        serves: "10-15",
        price: "$70.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$140.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Stewed mondongo / Guatita",
      description: "",
      origin: "Ecuador",
      mediumTray: {
        serves: "10-15",
        price: "$75.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$140.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Stewed pig feet / Patita de cerdo guisado",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$55.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$110.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Roasted meat / Carne asada",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$80.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$160.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Roasted Pork / Pernil",
      description: "",
      origin: "Puerto Rico",
      mediumTray: {
        serves: "10-15",
        price: "$65.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$125.00",
      },
      image: "/img/catering_pernil.jpg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Fried Pork / Carne de cerdo frito",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "60.00$",
      },
      largeTray: {
        serves: "20-25",
        price: "$120.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Lomo Saltado",
      description: "",
      origin: "Peru",
      mediumTray: {
        serves: "10-15",
        price: "$75.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$140.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Steak w/ onions and peppers",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$70.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$140.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Stewed beef / Carne guisada",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$60.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$130.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Pork chops w. onions and peppers / Chuletas de cerdo",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$60.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$120.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Roasted Beef Ribs / Costilla de res",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$75.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$150.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Ribs pock / Costilla de Cerdo",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$60.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$120.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },
    {
      name: "Picada",
      description: "fried pork, chicken wings, chorizo, fried beef, tostones (fried plantain slices), sweet plantains, yuca, & pink sauce. chicharron, alitas fritas, chorizo, carne frita de cerdo, yuca, patacones, & sweet plantains",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$55.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$110.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Carne",
    },

    //Pollo
    {
      name: "Chicken wings / Alas de pollo",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$55.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$110.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Pollo",
    },
    {
      name: "Chicken nuggets",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$45.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$95.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Pollo",
    },
    {
      name: "Grill chicken chicken / pechuga de pollo al grill",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$65.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$130.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Pollo",
    },
    {
      name: "Chicken tenders",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$45.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$80.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Pollo",
    },
    {
      name: "Chicken francese",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$65.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$130.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Pollo",
    },
    {
      name: "Stewed chicken guisado / Pollo guisado",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$60.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$120.00",
      },
      image: "/img/catering_pollo_guisado.jpg?height=300&width=400",
      category: "Pollo",
    },
    {
      name: "Whole roasted chicken / Pollo entero al horno",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$55.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$110.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Pollo",
    },

    // Ensalada
    {
      name: "Chef salad / Ensalada del chef",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$40.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$80.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Ensalada",
    },
    {
      name: "Macaroni salad / Ensalada de Fideos",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$40.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$80.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Ensalada",
    },
    {
      name: "Potatoes salad / Ensalada de papa",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$40.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$80.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Ensalada",
    },
    {
      name: "Russian salad / Ensalada russa",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$50.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$95.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Ensalada",
    },
    {
      name: "green salad / Ensalada verde de casa",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$40.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$80.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Ensalada",
    },
    {
      name: "stewed beans / Frijoles guisados",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$45.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$80.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Ensalada",
    },
    {
      name: "Llapingacho",
      description: "",
      origin: "Ecuador",
      mediumTray: {
        serves: "10-15",
        price: "$70.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$110.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Ensalada",
    },
    {
      name: "Salted vegetables",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$45.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$90.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Ensalada",
    },

    //Pasta
    {
      name: "Penne Vodka",
      description: "",
      origin: "Italy",
      mediumTray: {
        serves: "10-15",
        price: "$55.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$110.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Pasta",
    },

    //Papas
    {
      name: "Salchipapa",
      description: "French fries and sausages",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$45.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$90.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Papas",
    },
    {
      name: "Sweet potatoes / papas guisadas",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$55.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$110.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Papas",
    },
    
    //Varios
    {
      name: "Mote Cocido",
      description: "",
      origin: "Ecuador",
      mediumTray: {
        serves: "10-15",
        price: "$45.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$60.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
    {
      name: "Pico de gallo",
      description: "",
      origin: "Costa Rica",
      mediumTray: {
        serves: "10-15",
        price: "$35.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$70.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
    {
      name: "Pastelon",
      description: "Puerto Rican lasagna made with sweet plantain",
      origin: "Puerto Rico",
      mediumTray: {
        serves: "10-15",
        price: "$35.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$70.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
    {
      name: "Fried sweet platains / platano maduro frito",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$45.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$90.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
    {
      name: "Tostones",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$35.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$65.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
    {
      name: "Sancocho",
      description: "",
      origin: "Ecuador",
      mediumTray: {
        serves: "10-15",
        price: "$50.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$95.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
    {
      name: "Tortillas chips",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$25.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$40.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
    {
      name: "Tortillas a mano",
      description: "",
      origin: "Mexico",
      mediumTray: {
        serves: "10-15",
        price: "$35.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$50.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
    {
      name: "Cassava with onions / Yucca con cebolla",
      description: "",
      origin: "",
      mediumTray: {
        serves: "10-15",
        price: "$45.00",
      },
      largeTray: {
        serves: "20-25",
        price: "$90.00",
      },
      image: "/placeholder.svg?height=300&width=400",
      category: "Varios",
    },
  ]
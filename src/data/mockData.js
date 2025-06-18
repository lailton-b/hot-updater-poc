export const stores = [
  {
    id: 1,
    name: "Mario's Pizza Palace",
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    rating: 4.5,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    description: 'Authentic Italian pizzas made with fresh ingredients',
  },
  {
    id: 2,
    name: "Tony's Pizzeria",
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    rating: 4.2,
    deliveryTime: '30-40 min',
    deliveryFee: 3.49,
    description: 'New York style pizza with a crispy thin crust',
  },
  {
    id: 3,
    name: 'Bella Vista Pizza',
    image:
      'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop',
    rating: 4.7,
    deliveryTime: '20-30 min',
    deliveryFee: 2.49,
    description: 'Gourmet pizzas with premium toppings',
  },
];

export const products = {
  1: [
    {
      id: 101,
      name: 'Margherita Pizza',
      price: 12.99,
      image:
        'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop',
      description:
        'Classic pizza with tomato sauce, mozzarella, and fresh basil',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Fresh basil', 'Olive oil'],
      storeId: 1,
    },
    {
      id: 102,
      name: 'Pepperoni Pizza',
      price: 15.99,
      image:
        'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
      description: 'Traditional pizza topped with pepperoni and mozzarella',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni'],
      storeId: 1,
    },
    {
      id: 103,
      name: 'Quattro Stagioni',
      price: 18.99,
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
      description:
        'Four seasons pizza with ham, mushrooms, artichokes, and olives',
      ingredients: [
        'Tomato sauce',
        'Mozzarella',
        'Ham',
        'Mushrooms',
        'Artichokes',
        'Olives',
      ],
      storeId: 1,
    },
  ],
  2: [
    {
      id: 201,
      name: 'New York Supreme',
      price: 19.99,
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
      description: 'Loaded with pepperoni, sausage, peppers, and onions',
      ingredients: [
        'Tomato sauce',
        'Mozzarella',
        'Pepperoni',
        'Sausage',
        'Bell peppers',
        'Onions',
      ],
      storeId: 2,
    },
    {
      id: 202,
      name: 'White Pizza',
      price: 16.99,
      image:
        'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop',
      description: 'White sauce pizza with ricotta, mozzarella, and garlic',
      ingredients: ['White sauce', 'Ricotta', 'Mozzarella', 'Garlic', 'Herbs'],
      storeId: 2,
    },
  ],
  3: [
    {
      id: 301,
      name: 'Truffle Deluxe',
      price: 24.99,
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      description: 'Gourmet pizza with truffle oil, prosciutto, and arugula',
      ingredients: [
        'White sauce',
        'Mozzarella',
        'Truffle oil',
        'Prosciutto',
        'Arugula',
      ],
      storeId: 3,
    },
    {
      id: 302,
      name: 'Mediterranean',
      price: 17.99,
      image:
        'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop',
      description: 'Fresh tomatoes, olives, feta cheese, and herbs',
      ingredients: [
        'Tomato sauce',
        'Mozzarella',
        'Feta',
        'Olives',
        'Tomatoes',
        'Herbs',
      ],
      storeId: 3,
    },
  ],
};

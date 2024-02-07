export type TProduct = {
  title: string;
  description: string;
  price: string;
  rating: number;
  review: number;
  src: string;
  productImages: { imgUrl: string }[];
  calories: string;
  allergy: string;
  bestRated?: boolean;
  specialOffer?: boolean;
  id: number;
  relatedProducts: TRelatedProduct[];
  pricing: {
    goodValue: string;
    okay: string;
    overpriced: string;
  };
};

export type TRelatedProduct = {
  title: string;
  description: string;
  price: string;
  src: string;
};

const allProducts: TProduct[] = [
  {
    title: 'Spaghetti from Korede',
    description:
      'Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned',
    price: '3000',
    rating: 4.5,
    review: 206,
    src: '',
    productImages: [
      {
        imgUrl: '',
      },
      {
        imgUrl: '',
      },
    ],
    calories: '300 kcal',
    allergy: 'Contains nuts',
    bestRated: true,
    relatedProducts: [
      {
        title: 'Classic Spaghetti Bolognese',
        description:
          'Traditional spaghetti dish with a hearty meat sauce made from scratch using the finest ingredients.',
        price: '3800',
        src: '',
      },
      {
        title: 'Spaghetti Deluxe',
        description:
          'Delicious spaghetti made with premium pasta, topped with fresh vegetables, succulent meatballs, and a rich tomato sauce.',
        price: '3500',
        src: '',
      },
    ],
    pricing: {
      goodValue: '80',
      okay: '20',
      overpriced: '5',
    },
    id: 1,
  },
  {
    title: 'Spaghetti Deluxe',
    description:
      'Delicious spaghetti made with premium pasta, topped with fresh vegetables, succulent meatballs, and a rich tomato sauce.',
    price: '3500',
    rating: 4.8,
    review: 152,
    src: '',
    productImages: [
      {
        imgUrl: '',
      },
      {
        imgUrl: '',
      },
    ],
    calories: '320 kcal',
    allergy: 'Gluten-free',
    id: 2,
    specialOffer: true,
    relatedProducts: [
      {
        title: 'Classic Spaghetti Bolognese',
        description:
          'Delicious spaghetti made with premium pasta, topped with fresh vegetables, succulent meatballs, and a rich tomato sauce.',
        price: '3500',
        src: '',
      },
      {
        title: 'Vegetarian Spaghetti Primavera',
        description:
          'Traditional spaghetti dish with a hearty meat sauce made from scratch using the finest ingredients.',
        price: '9000',
        src: '',
      },
      {
        title: 'Spicy Arrabbiata Spaghetti',
        description:
          'Traditional spaghetti dish with a hearty meat sauce made from scratch using the finest ingredients.',
        price: '3800',
        src: '',
      },
    ],
    pricing: {
      goodValue: '30',
      okay: '20',
      overpriced: '10',
    },
  },
  {
    title: 'Jollof Rice from Supreme',
    description:
      'Delicious Jollof Rice cooked to perfection with premium long-grain rice, infused with aromatic spices, and topped with tender chicken pieces and assorted vegetables.',
    price: '4000',
    rating: 4.7,
    review: 180,
    src: '',
    productImages: [
      {
        imgUrl: '',
      },
      {
        imgUrl: '',
      },
    ],
    calories: '350 kcal',
    allergy: 'Contains dairy',
    id: 3,
    specialOffer: false,
    relatedProducts: [
      {
        title: 'Jollof Rice from Supreme',
        description:
          'Juicy chicken pieces marinated in a special blend of spices, skewered and grilled to perfection.',
        price: '2500',
        src: '',
      },
      {
        title: 'Jollof Rice from Supreme',
        description:
          'Crispy plantain chips seasoned with a hint of salt, perfect for snacking.',
        price: '800',
        src: '',
      },
    ],
    pricing: {
      goodValue: '70',
      okay: '20',
      overpriced: '10',
    },
  },
  {
    title: 'Vegetarian Jollof from Adogan',
    description:
      'Flavorful Jollof Rice made with nutritious vegetables and aromatic spices, a delicious meat-free option for all occasions.',
    price: '3500',
    rating: 4.5,
    review: 120,
    src: '',
    productImages: [
      {
        imgUrl: '',
      },
      {
        imgUrl: '',
      },
    ],
    calories: '320 kcal',
    allergy: 'Vegetarian-friendly',
    id: 4,
    specialOffer: true,
    relatedProducts: [
      {
        title: 'Vegetarian Jollof from Adogan',
        description:
          'Sweet and savory fried plantains, a perfect accompaniment to any meal.',
        price: '1200',
        src: '',
      },
      {
        title: 'Vegetarian Jollof from Adogan',
        description:
          'Jollof Rice infused with coconut milk, giving it a rich and creamy texture, perfect for coconut lovers.',
        price: '4200',
        src: '',
      },
    ],
    pricing: {
      goodValue: '50',
      okay: '30',
      overpriced: '20',
    },
  },
];

export default allProducts;

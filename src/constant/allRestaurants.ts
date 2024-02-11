export type TRestaurant = {
  title: string;
  description: string;
  restaurantName: string;
  price: string;
  rating: number;
  review: number;
  src: string;
  foodImages: { imgUrl: string }[];
  calories: string;
  allergy: string;
  bestRated?: boolean;
  specialOffer?: boolean;
  id: number;
  relatedRestaurants: TRelatedRestaurants[];
  priceRating: TPriceRating;
  restaurantHistory: string;
  restaurantWebsite: string;
  socialMedia: string;
};

export type TRelatedRestaurants = {
  title: string;
  description: string;
  src: string;
  rating: number;
  review: number;
};

export type TPriceRating = {
  goodValue: string;
  okay: string;
  overpriced: string;
};

const allRestaurants: TRestaurant[] = [
  {
    title: 'Spaghetti from Korede',
    restaurantName: 'Korede',
    price: '3000',
    rating: 4.5,
    review: 206,
    description:
      'Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned',
    calories: '300 kcal',
    allergy: 'Contains nuts',
    bestRated: true,
    src: 'https://media.istockphoto.com/id/1344241923/photo/spaghetti-with-meatballs-and-tomato-sauce-italian-pasta.jpg?s=1024x1024&w=is&k=20&c=mnqThkXQEutYsVAFaJn53Z05DDSqtxDT6NeGzkL2XLE=',
    foodImages: [
      {
        imgUrl:
          'https://media.istockphoto.com/id/1344241923/photo/spaghetti-with-meatballs-and-tomato-sauce-italian-pasta.jpg?s=1024x1024&w=is&k=20&c=mnqThkXQEutYsVAFaJn53Z05DDSqtxDT6NeGzkL2XLE=',
      },
      {
        imgUrl:
          'https://media.istockphoto.com/id/1185728983/photo/traditional-italian-spaghetti-bolognese.jpg?s=1024x1024&w=is&k=20&c=k1zrTRyf1OBWPfpFdr16SCZNNAAK69DeaRyWfauBdvw=',
      },
    ],

    relatedRestaurants: [
      {
        title: 'Nimota Rice',
        description:
          'Experience the comforting simplicity of perfectly steamed rice, a versatile canvas for your culinary creations, whether paired with savory stir-fried vegetables, succulent grilled meats, or enjoyed on its own as a satisfying staple.',
        src: 'https://media.istockphoto.com/id/1163626681/photo/chicken-stroganoff-is-a-dish-originating-from-russian-cuisine-that-in-brazil-is-composed-of.jpg?s=1024x1024&w=is&k=20&c=X4CJ0hYCdj6C-uBpkoLSAN3Ol-STn5LSYJ5iOcP_qZ8=',
        rating: 3.5,
        review: 20,
      },
      {
        title: 'Suya Rice',
        description:
          'Savor the delightful aroma of perfectly cooked rice, each grain plump and tender, offering a comforting texture with every bite',
        src: 'https://images.unsplash.com/photo-1666239308046-ead0314ee0fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.2,
        review: 60,
      },
    ],
    priceRating: {
      goodValue: '100',
      okay: '70',
      overpriced: '3',
    },
    restaurantHistory:
      'Korede Foods is a family based restaurant located in Lagos with 5 branches, it was founded by Mr Korede Bello in 2010',
    restaurantWebsite: 'https://koredefoods.com',
    socialMedia: '@koredefoods',
    id: 1,
  },
];

export default allRestaurants;

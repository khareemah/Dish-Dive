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
  priceRating: {
    goodValue: string;
    okay: string;
    overpriced: string;
  };
};

export type TRelatedRestaurants = {
  title: string;
  description: string;
  src: string;
  rating: number;
  review: number;
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
          'Delicious spaghetti made with premium pasta, topped with fresh vegetables, succulent meatballs, and a rich tomato sauce.',
        src: 'https://media.istockphoto.com/id/1185728983/photo/traditional-italian-spaghetti-bolognese.jpg?s=1024x1024&w=is&k=20&c=k1zrTRyf1OBWPfpFdr16SCZNNAAK69DeaRyWfauBdvw=',
        rating: 3.5,
        review: 20,
      },
      {
        title: 'Suya Rice',
        description:
          'Traditional spaghetti dish with a hearty meat sauce made from scratch using the finest ingredients.',
        src: 'https://media.istockphoto.com/id/1344241923/photo/spaghetti-with-meatballs-and-tomato-sauce-italian-pasta.jpg?s=1024x1024&w=is&k=20&c=mnqThkXQEutYsVAFaJn53Z05DDSqtxDT6NeGzkL2XLE=',
        rating: 4.2,
        review: 60,
      },
    ],
    priceRating: {
      goodValue: '100',
      okay: '70',
      overpriced: '3',
    },
    id: 1,
  },
  // {
  //   title: "Spaghetti Deluxe",
  //   description:
  //     "Delicious spaghetti made with premium pasta, topped with fresh vegetables, succulent meatballs, and a rich tomato sauce.",
  //   price: "3500",
  //   rating: 4.8,
  //   review: 152,
  //   src: "https://media.istockphoto.com/id/476768382/photo/italian-spaghetti-with-meatballs.jpg?s=1024x1024&w=is&k=20&c=bkIga3a_AAEaNS8nNwmzkUdq5V1x_LGb-cEohnvv8hQ=",
  //   productImages: [
  //     {
  //       imgUrl:
  //         "https://media.istockphoto.com/id/476768382/photo/italian-spaghetti-with-meatballs.jpg?s=1024x1024&w=is&k=20&c=bkIga3a_AAEaNS8nNwmzkUdq5V1x_LGb-cEohnvv8hQ=",
  //     },
  //     {
  //       imgUrl:
  //         "https://media.istockphoto.com/id/1344241923/photo/spaghetti-with-meatballs-and-tomato-sauce-italian-pasta.jpg?s=1024x1024&w=is&k=20&c=mnqThkXQEutYsVAFaJn53Z05DDSqtxDT6NeGzkL2XLE=",
  //     },
  //   ],
  //   calories: "320 kcal",
  //   allergy: "Gluten-free",
  //   id: 2,
  //   specialOffer: true,
  //   relatedProducts: [
  //     {
  //       title: "Classic Spaghetti Bolognese",
  //       description:
  //         "Delicious spaghetti made with premium pasta, topped with fresh vegetables, succulent meatballs, and a rich tomato sauce.",
  //       price: "3500",
  //       src: "https://media.istockphoto.com/id/476768382/photo/italian-spaghetti-with-meatballs.jpg?s=1024x1024&w=is&k=20&c=bkIga3a_AAEaNS8nNwmzkUdq5V1x_LGb-cEohnvv8hQ=",
  //     },
  //     {
  //       title: "Vegetarian Spaghetti Primavera",
  //       description:
  //         "Traditional spaghetti dish with a hearty meat sauce made from scratch using the finest ingredients.",
  //       price: "9000",
  //       src: "https://media.istockphoto.com/id/979966164/photo/spaghetti-with-minced-meat-and-vegetables.jpg?s=1024x1024&w=is&k=20&c=nYcYqJCwj7zGp8n7DKMswRkrOrhYo6sQSeX5XKz_Kic=",
  //     },
  //     {
  //       title: "Spicy Arrabbiata Spaghetti",
  //       description:
  //         "Traditional spaghetti dish with a hearty meat sauce made from scratch using the finest ingredients.",
  //       price: "3800",
  //       src: "https://media.istockphoto.com/id/1344241923/photo/spaghetti-with-meatballs-and-tomato-sauce-italian-pasta.jpg?s=1024x1024&w=is&k=20&c=mnqThkXQEutYsVAFaJn53Z05DDSqtxDT6NeGzkL2XLE=",
  //     },
  //   ],
  //   pricing: {
  //     goodValue: "30",
  //     okay: "20",
  //     overpriced: "10",
  //   },
  // },
  // {
  //   title: "Spaghetti from Korede",
  //   description:
  //     "Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned",
  //   price: "3000",
  //   rating: 4.5,
  //   review: 206,
  //   src: "https://media.istockphoto.com/id/632439546/photo/pasta-plate.jpg?s=1024x1024&w=is&k=20&c=ysojMtu1NUy6qMNJy_oAxJjG2sf1BIGY60QiT7D1jZI=",
  //   productImages: [
  //     {
  //       imgUrl:
  //         "https://media.istockphoto.com/id/1344241923/photo/spaghetti-with-meatballs-and-tomato-sauce-italian-pasta.jpg?s=1024x1024&w=is&k=20&c=mnqThkXQEutYsVAFaJn53Z05DDSqtxDT6NeGzkL2XLE=",
  //     },
  //     {
  //       imgUrl:
  //         "https://media.istockphoto.com/id/1185728983/photo/traditional-italian-spaghetti-bolognese.jpg?s=1024x1024&w=is&k=20&c=k1zrTRyf1OBWPfpFdr16SCZNNAAK69DeaRyWfauBdvw=",
  //     },
  //   ],
  //   calories: "300 kcal",
  //   allergy: "Contains nuts",
  //   specialOffer: true,
  //   relatedProducts: [
  //     {
  //       title: "Spaghetti Deluxe",
  //       description:
  //         "Delicious spaghetti made with premium pasta, topped with fresh vegetables, succulent meatballs, and a rich tomato sauce.",
  //       price: "3500",
  //       src: "https://media.istockphoto.com/id/476768382/photo/italian-spaghetti-with-meatballs.jpg?s=1024x1024&w=is&k=20&c=bkIga3a_AAEaNS8nNwmzkUdq5V1x_LGb-cEohnvv8hQ=",
  //     },
  //     {
  //       title: "Classic Spaghetti Bolognese",
  //       description:
  //         "Traditional spaghetti dish with a hearty meat sauce made from scratch using the finest ingredients.",
  //       price: "3800",
  //       src: "https://media.istockphoto.com/id/1344241923/photo/spaghetti-with-meatballs-and-tomato-sauce-italian-pasta.jpg?s=1024x1024&w=is&k=20&c=mnqThkXQEutYsVAFaJn53Z05DDSqtxDT6NeGzkL2XLE=",
  //     },
  //   ],
  //   pricing: {
  //     goodValue: "80",
  //     okay: "20",
  //     overpriced: "5",
  //   },
  //   id: 3,
  // },
];

export default allRestaurants;

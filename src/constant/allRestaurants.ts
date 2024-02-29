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
    title: 'Semo from Semo Palace',
    restaurantName: 'Semo Palace',
    price: '2200',
    rating: 4.8,
    review: 300,
    description:
      'Indulge in the delightful combination of Semo and Egusi Soup, a traditional Nigerian dish that offers the perfect blend of flavors and textures. Our Egusi Soup is made with ground melon seeds, assorted meats, and vegetables, cooked to perfection and served with smooth and fluffy Semo for a satisfying meal experience.',
    calories: '500 kcal',
    allergy: 'Contains shellfish',
    bestRated: true,
    src: 'https://media.istockphoto.com/id/1386522276/photo/pounded-yam-and-garri-eba-served-with-egusi-soup-ready-to-eat.jpg?s=1024x1024&w=is&k=20&c=rmyLaKekl9y_bLtmlYXQMzZAeG9bLIRdtvS2k8_LUR4=',
    foodImages: [
      {
        imgUrl:
          'https://media.istockphoto.com/id/1386522276/photo/pounded-yam-and-garri-eba-served-with-egusi-soup-ready-to-eat.jpg?s=1024x1024&w=is&k=20&c=rmyLaKekl9y_bLtmlYXQMzZAeG9bLIRdtvS2k8_LUR4=',
      },
      {
        imgUrl:
          'https://media.istockphoto.com/id/1398351215/photo/egusi-soup-with-fufu-pounded-yam.jpg?s=1024x1024&w=is&k=20&c=S64VzqRN5NqHx4UXE6JhmOokj-z-nAYABqTIPd3cEMU=',
      },
      {
        imgUrl:
          'https://media.istockphoto.com/id/1287043013/photo/bowl-of-pounded-yam-served-with-egusi-melon-soup.jpg?s=1024x1024&w=is&k=20&c=IadQ5bCI3MtZKooX1EaAbtckRRF9a6r7IhR2hITLrSk=',
      },
    ],

    relatedRestaurants: [
      {
        title: 'Efo Riro And Pounded Yam',
        description:
          'Experience the rich flavors of Yoruba cuisine with our Efo Riro, a delicious spinach-based stew cooked with assorted meats and fish, seasoned to perfection with traditional spices and herbs, offering a satisfying taste of home.',
        src: 'https://media.istockphoto.com/id/1388098078/photo/garri-and-pounded-yam-served-with-efo-riro-vegetable-soup.jpg?s=1024x1024&w=is&k=20&c=ZCzVe0-bNSYg8vkNBan85lxkGFWKOw9upCU2AD6xkkM=',
        rating: 4.4,
        review: 80,
      },
      {
        title: 'Tender Goat Meat Stew',
        description:
          'Savor the succulence of our tender Goat Meat Stew, slow-cooked in a flavorful blend of spices and herbs, offering a savory complement to your Semo and Egusi Soup.',
        src: 'https://media.istockphoto.com/id/1205306278/photo/overhead-view-of-indian-goat-curry-mutton-curry-nihari-rogan-josh-in-a-bowl.jpg?s=1024x1024&w=is&k=20&c=bq6hJ-rQkV2nsRwup-9M7Z8e_8TGC1NmU5tXFIaA4Bc=',
        rating: 4.7,
        review: 90,
      },
    ],
    priceRating: {
      goodValue: '85',
      okay: '75',
      overpriced: '10',
    },
    restaurantHistory:
      'Semo Palace, established in 2000, has been a renowned destination for authentic Nigerian cuisine. With a commitment to quality and taste, we continue to delight our customers with our delicious offerings and warm hospitality.',
    restaurantWebsite: 'https://semopalace.com',
    socialMedia: '@semopalace',
    id: 3,
  },
  {
    title: 'Jollof Rice from Adogan',
    restaurantName: 'Adogan',
    price: '2500',
    rating: 4.7,
    review: 300,
    description:
      'Savor the taste of authentic Jollof Rice, cooked to perfection with the finest blend of spices, tomatoes, and long grain parboiled rice, offering a burst of flavors with every mouthful.',
    calories: '400 kcal',
    allergy: 'Contains shellfish',
    bestRated: true,
    src: 'https://media.istockphoto.com/id/1370508531/photo/jollof-rice-tomatoes-and-hot-peppers-on-a-blue-plate-fork-spoon-on-a-linen-napkin-on-a-brown.jpg?s=1024x1024&w=is&k=20&c=RRIRLSYB8vMFbQ6rNeAsIio2fn4jsNgeKpnL4mxbHqU=',
    foodImages: [
      {
        imgUrl:
          'https://media.istockphoto.com/id/1370508531/photo/jollof-rice-tomatoes-and-hot-peppers-on-a-blue-plate-fork-spoon-on-a-linen-napkin-on-a-brown.jpg?s=1024x1024&w=is&k=20&c=RRIRLSYB8vMFbQ6rNeAsIio2fn4jsNgeKpnL4mxbHqU=',
      },
      {
        imgUrl:
          'https://media.istockphoto.com/id/1331401741/photo/vegetarian-nasi-goreng-fried-rice-with-pineapple-vegetables-meat-in-spicy-chilli-sambal-sauce.jpg?s=1024x1024&w=is&k=20&c=aknioNBCqEvlD4UsKcBOpUssfkJpXzAMyBqSOyouBJ4=',
      },
    ],

    relatedRestaurants: [
      {
        title: 'Tasty Fried Plantains',
        description:
          'Indulge in the crispy goodness of perfectly fried plantains, a delightful accompaniment to your main course or a satisfying snack on its own.',
        src: 'https://media.istockphoto.com/id/1390313220/photo/plantain-chips-served-with-colombian-traditional-hogao-on-top-of-a-wooden-table.jpg?s=1024x1024&w=is&k=20&c=YWfZ0hQEk5PZwm5OVbq-p56eMjkW7Sh551A4NOdnnMs=',
        rating: 4.0,
        review: 50,
      },
      {
        title: 'Succulent Grilled Chicken',
        description:
          'Experience the succulence of tender grilled chicken, marinated in a flavorful blend of herbs and spices, offering a tantalizing treat for your taste buds.',
        src: 'https://media.istockphoto.com/id/622185412/photo/fried-chicken-fillets-and-vegetables-on-wooden-background.jpg?s=1024x1024&w=is&k=20&c=pg5yjpI4nT14rzbqDbDf_yJ_UsEwBrXjFVFYl8IGSBU=',
        rating: 4.5,
        review: 80,
      },
    ],
    priceRating: {
      goodValue: '95',
      okay: '75',
      overpriced: '10',
    },
    restaurantHistory:
      'Adogan is a renowned eatery specializing in authentic African cuisine, particularly famous for its delicious Jollof Rice. Founded in 2005 by Chef Tunde, it has since been a favorite dining destination for food enthusiasts.',
    restaurantWebsite: 'https://adogan.com',
    socialMedia: '@adogan',
    id: 2,
  },

  {
    title: 'Spaghetti from Korede',
    restaurantName: 'Korede',
    price: '3500',
    rating: 4.5,
    review: 206,
    description:
      'Mouth Watering Spaghetti made with the finest pasta, garnished with cabbage, carrots, bell peppers, chicken sausages and well seasoned',
    calories: '300 kcal',
    allergy: 'Contains nuts',
    bestRated: false,
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
    id: 4,
  },

  {
    title: 'Jollof Rice from Adogan',
    restaurantName: 'Adogan',
    price: '2500',
    rating: 4.7,
    review: 300,
    description:
      'Savor the taste of authentic Jollof Rice, cooked to perfection with the finest blend of spices, tomatoes, and long grain parboiled rice, offering a burst of flavors with every mouthful.',
    calories: '400 kcal',
    allergy: 'Contains shellfish',
    bestRated: false,
    src: 'https://media.istockphoto.com/id/1370508531/photo/jollof-rice-tomatoes-and-hot-peppers-on-a-blue-plate-fork-spoon-on-a-linen-napkin-on-a-brown.jpg?s=1024x1024&w=is&k=20&c=RRIRLSYB8vMFbQ6rNeAsIio2fn4jsNgeKpnL4mxbHqU=',
    foodImages: [
      {
        imgUrl:
          'https://media.istockphoto.com/id/1370508531/photo/jollof-rice-tomatoes-and-hot-peppers-on-a-blue-plate-fork-spoon-on-a-linen-napkin-on-a-brown.jpg?s=1024x1024&w=is&k=20&c=RRIRLSYB8vMFbQ6rNeAsIio2fn4jsNgeKpnL4mxbHqU=',
      },
      {
        imgUrl:
          'https://media.istockphoto.com/id/1331401741/photo/vegetarian-nasi-goreng-fried-rice-with-pineapple-vegetables-meat-in-spicy-chilli-sambal-sauce.jpg?s=1024x1024&w=is&k=20&c=aknioNBCqEvlD4UsKcBOpUssfkJpXzAMyBqSOyouBJ4=',
      },
    ],

    relatedRestaurants: [
      {
        title: 'Tasty Fried Plantains',
        description:
          'Indulge in the crispy goodness of perfectly fried plantains, a delightful accompaniment to your main course or a satisfying snack on its own.',
        src: 'https://media.istockphoto.com/id/1390313220/photo/plantain-chips-served-with-colombian-traditional-hogao-on-top-of-a-wooden-table.jpg?s=1024x1024&w=is&k=20&c=YWfZ0hQEk5PZwm5OVbq-p56eMjkW7Sh551A4NOdnnMs=',
        rating: 4.0,
        review: 50,
      },
      {
        title: 'Succulent Grilled Chicken',
        description:
          'Experience the succulence of tender grilled chicken, marinated in a flavorful blend of herbs and spices, offering a tantalizing treat for your taste buds.',
        src: 'https://media.istockphoto.com/id/622185412/photo/fried-chicken-fillets-and-vegetables-on-wooden-background.jpg?s=1024x1024&w=is&k=20&c=pg5yjpI4nT14rzbqDbDf_yJ_UsEwBrXjFVFYl8IGSBU=',
        rating: 4.5,
        review: 80,
      },
    ],
    priceRating: {
      goodValue: '95',
      okay: '75',
      overpriced: '10',
    },
    restaurantHistory:
      'Adogan is a renowned eatery specializing in authentic African cuisine, particularly famous for its delicious Jollof Rice. Founded in 2005 by Chef Tunde, it has since been a favorite dining destination for food enthusiasts.',
    restaurantWebsite: 'https://adogan.com',
    socialMedia: '@adogan',
    id: 5,
  },
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

  {
    title: 'Semo from Semo Palace',
    restaurantName: 'Semo Palace',
    price: '2200',
    rating: 4.8,
    review: 300,
    description:
      'Indulge in the delightful combination of Semo and Egusi Soup, a traditional Nigerian dish that offers the perfect blend of flavors and textures. Our Egusi Soup is made with ground melon seeds, assorted meats, and vegetables, cooked to perfection and served with smooth and fluffy Semo for a satisfying meal experience.',
    calories: '500 kcal',
    allergy: 'Contains shellfish',
    bestRated: false,
    src: 'https://media.istockphoto.com/id/1386522276/photo/pounded-yam-and-garri-eba-served-with-egusi-soup-ready-to-eat.jpg?s=1024x1024&w=is&k=20&c=rmyLaKekl9y_bLtmlYXQMzZAeG9bLIRdtvS2k8_LUR4=',
    foodImages: [
      {
        imgUrl:
          'https://media.istockphoto.com/id/1386522276/photo/pounded-yam-and-garri-eba-served-with-egusi-soup-ready-to-eat.jpg?s=1024x1024&w=is&k=20&c=rmyLaKekl9y_bLtmlYXQMzZAeG9bLIRdtvS2k8_LUR4=',
      },
      {
        imgUrl:
          'https://media.istockphoto.com/id/1398351215/photo/egusi-soup-with-fufu-pounded-yam.jpg?s=1024x1024&w=is&k=20&c=S64VzqRN5NqHx4UXE6JhmOokj-z-nAYABqTIPd3cEMU=',
      },
      {
        imgUrl:
          'https://media.istockphoto.com/id/1287043013/photo/bowl-of-pounded-yam-served-with-egusi-melon-soup.jpg?s=1024x1024&w=is&k=20&c=IadQ5bCI3MtZKooX1EaAbtckRRF9a6r7IhR2hITLrSk=',
      },
    ],

    relatedRestaurants: [
      {
        title: 'Efo Riro And Pounded Yam',
        description:
          'Experience the rich flavors of Yoruba cuisine with our Efo Riro, a delicious spinach-based stew cooked with assorted meats and fish, seasoned to perfection with traditional spices and herbs, offering a satisfying taste of home.',
        src: 'https://media.istockphoto.com/id/1388098078/photo/garri-and-pounded-yam-served-with-efo-riro-vegetable-soup.jpg?s=1024x1024&w=is&k=20&c=ZCzVe0-bNSYg8vkNBan85lxkGFWKOw9upCU2AD6xkkM=',
        rating: 4.4,
        review: 80,
      },
      {
        title: 'Tender Goat Meat Stew',
        description:
          'Savor the succulence of our tender Goat Meat Stew, slow-cooked in a flavorful blend of spices and herbs, offering a savory complement to your Semo and Egusi Soup.',
        src: 'https://media.istockphoto.com/id/1205306278/photo/overhead-view-of-indian-goat-curry-mutton-curry-nihari-rogan-josh-in-a-bowl.jpg?s=1024x1024&w=is&k=20&c=bq6hJ-rQkV2nsRwup-9M7Z8e_8TGC1NmU5tXFIaA4Bc=',
        rating: 4.7,
        review: 90,
      },
    ],
    priceRating: {
      goodValue: '85',
      okay: '75',
      overpriced: '10',
    },
    restaurantHistory:
      'Semo Palace, established in 2000, has been a renowned destination for authentic Nigerian cuisine. With a commitment to quality and taste, we continue to delight our customers with our delicious offerings and warm hospitality.',
    restaurantWebsite: 'https://semopalace.com',
    socialMedia: '@semopalace',
    id: 6,
  },
];

export default allRestaurants;

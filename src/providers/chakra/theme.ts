import { menuAnatomy, modalAnatomy } from '@chakra-ui/anatomy';
import {
  Colors,
  createMultiStyleConfigHelpers,
  defineStyleConfig,
  extendTheme,
  theme as baseTheme,
  ThemeComponents,
  withDefaultColorScheme,
} from '@chakra-ui/react';

const colors: Colors = {
  blue: {
    50: '#E9EBFB',
    100: '#BBC0F4',
    200: '#9AA2EE',
    300: '#6C78E7',
    400: '#4F5DE2',
    500: '#2335DB',
    600: '#2030C7',
    700: '#19269B',
    800: '#131D78',
    900: '#0F165C',
  },

  green: {
    50: '#dfedd9',
    100: '#d5e7cc',
    200: '#cae1bf',
    300: '#abcf99',
    400: '#6bac4d',
    500: '#2C8800',
    600: '#287a00',
    700: '#216600',
    800: '#1a5200',
    900: '#164300',
  },

  red: {
    50: '#FEF2F2',
    100: '#FDE9E9',
    200: '#FAC7C7',
    300: '#F7A1A1',
    400: '#F37373',
    500: '#F34141',
    600: '#CD3636',
    700: '#A32E2E',
    800: '#7C2323',
    900: '#601B1B',
  },

  yellow: {
    50: '#FEFAF5',
    100: '#FBF2CB',
    200: '#FDE57E',
    300: '#FFD16A',
    400: '#FFCC48',
    500: '#E9A23B',
    600: '#C8811A',
    700: '#A35C00',
    800: '#8B4400',
    900: '#78310B',
  },

  purple: {
    50: '#f3edfc',
    100: '#efe7fc',
    200: '#ebe1fb',
    300: '#dfcef8',
    400: '#c6aaf3',
    500: '#AE85EE',
    600: '#9d78d6',
    700: '#8364b3',
    800: '#68508f',
    900: '#554175',
  },

  gray: {
    50: '#F6F6F8',
    100: '#EDEDF1',
    200: '#DCDAE2',
    300: '#CAC8D4',
    400: '#B2AEBF',
    500: '#7A7493',
    600: '#4F4770',
    700: '#3F395A',
    800: '#342F4D',
    900: '#2F2B43',
  },
};

const fonts = {
  body: `Archivo, var(--font-archivo), ${baseTheme.fonts.body}`,
  heading: `Archivo, var(--font-archivo),${baseTheme.fonts.heading}`,
};

const {
  definePartsStyle: defineModalPartsStyle,
  defineMultiStyleConfig: defineModalMultiStyleConfig,
} = createMultiStyleConfigHelpers(modalAnatomy.keys);

const modalBaseStyle = defineModalPartsStyle({
  overlay: {
    backdropFilter: 'blur(2px)',
    bg: 'blackAlpha.700',
  },
});

const {
  definePartsStyle: defineMenuPartStyle,
  defineMultiStyleConfig: defineMenuMultiStyleConfig,
} = createMultiStyleConfigHelpers(menuAnatomy.keys);

const menuStyle = defineMenuPartStyle({
  item: {
    _hover: { bg: 'yellow.50' },
    _focus: { bg: 'yellow.50' },
    fontWeight: 'normal',
    py: '3',
  },
  list: {
    borderWidth: '0px',
    shadow: 'md',
    py: '4',
    rounded: 'none',
  },
});

const components: ThemeComponents = {
  Button: defineStyleConfig({
    baseStyle: {
      fontSize: 'md',
      fontWeight: '500',
      rounded: 'md',
    },
  }),
  Input: defineStyleConfig({
    variants: {
      outline: {
        field: {
          rounded: 'md',
          fontSize: 'md',
          _focusVisible: {
            boxShadow: '0 0 0 1px #FFEE99',
            borderColor: '#FFEE99',
          },
        },
      },
      filled: {
        field: {
          rounded: 'md',
          _focusVisible: {
            boxShadow: '0 0 0 1px #FFEE99',
            borderColor: '#FFEE99',
          },
        },
      },
      flushed: {
        field: {
          rounded: 'md',
        },
      },
    },
  }),
  Textarea: defineStyleConfig({
    variants: {
      outline: {
        rounded: 'md',
        fontSize: 'md',
        _focusVisible: {
          boxShadow: '0 0 0 1px #FFEE99',
          borderColor: '#FFEE99',
        },
      },
      filled: {
        rounded: 'md',
        _focusVisible: {
          boxShadow: '0 0 0 1px #FFEE99',
          borderColor: '#FFEE99',
        },
      },
    },
  }),
  FormLabel: defineStyleConfig({
    baseStyle: {
      fontWeight: 500,
    },
  }),
  Menu: defineMenuMultiStyleConfig({
    baseStyle: {
      ...menuStyle,
    },
  }),
  Modal: defineModalMultiStyleConfig({
    baseStyle: {
      ...modalBaseStyle,
      dialog: {
        rounded: 'xl',
      },
    },
    variants: {
      floatingClose: {
        closeButton: {
          w: '2rem',
          h: '2rem',
          bg: 'white',
          rounded: 'full',
          top: {
            base: '0.3125rem',
            md: '-2rem',
          },
          right: {
            base: '3',
            md: '-2rem',
          },
          _hover: {
            bg: 'gray.100',
          },
          _active: {
            bg: 'gray.200',
          },
        },
      },
    },
  }),
  Drawer: defineModalMultiStyleConfig({ baseStyle: modalBaseStyle }),
};

const theme = extendTheme(
  {
    colors,
    fonts,
    components,
    styles: {
      global: {
        'html, body': {
          bg: '#FAFAFA',
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'yellow',
  })
);

export default theme;

import { extendTheme } from "@chakra-ui/react";
import { CSSObject } from "@emotion/react";

type CreateProps = Record<string, CSSObject>;

function create<T extends CreateProps>(styles: T): T {
  return styles;
}

export const Styles = {
  create,
};

export const theme = extendTheme({
  fonts: {
    body: `"Nunito", sans-serif`,
    heading: `"Nunito", sans-serif`,
    brand: `"Playfair Display", serif`,
  },
  components: {
    Button: {
      baseStyle: {
        lineHeight: 1,
        paddingTop: 0.5,
        letterSpacing: 1,
        textTransform: "uppercase",
      },
    },
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: 2,
        background: "gray.100",
      },
      "::-webkit-scrollbar-thumb": {
        background: "gray.400",
      },
      "::-webkit-scrollbar-corner": {
        background: "gray.100",
      },
    },
  },
  sizes: {
    container: {
      "2xl": "1440px",
    },
  },
});

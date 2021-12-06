import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      "lightHeadingsAndText": "#F5F8FA",
      "darkHeadingsAndText": "#47585B",
      "lightInfo": "#DADADA",
      "darkInfo": "#999999",
      "highlight": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.lightHeadingsAndText'
      }
    }
  }
});
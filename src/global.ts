import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;
--font-inter: Inter;

/* font sizes */
--font-size-sm: 0.88rem;
--font-size-xl: 1.25rem;
--font-size-lg: 1.13rem;

/* Colors */
--color-maroon: #681818;
--color-white: #fff;
--color-darkslategray-100: #454545;
--color-darkslategray-200: #393e46;
--color-slateblue-100: #614bc3;
--color-slateblue-200: rgba(97, 75, 195, 0.9);
--color-gray-200: rgba(255, 255, 255, 0.1);
--color-gray-100: rgba(0, 0, 0, 0.2);
--color-darkturquoise: #33bbc5;

/* Gaps */
--gap-3xs: 0.63rem;
--gap-xl: 1.25rem;
--gap-0: 0rem;
--gap-smi: 0.81rem;
--gap-9xl: 1.75rem;
--gap-14xl: 2.06rem;

/* Paddings */
--padding-3xs: 0.63rem;
--padding-11xl: 1.88rem;
--padding-16xl: 2.19rem;
--padding-31xl: 3.13rem;
--padding-51xl: 4.38rem;
--padding-xl: 1.25rem;
--padding-19xl: 2.38rem;
--padding-21xl: 2.5rem;

/* Border radiuses */
--br-3xs: 10px;
--br-31xl: 50px;
--br-mini: 15px;

}
`;

export default GlobalStyles;
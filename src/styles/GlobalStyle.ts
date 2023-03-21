import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        width: 1140px;
        width: 768px;
        margin: 0 auto;
        font-family: 'NEXON Lv2 Gothic';
    }
    a{
        text-decoration: none;
        color: black;
        font-family: 'NEXON Lv2 Gothic';
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'NEXON Lv1 Gothic OTF';
    }

    @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'NEXON Lv2 Gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

`;

export default GlobalStyle;

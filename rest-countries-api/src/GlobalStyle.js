import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `


:root {
    font-size: 14px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    max-width: 100%;
}

body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: hsl(207, 26%, 17%);
    color: white;
}

.card {
    background-color: hsl(209, 23%, 22%);
    .ctitle {
        font-weight: 800;
    }
   span.country-attri {
       font-size: 1rem;
       font-weight: 600;
   }
}


`
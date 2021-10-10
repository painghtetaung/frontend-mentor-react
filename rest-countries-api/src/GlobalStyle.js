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


//Home.js
a.link-countryid {
   text-decoration: none;
   height: 90%;
 }

//CountryInfo/index.js
a.back-link {
    text-decoration: none;
    color: inherit;
}

@media screen and (min-width: 375px) {
   .card-row {
    justify-content: center;
   }
   .card {
       width:50%;
       height: 100%;
       
   }

   .card-title {
       font-size: 14px;
   }

   .country-attri {
       font-size: 10px;
   }

   .card-text {
       font-size: 11px;
   }
  }

@media screen and (min-width: 576px) {
   
    .card {
        width: 200px;
        height: 380px;
        margin: 20px !important;
    }

    .card img {
        height: 100% !important;
    }

    .card-title {
        font-size: 14px;
    }

    .country-attri {
        font-size: 10px;
    }

    .card-text {
        font-size: 11px;
    }
}


@media screen and (max-width: 375px) {
    .card{
        width: 90%;
    }
    .card-row {
    justify-content: center;
   }
}

 


`
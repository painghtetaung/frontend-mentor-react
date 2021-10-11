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

/* img {
    max-width: 100%;
} */

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
div.back-btn:hover{
    opacity: 0.8;
}


//light-theme mode
.header.light-theme {
    background-color: hsl(0, 0%, 98%);
    color: hsl(200, 15%, 8%);
    border-bottom: 1px solid hsl(200, 15%, 90%);
}

body.light-theme {
    background-color: hsl(0, 0%, 98%);
    color: hsl(200, 15%, 8%);
}

.searchBar.light-theme {
    input {
        background-color: transparent;
        border: 1px solid hsl(200, 15%, 90%);
        box-shadow: 5px 10px 20px hsl(200, 15%, 90%);
        color: hsl(200, 15%, 8%);

        ::placeholder {
            color: hsl(200, 15%, 8%);
            opacity: 0.5;
        }

        input:focus {
        outline: none !important;
        background-color: transparent;
    }
    }
}

.filterBar.light-theme {
    select {
        color: hsl(200, 15%, 8%);
        background-color: transparent;
        border: 1px solid hsl(200, 15%, 90%);
        box-shadow: 5px 10px 20px hsl(200, 15%, 90%);
    }

    select option {
        background-color: transparent;
        color: hsl(200, 15%, 8%);
    }   
}

.card.light-theme {
    background-color: transparent;
    border: none;
    box-shadow: 5px 10px 20px hsl(200, 15%, 90%);
}

div.back-btn.light-theme {
    background-color: transparent;
    border: 1px solid hsl(200, 15%, 90%);
    box-shadow: 5px 10px 20px hsl(200, 15%, 90%);
}

div.border-name.light-theme {
    background-color: transparent;
    border: 1px solid hsl(200, 15%, 90%);
    box-shadow: 5px 10px 20px hsl(200, 15%, 90%);
}

//Media
@media screen and (min-width: 375px) {
   .card-row {
    justify-content: center;
   }
   .card {
       width:50%;
       height: 100%;
       
   }

  .card img {
      height: 150px !important;
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
        height: 350px;
        margin: 20px !important;
    }

    .card img {
        height: 150px !important;
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

    .card img {
        height: 150px;
    }
    .card-row {
    justify-content: center;
   }
}

 


`
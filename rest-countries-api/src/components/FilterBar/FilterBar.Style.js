import styled from "styled-components"

export const Wrapper = styled.div `
    position: relative;

`;

export const SearchBar = styled.div `
  margin-bottom: 25px;
  input {
    background-color: hsl(209, 23%, 22%);
    width: 100%;
    color: hsl(0, 0%, 100%);
    border: none;
    padding-left: 50px;
    border-radius: 6px;
    height: 40px;
    font-size: 10px;
    
    ::placeholder {
    color: white;
    opacity: 1;
     
  }
  }
 
  input:focus {
        outline: none !important;
        background-color: hsl(209, 23%, 22%);;
    }

  i.fa-search {
    position: absolute;
    font-size: 11px;
    top: 15px;
    left: 23px;
  }



  @media screen and (min-width: 576px) {
    input{
      font-size: 13px;
    }
  }
`;

export const Filter = styled.div `
    margin-bottom: 25px;
    select {
        width: 50%;
        font-size: 10px;
        height: 40px;
        padding: 12px;
        color: hsl(0, 0%, 100%);
        border: none;
        border-radius: 5px;
        background-color: hsl(209, 23%, 22%);
    }
    select option {
    border: none !important;
    border-radius: 5px !important;
    background-color: hsl(209, 23%, 22%);
    color: #fff;
  }

  @media screen and (min-width: 576px) {
    select {
      width: 100%;
    }
    margin-left: 72px;
    width: 190px;

    
  }

  
`;
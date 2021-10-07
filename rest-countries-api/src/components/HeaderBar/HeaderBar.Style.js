import styled from 'styled-components'

export const Header = styled.header `
    background-color: hsl(209, 23%, 22%);
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        margin-bottom: 0px;
    }

`;

export const Title = styled.div `

    p.title-text {
        font-size: 13px;
        font-weight: 800;
    }

    @media screen and (min-width: 576px) {
   
    p.title-text{
      font-size: 15px;
    }
  }

`;

export const Mode = styled.div `
    display: flex;
    p.mode-text {
        font-size: 11px;
        font-weight: 300;
    }
    i.fa-moon {
        margin-right: 6px;
        font-size: 10px;
        transform: rotate(-20deg)
    }
`;
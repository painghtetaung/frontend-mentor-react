import styled from 'styled-components'

export const Wrapper = styled.div `
    div.back-btn {
        background-color: hsl(209, 23%, 22%);
        width: 74px;
        height: 22px;
        padding: 4px 0 10px 0;
        font-size: 11px;
        margin-bottom: 30px;
        display: flex;
        
        .arrow-icon {
            margin-left: 18px;
        }

        p.back-text {
            margin-left: 6px;
        }
    }
    .content-img {
        width: 100%;
        max-width: 425px;
        height: 200px;
        margin-bottom: 25px;
    }
    .content-img img {
        width: 100%;
        height: 100%;
    }

    p.country-title {
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 14px;
    }
    p span.country-text {
        font-weight: 600;
        font-size: 11px;
    }
    p {
        font-size: 11px;
        margin-bottom: 0.5rem;
    }
    div.info-1 {
        margin-bottom: 30px;
    }

    p.border-title {
        font-weight: 600;
        font-size: 12px;
        margin-top: 30px;
    }

    .border-names-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 425px;
        min-width: 204px;
       
    }

    .border-name {
        background-color: hsl(209, 23%, 22%);
        text-align: center;
        font-size: 11px;
        padding: 6px 5px 4px 5px;
        margin: 8px;
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        .content-img {
            width: 40%;
            height: 230px;
        }
        .content-img img {
            height: 100%;
        }

        div.country-content {
            display: flex;
           
        }
        div.content-info .info{
            display: flex;
        }
        div.content-info {
            margin-left: 50px;
            margin-top: 15px;
        }
        div.info-2 {
            margin-top: 38px;
            margin-left: 50px;
        }

        div.info-1 {
            margin-bottom: 15px;
        }


        div.border-countries {
            display: flex;
            align-items: center;
        }

        p.border-title {
            margin-top: 0px;
            margin-bottom: 0;
            width: 100%;
        }

        p.border-title {
            width: 40%;
        }
        .border-name {
            width: 50px;
        }
        div.border-names-wrapper {
            margin-bottom: 0px;
        }
    }

    @media screen and (min-width: 992px) {
        .content-img {
            width: 50%;
            height: 280px;
        }

        .content-img img {
            height: 100%;
        }
      
        div.content-info {
            margin-left: 80px;
            margin-top: 15px;
        }

        div.info-1 {
            margin-bottom: 25px;
        }

        p.country-title {
            font-size: 18px;

        }
        p.border-title {
            width: 25%;
        }
        .border-name {
            width: 100px;
        }

    }

    @media screen and (min-width: 1440px) {
        .content-img {
            width: 600px;
        }

        .content-img img {
            height: 350px;
            width: 600px;
        }

        div.content-info {
            margin-left: 280px;
            margin-top: 15px;
        }

        p.country-title {
            font-size: 25px;
            font-weight: 800;
            margin-bottom: 20px;
        }
        p span.country-text {
            font-weight: 600;
            font-size: 18px;
        }
        p.border-title {
            font-size: 18px;
        }
        .border-name {
            font-size: 15px;
        }


    }
`;
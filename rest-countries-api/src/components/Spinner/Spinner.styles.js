import styled from 'styled-components'

export const Spinner = styled.div `
    border: 5px solid hsl(209, 23%, 22%);;
    border-top: 3px solid white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;


    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
import { Header, Title, Mode } from './HeaderBar.Style'
import { useState, useEffect, useContext } from 'react'
import { SearchBar } from '../FilterBar/FilterBar.Style'

//Context
import LightContext from '../LightContext'
//event
import EventEmitter from '../../EventEmitter'
const HeaderBar = () => {
    const [light, setLight] = useContext(LightContext)
    console.log(light)
    
    // const [ light, setLight ] = useState(false)
        
         const changeTheme = () => {
            const header = document.querySelector(".header")
           
            document.body.classList.toggle("light-theme")
            header.classList.toggle("light-theme")
           
            setLight(true)

         }
        
        //     const modeText = document.querySelector(".mode-text")
        //     const countryCard = document.querySelectorAll(".card")
        //     setLight(true)
        //     if (searchBar !== null){
        //         searchBar.classList.toggle("light-theme")
        //     }

        //     if(countryCard !== null)
        //     {
        //         countryCard.forEach((Card) => {
        //             Card.classList.toggle("light-theme")
        //         })
        //     }
        //     if(filterBar !== null) {
        //         filterBar.classList.toggle("light-theme")
        //     }
            
        // }

        // const changeMain = () => {
        //     if(light) {
        //         const searchBar = document.querySelector(".searchBar")
        //         const filterBar = document.querySelector(".filterBar")
        //         const countryCard = document.querySelectorAll(".card")
        //             if (searchBar !== null){
        //             searchBar.classList.toggle("light-theme")
        //         }

        //         if(countryCard !== null)
        //         {
        //             countryCard.forEach((Card) => {
        //                 Card.classList.toggle("light-theme")
        //             })
        //         }
        //         if(filterBar !== null) {
        //             filterBar.classList.toggle("light-theme")
        //         }
        //     }
        // }

        useEffect(() => {
            return() => {
                setLight(false)
            }
        },[setLight])

        return (
            <Header className="container-fluid header">
            <Title>
                <p className="title-text">Where in the world?</p>
            </Title>
    
            <Mode>
               <div onClick={changeTheme} className="d-flex hover">
                <i className="fas fa-moon"></i>
                <p className="mode-text">Dark Mode</p>
               </div>
            </Mode>
        </Header>
        )
    }
        

    //     // if (modeText.innerHTML === "Dark Mode")
    //     // {
    //     //     modeText.innerHTML = "Light Mode"
    //         // countryCard.forEach((Card) => {
    //         //     Card.classList.toggle("light-theme")
    //         // })
    //         // header.classList.toggle("light-theme")
           
    //         // countryCard.forEach((Card) => {
    //         //     Card.classList.toggle("light-theme")
    //         // })
    
    //         // document.body.classList.toggle("light-theme")
    //         // setLight(true)
    //         // if (searchBar !== "light-theme" && searchBar !== null){
    //         //     searchBar.classList.toggle("light-theme")
    //         // }
    //         // if(filterBar !== "light-theme" && filterBar !== null) {
    //         //     filterBar.classList.toggle("light-theme")
    //         // }
    //     // } else {
    //     //     modeText.innerHTML = "Dark Mode"
    //     //     setLight(false)
    //     // }
    //     setLight(false)
    // }
  



export default HeaderBar;
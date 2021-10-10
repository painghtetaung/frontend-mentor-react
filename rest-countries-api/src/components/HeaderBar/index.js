import { Header, Title, Mode } from './HeaderBar.Style'
import { useState, useEffect } from 'react'
import { SearchBar } from '../FilterBar/FilterBar.Style'


//Mode 
import { useModeChange } from '../../hooks/useModeChange'
const HeaderBar = () => {
    const [ light, setLight ] = useState(false)
    useModeChange(light)
    const changeTheme = (light) => {
        const header = document.querySelector(".header")
        const searchBar = document.querySelector(".searchBar")
        const filterBar = document.querySelector(".filterBar")
        const modeText = document.querySelector(".mode-text")
        const countryCard = document.querySelectorAll(".card")

        
        setLight(true)
       
        if (light) {
            
            header.classList.toggle("light-theme")
            countryCard.forEach((Card) => {
                Card.classList.toggle("light-theme")
            })
    
            document.body.classList.toggle("light-theme")
           
           
            if (searchBar !== "light-theme" && searchBar !== null){
                searchBar.classList.toggle("light-theme")
            }
            if(filterBar !== "light-theme" && filterBar !== null) {
                filterBar.classList.toggle("light-theme")
            }
            
        }
      
        

        // if (modeText.innerHTML === "Dark Mode")
        // {
        //     modeText.innerHTML = "Light Mode"
            // countryCard.forEach((Card) => {
            //     Card.classList.toggle("light-theme")
            // })
            // header.classList.toggle("light-theme")
           
            // countryCard.forEach((Card) => {
            //     Card.classList.toggle("light-theme")
            // })
    
            // document.body.classList.toggle("light-theme")
            // setLight(true)
            // if (searchBar !== "light-theme" && searchBar !== null){
            //     searchBar.classList.toggle("light-theme")
            // }
            // if(filterBar !== "light-theme" && filterBar !== null) {
            //     filterBar.classList.toggle("light-theme")
            // }
        // } else {
        //     modeText.innerHTML = "Dark Mode"
        //     setLight(false)
        // }
        setLight(false)
    }
    useEffect(() => {
        changeTheme(light)
        
    },[light])

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

export default HeaderBar;
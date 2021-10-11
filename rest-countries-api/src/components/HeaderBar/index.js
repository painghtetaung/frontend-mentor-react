import { Header, Title, Mode } from './HeaderBar.Style'
import { useEffect, useContext } from 'react'


//Context
import LightContext from '../LightContext'
const HeaderBar = () => {
    const [light, setLight] = useContext(LightContext)
    
         const changeTheme = (light) => {
            if(light) {
                const header = document.querySelector(".header")
                document.body.classList.add("light-theme")
                header.classList.add("light-theme")
            }else{
                const header = document.querySelector(".header")
                document.body.classList.remove("light-theme")
                header.classList.remove("light-theme")
            }

         }

        const triggerLight = () =>{
            setLight(!light)
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
               <div onClick={triggerLight} className="d-flex hover">
                { !light ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i> }
                <p className="mode-text">{ !light ? "Light Mode" : "Dark Mode" }</p>
               </div>
            </Mode>
        </Header>
        )
    }
        
export default HeaderBar;
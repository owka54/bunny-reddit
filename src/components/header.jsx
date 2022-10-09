import rabbitLogo from '../assets/rabbit.png'
import Filters from '../features/filters/filters'
import SearchBar from '../features/searchBar/searchBar'

import { selectTheme } from "../features/colorChange/colorChangeSlice"
import { useSelector } from "react-redux"

export default function Header() {

    const themeColor = useSelector(selectTheme)

    return (
        <header className='header' style={{backgroundColor: themeColor}}>
            <div>
                <img id='logo' src={rabbitLogo} alt="Rabbit logo" />
                <h1>BunnyReddit</h1>
            </div>
            
            {/* <Filters /> */}

            {/* <SearchBar /> */}

        </header>
    )
}





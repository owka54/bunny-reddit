import rabbitLogo from '../assets/rabbit.png'
import Filters from '../features/filters/filters'
import SearchBar from '../features/searchBar/searchBar'

export default function Header() {
    return (
        <header className='header'>
            <div>
                <img id='logo' src={rabbitLogo} alt="Rabbit logo" />
                <h1>BunnyReddit</h1>
            </div>
            

            <Filters />

            <SearchBar />

        </header>
    )
}





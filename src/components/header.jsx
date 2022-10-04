import rabbitLogo from '../assets/rabbit.png'

export default function Header() {
    return (
        <header className='header'>
            <img id='logo' src={rabbitLogo} alt="Rabbit logo" />
            <h1>BunnyReddit</h1>

            <input id='search' placeholder='Search' />
        </header>
    )
}





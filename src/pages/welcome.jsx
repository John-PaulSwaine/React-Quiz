import "../App.css";
import '../assets/functions/functions'

const Welcome = () => {

    return (
        <div>
            <div>
                <h1>TEST YOUR KNOWLEDGE!</h1>
                <h3>Choose a category and see how many you can guess correctly.</h3>
                <h3>You only get one try per question.</h3>
                <h3>Good Luck!</h3>
            </div>
            <div className="button-container">
                <a href="/anime-characters"><button className="button">Anime Characters</button></a>
                <br />
                <a href="/anime-shows"><button className="button">Anime Shows</button></a>
                <br />
                <a href="/footballers"><button className="button">Footballers</button></a>
                <br />
                <a href="/adult-animation-characters"><button className="button">Adult Animation Characters</button></a>
                <br />
                <a href="/adult-animation-shows"><button>Adult Animation Shows</button></a> - to do
                <br />
                <a href="/live-action-shows"><button className="button">Live Action TV Shows</button></a>
                <br />
                <a href="/live-action-characters"><button className="button">Live Action TV Characters</button></a> - to do
            </div>
        </div>
    )
}

export default Welcome
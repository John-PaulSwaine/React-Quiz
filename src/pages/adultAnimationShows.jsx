import { useState } from "react";
import "../App.css";
import { handleCorrect, handleIncorrect } from '../assets/functions/functions'; // Importing functions
import AD from '../assets/Images/adult-animation-shows/AmericanDad.jpg'
import BAB from '../assets/Images/adult-animation-shows/BeavisButthead.jpg'
import BB from '../assets/Images/adult-animation-shows/BoBsBurgers.jpg'
import BH from '../assets/Images/adult-animation-shows/BoJackHorseman.jpg'
import Br from '../assets/Images/adult-animation-shows/Brickleberry.jpg'
import FG from '../assets/Images/adult-animation-shows/FamilyGuy.jpg'
import STLD from '../assets/Images/adult-animation-shows/LowerDecksStarTrek.jpg'
import PPD from '../assets/Images/adult-animation-shows/ParadisePD.jpg'
import RM from '../assets/Images/adult-animation-shows/RickMorty.jpg'
import SP from '../assets/Images/adult-animation-shows/SouthPark.jpg'

const adultAnimationShows = () => {
    const [isCorrectClick, setIsCorrectClick] = useState({});
    const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
    const [infoClass, setInfoClass] = useState({});
    const [disabled, setDisabled] = useState({});

    const handleCorrectClick = (character) => {
        handleCorrect(character, setIsCorrectClick, setIsIncorrectClicked, setInfoClass, setDisabled);
    };

    const handleIncorrectClick = (character) => {
        handleIncorrect(character, setIsIncorrectClicked, setInfoClass, setDisabled);
    };

    return (
        <div>
            <h1>Adult Animation Characters</h1>
            <br />

            {/* Question 1 */}
            <div className="questions">
                <img src={AD} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.AD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('AD')} disabled={disabled.AD}>Family Guy</button>
                    <button className={`incorrect ${isIncorrectClicked.AD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('AD')} disabled={disabled.AD}>South Park</button>
                    <button className={`incorrect ${isIncorrectClicked.AD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('AD')} disabled={disabled.AD}>BoJack Horseman</button>
                    <button className={`correct ${isCorrectClick.AD ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('AD')} disabled={disabled.AD}>American Dad</button>
                </div>
                <p className={`info ${infoClass.AD}`} style={{ display: isCorrectClick.AD || isIncorrectClicked.AD ? 'block' : 'none' }}>
                    American Dad! follows the chaotic life of Stan Smith, a conservative CIA agent, and his eccentric family.
                </p>
            </div>
            <br />

            {/* Question 2 */}
            <div className="questions">
                <img src={BAB} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.BAB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BAB')} disabled={disabled.BAB}>Rick and Morty</button>
                    <button className={`incorrect ${isIncorrectClicked.BAB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BAB')} disabled={disabled.BAB}>Daria</button>
                    <button className={`correct ${isCorrectClick.BAB ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('BAB')} disabled={disabled.BAB}>Beavis and Butthead</button>
                    <button className={`incorrect ${isIncorrectClicked.BAB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BAB')} disabled={disabled.BAB}>Samurai Jack</button>
                </div>
                <p className={`info ${infoClass.BAB}`} style={{ display: isCorrectClick.BAB || isIncorrectClicked.BAB ? 'block' : 'none' }}>
                    Beavis and Butthead follows two awkward teenagers who experience life through heavy metal and poor decisions.
                </p>
            </div>
            <br />

            {/* Question 3 */}
            <div className="questions">
                <img src={BB} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.BB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BB')} disabled={disabled.BB}>Futurama</button>
                    <button className={`correct ${isCorrectClick.BB ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('BB')} disabled={disabled.BB}>Bob's Burgers</button>
                    <button className={`incorrect ${isIncorrectClicked.BB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BB')} disabled={disabled.BB}>South Park</button>
                    <button className={`incorrect ${isIncorrectClicked.BB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BB')} disabled={disabled.BB}>American Dad</button>
                </div>
                <p className={`info ${infoClass.BB}`} style={{ display: isCorrectClick.BB || isIncorrectClicked.BB ? 'block' : 'none' }}>
                    Bob's Burgers follows Bob and his quirky family as they navigate the ups and downs of running a small burger restaurant.
                </p>
            </div>
            <br />

            {/* Question 4 */}
            <div className="questions">
                <img src={BH} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.BH ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BH')} disabled={disabled.BH}>Family Guy</button>
                    <button className={`incorrect ${isIncorrectClicked.BH ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BH')} disabled={disabled.BH}>South Park</button>
                    <button className={`correct ${isCorrectClick.BH ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('BH')} disabled={disabled.BH}>BoJack Horseman</button>
                    <button className={`incorrect ${isIncorrectClicked.BH ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BH')} disabled={disabled.BH}>Paradise PD</button>
                </div>
                <p className={`info ${infoClass.BH}`} style={{ display: isCorrectClick.BH || isIncorrectClicked.BH ? 'block' : 'none' }}>
                    BoJack Horseman is an actor whose self-destructive tendencies affect his relationships, life, and career.
                </p>
            </div>
            <br />

            {/* Question 5 */}
            <div className="questions">
                <img src={Br} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Br ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Br')} disabled={disabled.Br}>Brickleberry</button>
                    <button className={`incorrect ${isIncorrectClicked.Br ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Br')} disabled={disabled.Br}>Family Guy</button>
                    <button className={`incorrect ${isIncorrectClicked.Br ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Br')} disabled={disabled.Br}>Paradise PD</button>
                    <button className={`incorrect ${isIncorrectClicked.Br ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Br')} disabled={disabled.Br}>South Park</button>
                </div>
                <p className={`info ${infoClass.Br}`} style={{ display: isCorrectClick.Br || isIncorrectClicked.Br ? 'block' : 'none' }}>
                    Brickleberry is set in a national park, focusing on dysfunctional park rangers and their misadventures.
                </p>
            </div>
            <br />

            {/* Question 6 */}
            <div className="questions">
                <img src={FG} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.FG ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('FG')} disabled={disabled.FG}>American Dad</button>
                    <button className={`incorrect ${isIncorrectClicked.FG ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('FG')} disabled={disabled.FG}>South Park</button>
                    <button className={`correct ${isCorrectClick.FG ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('FG')} disabled={disabled.FG}>Family Guy</button>
                    <button className={`incorrect ${isIncorrectClicked.FG ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('FG')} disabled={disabled.FG}>BoJack Horseman</button>
                </div>
                <p className={`info ${infoClass.FG}`} style={{ display: isCorrectClick.FG || isIncorrectClicked.FG ? 'block' : 'none' }}>
                    Family Guy revolves around the Griffin family, offering an eccentric view of family life and American culture.
                </p>
            </div>
            <br />

            {/* Question 7 */}
            <div className="questions">
                <img src={STLD} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.STLD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('STLD')} disabled={disabled.STLD}>Rick and Morty</button>
                    <button className={`incorrect ${isIncorrectClicked.STLD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('STLD')} disabled={disabled.STLD}>Futurama</button>
                    <button className={`correct ${isCorrectClick.STLD ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('STLD')} disabled={disabled.STLD}>Star Trek: Lower Decks</button>
                    <button className={`incorrect ${isIncorrectClicked.STLD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('STLD')} disabled={disabled.STLD}>BoJack Horseman</button>
                </div>
                <p className={`info ${infoClass.STLD}`} style={{ display: isCorrectClick.STLD || isIncorrectClicked.STLD ? 'block' : 'none' }}>
                    Star Trek: Lower Decks follows a group of junior officers aboard the USS Cerritos, navigating life in the Star Trek universe.
                </p>
            </div>
            <br />

            {/* Question 8 */}
            <div className="questions">
                <img src={PPD} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.PPD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PPD')} disabled={disabled.PPD}>South Park</button>
                    <button className={`correct ${isCorrectClick.PPD ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('PPD')} disabled={disabled.PPD}>Paradise PD</button>
                    <button className={`incorrect ${isIncorrectClicked.PPD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PPD')} disabled={disabled.PPD}>Beavis and Butthead</button>
                    <button className={`incorrect ${isIncorrectClicked.PPD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PPD')} disabled={disabled.PPD}>Futurama</button>
                </div>
                <p className={`info ${infoClass.PPD}`} style={{ display: isCorrectClick.PPD || isIncorrectClicked.PPD ? 'block' : 'none' }}>
                    Paradise PD centers around a police department in the small town of Paradise, exploring the dysfunctional and absurd.
                </p>
            </div>
            <br />

            {/* Question 9 */}
            <div className="questions">
                <img src={RM} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.RM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('RM')} disabled={disabled.RM}>Futurama</button>
                    <button className={`incorrect ${isIncorrectClicked.RM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('RM')} disabled={disabled.RM}>Family Guy</button>
                    <button className={`correct ${isCorrectClick.RM ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('RM')} disabled={disabled.RM}>Rick and Morty</button>
                    <button className={`incorrect ${isIncorrectClicked.RM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('RM')} disabled={disabled.RM}>Beavis and Butthead</button>
                </div>
                <p className={`info ${infoClass.RM}`} style={{ display: isCorrectClick.RM || isIncorrectClicked.RM ? 'block' : 'none' }}>
                    Rick and Morty follows the adventures of an eccentric scientist and his good-hearted but easily distressed grandson.
                </p>
            </div>
            <br />

            {/* Question 10 */}
            <div className="questions">
                <img src={SP} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.SP ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('SP')} disabled={disabled.SP}>Beavis and Butthead</button>
                    <button className={`correct ${isCorrectClick.SP ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('SP')} disabled={disabled.SP}>South Park</button>
                    <button className={`incorrect ${isIncorrectClicked.SP ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('SP')} disabled={disabled.SP}>Paradise PD</button>
                    <button className={`incorrect ${isIncorrectClicked.SP ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('SP')} disabled={disabled.SP}>Rick and Morty</button>
                </div>
                <p className={`info ${infoClass.SP}`} style={{ display: isCorrectClick.SP || isIncorrectClicked.SP ? 'block' : 'none' }}>
                    South Park follows the antics of four boys in the Colorado town of South Park, known for its dark humor and satirical content.
                </p>
            </div>
        </div>
    );
};

export default adultAnimationShows;

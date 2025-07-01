import { useState } from "react";
import "../App.css";
import { handleCorrect, handleIncorrect } from '../assets/functions/functions'; // Importing functions
import Negan from '../assets/Images/live-action-characters/Negan.jpg'
import JGideon from '../assets/Images/live-action-characters/JGideon.jpg'
import Lash from '../assets/Images/live-action-characters/Lash.jpg'
import GideonM from '../assets/Images/live-action-characters/GideonMalick.jpg'
import Skye from '../assets/Images/live-action-characters/Skye.jpg'
import Yumeko from '../assets/Images/live-action-characters/Yumeko.jpg'
import Thea from '../assets/Images/live-action-characters/Thea.jpg'
import PontiacBandit from '../assets/Images/live-action-characters/PontiacBandit.jpg'
import Oenomaus from '../assets/Images/live-action-characters/Oenomaus.jpg'
import Jenny from '../assets/Images/live-action-characters/JennyCalender.jpg'

const liveActionCharacters = () => {
    const [isCorrectClick, setIsCorrectClick] = useState({});
    const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
    const [infoClass, setInfoClass] = useState({});
    const [disabled, setDisabled] = useState({});

    const handleCorrectClick = (character) => {
        handleCorrect(character, setIsCorrectClick, setIsIncorrectClicked, setInfoClass, setDisabled);
    };

    const handleIncorrectClick = (character) => {
        handleIncorrect(character, setIsCorrectClick, setIsIncorrectClicked, setInfoClass, setDisabled);
    };

    return (
        <div>
            <h1>Live Action Characters</h1>
            <br />
            <div className="questions">
                <img src={Negan} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Negan ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Negan')} disabled={disabled.Negan}>Rick</button>
                    <button className={`correct ${isCorrectClick.Negan ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Negan')} disabled={disabled.Negan}>Negan</button>
                    <button className={`incorrect ${isIncorrectClicked.Negan ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Negan')} disabled={disabled.Negan}>Shane</button>
                    <button className={`incorrect ${isIncorrectClicked.Negan ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Negan')} disabled={disabled.Negan}>Daryl</button>
                </div>
                <p className={`info ${infoClass.Negan}`} style={{ display: isCorrectClick.Negan || isIncorrectClicked.Negan ? 'block' : 'none' }}>Negan is a major antagonist from The Walking Dead, known for his brutal leadership of the Saviors and his iconic weapon, Lucille.</p>
            </div>
            <br />
            <div className="questions">
                <img src={GideonM} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.GideonM ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('GideonM')} disabled={disabled.GideonM}>Gideon Malick</button>
                    <button className={`incorrect ${isIncorrectClicked.GideonM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('GideonM')} disabled={disabled.GideonM}>Freddy Malick</button>
                    <button className={`incorrect ${isIncorrectClicked.GideonM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('GideonM')} disabled={disabled.GideonM}>Nathaniel Malick</button>
                    <button className={`incorrect ${isIncorrectClicked.GideonM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('GideonM')} disabled={disabled.GideonM}>James Malick</button>
                </div>
                <p className={`info ${infoClass.GideonM}`} style={{ display: isCorrectClick.GideonM || isIncorrectClicked.GideonM ? 'block' : 'none' }}>Gideon Malick is a powerful figure in Agents of S.H.I.E.L.D., originally a high-ranking Hydra member and later revealed as a key antagonist.</p>
            </div>
            <br />
            <div className="questions">
                <img src={JGideon} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.JGideon ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('JGideon')} disabled={disabled.JGideon}>David Rossi</button>
                    <button className={`incorrect ${isIncorrectClicked.JGideon ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('JGideon')} disabled={disabled.JGideon}>Spencer Reid</button>
                    <button className={`correct ${isCorrectClick.JGideon ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('JGideon')} disabled={disabled.JGideon}>Jason Gideon</button>
                    <button className={`incorrect ${isIncorrectClicked.JGideon ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('JGideon')} disabled={disabled.JGideon}>Aaron Hotchner</button>
                </div>
                <p className={`info ${infoClass.JGideon}`} style={{ display: isCorrectClick.JGideon || isIncorrectClicked.JGideon ? 'block' : 'none' }}>Jason Gideon is a former lead profiler in Criminal Minds, known for his expertise in criminal psychology.</p>
            </div>
            <br />
            <div className="questions">
                <img src={Lash} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Lash ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Lash')} disabled={disabled.Lash}>Philip Coulson</button>
                    <button className={`incorrect ${isIncorrectClicked.Lash ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Lash')} disabled={disabled.Lash}>Grant Ward</button>
                    <button className={`incorrect ${isIncorrectClicked.Lash ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Lash')} disabled={disabled.Lash}>Leopold Fitz</button>
                    <button className={`correct ${isCorrectClick.Lash ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Lash')} disabled={disabled.Lash}>William Garner</button>
                </div>
                <p className={`info ${infoClass.Lash}`} style={{ display: isCorrectClick.Lash || isIncorrectClicked.Lash ? 'block' : 'none' }}>William Garner, aka Lash, is a powerful inhuman from Agents of S.H.I.E.L.D., capable of transforming into a monstrous form with energy-based powers.</p>
            </div>
            <br />
            <div className="questions">
                <img src={Skye} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Skye ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Skye')} disabled={disabled.Skye}>Daisy Johnson</button>
                    <button className={`incorrect ${isIncorrectClicked.Skye ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Skye')} disabled={disabled.Skye}>Melinda May</button>
                    <button className={`incorrect ${isIncorrectClicked.Skye ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Skye')} disabled={disabled.Skye}>Jemma Simmons</button>
                    <button className={`incorrect ${isIncorrectClicked.Skye ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Skye')} disabled={disabled.Skye}>Maria Hill</button>
                </div>
                <p className={`info ${infoClass.Skye}`} style={{ display: isCorrectClick.Skye || isIncorrectClicked.Skye ? 'block' : 'none' }}>Daisy Johnson (aka Quake) is a central character from Agents of S.H.I.E.L.D., known for her seismic quake powers and strong moral compass.</p>
            </div>
            <br />
            <div className="questions">
                <img src={Yumeko} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Yumeko ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Yumeko')} disabled={disabled.Yumeko}>Mary Saotome</button>
                    <button className={`incorrect ${isIncorrectClicked.Yumeko ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Yumeko')} disabled={disabled.Yumeko}>Ririka Momobami</button>
                    <button className={`correct ${isCorrectClick.Yumeko ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Yumeko')} disabled={disabled.Yumeko}>Yumeko Jabami</button>
                    <button className={`incorrect ${isIncorrectClicked.Yumeko ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Yumeko')} disabled={disabled.Yumeko}>Sayaka Igarashi</button>
                </div>
                <p className={`info ${infoClass.Yumeko}`} style={{ display: isCorrectClick.Yumeko || isIncorrectClicked.Yumeko ? 'block' : 'none' }}>Yumeko Jabami is the main character in Kakegurui, a high-stakes gambler known for her unpredictable and chaotic approach to games of chance.</p>
            </div>
            <br />
            <div className="questions">
                <img src={Thea} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Thea ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Thea')} disabled={disabled.Thea}>Thea Queen</button>
                    <button className={`incorrect ${isIncorrectClicked.Thea ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Thea')} disabled={disabled.Thea}>Laurel Lance</button>
                    <button className={`incorrect ${isIncorrectClicked.Thea ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Thea')} disabled={disabled.Thea}>Felicity Smoak</button>
                    <button className={`incorrect ${isIncorrectClicked.Thea ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Thea')} disabled={disabled.Thea}>Sara Lance</button>
                </div>
                <p className={`info ${infoClass.Thea}`} style={{ display: isCorrectClick.Thea || isIncorrectClicked.Thea ? 'block' : 'none' }}>Thea Queen is a key character from Arrow, the younger sister of Oliver Queen, known for her journey from rebellious teen to a more mature and responsible figure.</p>
            </div>
            <br />
            <div className="questions">
                <img src={PontiacBandit} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.PontiacBandit ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PontiacBandit')} disabled={disabled.PontiacBandit}>Jake Peralta</button>
                    <button className={`correct ${isCorrectClick.PontiacBandit ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('PontiacBandit')} disabled={disabled.PontiacBandit}>Pontiac Bandit</button>
                    <button className={`incorrect ${isIncorrectClicked.PontiacBandit ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PontiacBandit')} disabled={disabled.PontiacBandit}>Terry Jeffords</button>
                    <button className={`incorrect ${isIncorrectClicked.PontiacBandit ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PontiacBandit')} disabled={disabled.PontiacBandit}>Raymond Holt</button>
                </div>
                <p className={`info ${infoClass.PontiacBandit}`} style={{ display: isCorrectClick.PontiacBandit || isIncorrectClicked.PontiacBandit ? 'block' : 'none' }}>Pontiac Bandit is a recurring character from Brooklyn Nine-Nine, a hilarious and lovable figure who is involved in car thefts and other schemes.</p>
            </div>
            <br />
            <div className="questions">
                <img src={Oenomaus} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Oenomaus ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Oenomaus')} disabled={disabled.Oenomaus}>Crixus</button>
                    <button className={`incorrect ${isIncorrectClicked.Oenomaus ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Oenomaus')} disabled={disabled.Oenomaus}>Gannicus</button>
                    <button className={`correct ${isCorrectClick.Oenomaus ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Oenomaus')} disabled={disabled.Oenomaus}>Oenomaus</button>
                    <button className={`incorrect ${isIncorrectClicked.Oenomaus ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Oenomaus')} disabled={disabled.Oenomaus}>Spartacus</button>
                </div>
                <p className={`info ${infoClass.Oenomaus}`} style={{ display: isCorrectClick.Oenomaus || isIncorrectClicked.Oenomaus ? 'block' : 'none' }}>Oenomaus is a gladiator and a key character from Spartacus, known for his fierce loyalty and leadership as the trainer of new gladiators.</p>
            </div>
            <br />
            <div className="questions">
                <img src={Jenny} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Jenny ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Jenny')} disabled={disabled.Jenny}>Willow Rosenberg</button>
                    <button className={`incorrect ${isIncorrectClicked.Jenny ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Jenny')} disabled={disabled.Jenny}>Cordelia Chase</button>
                    <button className={`correct ${isCorrectClick.Jenny ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Jenny')} disabled={disabled.Jenny}>Jenny Calender</button>
                    <button className={`incorrect ${isIncorrectClicked.Jenny ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Jenny')} disabled={disabled.Jenny}>Buffy Summers</button>
                </div>
                <p className={`info ${infoClass.Jenny}`} style={{ display: isCorrectClick.Jenny || isIncorrectClicked.Jenny ? 'block' : 'none' }}>Jenny Calender is a character from Buffy the Vampire Slayer, known for her mysterious role in the supernatural events surrounding the town of Sunnydale.</p>
            </div>
        </div>
    )
}

export default liveActionCharacters;

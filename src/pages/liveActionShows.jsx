import "../App.css";
import { handleCorrect, handleIncorrect } from '../assets/functions/functions'; // Importing functions
import { useState } from "react";
import BonesImage from '../assets/Images/live-action-shows/Bones.jpg'
import CriminalMindsImage from '../assets/Images/live-action-shows/CriminalMinds.jpg'
import DarkSkiesImage from '../assets/Images/live-action-shows/DarkSkies.jpg'
import DrWhoImage from '../assets/Images/live-action-shows/DoctorWho.jpg'
import DrakeAndJoshImage from '../assets/Images/live-action-shows/DrakeAndJosh.jpg'
import FBIImage from '../assets/Images/live-action-shows/FBI.jpg'
import LODADImage from '../assets/Images/live-action-shows/LODAD.jpg'
import MrBeanImage from '../assets/Images/live-action-shows/MrBean.jpg'
import NCISImage from '../assets/Images/live-action-shows/NCIS.jpg'
import TakenImage from '../assets/Images/live-action-shows/Taken.jpg'

const liveActionShows = () => {
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
            <h1>Live Action TV Shows</h1>
            <div className="questions">
                <img src={DrWhoImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.DrWho ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('DrWho')} disabled={disabled.DrWho}>Doctor Who</button>
                    <button className={`incorrect ${isIncorrectClicked.DrWho ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DrWho')} disabled={disabled.DrWho}>Little Britain</button>
                    <button className={`incorrect ${isIncorrectClicked.DrWho ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DrWho')} disabled={disabled.DrWho}>Bottom</button>
                    <button className={`incorrect ${isIncorrectClicked.DrWho ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DrWho')} disabled={disabled.DrWho}>Who's The Doctor</button>
                </div>
                <p className={`info ${infoClass.DrWho}`} style={{ display: isCorrectClick.DrWho || isIncorrectClicked.DrWho ? 'block' : 'none' }}>The further adventures in time and space of the alien adventurer known as the Doctor and his companions from planet Earth.</p>
            </div>
            <div className="questions">
                <img src={FBIImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.FBI ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('FBI')} disabled={disabled.FBI}>Bones</button>
                    <button className={`incorrect ${isIncorrectClicked.FBI ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('FBI')} disabled={disabled.FBI}>FBI: Most Wanted</button>
                    <button className={`correct ${isCorrectClick.FBI ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('FBI')} disabled={disabled.FBI}>FBI</button>
                    <button className={`incorrect ${isIncorrectClicked.FBI ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('FBI')} disabled={disabled.FBI}>S.W.A.T.</button>
                </div>
                <p className={`info ${infoClass.FBI}`} style={{ display: isCorrectClick.FBI || isIncorrectClicked.FBI ? 'block' : 'none' }}>Follows the inner workings of the New York field office criminal division of the Federal Bureau of Investigation (FBI), as they fight to keep New York City and the country safe.</p>
            </div>
            <div className="questions">
                <img src={NCISImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.NCIS ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('NCIS')} disabled={disabled.NCIS}>NCIS: Los Angeles</button>
                    <button className={`incorrect ${isIncorrectClicked.NCIS ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('NCIS')} disabled={disabled.NCIS}>NCIS: Hawaii</button>
                    <button className={`incorrect ${isIncorrectClicked.NCIS ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('NCIS')} disabled={disabled.NCIS}>NCIS: Sydney</button>
                    <button className={`correct ${isCorrectClick.NCIS ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('NCIS')} disabled={disabled.NCIS}>NCIS</button>
                </div>
                <p className={`info ${infoClass.NCIS}`} style={{ display: isCorrectClick.NCIS || isIncorrectClicked.NCIS ? 'block' : 'none' }}>Follows the Major Case Response Team (MCRT) from the Naval Criminal Investigative Service (NCIS), as they get to the bottom of criminal cases connected to Navy and Marine Corps personnel.</p>
            </div>
            <div className="questions">
                <img src={CriminalMindsImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.CM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('CM')} disabled={disabled.CM}>Criminal Minds: Beyond Borders</button>
                    <button className={`incorrect ${isIncorrectClicked.CM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('CM')} disabled={disabled.CM}>Law and Order</button>
                    <button className={`correct ${isCorrectClick.CM ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('CM')} disabled={disabled.CM}>Criminal Minds</button>
                    <button className={`incorrect ${isIncorrectClicked.CM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('CM')} disabled={disabled.CM}>Law and Order: Special Victims Unit</button>
                </div>
                <p className={`info ${infoClass.CM}`} style={{ display: isCorrectClick.CM || isIncorrectClicked.CM ? 'block' : 'none' }}>A group of criminal profilers who work for the FBI as members of its Behavioral Analysis Unit (BAU) using behavioral analysis and profiling to help investigate crimes and find the suspect known as the unsub (unknown subject).</p>
            </div>
            <div className="questions">
                <img src={TakenImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Taken ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Taken')} disabled={disabled.Taken}>Project Blue Book</button>
                    <button className={`correct ${isCorrectClick.Taken ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Taken')} disabled={disabled.Taken}>Taken</button>
                    <button className={`incorrect ${isIncorrectClicked.Taken ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Taken')} disabled={disabled.Taken}>The X-Files</button>
                    <button className={`incorrect ${isIncorrectClicked.Taken ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Taken')} disabled={disabled.Taken}>Invasion</button>
                </div>
                <p className={`info ${infoClass.Taken}`} style={{ display: isCorrectClick.Taken || isIncorrectClicked.Taken ? 'block' : 'none' }}>The lives of three families intersect over five decades, starting with the Roswell crash, as they experience abductions, secret government investigations, and the mystery of alien encounters.</p>
            </div>
            <div className="questions">
                <img src={DarkSkiesImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.DS ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('DS')} disabled={disabled.DS}>Dark Skies</button>
                    <button className={`incorrect ${isIncorrectClicked.DS ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DS')} disabled={disabled.DS}>Taken</button>
                    <button className={`incorrect ${isIncorrectClicked.DS ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DS')} disabled={disabled.DS}>The X-Files</button>
                    <button className={`incorrect ${isIncorrectClicked.DS ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DS')} disabled={disabled.DS}>Invasion</button>
                </div>
                <p className={`info ${infoClass.DS}`} style={{ display: isCorrectClick.DS || isIncorrectClicked.DS ? 'block' : 'none' }}>In 1960s America, a young couple struggle to expose the truth about a hidden alien invasion, while a secret government organization follows its own agenda in dealing with the threat.</p>
            </div>
            <div className="questions">
                <img src={BonesImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Bones ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Bones')} disabled={disabled.Bones}>Bones</button>
                    <button className={`incorrect ${isIncorrectClicked.Bones ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Bones')} disabled={disabled.Bones}>Castle</button>
                    <button className={`incorrect ${isIncorrectClicked.Bones ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Bones')} disabled={disabled.Bones}>Lie To Me</button>
                    <button className={`incorrect ${isIncorrectClicked.Bones ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Bones')} disabled={disabled.Bones}>ReEntry</button>
                </div>
                <p className={`info ${infoClass.Bones}`} style={{ display: isCorrectClick.Bones || isIncorrectClicked.Bones ? 'block' : 'none' }}>F.B.I. Special Agent Seeley Booth teams up with the Jeffersonian's top anthropologist, Dr. Temperance Brennan, to investigate cases where all that's left of the victims are their bones.</p>
            </div>
            <div className="questions">
                <img src={DrakeAndJoshImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.DJ ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DJ')} disabled={disabled.DJ}>The Suite Life of Zach and Cody</button>
                    <button className={`incorrect ${isIncorrectClicked.DJ ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DJ')} disabled={disabled.DJ}>iCarly</button>
                    <button className={`correct ${isCorrectClick.DJ ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('DJ')} disabled={disabled.DJ}>Drake and Josh</button>
                    <button className={`incorrect ${isIncorrectClicked.DJ ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('DJ')} disabled={disabled.DJ}>Keenan and Kel</button>
                </div>
                <p className={`info ${infoClass.DJ}`} style={{ display: isCorrectClick.DJ || isIncorrectClicked.DJ ? 'block' : 'none' }}>Two teenage boys with clashing personalities - one is a slick musician, the other a clumsy nerd - must navigate high school and family life together after becoming step-brothers.</p>
            </div>
            <div className="questions">
                <img src={MrBeanImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Bean ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Bean')} disabled={disabled.Bean}>Mr. Bean</button>
                    <button className={`incorrect ${isIncorrectClicked.Bean ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Bean')} disabled={disabled.Bean}>That's So Raven</button>
                    <button className={`incorrect ${isIncorrectClicked.Bean ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Bean')} disabled={disabled.Bean}>Raven</button>
                    <button className={`incorrect ${isIncorrectClicked.Bean ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Bean')} disabled={disabled.Bean}>Dick and Dom In Da Bungalow</button>
                </div>
                <p className={`info ${infoClass.Bean}`} style={{ display: isCorrectClick.Bean || isIncorrectClicked.Bean ? 'block' : 'none' }}>Bumbling, childlike Mr. Bean has trouble completing the simplest of day-to-day tasks, but his perseverance and resourcefulness frequently allow him to find ingenious ways around problems.</p>
            </div>
            <div className="questions">
                <img src={LODADImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.LODAD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('LODAD')} disabled={disabled.LODAD}>Diddy Dick and Dom</button>
                    <button className={`correct ${isCorrectClick.LODAD ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('LODAD')} disabled={disabled.LODAD}>The Legend of Dick and Dom</button>
                    <button className={`incorrect ${isIncorrectClicked.LODAD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('LODAD')} disabled={disabled.LODAD}>Absolute Genius with Dick and Dom</button>
                    <button className={`incorrect ${isIncorrectClicked.LODAD ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('LODAD')} disabled={disabled.LODAD}>I'm A Celebrity, Get Me Out Of Here!</button>
                </div>
                <p className={`info ${infoClass.LODAD}`} style={{ display: isCorrectClick.LODAD || isIncorrectClicked.LODAD ? 'block' : 'none' }}>Two brothers embark on a very silly journey to find a cure to the disease that is infecting Bottomworld.</p>
            </div>
        </div>
    )
}

export default liveActionShows
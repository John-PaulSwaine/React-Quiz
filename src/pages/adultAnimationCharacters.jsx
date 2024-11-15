import { useState } from "react";
import "../App.css";
import { handleCorrect, handleIncorrect } from '../assets/functions/functions'; // Importing functions
import CartmanImage from '../assets/Images/adult-animation-characters/cartman.jpg'
import CyrilImage from '../assets/Images/adult-animation-characters/cyril.jpg'
import MortyImage from '../assets/Images/adult-animation-characters/evil-morty.webp'
import RandyImage from '../assets/Images/adult-animation-characters/Farmer-randy.webp'
import KorvoImage from '../assets/Images/adult-animation-characters/Korvo.webp'
import LanaImage from '../assets/Images/adult-animation-characters/lana.jpg'
import ManBearPigImage from '../assets/Images/adult-animation-characters/mbp.webp'
import MrPoopyButtHole from '../assets/Images/adult-animation-characters/mr-poopybutthole.jpg'
import RickImage from '../assets/Images/adult-animation-characters/Rick-C-137.webp'
import SterlingImage from '../assets/Images/adult-animation-characters/Sterling.png'

const adultAnimationCharacters = () => {
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
            <div className="questions">
                <img src={RickImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Rick ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Rick')} disabled={disabled.Rick}>Rick Sanchez C-137</button>
                    <button className={`incorrect ${isIncorrectClicked.Rick ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Rick')} disabled={disabled.Rick}>Rick Sanchez C-138</button>
                    <button className={`incorrect ${isIncorrectClicked.Rick ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Rick')} disabled={disabled.Rick}>Rick Sanchez C-139</button>
                    <button className={`incorrect ${isIncorrectClicked.Rick ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Rick')} disabled={disabled.Rick}>Rick Sanchez C-140</button>
                </div>
                <p className={`info ${infoClass.Rick}`} style={{ display: isCorrectClick.Rick || isIncorrectClicked.Rick ? 'block' : 'none' }}>Richard Daniel "Rick" Sanchez of Dimension C-137, commonly referred to as Rick C-137, is the titular main protagonist of Rick and Morty. He is a megagenius[16] scientist whose alcoholism and reckless, nihilistic behavior are sources of concern for "his daughter's" family, as well as the safety of her son, Morty.</p>
            </div>
            <br />
            <div className="questions">
                <img src={RandyImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Randy ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Randy')} disabled={disabled.Randy}>Gerald Broflovski</button>
                    <button className={`correct ${isCorrectClick.Randy ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Randy')} disabled={disabled.Randy}>Randy Marsh</button>
                    <button className={`incorrect ${isIncorrectClicked.Randy ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Randy')} disabled={disabled.Randy}>Leopold Stotch</button>
                    <button className={`incorrect ${isIncorrectClicked.Randy ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Randy')} disabled={disabled.Randy}>Dr Mephesto</button>
                </div>
                <p className={`info ${infoClass.Randy}`} style={{ display: isCorrectClick.Randy || isIncorrectClicked.Randy ? 'block' : 'none' }}>Randy Marsh is the son of Marvin and Grandma Marsh, the half-brother of Jimbo Kern, the husband of Sharon, and the father of Stan and Shelly. He first appeared in the Season One episode, "Volcano", and is voiced by Trey Parker.</p>
            </div>
            <br />
            <div className="questions">
                <img src={MortyImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Morty ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Morty')} disabled={disabled.Morty}>The One True Morty</button>
                    <button className={`correct ${isCorrectClick.Morty ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Morty')} disabled={disabled.Morty}>Evil Morty</button>
                    <button className={`incorrect ${isIncorrectClicked.Morty ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Morty')} disabled={disabled.Morty}>Jerry Smith</button>
                    <button className={`incorrect ${isIncorrectClicked.Morty ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Morty')} disabled={disabled.Morty}>Gazorpagorp</button>
                </div>
                <p className={`info ${infoClass.Morty}`} style={{ display: isCorrectClick.Morty || isIncorrectClicked.Morty ? 'block' : 'none' }}>Mortimer "Evil Morty" Smith of Dimension 79 is a recurring fictional character in the American animated television series Rick and Morty and resulting franchise.</p>
            </div>
            <br />
            <div className="questions">
                <img src={SterlingImage}/>
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Sterling ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Sterling')} disabled={disabled.Sterling}>Ray Gillette</button>
                    <button className={`incorrect ${isIncorrectClicked.Sterling ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Sterling')} disabled={disabled.Sterling}>Aldernop Krieger</button>
                    <button className={`correct ${isCorrectClick.Sterling ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Sterling')} disabled={disabled.Sterling}>Sterling Archer</button>
                    <button className={`incorrect ${isIncorrectClicked.Sterling ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Sterling')} disabled={disabled.Sterling}>Woodhouse</button>
                </div>
                <p className={`info ${infoClass.Sterling}`} style={{ display: isCorrectClick.Sterling || isIncorrectClicked.Sterling ? 'block' : 'none' }}>Sterling Malory Archer, almost exclusively referred to by his surname Archer, is a fictional character and the titular protagonist of the American adult animated sitcom Archer. Created by Adam Reed, he is voiced by H. Jon Benjamin and debuted in the series' pilot episode, "Mole Hunt", on September 17, 2009.</p>
            </div>
            <br />
            <div className="questions">
                <img src={ManBearPigImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.MBP ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('MBP')} disabled={disabled.MBP}>ManBearPig</button>
                    <button className={`incorrect ${isIncorrectClicked.MBP ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('MBP')} disabled={disabled.MBP}>Al Gore</button>
                    <button className={`incorrect ${isIncorrectClicked.MBP ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('MBP')} disabled={disabled.MBP}>Satan</button>
                    <button className={`incorrect ${isIncorrectClicked.MBP ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('MBP')} disabled={disabled.MBP}>Krombobulus Michael</button>
                </div>
                <p className={`info ${infoClass.MBP}`} style={{ display: isCorrectClick.MBP || isIncorrectClicked.MBP ? 'block' : 'none' }}>ManBearPig is a demon from Hell that thrives on temptation, often making deals that involve causing immense carnage toward the next generation when the debt is due. Though often appearing feral, he is sentient and intelligent, sometimes wearing clothing or having specific goals.</p>
            </div>
            <br />
            <div className="questions">
                <img src={LanaImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Lana ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Lana')} disabled={disabled.Lana}>Lana Kane</button>
                    <button className={`incorrect ${isIncorrectClicked.Lana ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Lana')} disabled={disabled.Lana}>Pam Poovey</button>
                    <button className={`incorrect ${isIncorrectClicked.Lana ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Lana')} disabled={disabled.Lana}>Cheryl Tunt</button>
                    <button className={`incorrect ${isIncorrectClicked.Lana ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Lana')} disabled={disabled.Lana}>Malory Archer</button>
                </div>
                <p className={`info ${infoClass.Lana}`} style={{ display: isCorrectClick.Lana || isIncorrectClicked.Lana ? 'block' : 'none' }}>Lana Anthony Kane is a fictional character of the American adult animated sitcom Archer. Created by Adam Reed, she is voiced by Aisha Tyler and debuted in the series' pilot episode, "Mole Hunt", on September 17, 2009.</p>
            </div>
            <br />
            <div className="questions">
                <img src={CyrilImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Cyril ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Cyril')} disabled={disabled.Cyril}>Fry</button>
                    <button className={`correct ${isCorrectClick.Cyril ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Cyril')} disabled={disabled.Cyril}>Cyril Figgis</button>
                    <button className={`incorrect ${isIncorrectClicked.Cyril ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Cyril')} disabled={disabled.Cyril}>Jerry Smith</button>
                    <button className={`incorrect ${isIncorrectClicked.Cyril ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Cyril')} disabled={disabled.Cyril}>Gene</button>
                </div>
                <p className={`info ${infoClass.Cyril}`} style={{ display: isCorrectClick.Cyril || isIncorrectClicked.Cyril ? 'block' : 'none' }}>Cyril Figgis is a comptroller and recently promoted field agent in the TV show Archer. He is passive, bookish, and is frequently bullied by Archer, largely due to his relationship with Lana Kane. Due to Cyril's sexual addiction, he cheated on Lana several times and is no longer with her because of it.</p>
            </div>
            <br />
            <div className="questions">
                <img src={MrPoopyButtHole} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.PBH ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PBH')} disabled={disabled.PBH}>Garbage Goobler</button>
                    <button className={`incorrect ${isIncorrectClicked.PBH ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PBH')} disabled={disabled.PBH}>Squanch</button>
                    <button className={`correct ${isCorrectClick.PBH ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('PBH')} disabled={disabled.PBH}>Mr Poopybutthole</button>
                    <button className={`incorrect ${isIncorrectClicked.PBH ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('PBH')} disabled={disabled.PBH}>Birdperson</button>
                </div>
                <p className={`info ${infoClass.PBH}`} style={{ display: isCorrectClick.PBH || isIncorrectClicked.PBH ? 'block' : 'none' }}>Description. Mr. Poopybutthole is a very good friend to the Smith Family, from another dimension (where he is a planet wide superstar) who has taken refuge with the Smiths so he can live a normal life, he is described as a long-time friend of the family.  </p>
            </div>
            <br />
            <div className="questions">
                <img src={CartmanImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Cartman ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Cartman')} disabled={disabled.Cartman}>Stan Marsh</button>
                    <button className={`incorrect ${isIncorrectClicked.Cartman ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Cartman')} disabled={disabled.Cartman}>Kyle Broflovski</button>
                    <button className={`incorrect ${isIncorrectClicked.Cartman ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Cartman')} disabled={disabled.Cartman}>Kenny McCormick</button>
                    <button className={`correct ${isCorrectClick.Cartman ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Cartman')} disabled={disabled.Cartman}>Eric Cartman</button>
                </div>
                <p className={`info ${infoClass.Cartman}`} style={{ display: isCorrectClick.Cartman || isIncorrectClicked.Cartman ? 'block' : 'none' }}>Eric Theodore Cartman, commonly referred to mononymously by his last name, is a fictional character in the adult animated sitcom South Park, created by Trey Parker and Matt Stone. He is voiced by Parker, and is one of the series' four main characters, alongside Stan Marsh, Kyle Broflovski, and Kenny McCormick.</p>
            </div>
            <br />
            <div className="questions">
                <img src={KorvoImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Korvo ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Korvo')} disabled={disabled.Korvo}>Korvo</button>
                    <button className={`incorrect ${isIncorrectClicked.Korvo ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Korvo')} disabled={disabled.Korvo}>Yumyulack</button>
                    <button className={`incorrect ${isIncorrectClicked.Korvo ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Korvo')} disabled={disabled.Korvo}>Terry</button>
                    <button className={`incorrect ${isIncorrectClicked.Korvo ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Korvo')} disabled={disabled.Korvo}>Jesse</button>
                </div>
                <p className={`info ${infoClass.Korvo}`} style={{ display: isCorrectClick.Korvo || isIncorrectClicked.Korvo ? 'block' : 'none' }}>Korvo is the main protagonist of the Hulu animated series Solar Opposites. He is a leader of the main aliens and computer expert. He, along with the other aliens (Terry, Yumyulack, and Jesse) with the babylike alien as known as the Pupa leave their planet after the asteroid hits it and destroy.</p>
            </div>
        </div>
    )
}

export default adultAnimationCharacters
import "../App.css";
import KiritoImage from '../assets/Images/anime-characters/Kirito.jpg';
import AsunaImage from '../assets/Images/anime-characters/Asuna.jpg';
import ApdnargImage from '../assets/Images/anime-characters/ApdnargOtum.webp';
import AtemImage from '../assets/Images/anime-characters/atem.jpg';
import BellImage from '../assets/Images/anime-characters/BellCranel.jpg';
import ChrisImage from '../assets/Images/anime-characters/ChrisKonosuba.jpg';
import GowtherImage from '../assets/Images/anime-characters/Gowther.webp';
import HeathcliffeImage from '../assets/Images/anime-characters/Heathcliff.jpg';
import MeguminImage from '../assets/Images/anime-characters/Megumin.jpg';
import MokubaImage from '../assets/Images/anime-characters/Mokuba.webp';
import { handleCorrect, handleIncorrect } from '../assets/functions/functions';
import { useState } from "react";

const AnimeCharacters = () => {
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
            <h1>Anime Characters</h1>
            <div className="questions">
                <img src={KiritoImage} alt="Kirito" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.kirito ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('kirito')} disabled={disabled.kirito}>Klein</button>
                    <button className={`incorrect ${isIncorrectClicked.kirito ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('kirito')} disabled={disabled.kirito}>Kazuma Satou</button>
                    <button className={`correct ${isCorrectClick.kirito ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('kirito')} disabled={disabled.kirito}>Kirito</button>
                    <button className={`incorrect ${isIncorrectClicked.kirito ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('kirito')} disabled={disabled.kirito}>Agil</button>
                </div>
                <p className={`info ${infoClass.kirito}`} style={{ display: isCorrectClick.kirito || isIncorrectClicked.kirito ? 'block' : 'none' }}>
                    Kirito, the protagonist of Sword Art Online, is a skilled swordsman known for his exceptional combat abilities, resilience, and strong sense of justice, often characterized by his iconic black attire and dual-wielding swordsmanship.
                </p>
            </div>
            <div className="questions">
                <img src={AsunaImage} alt="Asuna" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.asuna ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('asuna')} disabled={disabled.asuna}>Yuuki</button>
                    <button className={`incorrect ${isIncorrectClicked.asuna ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('asuna')} disabled={disabled.asuna}>Silica</button>
                    <button className={`correct ${isCorrectClick.asuna ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('asuna')} disabled={disabled.asuna}>Asuna</button>
                    <button className={`incorrect ${isIncorrectClicked.asuna ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('asuna')} disabled={disabled.asuna}>Lisbeth</button>
                </div>
                <p className={`info ${infoClass.asuna}`} style={{ display: isCorrectClick.asuna || isIncorrectClicked.asuna ? 'block' : 'none' }}>
                    Asuna, a central character in Sword Art Online, is a formidable swordswoman and the vice commander of the Knights of the Blood Oath, renowned for her exceptional speed and combat skills, as well as her compassionate and determined nature.
                </p>
            </div>
            <div className="questions">
                <img src={ApdnargImage} alt="Apdnarg" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.apdnarg ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('apdnarg')} disabled={disabled.apdnarg}>Dr Hawkins</button>
                    <button className={`correct ${isCorrectClick.apdnarg ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('apdnarg')} disabled={disabled.apdnarg}>Apdnarg</button>
                    <button className={`incorrect ${isIncorrectClicked.apdnarg ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('apdnarg')} disabled={disabled.apdnarg}>Marik</button>
                    <button className={`incorrect ${isIncorrectClicked.apdnarg ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('apdnarg')} disabled={disabled.apdnarg}>Odion</button>
                </div>
                <p className={`info ${infoClass.apdnarg}`} style={{ display: isCorrectClick.apdnarg || isIncorrectClicked.apdnarg ? 'block' : 'none' }}>
                    Apdnarg Otum, a character from Yu-Gi-Oh, is a skilled duelist who uses a mask to conceal his identity and participates in the Kaiba Corp Grand Championship, where he faces off against renowned duelists like Joey Wheeler.
                </p>
            </div>
            <div className="questions">
                <img src={AtemImage} alt="Atem" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.atem ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('atem')} disabled={disabled.atem}>Kaiba</button>
                    <button className={`correct ${isCorrectClick.atem ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('atem')} disabled={disabled.atem}>Atem</button>
                    <button className={`incorrect ${isIncorrectClicked.atem ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('atem')} disabled={disabled.atem}>Joey</button>
                    <button className={`incorrect ${isIncorrectClicked.atem ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('atem')} disabled={disabled.atem}>Yugi</button>
                </div>
                <p className={`info ${infoClass.atem}`} style={{ display: isCorrectClick.atem || isIncorrectClicked.atem ? 'block' : 'none' }}>
                    Atem, the ancient Pharaoh from Yu-Gi-Oh, is the spirit residing within the Millennium Puzzle, known for his exceptional dueling skills and his role as Yugi Muto’s alter ego in battles against formidable opponents.
                </p>
            </div>
            <div className="questions">
                <img src={BellImage} alt="Bell Cranel" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.bell ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('bell')} disabled={disabled.bell}>Ais</button>
                    <button className={`correct ${isCorrectClick.bell ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('bell')} disabled={disabled.bell}>Bell Cranel</button>
                    <button className={`incorrect ${isIncorrectClicked.bell ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('bell')} disabled={disabled.bell}>Loki</button>
                    <button className={`incorrect ${isIncorrectClicked.bell ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('bell')} disabled={disabled.bell}>Hestia</button>
                </div>
                <p className={`info ${infoClass.bell}`} style={{ display: isCorrectClick.bell || isIncorrectClicked.bell ? 'block' : 'none' }}>
                    Bell Cranel, the protagonist of DanMachi, is a determined and aspiring adventurer known for his unique ability to grow stronger rapidly and his desire to prove himself as a hero while seeking to protect those he cares about.
                </p>
            </div>
            <div className="questions">
                <img src={ChrisImage} alt="Chris" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`correct ${isCorrectClick.chris ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('chris')} disabled={disabled.chris}>Chris</button>
                    <button className={`incorrect ${isIncorrectClicked.chris ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('chris')} disabled={disabled.chris}>Aqua</button>
                    <button className={`incorrect ${isIncorrectClicked.chris ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('chris')} disabled={disabled.chris}>Darkness</button>
                    <button className={`incorrect ${isIncorrectClicked.chris ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('chris')} disabled={disabled.chris}>Megumin</button>
                </div>
                <p className={`info ${infoClass.chris}`} style={{ display: isCorrectClick.chris || isIncorrectClicked.chris ? 'block' : 'none' }}>
                    Chris, a character from Konosuba, is a cunning and agile thief who often acts with a laid-back demeanor, using her skills to navigate the challenges of a fantasy world while forming friendships with the main protagonists.
                </p>
            </div>
            <div className="questions">
                <img src={GowtherImage} alt="Gowther" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.gowther ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('gowther')} disabled={disabled.gowther}>Meliodas</button>
                    <button className={`incorrect ${isIncorrectClicked.gowther ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('gowther')} disabled={disabled.gowther}>Ban</button>
                    <button className={`incorrect ${isIncorrectClicked.gowther ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('gowther')} disabled={disabled.gowther}>Escanor</button>
                    <button className={`correct ${isCorrectClick.gowther ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('gowther')} disabled={disabled.gowther}>Gowther</button>
                </div>
                <p className={`info ${infoClass.gowther}`} style={{ display: isCorrectClick.gowther || isIncorrectClicked.gowther ? 'block' : 'none' }}>
                    Gowther, the Goat Sin of Lust from The Seven Deadly Sins, is a powerful and enigmatic magician known for his ability to manipulate memories and emotions, often embodying a complex mix of innocence and cunning.
                </p>
            </div>
            <div className="questions">
                <img src={HeathcliffeImage} alt="Heathcliff" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`correct ${isCorrectClick.heathcliff ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('heathcliff')} disabled={disabled.heathcliff}>Heathcliff</button>
                    <button className={`incorrect ${isIncorrectClicked.heathcliff ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('heathcliff')} disabled={disabled.heathcliff}>Eishi</button>
                    <button className={`incorrect ${isIncorrectClicked.heathcliff ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('heathcliff')} disabled={disabled.heathcliff}>Kuradeel</button>
                    <button className={`incorrect ${isIncorrectClicked.heathcliff ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('heathcliff')} disabled={disabled.heathcliff}>Klein</button>
                </div>
                <p className={`info ${infoClass.heathcliff}`} style={{ display: isCorrectClick.heathcliff || isIncorrectClicked.heathcliff ? 'block' : 'none' }}>
                    Heathcliff, a pivotal character in Sword Art Online, is the enigmatic and formidable commander of the Knights of the Blood Oath, concealing his true identity as the game’s creator while skillfully navigating the complexities of the virtual world.
                </p>
            </div>
            <div className="questions">
                <img src={MeguminImage} alt="Megumin" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.megumin ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('megumin')} disabled={disabled.megumin}>Darkness</button>
                    <button className={`correct ${isCorrectClick.megumin ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('megumin')} disabled={disabled.megumin}>Megumin</button>
                    <button className={`incorrect ${isIncorrectClicked.megumin ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('megumin')} disabled={disabled.megumin}>Chomusuke</button>
                    <button className={`incorrect ${isIncorrectClicked.megumin ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('megumin')} disabled={disabled.megumin}>Aqua</button>
                </div>
                <p className={`info ${infoClass.megumin}`} style={{ display: isCorrectClick.megumin || isIncorrectClicked.megumin ? 'block' : 'none' }}>
                    Megumin, the foremost mage of the Crimson Demons from KonoSuba, is a quirky and passionate young girl who specializes in explosion magic, which she can only cast once per day.
                </p>
            </div>
            <div className="questions">
                <img src={MokubaImage} alt="Mokuba" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`correct ${isCorrectClick.mokuba ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('mokuba')} disabled={disabled.mokuba}>Mokuba</button>
                    <button className={`incorrect ${isIncorrectClicked.mokuba ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('mokuba')} disabled={disabled.mokuba}>Seto</button>
                    <button className={`incorrect ${isIncorrectClicked.mokuba ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('mokuba')} disabled={disabled.mokuba}>Joey</button>
                    <button className={`incorrect ${isIncorrectClicked.mokuba ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('mokuba')} disabled={disabled.mokuba}>Yugi</button>
                </div>
                <p className={`info ${infoClass.mokuba}`} style={{ display: isCorrectClick.mokuba || isIncorrectClicked.mokuba ? 'block' : 'none' }}>
                    Mokuba Kaiba, the younger brother of Seto Kaiba in Yu-Gi-Oh!, is a kind-hearted and loyal character who often serves as a moral compass for his brother.
                </p>
            </div>
        </div>
    );
};

export default AnimeCharacters;
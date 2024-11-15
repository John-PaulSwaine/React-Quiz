import "../App.css";
import { handleCorrect, handleIncorrect } from '../assets/functions/functions'; // Importing functions
import { useState } from "react";
import AccelImage from '../assets/Images/anime-shows/Accel-World.jpg'
import AngelImage from '../assets/Images/anime-shows/Angel-Beats.jpg'
import AnotherWorldImage from '../assets/Images/anime-shows/another-world.jpg'
import IrumaImage from '../assets/Images/anime-shows/iruma-kun.jpg'
import KuroshitsujiImage from '../assets/Images/anime-shows/Kuroshitsuji.jpg'
import OnePunchImage from '../assets/Images/anime-shows/one-punch.jpg'
import Persona5Image from '../assets/Images/anime-shows/P5A.jpg'
import RailgunImage from '../assets/Images/anime-shows/Railgun.jpg'
import SpiceWolfImage from '../assets/Images/anime-shows/spice-wolf.jpg'
import UndeadAdventurerImage from '../assets/Images/anime-shows/undead-adventurer.jpg'

const AnimeShows = () => {
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
            <h1>Anime Shows</h1>
            <div className="questions">
                <img src={OnePunchImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.OPM ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('OPM')} disabled={disabled.OPM}>One-Punch Man</button>
                    <button className={`incorrect ${isIncorrectClicked.OPM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('OPM')} disabled={disabled.OPM}>Attack On Titan</button>
                    <button className={`incorrect ${isIncorrectClicked.OPM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('OPM')} disabled={disabled.OPM}>Konosuba: An Explosion on this Wonderful World!</button>
                    <button className={`incorrect ${isIncorrectClicked.OPM ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('OPM')} disabled={disabled.OPM}>The Aristocrat's Otherworldly Adventure: Serving Gods Who Go To Far</button>
                </div>
                <p className={`info ${infoClass.OPM}`} style={{ display: isCorrectClick.OPM || isIncorrectClicked.OPM ? 'block' : 'none' }}>Saitama started out being a hero just for fun. After three years of “special” training, he became so powerful that he can defeat opponents with a single punch. Now, alongside Genos, his faithful cyborg disciple, Saitama is ready to begin his official duties as a professional hero working with the Hero Association. However, the frequency of monster appearances is surging and it increasingly appears as if the Great Seer Madame Shibabawa's prediction about the Earth's doom is coming true. In the midst of this crisis, the “hero hunter” Garou makes his own appearance.</p>
            </div>
            <div className="questions">
                <img src={UndeadAdventurerImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.TUUA ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('TUUA')} disabled={disabled.TUUA}>Level 1 Demon Lord and One Room Hero</button>
                    <button className={`incorrect ${isIncorrectClicked.TUUA ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('TUUA')} disabled={disabled.TUUA}>Helck</button>
                    <button className={`correct ${isCorrectClick.TUUA ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('TUUA')} disabled={disabled.TUUA}>The Unwanted Undead Adventurer</button>
                    <button className={`incorrect ${isIncorrectClicked.TUUA ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('TUUA')} disabled={disabled.TUUA}>The Undead Adventurer</button>
                </div>
                <p className={`info ${infoClass.TUUA}`} style={{ display: isCorrectClick.TUUA || isIncorrectClicked.TUUA ? 'block' : 'none' }}>Rentt Faina has hunted monsters for the last 10 years. Sadly, he's not great at his job, stuck hunting slimes and goblins for a few coins each day. His luck turns when he finds an undiscovered path. At the path's end, he meets his demise in the maw of a legendary dragon. But, he wakes up as an undead bag of bones! He sets out to achieve Existential Evolution and rejoin the land of the living.</p>
            </div>
            <div className="questions">
                <img src={AnotherWorldImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.AW ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('AW')} disabled={disabled.AW}>No Longer Allowed In Another World</button>
                    <button className={`incorrect ${isIncorrectClicked.AW ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('AW')} disabled={disabled.AW}>That Time I Got Reincarnated As A Slime</button>
                    <button className={`incorrect ${isIncorrectClicked.AW ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('AW')} disabled={disabled.AW}>My Deer Friend</button>
                    <button className={`incorrect ${isIncorrectClicked.AW ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('AW')} disabled={disabled.AW}>A Certain Scientific Railgun</button>
                </div>
                <p className={`info ${infoClass.AW}`} style={{ display: isCorrectClick.AW || isIncorrectClicked.AW ? 'block' : 'none' }}>Pulled into an otherworldly adventure with cute sidekicks and superpowers, you’d think Osamu hit the jackpot. Nope! From a time before pixels, the early 20th-century gloomy author just wants to find a quiet place to meet his maker, not to rack up XP. Sadly, his poetic demise is constantly thwarted by inconvenient heroics. Dive into the hilariously tragic life of the most reluctant hero!</p>
            </div>
            <div className="questions">
                <img src={SpiceWolfImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.SW ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('SW')} disabled={disabled.SW}>Spice and Wolf: Merchant Meets The Wise Wolf</button>
                    <button className={`incorrect ${isIncorrectClicked.SW ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('SW')} disabled={disabled.SW}>Alya Sometimes Hides Her Feelings in Russian</button>
                    <button className={`incorrect ${isIncorrectClicked.SW ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('SW')} disabled={disabled.SW}>True Beauty</button>
                    <button className={`incorrect ${isIncorrectClicked.SW ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('SW')} disabled={disabled.SW}>High School DxD</button>
                </div>
                <p className={`info ${infoClass.SW}`} style={{ display: isCorrectClick.SW || isIncorrectClicked.SW ? 'block' : 'none' }}>Lawrence is a traveling merchant selling various goods from a horse-drawn cart. One day, he arrives at a village and meets a beautiful girl with the ears and tail of an animal! Her name is Holo the Wisewolf and she brings bountiful harvests. She wishes to return to her homeland, and Lawrence offers to take her. Now, the once-lonely merchant and the once-lonely wisewolf begin their journey north.</p>
            </div>
            <div className="questions">
                <img src={RailgunImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Railgun ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Railgun')} disabled={disabled.Railgun}>A Certain Scientific Railgun</button>
                    <button className={`incorrect ${isIncorrectClicked.Iruma ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Railgun')} disabled={disabled.Railgun}>A Certain Scientific Accelerator</button>
                    <button className={`incorrect ${isIncorrectClicked.Iruma ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Railgun')} disabled={disabled.Railgun}>A Certain Magical Index</button>
                    <button className={`incorrect ${isIncorrectClicked.Iruma ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Railgun')} disabled={disabled.Railgun}>A Certain Scientific Teleporter</button>
                </div>
                <p className={`info ${infoClass.Railgun}`} style={{ display: isCorrectClick.Railgun || isIncorrectClicked.Railgun ? 'block' : 'none' }}>Misaka's electro-manipulation abilities—and delightfully destructive Railgun projectile move—make her a rock star in Academy City. The techno-metropolis is packed with supernaturally powered students known as espers, including Misaka's flirty friend and roommate, Kuroko. In this city full of super-powered gangs, mad scientists, and monsters—there's no shortage of action!</p>
            </div>
            <div className="questions">
                <img src={Persona5Image} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.P5 ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('P5')} disabled={disabled.P5}>Persona 4: The Animation</button>
                    <button className={`correct ${isCorrectClick.P5 ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('P5')} disabled={disabled.P5}>Persona 5: The Animation</button>
                    <button className={`incorrect ${isIncorrectClicked.P5 ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('P5')} disabled={disabled.P5}>Persona: Trinity Soul</button>
                    <button className={`incorrect ${isIncorrectClicked.P5 ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('P5')} disabled={disabled.P5}>Persona 5 Royal</button>
                </div>
                <p className={`info ${infoClass.P5}`} style={{ display: isCorrectClick.P5 || isIncorrectClicked.P5 ? 'block' : 'none' }}>Ren Amamiya is about to enter his second year after transferring to Shujin Academy in Tokyo. Following a particular incident, his Persona awakens, and together with his friends they form the “Phantom Thieves of Hearts” to reform hearts of corrupt adults by stealing the source of their distorted desires. Meanwhile, bizarre and inexplicable crimes have been popping up one after another… Living an ordinary high school life in Tokyo during the day, the group maneuvers the metropolitan city as Phantom Thieves after hours. Let the curtain rise for this grand, picaresque story!</p>
            </div>
            <div className="questions">
                <img src={AccelImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.Accel ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Accel')} disabled={disabled.Accel}>The Fruit of Evolution</button>
                    <button className={`incorrect ${isIncorrectClicked.Accel ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Accel')} disabled={disabled.Accel}>Ah! My Goddess</button>
                    <button className={`incorrect ${isIncorrectClicked.Accel ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Accel')} disabled={disabled.Accel}>Aesthetica of a Rogue Hero</button>
                    <button className={`correct ${isCorrectClick.Accel ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Accel')} disabled={disabled.Accel}>Accel World</button>
                </div>
                <p className={`info ${infoClass.Accel}`} style={{ display: isCorrectClick.Accel || isIncorrectClicked.Accel ? 'block' : 'none' }}>Haruyuki is an overweight kid and at bottom of food chain at his middle school. Within sci-fi setting of real world he often seeks refuge in a virtual one.</p>
            </div>
            <div className="questions">
                <img src={AngelImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Angel ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Angel')} disabled={disabled.Angel}>Angel Beats</button>
                    <button className={`incorrect ${isIncorrectClicked.Angel ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Angel')} disabled={disabled.Angel}>Angel Sanctuary</button>
                    <button className={`incorrect ${isIncorrectClicked.Angel ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Angel')} disabled={disabled.Angel}>Angelic Layer</button>
                    <button className={`incorrect ${isIncorrectClicked.Angel ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Angel')} disabled={disabled.Angel}>Angels of Death</button>
                </div>
                <p className={`info ${infoClass.Angel}`} style={{ display: isCorrectClick.Angel || isIncorrectClicked.Angel ? 'block' : 'none' }}>Otonashi is a young boy living in the afterlife with no memories of his life before his death. He joins a school organization called the SSS whose mission is to fight against God.</p>
            </div>
            <div className="questions">
                <img src={KuroshitsujiImage} />
                <div className="buttons">
                    <button className={`incorrect ${isIncorrectClicked.BB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BB')} disabled={disabled.BB}>Black Jack</button>
                    <button className={`correct ${isCorrectClick.BB ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('BB')} disabled={disabled.BB}>Black Butler</button>
                    <button className={`incorrect ${isIncorrectClicked.BB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BB')} disabled={disabled.BB}>Black Blood Brothers</button>
                    <button className={`incorrect ${isIncorrectClicked.BB ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('BB')} disabled={disabled.BB}>Black Clover</button>
                </div>
                <p className={`info ${infoClass.BB}`} style={{ display: isCorrectClick.BB || isIncorrectClicked.BB ? 'block' : 'none' }}>Ciel Phantomhive is the most powerful boy in all of England, but he bears the scars of unspeakable suffering. Forced to watch as his beloved parents were brutally murdered, Ciel was subsequently abducted and violently tortured. Desperate to end his suffering, the boy traded his own soul for a chance at vengeance, casting his lot with the one person on whom he could depend: Sebastian, a demon Butler summoned from the very pits of hell. Together, they'll prowl the darkest alleys of London on a mission to snuff out those who would do evil.</p>
            </div>
            <div className="questions">
                <img src={IrumaImage} />
                <div className="buttons">
                    <button className={`correct ${isCorrectClick.Iruma ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('Iruma')} disabled={disabled.Iruma}>Welcome To Demon School, Iruma-Kun</button>
                    <button className={`incorrect ${isIncorrectClicked.Iruma ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Iruma')} disabled={disabled.Iruma}>Welcome To Demon School</button>
                    <button className={`incorrect ${isIncorrectClicked.Iruma ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Iruma')} disabled={disabled.Iruma}>Welcome To School</button>
                    <button className={`incorrect ${isIncorrectClicked.Iruma ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('Iruma')} disabled={disabled.Iruma}>Welcome To School, Iruma-Kun</button>
                </div>
                <p className={`info ${infoClass.Iruma}`} style={{ display: isCorrectClick.Iruma || isIncorrectClicked.Iruma ? 'block' : 'none' }}>Suzuki Iruma (Iruma Suzuki), human, 14, one day finds himself taken against his will into the world of demons. To add to his predicament, his doting owner and self-appointed "Grandpa" is the chair-demon at his new school. In order to survive, Iruma must deal with a haughty student who challenges him to a duel, a girl with adjustment issues, and so many more scary beings! Can this ultimate pacifist dodge the slings and arrows that are flung his way? As he struggles frantically, Iruma's innate kindness begins to win over enemies.</p>
            </div>
        </div>
    )
}

export default AnimeShows
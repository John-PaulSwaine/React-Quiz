import "../App.css";
import '../assets/functions/functions'
import KiritoImage from '../assets/Images/anime-characters/Kirito.jpg'
import AsunaImage from '../assets/Images/anime-characters/Asuna.jpg'
import ApdnargImage from '../assets/Images/anime-characters/ApdnargOtum.webp'
import AtemImage from '../assets/Images/anime-characters/atem.jpg'
import BellImage from '../assets/Images/anime-characters/BellCranel.jpg'
import ChrisImage from '../assets/Images/anime-characters/ChrisKonosuba.jpg'
import GowtherImage from '../assets/Images/anime-characters/Gowther.webp'
import HeathcliffeImage from '../assets/Images/anime-characters/Heathcliff.jpg'
import MeguminImage from '../assets/Images/anime-characters/Megumin.jpg'
import MokubaImage from '../assets/Images/anime-characters/Mokuba.webp'

const AnimeCharacters = () => {

    return (
        <div>
            <h1>Anime Characters</h1>
            <div className="questions">
                <img src={KiritoImage} />
                <div className="buttons">
                    <button className="correct">Kirito</button>
                    <button className="incorrect">Kazuma Satou</button>
                    <button className="incorrect">Klein</button>
                    <button className="incorrect">Agil</button>
                </div>
                <p className = "info">Kirito also known as the black swordsman because he would always wear all black with a black sword called the elucidator. He was one of 10,000 players to get trapped in the world of Sword Art Online and was a member of the assault team dedicated to clearing the game and freeing all the players.</p>
            </div>
            <div class="questions">
                <img src={AsunaImage} />
                <div class="buttons">
                    <button class="correct">Asuna</button>
                    <button class="incorrect">Leafa</button>
                    <button class="incorrect">Yui</button>
                    <button class="incorrect">Liz</button>
                </div>
                <p class="info">Asuna also known as lightning flash due to her immense speed was traped in Sword Art Online with Kirito. She becomes the second in command of the knights of the blood oath - the strongest guild within the game.</p>
            </div>
            <div class="questions">
                <img src={HeathcliffeImage} />
                <div class="buttons">
                    <button class="incorrect">Agil</button>
                    <button class="correct">Heathcliffe</button>
                    <button class="incorrect">Kazuto Kirigiya</button>
                    <button class="incorrect">Akihiko Kayaba</button>
                </div>
                <p class="info">Heathcliff is the commander of the knights of the blood oath guild within Sword Art Online. He is also the final boss on floor 100 of Aincrad. Heathcliff uses a full length shield and a sword. He is also known as Akihiko Kayaba, the creator of Sword Art Online.</p>
            </div>
            <div class="questions">
                <img src={BellImage} />
                <div class="buttons">
                    <button class="incorrect">Welf Crozo</button>
                    <button class="incorrect">Finn Diemne</button>
                    <button class="incorrect">Gareth Landrock</button>
                    <button class="correct">Bell Cranel</button>
                </div>
                <p class="info">Bell Cranel was the lone member of the Hestia Familia in DanMachi or Is It Wrong To Pick Up Girls In A Dungeon. He is completely devoted to goddess Hestia despite numerous advances being made towards him from other goddesses. He single-handedly leads to the Hestia Familia growing.</p>
            </div>
            <div class="questions">
                <img src={ChrisImage} />
                <div class="buttons">
                    <button class="correct">Chris</button>
                    <button class="incorrect">Megumin</button>
                    <button class="incorrect">Lolitina Ford Dustiness</button>
                    <button class="incorrect">Aqua</button>
                </div>
                <p class="info">Chris is a thief girl within the city of Axel in Konosuba. She is friendly with Darkness, the useless crusader and teaches Kazuma his first set of skills - Steal, Lurk and Enemy Detection. She is the human form of the goddess Eris when she wants to check in on the own of Axel or when she is just bored.</p>        
            </div>
            <div class="questions">
                <img src={MeguminImage} />
                <div class="buttons">
                    <button class="incorrect">Yun-Yun</button>
                    <button class="incorrect">Koneko</button>
                    <button class="correct">Megumin</button>
                    <button class="incorrect">Megumi Tadokoro</button>
                </div>
                <p class="info">Her name is Megumin, "the foremost mage in all the crimson demons and wielder of explosion magic". She refused to learn any spells until she had learnt explosion magic and since learning explosion magic she only wants to learn spells to buff her explosion. Due to the massive amount of magical power needed to cast explosion she is only ever able to cast it once per day and she is unable to move afterwards. As a result of this she keeps getting kicked out of parties until she joins up with Kazuma and Aqua. </p>
            </div>
            <div class="questions">
                <img src={GowtherImage} />
                <div class="buttons">
                    <button class="correct">Gowther</button>
                    <button class="incorrect">Escanor</button>
                    <button class="incorrect">Harlequin</button>
                    <button class="incorrect">Soma Yukihira</button>
                </div>
                <p class="info">The Seven Deadly Sins' goat sin of lust, Gowther is nothing more than a mere doll, created by Gowther of Selflessness of the ten commandments of the demon race. Gowther has the ability to tamper with the memories and feelings of people which he does numerous times in his quest to develop a heart. </p>        
            </div>
            <div class="questions">
                <img src={ApdnargImage} />
                <div class="buttons">
                    <button class="incorrect">Grandpa Muto</button>
                    <button class="correct">Apdnarg Otum</button>
                    <button class="incorrect">Professor Hawkins</button>
                    <button class="incorrect">Maximillian Pegasus</button>
                </div>
                <p class="info">Apdnarg Otum is a Kaiba Corp Grand Championship Duelist using a mask covering his face thereby hiding his true identity. He loses out to his former student Joey Wheeler.</p>
            </div>  
            <div class="questions">
                <img src={AtemImage} />
                <div class="buttons">
                    <button class="incorrect">Yami Yugi</button>
                    <button class="correct">Atem</button>
                    <button class="incorrect">Yugi Muto</button>
                    <button class="incorrect">Yami Bakura</button>
                </div>
                <p class="info">Atem was a former pharoh of Egypt until he sealed himself and Zorc inside the Millienium Puzzle. Solomon's grandson Yugi Muto solved the Millennium Puzzle, causing Atem, now a disembodied, amnesiac spirit, to reside in Yugi's body, eventually taking on the identity of “Yami Yugi”. As Yami, he aided Yugi many times over the course of his adventures, with Yugi attempting to return the favor by finding the secret of Atem's past.</p>
            </div>
            <div class="questions">
                <img src={MokubaImage} />
                <div class="buttons">
                    <button class="incorrect">Tristan Taylor</button>
                    <button class="correct">Mokuba Kaiba</button>
                    <button class="incorrect">Mako Tsunami</button>
                    <button class="incorrect">Bakura</button>
                </div>
                <p class="info">In the Yu-Gi-Oh! Duel Monsters anime, Mokuba is eternally devoted to his brother Seto Kaiba and is constantly by his side. He is more naive and good-natured, and will do whatever his brother tells him to. Indeed, Mokuba is perhaps the source of his brother's more human and positive traits, and Mokuba has acknowledged that to everyone else Kaiba can seem like an unpleasant person to be around but Mokuba recognizes the good in his brother and looks past Kaiba's flaws. </p>
            </div>

        </div>
    )
}

export default AnimeCharacters
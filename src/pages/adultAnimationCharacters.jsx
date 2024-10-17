import "../App.css";
import '../assets/functions'
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

    return (
        <div>
            <h1>Adult Animation Characters</h1>
            <div class="questions">
                <img src={RickImage} />
                <div class="buttons">
                    <button class="correct">Rick Sanchez C-137</button>
                    <button class="incorrect">Rick Sanchez C-138</button>
                    <button class="incorrect">Rick Sanchez C-139</button>
                    <button class="incorrect">Rick Sanchez C-140</button>
                </div>
                <p class="info">Richard Daniel "Rick" Sanchez of Dimension C-137, commonly referred to as Rick C-137, is the titular main protagonist of Rick and Morty. He is a megagenius[16] scientist whose alcoholism and reckless, nihilistic behavior are sources of concern for "his daughter's" family, as well as the safety of her son, Morty.</p>
            </div>
            <div class="questions">
                <img src={RandyImage} />
                <div class="buttons">
                    <button class="incorrect">Gerald Broflovski</button>
                    <button class="correct">Randy Marsh</button>
                    <button class="incorrect">Leopold Stotch</button>
                    <button class="incorrect">Dr Mephesto</button>
                </div>
                <p class="info">Randy Marsh is the son of Marvin and Grandma Marsh, the half-brother of Jimbo Kern, the husband of Sharon, and the father of Stan and Shelly. He first appeared in the Season One episode, "Volcano", and is voiced by Trey Parker.</p>
            </div>
            <div class="questions">
                <img src={MortyImage} />
                <div class="buttons">
                    <button class="incorrect">The One True Morty</button>
                    <button class="correct">Evil Morty</button>
                    <button class="incorrect">Jerry Smith</button>
                    <button class="incorrect">Gazorpagorp</button>
                </div>
                <p class="info">Mortimer "Evil Morty" Smith of Dimension 79 is a recurring fictional character in the American animated television series Rick and Morty and resulting franchise.</p>
            </div>
            <div class="questions">
                <img src={SterlingImage}/>
                <div class="buttons">
                    <button class="incorrect">Ray Gillette</button>
                    <button class="incorrect">Aldernop Krieger</button>
                    <button class="correct">Sterling Archer</button>
                    <button class="incorrect">Woodhouse</button>
                </div>
                <p class="info">Sterling Malory Archer, almost exclusively referred to by his surname Archer, is a fictional character and the titular protagonist of the American adult animated sitcom Archer. Created by Adam Reed, he is voiced by H. Jon Benjamin and debuted in the series' pilot episode, "Mole Hunt", on September 17, 2009.</p>
            </div>
            <div class="questions">
                <img src={ManBearPigImage} />
                <div class="buttons">
                    <button class="correct">ManBearPig</button>
                    <button class="incorrect">Al Gore</button>
                    <button class="incorrect">Satan</button>
                    <button class="incorrect">Krombobulus Michael</button>
                </div>
                <p class="info">ManBearPig is a demon from Hell that thrives on temptation, often making deals that involve causing immense carnage toward the next generation when the debt is due. Though often appearing feral, he is sentient and intelligent, sometimes wearing clothing or having specific goals.</p>
            </div>
            <div class="questions">
                <img src={LanaImage} />
                <div class="buttons">
                    <button class="correct">Lana Kane</button>
                    <button class="incorrect">Pam Poovey</button>
                    <button class="incorrect">Cheryl Tunt</button>
                    <button class="incorrect">Malory Archer</button>
                </div>
                <p class="info">Lana Anthony Kane is a fictional character of the American adult animated sitcom Archer. Created by Adam Reed, she is voiced by Aisha Tyler and debuted in the series' pilot episode, "Mole Hunt", on September 17, 2009.</p>
            </div>
            <div class="questions">
                <img src={CyrilImage} />
                <div class="buttons">
                    <button class="incorrect">Fry</button>
                    <button class="correct">Cyril Figgis</button>
                    <button class="incorrect">Jerry Smith</button>
                    <button class="incorrect">Gene</button>
                </div>
                <p class="info">Cyril Figgis is a comptroller and recently promoted field agent in the TV show Archer. He is passive, bookish, and is frequently bullied by Archer, largely due to his relationship with Lana Kane. Due to Cyril's sexual addiction, he cheated on Lana several times and is no longer with her because of it.</p>
            </div>
            <div class="questions">
                <img src={MrPoopyButtHole} />
                <div class="buttons">
                    <button class="incorrect">Garbage Goobler</button>
                    <button class="incorrect">Squanch</button>
                    <button class="correct">Mr Poopybutthole</button>
                    <button class="incorrect">Birdperson</button>
                </div>
                <p class="info">Description. Mr. Poopybutthole is a very good friend to the Smith Family, from another dimension (where he is a planet wide superstar) who has taken refuge with the Smiths so he can live a normal life, he is described as a long-time friend of the family.  </p>
            </div>
            <div class="questions">
                <img src={CartmanImage} />
                <div class="buttons">
                    <button class="incorrect">Stan Marsh</button>
                    <button class="incorrect">Kyle Broflovski</button>
                    <button class="incorrect">Kenny McCormick</button>
                    <button class="correct">Eric Cartman</button>
                </div>
                <p class="info">Eric Theodore Cartman, commonly referred to mononymously by his last name, is a fictional character in the adult animated sitcom South Park, created by Trey Parker and Matt Stone. He is voiced by Parker, and is one of the series' four main characters, alongside Stan Marsh, Kyle Broflovski, and Kenny McCormick.</p>
            </div>
            <div class="questions">
                <img src={KorvoImage} />
                <div class="buttons">
                    <button class="correct">Korvo</button>
                    <button class="incorrect">Yumyulack</button>
                    <button class="incorrect">Terry</button>
                    <button class="incorrect">Jesse</button>
                </div>
                <p class="info">Korvo is the main protagonist of the Hulu animated series Solar Opposites. He is a leader of the main aliens and computer expert. He, along with the other aliens (Terry, Yumyulack, and Jesse) with the babylike alien as known as the Pupa leave their planet after the asteroid hits it and destroy.</p>
            </div>
        </div>
    )
}

export default adultAnimationCharacters
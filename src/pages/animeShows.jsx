import "../App.css";
import '../assets/functions/functions'
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

    return (
        <div>
            <h1>Anime Shows</h1>
            <div class="questions">
                <img src={OnePunchImage} />
                <div class="buttons">
                    <button class="correct">One-Punch Man</button>
                    <button class="incorrect">Attack On Titan</button>
                    <button class="incorrect">Konosuba: An Explosion on this Wonderful World!</button>
                    <button class="incorrect">The Aristocrat's Otherworldly Adventure: Serving Gods Who Go To Far</button>
                </div>
                <p class="info">Saitama started out being a hero just for fun. After three years of “special” training, he became so powerful that he can defeat opponents with a single punch. Now, alongside
                    Genos, his faithful cyborg disciple, Saitama is ready to begin his official duties as a professional hero working with the Hero Association. However, the frequency of monster appearances is surging and it increasingly appears as if the Great Seer Madame Shibabawa's prediction about the Earth's doom is coming true. In the midst of this crisis, the “hero hunter” Garou makes his own appearance.</p>
            </div>
            <div class="questions">
                <img src={UndeadAdventurerImage} />
                <div class="buttons">
                    <button class="incorrect">Level 1 Demon Lord and One Room Hero</button>
                    <button class="incorrect">Helck</button>
                    <button class="correct">The Unwanted Undead Adventurer</button>
                    <button class="incorrect">The Undead Adventurer</button>
                </div>
                <p class="info">Rentt Faina has hunted monsters for the last 10 years. Sadly, he's not great at his job, stuck hunting slimes and goblins for a few coins each day. His luck turns when he finds an undiscovered path. At the path's end, he meets his demise in the maw of a legendary dragon. But, he wakes up as an undead bag of bones! He sets out to achieve Existential Evolution and rejoin the land of the living.</p>
            </div>
            <div class="questions">
                <img src={AnotherWorldImage} />
                <div class="buttons">
                    <button class="correct">No Longer Allowed In Another World</button>
                    <button class="incorrect">That Time I Got Reincarnated As A Slime</button>
                    <button class="incorrect">My Deer Friend</button>
                    <button class="incorrect">A Certain Scientific Railgun</button>
                </div>
                <p class="info">Pulled into an otherworldly adventure with cute sidekicks and superpowers, you’d think Osamu hit the jackpot. Nope! From a time before pixels, the early 20th-century gloomy author just wants to find a quiet place to meet his maker, not to rack up XP. Sadly, his poetic demise is constantly thwarted by inconvenient heroics. Dive into the hilariously tragic life of the most reluctant hero!</p>
            </div>
            <div class="questions">
                <img src={SpiceWolfImage} />
                <div class="buttons">
                    <button class="correct">Spice and Wolf: Merchant Meets The Wise Wolf</button>
                    <button class="incorrect">Alya Sometimes Hides Her Feelings in Russian</button>
                    <button class="incorrect">True Beauty</button>
                    <button class="incorrect">High School DxD</button>
                </div>
                <p class="info">Lawrence is a traveling merchant selling various goods from a horse-drawn cart. One day, he arrives at a village and meets a beautiful girl with the ears and tail of an animal! Her name is Holo the Wisewolf and she brings bountiful harvests. She wishes to return to her homeland, and Lawrence offers to take her. Now, the once-lonely merchant and the once-lonely wisewolf begin their journey north.</p>
            </div>
            <div class="questions">
                <img src={RailgunImage} />
                <div class="buttons">
                    <button class="correct">A Certain Scientific Railgun</button>
                    <button class="incorrect">A Certain Scientific Accelerator</button>
                    <button class="incorrect">A Certain Magical Index</button>
                    <button class="incorrect">A Certain Scientific Teleporter</button>
                </div>
                <p class="info">Misaka's electro-manipulation abilities—and delightfully destructive Railgun projectile move—make her a rock star in Academy City. The techno-metropolis is packed with supernaturally powered students known as espers, including Misaka's flirty friend and roommate, Kuroko. In this city full of super-powered gangs, mad scientists, and monsters—there's no shortage of action!</p>
            </div>
            <div class="questions">
                <img src={Persona5Image} />
                <div class="buttons">
                    <button class="incorrect">Persona 4: The Animation</button>
                    <button class="correct">Persona 5: The Animation</button>
                    <button class="incorrect">Persona: Trinity Soul</button>
                    <button class="incorrect">Persona 5 Royal</button>
                </div>
                <p class="info">Ren Amamiya is about to enter his second year after transferring to Shujin Academy in Tokyo. Following a particular incident, his Persona awakens, and together with his friends they form the “Phantom Thieves of Hearts” to reform hearts of corrupt adults by stealing the source of their distorted desires. Meanwhile, bizarre and inexplicable crimes have been popping up one after another… Living an ordinary high school life in Tokyo during the day, the group maneuvers the metropolitan city as Phantom Thieves after hours. Let the curtain rise for this grand, picaresque story!</p>
            </div>
            <div class="questions">
                <img src={AccelImage} />
                <div class="buttons">
                    <button class="incorrect">The Fruit of Evolution</button>
                    <button class="incorrect">Ah! My Goddess</button>
                    <button class="incorrect">Aesthetica of a Rogue Hero</button>
                    <button class="correct">Accel World</button>
                </div>
                <p class="info">Haruyuki is an overweight kid and at bottom of food chain at his middle school. Within sci-fi setting of real world he often seeks refuge in a virtual one.</p>
            </div>
            <div class="questions">
                <img src={AngelImage} />
                <div class="buttons">
                    <button class="correct">Angel Beats</button>
                    <button class="incorrect">Angel Sanctuary</button>
                    <button class="incorrect">Angelic Layer</button>
                    <button class="incorrect">Angels of Death</button>
                </div>
                <p class="info">Otonashi is a young boy living in the afterlife with no memories of his life before his death. He joins a school organization called the SSS whose mission is to fight against God.</p>
            </div>
            <div class="questions">
                <img src={KuroshitsujiImage} />
                <div class="buttons">
                    <button class="incorrect">Black Jack</button>
                    <button class="correct">Black Butler</button>
                    <button class="incorrect">Black Blood Brothers</button>
                    <button class="incorrect">Black Clover</button>
                </div>
                <p class="info">Ciel Phantomhive is the most powerful boy in all of England, but he bears the scars of unspeakable suffering. Forced to watch as his beloved parents were brutally murdered, Ciel was subsequently abducted and violently tortured. Desperate to end his suffering, the boy traded his own soul for a chance at vengeance, casting his lot with the one person on whom he could depend: Sebastian, a demon Butler summoned from the very pits of hell. Together, they'll prowl the darkest alleys of London on a mission to snuff out those who would do evil.</p>
            </div>
            <div class="questions">
                <img src={IrumaImage} />
                <div class="buttons">
                    <button class="correct">Welcome To Demon School, Iruma-Kun</button>
                    <button class="incorrect">Welcome To Demon School</button>
                    <button class="incorrect">Welcome To School</button>
                    <button class="incorrect">Welcome To School, Iruma-Kun</button>
                </div>
                <p class="info">Suzuki Iruma (Iruma Suzuki), human, 14, one day finds himself taken against his will into the world of demons. To add to his predicament, his doting owner and self-appointed "Grandpa" is the chair-demon at his new school. In order to survive, Iruma must deal with a haughty student who challenges him to a duel, a girl with adjustment issues, and so many more scary beings! Can this ultimate pacifist dodge the slings and arrows that are flung his way? As he struggles frantically, Iruma's innate kindness begins to win over enemies.</p>
            </div>
        </div>
    )
}

export default AnimeShows
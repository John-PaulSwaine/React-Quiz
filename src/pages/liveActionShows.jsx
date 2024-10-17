import "../App.css";
import '../assets/functions'
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

    return (
        <div>
            <h1>Live Action TV Shows</h1>
            <div class="questions">
                <img src={DrWhoImage} />
                <div class="buttons">
                    <button class="correct">Doctor Who</button>
                    <button class="incorrect">Little Britain</button>
                    <button class="incorrect">Bottom</button>
                    <button class="incorrect">Who's The Doctor</button>
                </div>
                <p class="info">The further adventures in time and space of the alien adventurer known as the Doctor and his companions from planet Earth.</p>
            </div>
            <div class="questions">
                <img src={FBIImage} />
                <div class="buttons">
                    <button class="incorrect">Bones</button>
                    <button class="incorrect">FBI: Most Wanted</button>
                    <button class="correct">FBI</button>
                    <button class="incorrect">S.W.A.T.</button>
                </div>
                <p class="info">Follows the inner workings of the New York field office criminal division of the Federal Bureau of Investigation (FBI), as they fight to keep New York City and the country safe.</p>
            </div>
            <div class="questions">
                <img src={NCISImage} />
                <div class="buttons">
                    <button class="incorrect">NCIS: Los Angeles</button>
                    <button class="incorrect">NCIS: Hawaii</button>
                    <button class="incorrect">NCIS: Sydney</button>
                    <button class="correct">NCIS</button>
                </div>
                <p class="info">Follows the Major Case Response Team (MCRT) from the Naval Criminal Investigative Service (NCIS), as they get to the bottom of criminal cases connected to Navy and Marine Corps personnel.</p>
            </div>
            <div class="questions">
                <img src={CriminalMindsImage} />
                <div class="buttons">
                    <button class="incorrect">Criminal Minds: Beyond Borders</button>
                    <button class="incorrect">Law and Order</button>
                    <button class="correct">Criminal Minds</button>
                    <button class="incorrect">Law and Order: Special Victims Unit</button>
                </div>
                <p class="info">A group of criminal profilers who work for the FBI as members of its Behavioral Analysis Unit (BAU) using behavioral analysis and profiling to help investigate crimes and find the suspect known as the unsub (unknown subject).</p>
            </div>
            <div class="questions">
                <img src={TakenImage} />
                <div class="buttons">
                    <button class="incorrect">Project Blue Book</button>
                    <button class="correct">Taken</button>
                    <button class="incorrect">The X-Files</button>
                    <button class="incorrect">Invasion</button>
                </div>
                <p class="info">The lives of three families intersect over five decades, starting with the Roswell crash, as they experience abductions, secret government investigations, and the mystery of alien encounters.</p>
            </div>
            <div class="questions">
                <img src={DarkSkiesImage} />
                <div class="buttons">
                    <button class="correct">Dark Skies</button>
                    <button class="incorrect">Taken</button>
                    <button class="incorrect">The X-Files</button>
                    <button class="incorrect">Invasion</button>
                </div>
                <p class="info">In 1960s America, a young couple struggle to expose the truth about a hidden alien invasion, while a secret government organization follows its own agenda in dealing with the threat.</p>
            </div>
            <div class="questions">
                <img src={BonesImage} />
                <div class="buttons">
                    <button class="correct">Bones</button>
                    <button class="incorrect">Castle</button>
                    <button class="incorrect">Lie To Me</button>
                    <button class="incorrect">ReEntry</button>
                </div>
                <p class="info">F.B.I. Special Agent Seeley Booth teams up with the Jeffersonian's top anthropologist, Dr. Temperance Brennan, to investigate cases where all that's left of the victims are their bones.</p>
            </div>
            <div class="questions">
                <img src={DrakeAndJoshImage} />
                <div class="buttons">
                    <button class="incorrect">The Suite Life of Zach and Cody</button>
                    <button class="incorrect">iCarly</button>
                    <button class="correct">Drake and Josh</button>
                    <button class="incorrect">Keenan and Kel</button>
                </div>
                <p class="info">Two teenage boys with clashing personalities - one is a slick musician, the other a clumsy nerd - must navigate high school and family life together after becoming step-brothers.</p>
            </div>
            <div class="questions">
                <img src={MrBeanImage} />
                <div class="buttons">
                    <button class="correct">Mr. Bean</button>
                    <button class="incorrect">That's So Raven</button>
                    <button class="incorrect">Raven</button>
                    <button class="incorrect">Dick and Dom In Da Bungalow</button>
                </div>
                <p class="info">Bumbling, childlike Mr. Bean has trouble completing the simplest of day-to-day tasks, but his perseverance and resourcefulness frequently allow him to find ingenious ways around problems.</p>
            </div>
            <div class="questions">
                <img src={LODADImage} />
                <div class="buttons">
                    <button class="incorrect">Diddy Dick and Dom</button>
                    <button class="correct">The Legend of Dick and Dom</button>
                    <button class="incorrect">Absolute Genius with Dick and Dom</button>
                    <button class="incorrect">I'm A Celebrity, Get Me Out Of Here!</button>
                </div>
                <p class="info">Two brothers embark on a very silly journey to find a cure to the disease that is infecting Bottomworld.</p>
            </div>
        </div>
    )
}

export default liveActionShows
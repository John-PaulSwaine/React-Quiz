import "../App.css";
import ballImage from '../assets/Images/footballers/ball.jpg'
import chiesaImage from '../assets/Images/footballers/chiesa.jpg'
import etoImage from '../assets/Images/footballers/etoo.jpg'
import fashanuImage from '../assets/Images/footballers/fashanu.webp'
import gomesImage from '../assets/Images/footballers/gomes.webp'
import koemanImage from '../assets/Images/footballers/koeman.jpg'
import moyesImage from '../assets/Images/footballers/moyes.webp'
import dixieImage from '../assets/Images/footballers/Dixie.jpg'
import simmsImage from '../assets/Images/footballers/simms.jpg'
import yamalImage from '../assets/Images/footballers/yamal.webp'
import { handleCorrect, handleIncorrect } from '../assets/functions/functions'; // Importing functions
import { useState } from "react";
import '../App.css';

const Footballers = () => {
    const [isCorrectClick, setIsCorrectClick] = useState({});
    const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
    const [infoClass, setInfoClass] = useState({});
    const [disabled, setDisabled] = useState({});

    const handleCorrectClick = (footballer) => {
        handleCorrect(footballer, setIsCorrectClick, setIsIncorrectClicked, setInfoClass, setDisabled);
    };

    const handleIncorrectClick = (footballer) => {
        handleIncorrect(footballer, setIsIncorrectClicked, setInfoClass, setDisabled);
    };

    return (
        <div>
            <h1>Footballers</h1>
            <div className="questions">
                <img src={ballImage} alt="Alan Ball" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.ball ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('ball')} disabled={disabled.ball}>Joe Royle</button>
                    <button className={`correct ${isCorrectClick.ball ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('ball')} disabled={disabled.ball}>Alan Ball</button>
                    <button className={`incorrect ${isIncorrectClicked.ball ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('ball')} disabled={disabled.ball}>Howard Kendall</button>
                    <button className={`incorrect ${isIncorrectClicked.ball ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('ball')} disabled={disabled.ball}>Colin Harvey</button>
                </div>
                <p className={`info ${infoClass.ball}`} style={{ display: isCorrectClick.ball || isIncorrectClicked.ball ? 'block' : 'none' }}>Alan Ball was an English footballer known for his incredible stamina and skill as a midfielder, famously helping England win the 1966 World Cup and later making an impact as a manager.</p>
            </div>
            <div className="questions">
                <img src={chiesaImage} alt="chiesa" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`correct ${isCorrectClick.chiesa ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('chiesa')} disabled={disabled.chiesa}>Federico Chiesa</button>
                    <button className={`incorrect ${isIncorrectClicked.chiesa ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('chiesa')} disabled={disabled.chiesa}>Moise Kean</button>
                    <button className={`incorrect ${isIncorrectClicked.chiesa ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('chiesa')} disabled={disabled.chiesa}>Gianluigi Donnarumma</button>
                    <button className={`incorrect ${isIncorrectClicked.chiesa ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('chiesa')} disabled={disabled.chiesa}>Mario Balotelli</button>
                </div>
                <p className={`info ${infoClass.chiesa}`} style={{ display: isCorrectClick.chiesa || isIncorrectClicked.chiesa ? 'block' : 'none' }}>Federico Chiesa is an Italian professional footballer who plays as a winger for Liverpool FC and the Italy national team, known for his speed, technical skill, and relentless energy on the field.</p>
            </div>
            <div className="questions">
                <img src={etoImage} alt="etoo" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`correct ${isCorrectClick.etoo ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('etoo')} disabled={disabled.etoo}>Samuel Eto'o</button>
                    <button className={`incorrect ${isIncorrectClicked.etoo ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('etoo')} disabled={disabled.etoo}>Sylvain Distin</button>
                    <button className={`incorrect ${isIncorrectClicked.etoo ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('etoo')} disabled={disabled.etoo}>Romelu Lukaku</button>
                    <button className={`incorrect ${isIncorrectClicked.etoo ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('etoo')} disabled={disabled.etoo}>Thierry Henry</button>
                </div>
                <p className={`info ${infoClass.etoo}`} style={{ display: isCorrectClick.etoo || isIncorrectClicked.etoo ? 'block' : 'none' }}>Samuel Eto'o is a retired Cameroonian footballer celebrated as one of Africa's greatest players, known for his prolific goal-scoring and success with clubs like Barcelona and Inter Milan, as well as for winning African Player of the Year four times.</p>
            </div>
            <div className="questions">
                <img src={fashanuImage} alt="fashanu" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.fashanu ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('fashanu')} disabled={disabled.fashanu}>Terry Gibson</button>
                    <button className={`incorrect ${isIncorrectClicked.fashanu ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('fashanu')} disabled={disabled.fashanu}>Dennis Wise</button>
                    <button className={`correct ${isCorrectClick.fashanu ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('fashanu')} disabled={disabled.fashanu}>John Fashanu</button>
                    <button className={`incorrect ${isIncorrectClicked.fashanu ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('fashanu')} disabled={disabled.fashanu}>Eric Young</button>
                </div>
                <p className={`info ${infoClass.fashanu}`} style={{ display: isCorrectClick.fashanu || isIncorrectClicked.fashanu ? 'block' : 'none' }}>John Fashanu is a former English footballer and television presenter, recognized for his physical style of play as a forward, particularly during his successful spell with Wimbledon, where he helped lead the club to an FA Cup victory in 1988.</p>
            </div>
            <div className="questions">
                <img src={gomesImage} alt="Andre Gomes" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.gomes ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('gomes')} disabled={disabled.gomes}>Phil Jagielka</button>
                    <button className={`incorrect ${isIncorrectClicked.gomes ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('gomes')} disabled={disabled.gomes}>Kaoru Mitoma</button>
                    <button className={`correct ${isCorrectClick.gomes ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('gomes')} disabled={disabled.gomes}>André Gomes</button>
                    <button className={`incorrect ${isIncorrectClicked.gomes ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('gomes')} disabled={disabled.gomes}>Ademola Lookman</button>
                </div>
                <p className={`info ${infoClass.gomes}`} style={{ display: isCorrectClick.gomes || isIncorrectClicked.gomes ? 'block' : 'none' }}>Andre Gomes is a Portuguese midfielder known for his technical skill and calmness on the ball, having played for top clubs including Benfica, Valencia, Barcelona, and Everton, where he joined permanently after a successful loan and overcame a severe injury during his Premier League tenure.</p>
            </div>
            <div className="questions">
                <img src={koemanImage} alt="koeman" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`incorrect ${isIncorrectClicked.koeman ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('koeman')} disabled={disabled.koeman}>José Mourinho</button>
                    <button className={`incorrect ${isIncorrectClicked.koeman ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('koeman')} disabled={disabled.koeman}>Carlo Ancelotti</button>
                    <button className={`correct ${isCorrectClick.koeman ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('koeman')} disabled={disabled.koeman}>Ronald Koeman</button>
                    <button className={`incorrect ${isIncorrectClicked.koeman ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('koeman')} disabled={disabled.koeman}>Pep Guardiola</button>
                </div>
                <p className={`info ${infoClass.koeman}`} style={{ display: isCorrectClick.koeman || isIncorrectClicked.koeman ? 'block' : 'none' }}>koeman, a footballer from Konosuba, is a cunning and agile thief who often acts with a laid-back demeanor, using her skills to navigate the challenges of a fantasy world while forming friendships with the main protaginists.</p>
            </div>
            <div className="questions">
                <img src={moyesImage} alt="moyes" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`correct ${isCorrectClick.moyes ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('moyes')} disabled={disabled.moyes}>David Moyes</button>
                    <button className={`incorrect ${isIncorrectClicked.moyes ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('moyes')} disabled={disabled.moyes}>Duncan Ferguson</button>
                    <button className={`incorrect ${isIncorrectClicked.moyes ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('moyes')} disabled={disabled.moyes}>Wayne Rooney</button>
                    <button className={`incorrect ${isIncorrectClicked.moyes ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('moyes')} disabled={disabled.moyes}>Sir Alex Ferguson</button>
                </div>
                <p className={`info ${infoClass.moyes}`} style={{ display: isCorrectClick.moyes || isIncorrectClicked.moyes ? 'block' : 'none' }}>David Moyes is a Scottish football manager and former player known for his long-term tenure at Everton and more recently leading West Ham United to European success, with a reputation for his tactical discipline and ability to maximize team potential on a budget.</p>
            </div>
            <div className="questions">
                <img src={dixieImage} alt="dixie" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`icorrect ${isIncorrectClicked.dixie ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('dixie')} disabled={disabled.dixie}>Edward Taylor</button>
                    <button className={`incorrect ${isIncorrectClicked.dixie ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('dixie')} disabled={disabled.dixie}>Ted Critchley</button>
                    <button className={`incorrect ${isIncorrectClicked.dixie ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('dixie')} disabled={disabled.dixie}>Bobby Irvine</button>
                    <button className={`correct ${isCorrectClick.dixie ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('dixie')} disabled={disabled.dixie}>Dixie Dean</button>
                </div>
                <p className={`info ${infoClass.dixie}`} style={{ display: isCorrectClick.dixie || isIncorrectClicked.dixie ? 'block' : 'none' }}>William Ralph 'Dixie' Dean, was an iconic English footballer celebrated for his prolific goal-scoring ability and remarkable tenure at Everton, where he scored a record 383 goals in 433 appearances and is regarded as one of the greatest forwards in football history. He also still holds the record for the most league goals in a single league season with 60, which he scored in the 1927/28 season for Everton. For illustrative purposes Lionel Messi only ever achieved a maximum of 50 league goals in a single season at FC Barcelona during the 2011/12 La Liga season which is currently the record tally in a La Liga season.</p>
            </div>
            <div className="questions">
                <img src={simmsImage} alt="simms" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`correct ${isCorrectClick.simms ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('simms')} disabled={disabled.simms}>Ellis Simms</button>
                    <button className={`incorrect ${isIncorrectClicked.simms ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('simms')} disabled={disabled.simms}>Jose Baxter</button>
                    <button className={`incorrect ${isIncorrectClicked.simms ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('simms')} disabled={disabled.simms}>Tom Davies</button>
                    <button className={`incorrect ${isIncorrectClicked.simms ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('simms')} disabled={disabled.simms}>Diniyar Bilyaletdinov</button>
                </div>
                <p className={`info ${infoClass.simms}`} style={{ display: isCorrectClick.simms || isIncorrectClicked.simms ? 'block' : 'none' }}>Ellis Simms is an English striker for Coventry City in the EFL Championship, recognized for his physical presence, goal-scoring ability, and promising potential as a young forward in English football.</p>
            </div>
            <div className="questions">
                <img src={yamalImage} alt="yamal" />
                <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                    <button className={`correct ${isCorrectClick.yamal ? 'correct-button-clicked' : ''}`} onClick={() => handleCorrectClick('yamal')} disabled={disabled.yamal}>Lamine Yamal</button>
                    <button className={`incorrect ${isIncorrectClicked.yamal ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('yamal')} disabled={disabled.yamal}>Mikel Merino</button>
                    <button className={`incorrect ${isIncorrectClicked.yamal ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('yamal')} disabled={disabled.yamal}>Dani Olmo</button>
                    <button className={`incorrect ${isIncorrectClicked.yamal ? 'incorrect-button-clicked' : ''}`} onClick={() => handleIncorrectClick('yamal')} disabled={disabled.yamal}>Dani Carvajal</button>
                </div>
                <p className={`info ${infoClass.yamal}`} style={{ display: isCorrectClick.yamal || isIncorrectClicked.yamal ? 'block' : 'none' }}>Lamine Yamal is a highly regarded Spanish winger for FC Barcelona, known for his exceptional dribbling skills, speed, and ability to create scoring opportunities, making him one of the most promising young talents in world football.</p>
            </div>
        </div>
    );
};

export default Footballers;
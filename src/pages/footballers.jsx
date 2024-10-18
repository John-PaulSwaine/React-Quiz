import "../App.css";
import '../assets/functions/functions'
import ballImage from '../assets/Images/footballers/ball.jpg'
import chiesaImage from '../assets/Images/footballers/chiesa.jpg'
import etoImage from '../assets/Images/footballers/etoo.jpg'
import fashanuImage from '../assets/Images/footballers/fashanu.webp'
import gomesImage from '../assets/Images/footballers/gomes.webp'
import koemanImage from '../assets/Images/footballers/koeman.jpg'
import moyesImage from '../assets/Images/footballers/moyes.webp'
import philogeneImage from '../assets/Images/footballers/philogene.jpg'
import simmsImage from '../assets/Images/footballers/simms.jpg'
import yamalImage from '../assets/Images/footballers/yamal.webp'

const Footballers = () => {

    return (
        <div>
            <h1>Footballers</h1>
            <div className="questions">
                <img src={chiesaImage} />
                <div className="buttons">
                    <button className="incorrect">Mario Balotelli</button>
                    <button className="correct">Federico Chiesa</button>
                    <button className="incorrect">Gianluigi Donnarumma</button>
                    <button className="incorrect">Moise Kean</button>
                </div>
                <p className="info">Federico Chiesa Cavaliere OMRI is an Italian professional footballer who plays as a winger or forward for Serie A club Juventus and the Italy national team. He is the son of former footballer Enrico Chiesa.</p>
            </div>
            <div className="questions">
                <img src={yamalImage} />
                <div className="buttons">
                    <button className="incorrect">Mikel Merino</button>
                    <button className="correct">Lamine Yamal</button>
                    <button className="incorrect">Dani Carvajal</button>
                    <button className="incorrect">Dani Olmo</button>
                </div>
                <p className="info">Lamine Yamal Nasraoui Ebana is a Spanish professional footballer from Catalonia who plays as a right winger for La Liga club Barcelona and the Spain national team. He is regarded as one of the best young talents in the world.</p>
            </div>
            <div className="questions">
                <img src={simmsImage} />
                <div className="buttons">
                    <button className="correct">Ellis Simms</button>
                    <button className="incorrect">Haji Wright</button>
                    <button className="incorrect">Jack Rudoni</button>
                    <button className="incorrect">Matt Godden</button>
                </div>
                <p className="info">Ellis Simms is an English professional footballer who plays as a striker for EFL Championship club Coventry City. </p>
            </div>
            <div className="questions">
                <img src={philogeneImage} />
                <div className="buttons">
                    <button className="incorrect">Jacob Greaves</button>
                    <button className="incorrect">Jean Michael Seri</button>
                    <button className="correct">Jaden Philogene</button>
                    <button className="incorrect">Xavier Simons</button>
                </div>
                <p className="info">Jaden Richard Philogene-Bidace is an English professional footballer who plays as a winger for EFL Championship club Hull City. He is a product of the Aston Villa Academy and has represented England at youth level, he is currently a member of the under-21 squad.</p>
            </div>
            <div className="questions">
                <img src={fashanuImage} />
                <div className="buttons">
                    <button className="incorrect">Terry Gibson</button>
                    <button className="incorrect">Dennis Wise</button>
                    <button className="incorrect">Eric Young</button>
                    <button className="correct">John Fashanu</button>
                </div>
                <p className="info">John Fashanu is an English television presenter and former professional footballer. As a footballer he was a centre-forward from 1978 until 1995, most notably in an eight-year spell at Wimbledon in which he won the FA Cup in 1988 and scored over 100 goals in all competitions.</p>
            </div>
            <div className="questions">
                <img src={gomesImage} />
                <div className="buttons">
                    <button className="incorrect">Dominic Calvert-Lewin</button>
                    <button className="incorrect">Andrei Kanchelskis</button>
                    <button className="correct">Andre Gomes</button>
                    <button className="incorrect">Phil Jagielka</button>
                </div>
                <p className="info">Andre Gomes is a portuguese midfielder who played for SL Benfica, Barcelona and Everton. Andre signed fr Everton initially on loan before they made his loan permanent for a whopping £22m. He was also a part of the Portuguese European Championship winning squad and has won various trophies all prior to signing for the Merseyside based club in 2019 on a 5-year contract which wasn't renewed making him a free agent on July 1st 2024. He suffered a horrific injury playing for Everton against Tottenham in the November of 2019 a mere few months into his permanent Everton career.</p>
            </div>
            <div className="questions">
                <img src={etoImage} />
                <div className="buttons">
                    <button className="incorrect">Richarlison</button>
                    <button className="correct">Samuel Eto'o</button>
                    <button className="incorrect">Romelu Lukaku</button>
                    <button className="incorrect">Sylvain Distin</button>
                </div>
                <p className="info">Samuel Eto'o is a Cameroonian football administrator and former player who is the current president of the Cameroonian Football Federation. He won the African Player of the Year a record four times: in 2003, 2004, 2005, and 2010. A precocious talent, Eto'o moved to Real Madrid as a 16 year old.</p>
            </div>
            <div className="questions">
                <img src={ballImage} />
                <div className="buttons">
                    <button className="incorrect">Colin Harvey</button>
                    <button className="incorrect">Joe Royle</button>
                    <button className="incorrect">Howard Kendall</button>
                    <button className="correct">Alan Ball</button>
                </div>
                <p className="info">Alan James Ball MBE was an English professional football player and manager. He was the youngest member of England's 1966 World Cup winning team and played as a midfielder for various clubs, scoring more than 180 league goals in a career spanning 22 years.</p>
            </div>
            <div className="questions">
                <img src={koemanImage} />
                <div className="buttons">
                    <button className="incorrect">Pep Guardiola</button>
                    <button className="correct">Ronald Koeman</button>
                    <button className="incorrect">Gerard Pique</button>
                    <button className="incorrect">Xavi</button>
                </div>
                <p className="info">Ronald Koeman is a Dutch professional football manager and former player who is the manager of the Netherlands national team. Koeman scored over 250 goals whilst playing in defence for the majority of his career.</p>
            </div>
            <div className="questions">
                <img src={moyesImage} />
                <div className="buttons">
                    <button className="incorrect">Thomas Hitzlsperger</button>
                    <button className="incorrect">Anthony Gordon</button>
                    <button className="incorrect">Ruben Dias</button>
                    <button className="correct">David Moyes</button>
                </div>
                <p className="info">David William Moyes is a Scottish professional football manager and former player who was most recently the manager of Premier League club West Ham United. He was previously the manager of Preston North End, Everton, Manchester United, Real Sociedad, and Sunderland.</p>
            </div>
        </div>
    )
}

export default Footballers
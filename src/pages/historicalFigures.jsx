import "../App.css";
import { handleCorrect, handleIncorrect } from '../assets/functions/functions'; // Importing functions
import { useState } from "react";
import '../App.css';

const HistoricalFigures = () => {
    const [isCorrectClick, setIsCorrectClick] = useState({});
    const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
    const [infoClass, setInfoClass] = useState({});
    const [disabled, setDisabled] = useState({});

    const handleCorrectClick = (figure) => {
        handleCorrect(figure, setIsCorrectClick, setIsIncorrectClicked, setInfoClass, setDisabled);
    };

    const handleIncorrectClick = (figure) => {
        handleIncorrect(figure, setIsIncorrectClicked, setInfoClass, setDisabled);
    };

    return (
        <div>
            <p>This will be what I work on next for my quiz.</p>
            <p>caesar, gandhi, elizabeth I, cleopatra, genghis khan, joan d'arc, leonardo da vinci, niccolo machiavelli, marie curie, and benedict arnold.
            </p>
        </div>
    );
};

export default HistoricalFigures;
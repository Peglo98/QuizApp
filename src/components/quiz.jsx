import {useState} from "react";
import Results from "./results.jsx";

function Quiz(){
    const questionBank = [

        {
            question: "What is the capital of Poland",
            options: ["Rome", "Warsaw", "London", "Moscow"],
            answer: "Warsaw",
        },
        {
            question: "Which language is used in Canada?",
            options: ["English","French","Both are used","None of Those"],
            answer: "Both are used",
        },
        {
            question: "How many continents do we have?",
            options: ["5","6","7","8"],
            answer: "7",
        },
    ];
    const numberOfQuestions = questionBank.length;
    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const selectedAnswer = userAnswers[currentQuestion];
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
    }

    function goToNext(){
        if (currentQuestion < numberOfQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsQuizFinished(true);
        }

    }
    function goToPrevious(){
        if (currentQuestion !== 0) {
            setCurrentQuestion(currentQuestion - 1);
        }

    }

    function restartQuiz(){
        setCurrentQuestion(0);
        setUserAnswers(initialAnswers);
        setIsQuizFinished(false);
    }

    if (isQuizFinished === true) {
        return <Results questionBank={questionBank} userAnswers={userAnswers} restartQuiz={restartQuiz}/>
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p className="question"> {questionBank[currentQuestion].question} </p>

            {questionBank[currentQuestion].options.map((option) => (
                <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}>{option}</button>
            ))}

            <div className="nav-buttons">
                <button onClick={goToPrevious} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={goToNext} disabled={!selectedAnswer}>
                    {
                        (currentQuestion === numberOfQuestions - 1 ? "Finish" : "Next")
                    }
                </button>
            </div>
        </div>
    );
}

export default Quiz;
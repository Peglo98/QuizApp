function Results({questionBank, userAnswers, restartQuiz}){

    const score = calcScore();
    function calcScore(){
        let score = 0;
        userAnswers.forEach(((answer, index) => {
            (questionBank[index].answer === answer ? score++ : score)
        }))
        return score;
    }

    return <div>
        <h2>Quiz Completed!</h2>
        <p>Your score is: {score}/{questionBank.length}</p>
        <button className="restart-button" onClick={restartQuiz}>Play Again</button>
    </div>
}

export default Results;
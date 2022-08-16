import React from "react";
import "./index.scss";

const questions = [
    {
        title: "React - это ... ?",
        variants: ["библиотека", "фреймворк", "приложение"],
        correct: 0,
    },
    {
        title: "Компонент - это ... ",
        variants: [
            "приложение",
            "часть приложения или страницы",
            "то, что я не знаю что такое",
        ],
        correct: 1,
    },
    {
        title: "Что такое JSX?",
        variants: [
            "Это простой HTML",
            "Это функция",
            "Это тот же HTML, но с возможностью выполнять JS-код",
        ],
        correct: 2,
    },
];

function Result({ correctAnswers }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>{`Вы отгадали ${correctAnswers} ответа из 3`}</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

function Game({ step, nextStep }) {
    return (
        <>
            <div className="progress">
                <div
                    style={{
                        width: `${Math.round(
                            (100 / questions.length) * step
                        )}%`,
                    }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{questions[step].title}</h1>
            <ul>
                {questions[step].variants.map((variant, index) => (
                    <li onClick={() => nextStep(index, step)}>{variant}</li>
                ))}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = React.useState(0);
    const [correctAnswers, setCorrectAnswers] = React.useState(0);

    function nextStep(index, step) {
        if (index === questions[step].correct) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setStep(step + 1);
    }

    return (
        <div className="App">
            {questions.length === step ? (
                <Result correctAnswers={correctAnswers} />
            ) : (
                <Game step={step} nextStep={nextStep} />
            )}
        </div>
    );
}

export default App;

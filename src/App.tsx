import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      question: "Rolex is the company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: 2004,
          correct: true,
        },
        {
          text: 2005,
          correct: false,
        },
        {
          text: 2006,
          correct: false,
        },
        {
          text: 2007,
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo DiCaprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "which is the capital of Serbia?",
      answers: [
        {
          text: "Nis",
          correct: false,
        },
        {
          text: "Novi Sad",
          correct: false,
        },
        {
          text: "Krusevac",
          correct: false,
        },
        {
          text: "Beograd",
          correct: true,
        },
      ],
    },
  ];

  const [numberQuestion, setNumberQuestion] = useState(0);
  const [score, setScore] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState(0);

  const newQuestion = (ans) => {
    const nextQuestion = numberQuestion + 1;
    if (ans.correct) setTrueAnswer((prev) => prev + 1);

    if (numberQuestion + 1 < data.length) {
      setNumberQuestion(nextQuestion);
    } else {
      setScore(true);
    }
  };
  return (
    <div className="App">
      <div className="quiz">
        {score ? (
          <div className="scoreTrue">
            <h1 className="score">
              You score {trueAnswer} out of {data.length}
            </h1>
            <button
              className="btn"
              onClick={() => {
                setNumberQuestion(0);
                setScore(false);
                setTrueAnswer(0);
              }}
            >
              Play again
            </button>
          </div>
        ) : (
          <>
            <div className="left-app">
              <h1>
                QUESTION {numberQuestion + 1}/{data.length}
              </h1>
              <div className="question">{data[numberQuestion].question}</div>
            </div>
            <div className="right-app">
              {data[numberQuestion].answers.map((a, id) => {
                return (
                  <div
                    className="answer"
                    key={id}
                    onClick={() => {
                      newQuestion(a, data[numberQuestion]);
                    }}
                  >
                    {a.text}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

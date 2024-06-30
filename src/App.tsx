import Question from "./components/Question";
import Result from "./components/Result";
import { quizQuestions } from "./utils";
import { useState } from "react";
import "./App.css";

export interface IResult {
  question: string;
  answer: string;
  chosen: string;
}

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [QnA, setQnA] = useState<IResult[]>([]);
  function nextQuestion() {
    setQuestionNumber(questionNumber + 1);
  }

  function addChosenOption(question: string, answer: string, chosen: string) {
    if (QnA) setQnA([...QnA, { question, answer, chosen }]);
  }

  return (
    <>
      <div className="container">
        <h1>Quizzy</h1>
        {quizQuestions.map(
          (question, index) =>
            questionNumber === index && (
              <section key={index} className="question_container">
                <Question
                  {...question}
                  nextQNo={nextQuestion}
                  selectOption={addChosenOption}
                  qNo={index}
                />
              </section>
            )
        )}
        {questionNumber === quizQuestions.length && <Result QNA={QnA} />}
      </div>
    </>
  );
}

export default App;

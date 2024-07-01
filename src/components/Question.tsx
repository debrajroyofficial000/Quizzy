import { useEffect, useRef, useState } from "react";
import "../styles/Question.css";

interface IQuestion {
  question: string;
  options: string[];
  answer: string;
  qNo: number;
  nextQNo: () => void;
  selectOption: (question: string, answer: string, option: string) => void;
}

const Question = ({
  question,
  options,
  answer,
  qNo,
  nextQNo,
  selectOption,
}: IQuestion) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const timerRef = useRef(0);

  const handleSubmitOption = (option: string) => {
    if (selectedOption === null) {
      setSelectedOption(option);
      selectOption(question, answer, option);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (timerRef.current <= 10) timerRef.current++;
      else {
        if (selectedOption === null) {
          selectOption(question, answer, "");
        }
        nextQNo();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedOption, nextQNo, selectOption, question, answer]);

  return (
    <>
      <div className="timer_bar"></div>
      <div className="question_box">
        <h2 className="question">
          Q.{qNo + 1} {question}
        </h2>
        {options.map((option, index) => (
          <h3
            key={index}
            className={`option ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleSubmitOption(option)}
          >
            {index + 1}. {option}
          </h3>
        ))}
        {selectedOption !== null && (
          <button onClick={nextQNo} className="next_button">
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Question;

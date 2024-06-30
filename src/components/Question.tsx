import { useEffect, useRef, useState } from "react";
import "../styles/Question.css";
interface IQuestion {
  question: string;
  options: string[];
  answer: string;
  nextQNo: () => void;
  selectOption: (question: string, answer: string, option: string) => void;
}
const Question = ({
  question,
  options,
  answer,
  nextQNo,
  selectOption,
}: IQuestion) => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const timerRef = useRef(0);
  const handleSubmitOption = (option: string) => {
    selectOption(question, answer, option);
    setButtonToggle(true);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (timerRef.current <= 2) timerRef.current++;
      else {
        selectOption(question, answer, "");
        nextQNo();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRef.current]);

  return (
    <>
      <h2 className="question">{question}</h2>
      <div className="timer-bar"></div>
      {options.map((option, index) => (
        <h3
          key={index}
          className="option"
          onClick={() => handleSubmitOption(option)}
        >
          {option}
        </h3>
      ))}
      {buttonToggle && (
        <button onClick={nextQNo} className="next-button">
          Next
        </button>
      )}
    </>
  );
};

export default Question;

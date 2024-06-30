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
  const chosenOption = useRef<number>();
  const optionRef = useRef<HTMLHeadingElement | null>(null);
  const [buttonToggle, setButtonToggle] = useState(false);
  const timerRef = useRef(0);
  const handleSubmitOption = (option: string, index: number) => {
    chosenOption.current = index;
    selectOption(question, answer, option);
    setButtonToggle(true);
  };

  useEffect(() => {
    if (optionRef.current) {
      optionRef.current.style.backgroundColor = "#313131";
      optionRef.current.style.color = "whitesmoke";
    }
    let timer = setInterval(() => {
      if (timerRef.current <= 10) timerRef.current++;
      else {
        selectOption(question, answer, "");
        nextQNo();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRef.current, optionRef.current]);

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
            className="option"
            ref={
              chosenOption.current && chosenOption.current === index
                ? optionRef
                : null
            }
            onClick={() => handleSubmitOption(option, index)}
          >
            {index + 1}. {option}
          </h3>
        ))}
        {buttonToggle && (
          <button onClick={nextQNo} className="next_button">
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Question;

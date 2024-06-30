import "../styles/Result.css";
import { IResult } from "../App";
interface IQNA {
  QNA: IResult[];
}
const Result = ({ QNA }: IQNA) => {
  let total = 0;

  for (let i = 0; i < QNA.length; i++) {
    if (QNA[i].answer === QNA[i].chosen) total += 1;
  }

  return (
    <div className="result-container">
      <h2>Result</h2>
      {QNA.map((qna, index) => (
        <section key={index}>
          <div className="ans">
            <p className="ques">Question: {qna.question}</p>
            <p>Right answer: {qna.answer}</p>
            <p className={qna.answer === qna.chosen ? "green" : "red"}>
              You've chosen: {qna.chosen}
            </p>
          </div>
        </section>
      ))}
      <div className="total-score">
        <h2>
          Total:{" "}
          <span>
            {total}/{QNA.length}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Result;

import "../styles/Result.css";
import { IResult } from "../App";
interface IQNA {
  QNA: IResult[];
}
const Result = ({ QNA }: IQNA) => {
  console.log(QNA);
  let total = 0;

  for (let i = 0; i < QNA.length; i++) {
    if (QNA[i].answer === QNA[i].chosen) total += 1;
  }

  return (
    <div>
      <h2>Result</h2>
      {QNA.map((qna, index) => (
        <section key={index}>
          <div>
            <p>Right Answer : {qna.answer}</p>
            <p>You've chosen : {qna.chosen}</p>
          </div>
        </section>
      ))}
      <div>Total : {total + "/" + QNA.length}</div>
    </div>
  );
};

export default Result;

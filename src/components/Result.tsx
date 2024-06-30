import "../styles/Result.css";
import { IResult } from "../App";
interface IQNA {
  QNA: IResult[];
}
const Result = ({ QNA }: IQNA) => {
  console.log(QNA);

  return <div>Result</div>;
};

export default Result;

import { useSelector, useDispatch } from "react-redux";
import { buttonRandom } from "../store/reducers/B2";

export default function B2() {
  const state = useSelector((state: any) => state.random);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(buttonRandom());
  };

  return (
    <div>
      <h4>{`[${state.join(", ")}]`}</h4>
      <button onClick={handleClick}>Random</button>
    </div>
  );
}

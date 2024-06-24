import { useDispatch, useSelector } from "react-redux";
import { decreases, increases, resets } from "../store/reducers/B1";

export default function B1() {
  const count = useSelector((state: any) => state.counts);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Gía trị count: {count}</p>
      <button onClick={() => dispatch(increases())}>Tăng</button>
      <button onClick={() => dispatch(decreases())}>Gỉam</button>
      <button onClick={() => dispatch(resets())}>Reset</button>
    </div>
  );
}

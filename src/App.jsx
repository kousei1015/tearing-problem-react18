import { startTransition } from "react";
import useStore from "./useStore";
import DisplayCount from "./DisplayCount";
import "./App.css";

const App = () => {
  // 1. storeからstateを呼び出している
  const count = useStore((state) => state.count);
  const increaseCount = useStore((state) => state.increase);
  const decreaseCount = useStore((state) => state.decrease);

  // 2. startTransitionでincreaseCount関数を囲む
  const transitionInc = () => {
    startTransition(() => {
      increaseCount();
    });
  };

  return (
    <>
      <h1>Count {count}</h1>
      <div>
        <button onClick={transitionInc}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
      {/* 3. DisplayCountコンポーネントを50個呼び出す */}
      {[...Array(50).keys()].map((key) => (
        <DisplayCount key={key} />
      ))}
    </>
  );
};

export default App;

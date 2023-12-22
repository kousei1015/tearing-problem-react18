import useStore from "./useStore";

const DisplayCount = () => {
  const count = useStore((state) => state.count);
  // 以下の2行のコードにより、重い計算を再現しています。こうした方がTearing問題が起きやすいので
  const start = performance.now();
  while (performance.now() - start < 20) {}

  return (
    <>
      {count}
    </>
  );
};

export default DisplayCount;

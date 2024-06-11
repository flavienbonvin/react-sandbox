import { useState } from "react";
import Child from "./child";

const BadRender = () => {
  const [, setState] = useState(0);

  return (
    <div
      className="flex cursor-pointer flex-col gap-3 rounded border bg-slate-100 p-10 shadow-sm"
      onClick={() => setState((prev) => prev + 1)}
    >
      <p>bad</p>
      <Child />
      <Child />
    </div>
  );
};

export default BadRender;

import { PropsWithChildren, useState } from "react";
import Child from "./child";

const GoodRenderWrapper = ({ children }: PropsWithChildren) => {
  const [, setState] = useState(0);

  return (
    <div
      className="flex cursor-pointer flex-col gap-3 rounded border bg-slate-100 p-10 shadow-sm"
      onClick={() => setState((prev) => prev + 1)}
    >
      {children}
    </div>
  );
};

export const GoodRender = () => {
  return (
    <GoodRenderWrapper>
      <p>good</p>
      <Child />
      <Child />
    </GoodRenderWrapper>
  );
};

export const ExoticGoodRender = () => {
  return (
    <GoodRenderWrapper
      children={
        <>
          <p>good</p>
          <Child />
          <Child />
        </>
      }
    />
  );
};

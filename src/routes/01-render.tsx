import { createFileRoute } from "@tanstack/react-router";
import BadRender from "../components/01-render/bad";
import { ExoticGoodRender, GoodRender } from "../components/01-render/good";
import ExperimentTitle from "../components/layout/experiment-title";
import PageWrapper from "../components/layout/page-wrapper";

export const Route = createFileRoute("/01-render")({
  component: () => (
    <PageWrapper className="flex-col">
      <ExperimentTitle
        title="01 - Render and children render"
        description="Components passed as children are considered props and are not always re-rendered. They will re-render if the parent component's state changes and affects them directly, but they may not re-render if they are wrapped in a component that manages its own state and prevents unnecessary updates. Display re-render to see the difference."
      />
      <div className="flex h-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
        <BadRender />
        <GoodRender />
        <ExoticGoodRender />
      </div>
    </PageWrapper>
  ),
});

import { Link, createLazyFileRoute } from "@tanstack/react-router";
import PageWrapper from "../components/layout/page-wrapper";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageWrapper className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">Welcome Home!</h3>
      <p className="text-slate-900">
        This is my collection of small React experiments
      </p>
      <ul className="text-slate-800">
        <li className="list-inside list-disc">
          <Link to="/01-render">01 - Render and childrens re-render</Link>
        </li>
      </ul>
    </PageWrapper>
  );
}

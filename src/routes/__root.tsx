import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <section className="flex h-full min-h-screen w-screen flex-col bg-slate-50 pb-20">
      <nav className="flex gap-2 p-2">
        <Link to="/" className="grow [&.active]:font-bold">
          Home
        </Link>
        <a
          target="_blank"
          href="https://github.com/flavienbonvin/react-sandbox"
        >
          Github
        </a>
      </nav>
      <hr />
      <main className="container mx-auto grow px-10 pt-10 sm:px-0">
        <Outlet />
      </main>
    </section>
  ),
});

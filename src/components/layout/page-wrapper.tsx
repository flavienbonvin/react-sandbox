import { clsx } from "clsx";
import { PropsWithChildren } from "react";

interface PageWrapperProps extends PropsWithChildren {
  className?: string;
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return <div className={clsx("flex h-full", className)}>{children}</div>;
};

export default PageWrapper;

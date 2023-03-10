import type { PropsWithChildren } from "react";

export default function ProductView({ children }: PropsWithChildren) {
  return (
    <div className="container py-8 mx-auto flex space-x-8">{children}</div>
  );
}

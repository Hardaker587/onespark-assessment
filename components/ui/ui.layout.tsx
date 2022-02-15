import React from "react";

type layoutPropsInterface = {
  children: React.ReactNode;
};

export default function Layout({ children }: layoutPropsInterface) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

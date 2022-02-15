import React from "react";

interface cardPropsInterface {
  color?: string;
}

type cardConstructorInterface = {
  props?: cardPropsInterface;
  children: React.ReactNode;
};
export default function BaseCard({
  props,
  children,
}: cardConstructorInterface) {
  function returnColorOrDefault() {
    const validProps = !!props;
    return validProps && !!props.color ? props.color : "bg-white";
  }
  return (
    <>
      <div className={`p-4 ${returnColorOrDefault()}`}>{children}</div>
    </>
  );
}

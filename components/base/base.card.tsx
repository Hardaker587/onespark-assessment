import React from "react";

interface cardPropsInterface {
  color?: string;
  center?: boolean;
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

  function centerItems() {
    return props?.center && "column justify-center items-center";
  }
  return (
    <>
      <div
        className={`p-4 ${returnColorOrDefault()} rounded-xl m-6 h-screen-90 ${centerItems()}`}
      >
        {children}
      </div>
    </>
  );
}

import React from "react";

interface cardPropsInterface {
  color?: string;
  center?: boolean;
  size?: string;
  shadow?: boolean;
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
  function elevateCard() {
    return props?.shadow && "elevation";
  }
  return (
    <>
      <div
        className={`p-4 ${returnColorOrDefault()} rounded-xl m-4 ${
          props?.size
        } ${centerItems()} ${elevateCard()} overflow-y-auto`}
      >
        {children}
      </div>
    </>
  );
}

declare interface propsInterface {
  path: string;
  size?: number;
  color?: string;
}
export default function icon(props: propsInterface) {
  function getSvgWrapperData() {
    const fontSize = props.size;
    return {
      style: fontSize
        ? {
            height: fontSize,
            width: fontSize,
          }
        : undefined,
    };
  }

  function renderSvgIcon() {
    const svgData = {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": true,
      },
    };
    const size = props.size;
    if (size) {
      svgData.style = {
        fontSize: size,
        height: size,
        width: size,
      };
    }
    return svgData;
  }

  return (
    <>
      <div style={{height: `${props.size}`, width: props.size}}>
        <svg
          v-bind="renderSvgIcon().attrs"
          width="100%"
          height="100%"
          style="`fill: ${color}`"
        >
          <path d="path" />
        </svg>
      </div>
    </>
  );
}

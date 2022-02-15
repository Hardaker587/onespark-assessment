declare interface propsInterface {
  path: string;
  width?: number;
  height?: number;
  color?: string;
}
export default function Icon(props: propsInterface) {
  return (
    <>
      <div
        style={{
          height: `${props.height ? props.height : "auto"}px`,
          width: `${props.height ? props.width : "auto"}px`,
        }}
      >
        <svg
          width={`${props.width}`}
          height={`${props.height}`}
          style={{ fill: `${props.color}` }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <path d={props.path} />
        </svg>
      </div>
    </>
  );
}

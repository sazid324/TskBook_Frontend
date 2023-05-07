interface styleInLineOfDivier {
  width: string;
  height: string;
  color: string;
}

export default function Divider({ width, height, color }: styleInLineOfDivier) {
  return (
    <div
      className="lineOfDivier"
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${color}`,
        // position: "fixed",
        // paddingTop: "3.9rem",
      }}
    ></div>
  );
}

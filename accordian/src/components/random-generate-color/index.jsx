import { useEffect, useState } from "react";

export default function GenerateRandomColor() {
  const [typeofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function radomColorUtitlity(length) {
    return Math.floor(Math.random() * length);
  }

  function handleClickRandomHEXColor() {
    // #567342
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[radomColorUtitlity(hex.length)];
    }
    setColor(hexColor);
  }

  function handleClickRandomRGBColor() {
    const r = radomColorUtitlity(256);
    const g = radomColorUtitlity(256);
    const b = radomColorUtitlity(256);
    setColor(`rgb(${r},${g}, ${b})`);
  }
  useEffect(() => {
    if (typeofColor === "rgb") handleClickRandomRGBColor();
    else handleClickRandomHEXColor();
  }, [typeofColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
      <button
        onClick={
          typeofColor === "hex"
            ? handleClickRandomHEXColor
            : handleClickRandomRGBColor
        }
      >
        Random Generate Color Tool
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

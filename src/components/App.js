import React from "react";
import Header from "./Header";
import { getMergeSortAnimations } from "../MergeArray";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 2;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 250;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#69f0ae";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "black";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [bars, setBars] = useState([]);

  function randomValue(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArray() {
    const arr = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      arr.push(randomValue(10, 450));
    }

    setBars(arr);
  }

  function mergeSort() {
    const animations = getMergeSortAnimations(bars);

    for (let i = 0; i < animations.length; i++) {
      const arrBars = document.getElementsByClassName("array-bar");

      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrBars[barOneIdx].style;
        const barTwoStyle = arrBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          arrBars[barOneIdx].style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header
          onReset={resetArray}
          onMerge={mergeSort}
          onCreate={resetArray}
        />

        <main className="w-full flex justify-center items-center flex-col">
          <div className="flex">
            {bars.map((value, idx) => (
              <div
                className="array-bar mx-px w-0.5"
                key={idx}
                style={{
                  height: `${value}px`,
                  backgroundColor: "white",
                }}
              ></div>
            ))}
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

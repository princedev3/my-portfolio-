"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeEffect = () => {
  return (
    <span style={{ fontWeight: "bold" }}>
      {/* Style will be inherited from the parent element */}

      <Typewriter
        words={["IMENE", "OGHENEFEJIRO", "PRINCE"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default TypeEffect;

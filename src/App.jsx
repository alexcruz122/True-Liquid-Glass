import React from "react";
import "./App.css";

const LiquidGlass = ({
  width = 300,
  height = 200,
  borderRadius = 28,
  innerShadowColor = "#000000",
  innerShadowBlur = 19,
  innerShadowSpread = -9,
  glassTintColor = "rgba(255,255,255,0)",
  glassTintOpacity = 0,
  frostBlurRadius = 10,
  noiseFrequency = 0.008,
  noiseStrength = 77,
}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${borderRadius}px`,
    position: "relative",
    isolation: "isolate",
    boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    background: "none",
    cursor: "pointer",
  };

  return (
    <button className="liquid-glass" style={style}>
      <span className="glass-text">Liquid Glass</span>

      {/* Inner shadow */}
      <div
        className="inner-shadow"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: `${borderRadius}px`,
          boxShadow: `inset 0 0 ${innerShadowBlur}px ${innerShadowSpread}px ${innerShadowColor}`,
          backgroundColor: glassTintColor,
          opacity: glassTintOpacity,
        }}
      ></div>

      {/* Frosted & noise effect */}
      <div
        className="frost-layer"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: `${borderRadius}px`,
          backdropFilter: `blur(${frostBlurRadius}px)`,
          WebkitBackdropFilter: `blur(${frostBlurRadius}px)`,
          filter: "url(#glass-distortion)",
          WebkitFilter: "url(#glass-distortion)",
          zIndex: -1,
        }}
      ></div>

      <svg style={{ display: "none" }}>
        <filter id="glass-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={noiseFrequency}
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={noiseStrength}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </button>
  );
};

export default function App() {
  return (
    <div className="app">
      <LiquidGlass
        width={300}
        height={200}
        borderRadius={28}
        innerShadowColor="#000000"
        innerShadowBlur={19}
        innerShadowSpread={-9}
        glassTintColor="rgba(255, 255, 255, 0)"
        glassTintOpacity={0}
        frostBlurRadius={10}
        noiseFrequency={0.008}
        noiseStrength={77}
      />
    </div>
  );
}

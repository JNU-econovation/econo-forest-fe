import { keyframes } from "styled-components";

const Theme = {
  orange: "#ffa77b",
  yellow: "#ffd878",
  green: "#0aae7a",
  white: "#ffffff",
  grey: "#aaaaaa",

  highlightColor: "#000000",
  bodyColor: "#222222",
  additiveColor: "#646464",
  brightColor: "#ffffff",

  titleFontSize: "25px",
  subtitleFontSize: "20px",
  bodyFontSize: "16px",
  captionFontSize: "12px",

  logoFont: "'Elice Digital Baeum', sans-serif",
  mainFont: "'Apple SD Gothic Neo', sans-serif",

  opacityAnimationKeyframe: keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 100%;
  }
`,
};

export default Theme;

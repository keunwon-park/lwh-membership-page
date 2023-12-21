import { globalStyle } from "@vanilla-extract/css";

interface CustomStyle {
  [key: string]: string | number;
}

const textSizeAdjust: CustomStyle = {
  "-moz-text-size-adjust": "none",
  "-webkit-text-size-adjust": "none",
  "text-size-adjust": "none",
};

globalStyle("#root", {
  height: "100%",
});

globalStyle("*,:before,:after", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("html", textSizeAdjust);

globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  marginBlockEnd: 0,
});

globalStyle('ul[role="list"], ol[role="list"]', {
  listStyle: "none",
});

globalStyle("body", {
  minHeight: "100vh",
  lineHeight: 1.5,
});

globalStyle("h1, h2, h3, h4, button, input, label", {
  lineHeight: 1.1,
});

globalStyle("h1, h2, h3, h4", {
  textWrap: "balance",
});

globalStyle("a:not([class])", {
  textDecorationSkipInk: "auto",
  color: "currentColor",
});

globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("textarea:not([rows])", {
  minHeight: "10em",
});

globalStyle(":target", {
  scrollMarginBlock: "5ex",
});

import { style } from "@vanilla-extract/css";

export const introContainer = style({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const introImageContainer = style({
  width: "60%",
  flex: 1,
  filter: `
  drop-shadow(5px 0px 0px rgba(240, 46, 170, 0.4))
  drop-shadow(10px 0px 0px rgba(240, 46, 170, 0.3))
  drop-shadow(15px 0px 0px rgba(240, 46, 170, 0.2))
  drop-shadow(20px 0px 0px rgba(240, 46, 170, 0.1))
  drop-shadow(25px 0px 0px rgba(240, 46, 170, 0.05))
`,
});

export const profileImage = style({
  objectFit: "contain",
  minWidth: "150px",
  minHeight: "150px",
  margin: "auto",
  clipPath: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
});

export const introTextContainer = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100vh",
  textAlign: "center",
  marginLeft: "2rem",
  overflow: "hidden",
});

export const introTextBox = style({
  position: "relative",
  flex: "0 0 auto",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "70px",
  lineHeight: "1.3",
});

export const firstIntroText = style({
  fontWeight: "bold",
  margin: "0",
  padding: "0",
});

export const secIntroText = style({
  fontWeight: "bold",
  margin: "0",
  padding: "0",
});

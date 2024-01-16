import { style } from "@vanilla-extract/css";

export const introContainer = style({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
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
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100vh",
  textAlign: "center",
  // alignSelf: "flex-start",
  // marginTop: "4rem",
  marginLeft: "2rem",
  overflow: "hidden",
});

export const introTextBox = style({
  flex: "0 0 auto",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "visible",
});
// export const introImageShadow = style({
//   filter: `
//     drop-shadow(0px 54px 55px rgba(0, 0, 0, 0.25))
//     drop-shadow(0px -12px 30px rgba(0, 0, 0, 0.12))
//     drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.12))
//     drop-shadow(0px 12px 13px rgba(0, 0, 0, 0.17))
//     drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.09))
//   `,
// });

export const svgText = style({
  fontSize: "40",
  fontFamily: "Leckerli One, cursive",
  fill: "#448aff",
});

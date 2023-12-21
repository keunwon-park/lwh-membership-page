import { style } from "@vanilla-extract/css";

export const introContainer = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
});

export const introImageContainer = style({
  width: "50%",
  margin: "auto",
  flex: 1,
  border: "1px solid black",
  padding: "1rem",
});

export const profileImage = style({
  width: "70%",
  objectFit: "contain",
  minWidth: "150px",
  minHeight: "150px",
  border: "1px solid red",
  margin: "auto",
});

export const introTextContainer = style({
  width: "50%",
  flex: 1,
  textAlign: "center",
  outline: "1px solid blue",
});

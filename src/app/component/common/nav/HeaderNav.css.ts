import { style } from "@vanilla-extract/css";

export const headerNav = style({
  display: "flex",
  position: "sticky",
  top: 0,
  border: "1px solid black",
  width: "100%",
  backdropFilter: "blur(10px)",
  zIndex: 100,
});

export const headerNavList = style({
  display: "flex",
  flexDirection: "row",
  margin: "auto",
  padding: "1rem",
  gap: "1rem",
  listStyle: "none",
});

import { style } from "@vanilla-extract/css";

export const FooterStyle = style({
  borderTop: "1px solid #ddd",
  backgroundColor: "white",
  color: "black",
  padding: "20px 0",
  textAlign: "center",
});

export const FooterInnerStyle = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
});

export const CopyrightStyle = style({
  marginBottom: "15px",
});

export const ShareAreaStyle = style({
  textAlign: "left",
});

export const ShareListStyle = style({
  listStyle: "none",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  gap: "10px",
});

export const ShareItemStyle = style({
  
});

export const ShareLinkStyle = style({
  textDecoration: "none",
  color: "#fff",
  ":hover": {
    textDecoration: "underline",
  },
});

export const IconStyle = style({
  fill: "black",
});

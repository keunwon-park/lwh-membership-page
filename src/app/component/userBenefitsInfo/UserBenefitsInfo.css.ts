import { style } from "@vanilla-extract/css";

export const UserBenefitsInfoContainer = style({
  position: "relative",
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  border: "1px solid red",
  padding: "3rem",
});

export const UserBenefitsHeading = style({
  fontSize: "4rem",
  marginBottom: "2rem",
});

export const UserBenefitsGridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  justifyItems: "center",
  alignItems: "center",
});

export const UserBenefitsGridItem = style({
  minWidth: "300px",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  textAlign: "center",
  position: "relative",
  selectors: {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

export const UserBenefitsTag = style({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#3498db",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: "4px",
});

export const UserBenefitsList = style({
  padding: "20px",
});

export const UserBenefitsListItem = style({
  padding: "8px 0",
  borderBottom: "1px solid #ddd",
  transition: "background-color 0.2s ease-in-out",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "#f9f9f9",
    },
  },
});

export const CommonBenefitsContainer = style({
  position: "relative",
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid purple",
  padding: "0 2rem",
});

export const PlusImage = style({
  margin: "50px 0",
});

export const CommonBenefitsList = style({
  width: "100%",
  fontSize: "3rem",
  fontWeight: "bold",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
});

export const ImageContainer = style({
  position: "relative",
});

export const ImageStyle = style({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow:
    "10px 10px 0px white, -10px -10px 0px white, 10px -10px 0px white, -10px 10px 0px white",
});

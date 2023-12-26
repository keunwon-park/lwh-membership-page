import { style } from "@vanilla-extract/css";

export const UserBenefitsInfoContainer = style({
  position: "relative",
  width: "100%",
  height: "100vh",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  border: "1px solid black",
  padding: "2rem",
});

export const UserBenefitsHeading = style({
  fontSize: "4rem",
  margin: "2rem 0",
});

export const UserBenefitsGridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  padding: "16px",
  justifyItems: "center",
  alignItems: "center",
});

export const UserBenefitsGridItem = style({
  width: "70%",
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
  transition: "background-color 0.3s ease-in-out",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "#f9f9f9",
    },
  },
});

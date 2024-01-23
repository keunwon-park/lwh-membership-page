import { style } from "@vanilla-extract/css";

export const MembershipBenefitsContainer = style({
  position: "relative",
  width: "100%",
  height: "100vh",
  border: "2px solid black",
  margin: "20px 0",
  padding: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

// 왼쪽 리스트 스타일
export const BenefitsListWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  border: "2px solid black",
  flex: "1",
  alignItems: "center",
});

export const BenefitsListItem = style({
  padding: "10px 15px",
  margin: "10px 0",
  borderBottom: "1px solid #ddd",
  fontWeight: "bold", 
  transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "#f9f9f9",
      color: "#333", 
    },
  },
});

// 오른쪽 리스트 스타일
export const MembershipListWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  border: "2px solid red",
});

export const UserBenefitsHeading = style({
  fontSize: "4rem",
  marginBottom: "2rem",
});

export const MembershipListButton = style({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  textAlign: "left",
});

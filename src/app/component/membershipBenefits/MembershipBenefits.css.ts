import { style } from "@vanilla-extract/css";

// MembershipBenefits 컴포넌트 스타일
export const MembershipBenefitsContainer = style({
  position: "relative",
  width: "100%",
  height: "100vh",
  margin: "20px 0",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

// 왼쪽 리스트 스타일
export const BenefitsListWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  padding: "20px",
});

export const ImageWrapper = style({
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  marginBottom: "20px",
});

export const ImageStyle = style({
  width: "100%",
  height: "100%",
});

export const BenefitsList = style({
  flex: 2,
  margin: "0",
  width: "70%",
});

export const BenefitsListItem = style({
  padding: "10px 15px",
  margin: "0",
  borderBottom: "1px solid #ddd",
  fontWeight: "bold",
  textAlign: "left",
  width: "100%",
  listStyle: "inside",
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
  // width: "50%",
  maxHeight: "90vh",
  border: "1px solid #e1e1e1",
  padding: "60px 20px 20px 20px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
});

export const MembershipHeadingWrapper = style({
  textAlign: "left",
  marginBottom: "20px",
});

export const MembershipHeading = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

export const UpgradeButton = style({
  fontSize: "1rem",
  padding: "10px 20px",
  borderRadius: "2px",
  border: "1px solid #333",
  cursor: "pointer",
  backgroundColor: "transparent",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      backgroundColor: "#333",
      color: "#fff",
    },
  },
});

export const MembershipListItem = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "24px",
  padding: "16px",
  borderRadius: "4px",
  border: "1px solid #e1e1e1",
  transition: "background-color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      backgroundColor: "#f7f7f7",
    },
  },
});

export const MembershipListImage = style({
  marginRight: "16px",
  objectFit: "cover",
});

export const MembershipListButton = style({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  textAlign: "left",
});

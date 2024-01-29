import { style } from "@vanilla-extract/css";

export const MembershipPriceContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

export const MembershipPriceHeading = style({
  fontSize: "40px",
  fontWeight: "bold",
  margin: "40px 0",
});

export const MembershipLevelList = style({
  display: "flex",
  width: "100%",
  gap: "30px",
  justifyContent: "center",
});

export const MembershipLevelItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "20px",
  borderRadius: "4px",
  margin: "10px",
  gap: "10px",
});

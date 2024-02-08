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
  fontSize: "50px",
  fontWeight: "bold",
  margin: "40px 0",
});

export const MembershipLevelList = style({
  width: "80%",
  display: "flex",
  justifyContent: "center",
});

export const MembershipLevelItem = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "100%",
  borderRadius: "4px",
  gap: "10px",
  fontWeight: "bold",
  fontSize: "20px",
  margin: "0 10px",
});

export const MembershipImageWrapper = style({
  width: "50%",
  overflow: "hidden",
  borderRadius: "4px",
});

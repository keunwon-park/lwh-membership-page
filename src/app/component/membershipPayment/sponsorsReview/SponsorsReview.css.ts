import { style } from "@vanilla-extract/css";

export const SponsorsReviewSection = style({
  display: "flex",
  flexDirection: "row",
  padding: "20px",
  backgroundColor: "#f8f8f8",
  alignItems: "center",
  width: "100%",
});

export const SponsorsReviewHeading = style({
  flex: "1",
  textAlign: "center",
});

export const SponsorsReviewContainer = style({
  display: "flex",
  flexDirection: "row",
  flex: "1",
  width: "100%",
  justifyContent: "flex-end",
});

export const SponsorsReviewCard = style({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  margin: "10px",
  borderRadius: "4px",
  maxWidth: "280px",
});

export const SponsorsReviewAuthor = style({
  display: "flex",
  fontWeight: "bold",
  marginBottom: "10px",
  gap: "10px",
});
export const SponsorsReviewText = style({
  fontSize: "16px",
  color: "#333",
  marginBottom: "10px",
  wordWrap: "break-word",
  height: "100px",
});

export const SponsorsReviewInfo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const SponsorsReviewRating = style({
  // 나중에 추가
});

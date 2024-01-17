import { style } from "@vanilla-extract/css";

const responsiveFontSize = {
  base: "3rem", // 기본 폰트 크기
  medium: "2.5rem", // 중간 화면 크기
  small: "2rem", // 작은 화면 크기
  xsmall: "1.5rem", // 매우 작은 화면 크기
};

export const CommonBenefitsContainer = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid purple",
  padding: "0 2rem",
  margin: "10px 0",
  textAlign: "center",
});

export const CommonBenefitsHeading = style({
  fontSize: "4rem",
  marginBottom: "2rem",
});

export const CommonBenefitsComment = style({
  fontSize: "2rem",
  marginBottom: "2rem",
});

export const CommonBenefitsItemWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      width: "70%",
      justifyContent: "flex-start",
      overflow: "hidden",
    },
  },
});

export const CommonBenefitItem = style({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  padding: "2rem",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
});

export const CommonBenefitImage = style({
  width: "100%",
  height: "400px",
  border: "1px solid black",
});

export const CommonBenefitContent = style({
  width: "100%",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "1rem",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
});

export const CommonBenefitsList = style({
  width: "100%",
  fontSize: "3rem",
  fontWeight: "bold",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  "@media": {
    "screen and (max-width: 1200px)": {
      fontSize: responsiveFontSize.medium,
    },
    "screen and (max-width: 768px)": {
      fontSize: responsiveFontSize.small,
    },
    "screen and (max-width: 480px)": {
      fontSize: responsiveFontSize.xsmall,
    },
  },
});

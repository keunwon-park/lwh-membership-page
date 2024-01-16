import { style } from "@vanilla-extract/css";

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
});

export const UserBenefitsHeading = style({
  fontSize: "4rem",
  marginBottom: "2rem",
});

export const PlusImage = style({
  margin: "50px 0",
});

export const ImageContainer = style({
  position: "relative",
  zIndex: -10,
});

export const ImageStyle = style({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow:
    "10px 10px 0px white, -10px -10px 0px white, 10px -10px 0px white, -10px 10px 0px white",
});

const responsiveFontSize = {
  base: "3rem", // 기본 폰트 크기
  medium: "2.5rem", // 중간 화면 크기
  small: "2rem", // 작은 화면 크기
  xsmall: "1.5rem", // 매우 작은 화면 크기
};

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

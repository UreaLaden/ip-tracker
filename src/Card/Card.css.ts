import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor:"red",
    borderRadius: "15px",
    height: "100%",
    width: "100%",
    "box-sizing": "border-box",
    "@media (width > 1023px)": {
      justifyContent: "start",
      alignItems: "baseline",
      padding: "15% 0 10% 5%",
    },
    "@media (width <= 769px)": {
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
    },
  },
  cardTitle: {
    color: "#2C2C2C",
    fontWeight: "900",
    marginBottom: "5%",
    fontSize: "1.2vw",
    "@media (width <= 769px)": {
      fontSize: "2vw",
      marginBottom: "1%",
    },
  },
  cardInfo: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: "3vw",
    "@media (width <= 769px)": {
      fontSize: "6vw",
    },
  },
  border: {
    "@media (width > 1023px)": {
      margin: "5% 0",
      height: "40%",
      backgroundColor: "rgba(0,0,0,0.3)",
      width: "2px",
      position: "absolute",
      top: "20%",
      right: "-20%",
    },
  },
  cardWrapper: {
    position: "relative",
  },
});

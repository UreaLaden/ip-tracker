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
      padding: "15% 10% 10% 5%",
    },
    "@media (width <= 769px)": {
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
    },
  },
  cardTitle: {
    color: "rgba(44,44,44,.5)",
    fontWeight: "900",
    marginBottom: "5%",
    "@media (width >= 1023)":{
        fontSize:"1.1vw"
    },
    "@media (width <= 769px)": {
      fontSize: "2vw",
      marginBottom: "1%",
    },
  },
  cardInfo: {
    color: "#000000",
    fontWeight: "bold",
    maxWidth:'100%',
    "@media (width > 1024px)":{
        fontSize: "1.5rem",
    },
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
      right: "0%",
    },
  },
  cardWrapper: {
    position: "relative",
  },
});

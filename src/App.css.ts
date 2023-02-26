import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  appContainer: {
    maxWidth: "100%",
    height: "100%",
    position: "relative",
    fontFamily: "Rubik Medium, sans-serif",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    "z-index": 100,
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    color: "#FFFFFF",
    backgroundRepeat: "round",
    "@media (width > 770px)": {
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/pattern-bg-desktop.png)`,
    },
    "@media (width <= 769px )": {
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/pattern-bg-mobile.png)`,
    },
  },
  searchContainer: {
    display: "flex",
    position:"relative",
    "@media (width > 1024px)": {
      width: "50vw",
      height: "6vh",
    },
    "@media (width <= 769px )": {
      height: "5vh",
      width: "90vw",
    },
  },
  searchInput: {
    borderRadius: "10px 0 0 10px",
    border: "none",
    fontSize: "1rem",
    ":hover":{
      cursor:"pointer"
    },
    "@media (width > 1024px)": {
      width: "85%",
      padding: "5%",
    },
    "@media (width <= 769px )": {
      width: "90%",
      padding: "5%",
    },
  },
  searchButton: {
    backgroundColor: "#000000",
    border: "none",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0px 10px 10px 0px",
    "@media (width > 1024px)": {
      width: "10%",
      padding: "5% 0",
    },
    "@media (width <= 769px )": {
      width: "15%",
    },
    ":hover":{
      cursor:"pointer",
      backgroundColor:"#3F3F3F"
    }
  },
  locationDetails: {
    position:"absolute",
    backgroundColor:"#FFFFFF",
    borderRadius:"15px",
    boxShadow:"1px 1px 10px 10px rgba(0,0,0,0.1)",
    "z-index":"200",
    overflow:'visible',
    display:'grid',
    "@media (width > 1024px)": {
      top:"72%",
      left:"5%",
      height:"30vh",
      width:"90vw",
      "grid-template-columns":"repeat(4,minmax(250px,1fr))",
      paddingLeft:"2%",
      gap:"5%"
    },
    "@media (width <= 769px )": {
      top:145,
      left:20,
      height:"30vh",
      width:"90vw",
      "grid-template-rows":"repeat(4,1fr)",
      paddingTop:"5%",
    },
  },  
});

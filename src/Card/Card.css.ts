import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
    cardContainer:{
        display:'flex',
        flexDirection:"column",
        alignItems:'baseline',
        justifyContent:'start',
        backgroundColor:"red",
        borderRadius:"15px",
        height:"100%",
        width:"100%",
        padding:"15% 0 10% 5%",
        "@media (width <= 769)":{
            justifyContent:"center",
            alignItems:"center"
        }
    },
    cardTitle:{
        color:"#2C2C2C",
        fontWeight:"bold",
        marginBottom:"5%"
    },
    cardInfo:{
        color:"#000000",
        fontWeight:"bold",
        fontSize:"3vw"
    }
});
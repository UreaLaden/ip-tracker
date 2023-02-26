import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    mapContainer:{
        height:"500px",
        width:"500px",
      },
})

export const containerStyles = {
    height:'100vh',
    width:'100we'
}

export const circleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 3000,
    zIndex: 1
}
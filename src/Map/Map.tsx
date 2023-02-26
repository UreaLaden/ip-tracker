import { ILocation } from "../Location/Location";
import { containerStyles } from "./Map.css";
import * as React from 'react';
import { GoogleMap, useJsApiLoader,Marker } from "@react-google-maps/api";

export const Map = (props: ILocation) => {
  const lat = props.lat;
  const long = props.long;
  const center = {lat:lat,lng:long};
  const {isLoaded} = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey:`${process.env.REACT_APP_GOOGLE_API_KEY}`,
  });
  const [map,setMap] = React.useState<google.maps.Map>();

  const onLoad = React.useCallback((map:google.maps.Map) =>{
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setZoom(12);
    // map.fitBounds(bounds);
    setMap(map)
  },[])

  const onUnmount = React.useCallback((map:any) => {
    setMap(undefined);
  },[]);

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyles}
        center={center}
        zoom={12}
        options={{mapId:`${process.env.REACT_APP_MAP_ID}`}}
        onLoad={onLoad}
        onUnmount={onUnmount}
    > 
    <Marker
        position={center}
        options={{zIndex:2}}
    />    
    </GoogleMap>
  ) : <></>
};
export default React.memo(Map);

import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./marker";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCc4f_8NinySFzBHpDzs3YjnMC7FaBUqBQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker />
      </GoogleMapReact>
    </div>
  );
}

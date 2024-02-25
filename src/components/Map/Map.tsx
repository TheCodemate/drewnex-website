"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";

// import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import { Icon } from "leaflet";

const position = { lat: 49.824689, long: 19.820512 };

const Map = () => {
  return (
    <MapContainer
      center={[position.lat, position.long]}
      zoom={13}
      style={{
        zIndex: -1,
        background: "#95680E",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
    >
      <TileLayer
        opacity={0.6}
        className="bg-detail"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[position.lat, position.long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

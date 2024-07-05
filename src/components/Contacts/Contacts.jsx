import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Configura l'icona del marker utilizzando un CDN
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const MyMapComponent = () => {
  const position = [41.9334, 12.2785]; // Aranova, Roma, Italia

  return (
    <>
      <Link to="/">
        <div className="d-flex assoluto">
          <i className="bi bi-arrow-return-left greenColor backArrow"></i>
          <h6 className="greenColor ms-1 mt-2">Home</h6>
        </div>
      </Link>

      <div className="d-flex flex-column align-items-center githubColor">
        <Link to="/contacts">
          <Image
            className="pianeta-image contacts-planet rotating mb-2"
            height={130}
            src="/pianeta5.png"
            rounded
          />
        </Link>
        <i class="bi bi-person-lines-fill "></i>
        <h2 className="text-center  ">
          Manuel Dell'Oste <br />
          05/06/1990
        </h2>
        <i className="bi bi-envelope-check "></i>
        <h2>manuel.delloste@gmail.com</h2>
        <i className="bi bi-phone "></i>
        <h2>3518589141</h2>
        <a
          href="https://www.linkedin.com/in/manuel-dell-oste-15a3a35b/"
          target="_blank"
          rel="noopener noreferrer"
          className="centericon"
        >
          <i className="bi bi-linkedin  me-2"></i>

          <h2>LinkedIn Profile</h2>
        </a>
        <i className="bi bi-cloud-arrow-down "></i>
        <h2>Scarica il mio CV</h2>
        <a
          href="https://drive.google.com/file/d/1uO8THmLeHpmeQeX_rnzX5P7k-H7H6XPF/view?usp=sharing"
          download
        >
          <img
            className="rotating my-3"
            src="/cvv.png"
            alt="Scarica il mio CV"
            style={{ cursor: "pointer", width: "60px" }}
          />
        </a>
        <i class="bi bi-geo-alt-fill"></i>
        <h2>Aranova/Roma/Italia</h2>
      </div>
      <div className="d-flex justify-content-center my-4">
        <MapContainer center={position} zoom={9} style={{ height: "30vh", width: "30vh" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Aranova, Roma, Italia</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default MyMapComponent;

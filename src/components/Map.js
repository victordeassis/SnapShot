import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = (props) => {
  const { markers } = props;
  return (
    <div className="photos-with-map-container">
      <MapContainer
        style={{ height: '250px' }}
        center={[52.5006354, 13.4212049]}
        zoom={17}
        touchZoom={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>
    </div>
  );
};

export default Map;

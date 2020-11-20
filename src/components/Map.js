import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';

const Map = (props) => {
  const { markers, mapCenterPosition } = props;

  return (
    <MapContainer
      style={{ height: '250px' }}
      center={mapCenterPosition}
      zoom={17}
      touchZoom={true}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
      <LocationMarker mapCenterPosition={mapCenterPosition} />
    </MapContainer>
  );
};

export default Map;

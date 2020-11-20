// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';

const LocationMarker = (props) => {
  const { mapCenterPosition } = props;
  const map = useMapEvents({});

  useEffect(() => {
    const latLng = { lat: mapCenterPosition[0], lng: mapCenterPosition[1] };
    map.flyTo(latLng, map.getZoom());
  }, [mapCenterPosition, map]);

  return null;
};

export default LocationMarker;

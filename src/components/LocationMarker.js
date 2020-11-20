import React, { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';

const LocationMarker = (props) => {
  const { mapCenterPosition } = props;

  useEffect(() => {
    const latLng = { lat: mapCenterPosition[0], lng: mapCenterPosition[1] };
    map.flyTo(latLng, map.getZoom());
  }, [mapCenterPosition]);

  const map = useMapEvents({});
  return null;
};

export default LocationMarker;

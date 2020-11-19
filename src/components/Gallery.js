import React, { useState } from 'react';
import NoImages from './NoImages';
import Image from './Image';
import Map from './Map';
import { Marker, Popup } from 'react-leaflet';

const Gallery = (props) => {
  const results = props.data;
  const [mapCenterPosition, setMapCenterPosition] = useState([
    52.5006354,
    13.4212049,
  ]);

  const goToPositionOnMap = (latitude, longitude) => {
    setMapCenterPosition([parseFloat(latitude), parseFloat(longitude)]);
  };

  let images;
  let noImages;
  let markers;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map((image) => {
      const { farm, server, id, secret, title, latitude, longitude } = image;

      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

      return (
        <Image
          url={url}
          key={id}
          alt={title}
          latitude={latitude}
          longitude={longitude}
          goToPositionOnMap={goToPositionOnMap}
        />
      );
    });

    markers = results.map((image) => {
      const { id, owner, title } = image;

      return (
        <Marker
          key={id}
          position={[parseFloat(image.latitude), parseFloat(image.longitude)]}
        >
          <Popup>
            <strong>{title}</strong> <br /> {owner}.
          </Popup>
        </Marker>
      );
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }

  return (
    <div>
      {images && (
        <>
          <Map markers={markers} mapCenterPosition={mapCenterPosition} />
          <ul>{images}</ul>
        </>
      )}
      {noImages}
    </div>
  );
};

export default Gallery;

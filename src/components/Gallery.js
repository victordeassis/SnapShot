import React from 'react';
import NoImages from './NoImages';
import Image from './Image';
import Map from './Map';
import { Marker, Popup } from 'react-leaflet';

const Gallery = (props) => {
  const results = props.data;
  let images;
  let noImages;
  let markers;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
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
          <Map markers={markers} />
          <ul>{images}</ul>
        </>
      )}
      {noImages}
    </div>
  );
};

export default Gallery;

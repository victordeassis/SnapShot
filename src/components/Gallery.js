import React from 'react';
import NoImages from './NoImages';
import Image from './Image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
          <ul>{images}</ul>
        </div>
      )}
      {noImages}
    </div>
  );
};

export default Gallery;

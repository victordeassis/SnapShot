import React from 'react';
import NoImages from './NoImages';
import Image from './Image';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const Gallery = (props) => {
  const results = props.data;
  let images;
  let noImages;
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
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      {images && (
        <div>
          <MapContainer
            style={{ height: '500px' }}
            center={[51.505, -0.09]}
            zoom={13}
            touchZoom={true}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          <ul>{images}</ul>
        </div>
      )}
      {noImages}
    </div>
  );
};

export default Gallery;

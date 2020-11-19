import React from 'react';

const Image = ({ url, title, goToPositionOnMap, latitude, longitude }) => (
  <li onClick={() => goToPositionOnMap(latitude, longitude)}>
    <img src={url} alt={title} />
  </li>
);

export default Image;

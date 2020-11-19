import React, { createContext, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../api/config';
export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=geo&per_page=24&format=json&nojsoncallback=1`;

    const storagePhotos = JSON.parse(sessionStorage.getItem(query));
    if (storagePhotos && storagePhotos.length) {
      setImages(storagePhotos);
      setLoading(false);
    } else {
      axios
        .get(apiUrl)
        .then((response) => {
          setImages(response.data.photos.photo);
          sessionStorage.setItem(query, JSON.stringify(images));
          setLoading(false);
        })
        .catch((error) => {
          console.log(
            'Encountered an error with fetching and parsing data',
            error
          );
        });
    }
  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;

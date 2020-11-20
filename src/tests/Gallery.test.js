import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../components/Gallery';

const mockedData = [
  {
    accuracy: '16',
    context: 0,
    farm: 66,
    geo_is_contact: 0,
    geo_is_family: 0,
    geo_is_friend: 0,
    geo_is_public: 1,
    id: '50624683963',
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    latitude: '47.436744',
    longitude: '10.301608',
    owner: '133876835@N08',
    place_id: '',
    secret: '12fbb4f4a5',
    server: '65535',
    title: 'Germany / Bavaria / Oberallgäu - Reichenbach',
    woeid: '2849115',
  },
];

it('Gallery component renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Gallery data={mockedData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

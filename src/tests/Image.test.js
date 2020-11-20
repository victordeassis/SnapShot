import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../components/Image';
import { shallow } from 'enzyme';
import { goToPositionOnMap } from '../components/Gallery';

it('Image component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Set the position of the map to a new one', () => {
  const mockedLatLong = [47.436744, 10.301608];
  const wrapper = shallow(
    <Image
      url={`google.com`}
      key={0}
      alt={`someTitle`}
      latitude={47.436744}
      longitude={10.301608}
      goToPositionOnMap={() => ''}
    />
  );

  wrapper.find('li').simulate('click');
});

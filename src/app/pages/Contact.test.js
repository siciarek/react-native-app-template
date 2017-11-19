import React from 'react';
import {Contact} from '../../app/pages';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const props = {
    navigation: {
      navigate: () => {},
      state: {},
    }
  }
  const rendered = renderer.create(<Contact {...props}/>).toJSON();
  expect(rendered).toBeTruthy();
});

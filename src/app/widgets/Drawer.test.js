import React from 'react';
import {Drawer} from '../../app/widgets';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const props = {
    navigation: {
      navigate: () => {},
      state: {},
    }
  }
  const rendered = renderer.create(<Drawer {...props} />).toJSON();
  expect(rendered).toBeTruthy();
});

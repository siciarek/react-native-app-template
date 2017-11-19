import React from 'react'
import {Info} from '../../app/pages'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const props = {
    navigation: {
      navigate: () => {},
      state: {},
    }
  }
  const rendered = renderer.create(<Info {...props} />).toJSON()
  expect(rendered).toBeTruthy()
})

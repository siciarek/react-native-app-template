import React from 'react'
import {Header} from '../../app/widgets'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const props = {
    navigation: {
      navigate: () => {},
      state: {},
    }
  }
  const rendered = renderer.create(<Header {...props} />).toJSON()
  expect(rendered).toBeTruthy()
})

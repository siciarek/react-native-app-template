import React from 'react'
import {Home} from '../../app/pages'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const props = {
    navigation: {
      navigate: () => {},
      state: {},
    }
  }
  const rendered = renderer.create(<Home {...props}/>).toJSON()
  expect(rendered).toBeTruthy()
})

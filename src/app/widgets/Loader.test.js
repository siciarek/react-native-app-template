import React from 'react'
import {Loader} from '../../app/widgets'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<Loader />).toJSON()
  expect(rendered).toBeTruthy()
})

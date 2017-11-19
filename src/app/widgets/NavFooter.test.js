import React from 'react'
import {NavFooter} from '../../app/widgets'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<NavFooter />).toJSON()
  expect(rendered).toBeTruthy()
})

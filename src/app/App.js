import React from 'react'
import {DrawerNavigator} from 'react-navigation'
import {Drawer} from '../app/widgets'
import {
  Info,
  Country,
  YouAreHere,
  AddSingleMarker,
  Network,
} from '../app/pages'

const pages = {
  Info: {screen: Info},
  Country: {screen: Country},
  YouAreHere: {screen: YouAreHere},
  AddSingleMarker: {screen: AddSingleMarker},
  Network: {screen: Network},
}

const settings = {
  contentComponent: props => <Drawer {...props} />
}

export default DrawerNavigator(pages, settings)

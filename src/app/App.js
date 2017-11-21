import React from 'react'
import {DrawerNavigator} from 'react-navigation'
import {Drawer} from '../app/widgets'
import {
  Home,
  Poland,
  YouAreHere,
  AddSingleMarker,
  Clique,
} from '../app/pages'

const pages = {
  Home: {screen: Home},
  Poland: {screen: Poland},
  YouAreHere: {screen: YouAreHere},
  AddSingleMarker: {screen: AddSingleMarker},
  Clique: {screen: Clique},
}

const settings = {
  contentComponent: props => <Drawer {...props} />
}

export default DrawerNavigator(pages, settings)

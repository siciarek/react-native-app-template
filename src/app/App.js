import React from 'react'
import {DrawerNavigator} from 'react-navigation'
import {Drawer} from '../app/widgets'
import {
  Home,
  Info,
  Contact,
  Map
} from '../app/pages'

const pages = {
  Home: {screen: Home},
  Info: {screen: Info},
  Contact: {screen: Contact},
  Map: {screen: Map},
}

const settings = {
  contentComponent: props => <Drawer {...props} />
}

export default DrawerNavigator(pages, settings)

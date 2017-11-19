import React from 'react'
import {DrawerNavigator} from 'react-navigation'
import {Home, Info, Contact} from '../app/pages'
import {Drawer} from '../app/widgets'

const App = DrawerNavigator(
  {
    Home: { screen: Home },
    Info: { screen: Info },
    Contact: { screen: Contact },
  },
  {
    contentComponent: props => <Drawer {...props} />
  }
)

export default App

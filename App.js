import React from 'react';
import {Loader} from './src/app/widgets'
import App from './src/app/App'

export default class extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    });
    this.setState({isReady: true})
  }

  render() {
    return false === this.state.isReady ? <Loader/> : <App/>
  }
}
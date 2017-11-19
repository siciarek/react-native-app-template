import React from 'react'
import PropTypes from 'prop-types'
import {Dimensions, StyleSheet} from 'react-native'
import {
  Container,
  Content,
} from 'native-base'
import {NavFooter, Header, Loader} from '../../app/widgets'

import MapView from 'react-native-maps'


class Map extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      geolocation: null
    }

    navigator.geolocation.getCurrentPosition(geolocation => this.setState({geolocation}))
  }

  render() {

    if (this.state.geolocation === null) {
      return <Loader/>
    }

    const {width, height} = Dimensions.get('window')
    const aspectRatio = width / height
    const {latitude, longitude} = this.state.geolocation.coords
    const latitudeDelta = 0.75
    const longitudeDelta = latitudeDelta * aspectRatio
    const space = 0.01

    const {navigate} = this.props.navigation

    return <Container>
      <Header title="Map" navigate={navigate}/>

      <Content>
        <MapView
          style={{width: width, height: height}}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}
        >
          <MapView.Marker coordinate={{latitude: latitude + space, longitude: longitude + space}}/>
        </MapView>
      </Content>

      <NavFooter navigate={navigate}/>
    </Container>
  }
}

Map.propTypes = {
  navigate: PropTypes.func.isRequired
}

Map.defaultProps = {
  navigate: () => {
  }
}

export default Map

import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
} from 'native-base'

import MapView from 'react-native-maps'
import {Dimensions} from 'react-native'

const Map = ({location: {latitude, longitude}, markers, delta}) => {

  const {width, height} = Dimensions.get('window')
  const aspectRatio = width / height
  const latitudeDelta = delta
  const longitudeDelta = latitudeDelta * aspectRatio

  return <Content>
    <MapView
      style={{width, height}}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      }}
    >
      {
        markers.map(({latitude, longitude}, key) =>
          <MapView.Marker key={key} coordinate={{latitude, longitude}}/>
        )
      }
    </MapView>
  </Content>
}

Map.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
  markers: PropTypes.arrayOf(PropTypes.object.isRequired),
  delta: PropTypes.number.isRequired,
}

Map.defaultProps = {
  location: {
    latitude: 52.0693234,
    longitude: 19.4803112,
  },
  markers: [],
  delta: 11,
}

export default Map

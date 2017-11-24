import React from 'react'
import PropTypes from 'prop-types'
import {
  Footer,
  FooterTab,
  Icon,
  Text,
  Button,

  Container,
  Content,
} from 'native-base'
import {Header, Loader, Map} from '../../app/widgets'

class Network extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      location: null,
      markers: [],
      paths: [],
    }

    navigator.geolocation.getCurrentPosition(
      location => this.setState({location}),
      err => console.log('ERROR OCCURS', err),
      {maximumAge: 2000, timeout: 15000, enableHighAccuracy: true}
    )
  }

  render() {

    if (this.state.location === null) {
      return <Loader/>
    }

    const {title, delta, navigation: {navigate}} = this.props
    const {location: {coords}, markers, paths} = this.state;

    return <Container>
      <Header title={title} navigate={navigate}/>
      <Map location={coords}
           markers={markers}
           paths={paths}
           delta={delta}
           moveOnMarkerPress={false}
           onMarkerPress={({coordinate}) => {
             const markers = this.state.markers.filter(marker =>
               !(coordinate.latitude === marker.latitude
               && coordinate.longitude === marker.longitude)
             )
             this.setState({markers: markers, paths: []})
           }}
           onPress={({coordinate}) => this.setState({
             markers: [
               {...coordinate, draggable: false},
               ...markers
             ],
             paths:[],
           })}
      />
      <Footer>
      <FooterTab>
        <Button vertical active={true} onPress={() => this.setState({markers: [], paths: []})}>
          <Icon name="close-circle"/>
          <Text>Wyczyść mapę</Text>
        </Button>

        <Button active={true}
                vertical
                onPress={() => {

                  const paths = this.state.markers.map(current => {
                    const others = this.state.markers.filter(m => false === (current.latitude === m.latitude && current.longitude === m.longitude))
                    return others.map(({latitude, longitude}) => [
                      {latitude: current.latitude, longitude: current.longitude},
                      {latitude, longitude},
                    ])
                  })

                  let newpaths = []

                  paths.map(path => {
                    newpaths = [...newpaths, ...path]
                  })

                  this.setState({paths: newpaths})
                }}>
          <Icon name="sync"/>
          <Text>Utwórz sieć</Text>
        </Button>
      </FooterTab>
    </Footer>
    </Container>
  }
}

Network.propTypes = {
  title: PropTypes.string.isRequired,
  delta: PropTypes.number.isRequired,
}

Network.defaultProps = {
  title: 'Utwórz sieć',
  delta: 0.5,
}

export default Network

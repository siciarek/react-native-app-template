import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
  Button,
} from 'native-base'
import {Header, Loader, Map} from '../../app/widgets'

class Clique extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      location: null,
      markers: [],
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
    const {location: {coords}, markers} = this.state;

    return <Container>
      <Header title={title} navigate={navigate}/>
      <Map onPress={({coordinate}) => this.setState({
          markers: [
            {
              draggable: true,
              ...coordinate
            },
            ...markers
          ]
        })}
        location={coords} markers={markers} delta={delta}/>
    </Container>
  }
}

Clique.propTypes = {
  title: PropTypes.string.isRequired,
  delta: PropTypes.number.isRequired,
}

Clique.defaultProps = {
  title: 'Utwórz klikę',
  delta: 0.5,
}

export default Clique

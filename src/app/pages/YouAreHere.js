import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
  Button,
} from 'native-base'
import {Header, Loader, Map} from '../../app/widgets'

class YouAreHere extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      location: null
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

    const {location: {coords}} = this.state;
    const markers = [coords]

    return <Container>
      <Header title={title} navigate={navigate}/>
      <Map location={coords} markers={markers} delta={delta}/>
    </Container>
  }
}

YouAreHere.propTypes = {
  title: PropTypes.string.isRequired,
  delta: PropTypes.number.isRequired,
}

YouAreHere.defaultProps = {
  title: 'Jesteś tutaj',
  delta: 0.5,
}

export default YouAreHere

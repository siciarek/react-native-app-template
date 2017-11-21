import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
  Button,
} from 'native-base'
import {Header, Map} from '../../app/widgets'

class Poland extends React.Component {

  render() {
    const {title, navigation: {navigate}} = this.props

    return <Container>

      <Header title={title} navigate={navigate}/>

      <Map/>

    </Container>
  }
}

Poland.propTypes = {
  title: PropTypes.string.isRequired,
}

Poland.defaultProps = {
  title: 'Polska',
}

export default Poland

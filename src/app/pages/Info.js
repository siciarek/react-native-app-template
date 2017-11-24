import React from 'react'
import PropTypes from 'prop-types'
import {Button, Container, Content, Text,} from 'native-base'
import {Header} from '../../app/widgets'

class Info extends React.Component {

  render() {
    const {navigate} = this.props.navigation

    return <Container>
      <Header title="Info" navigate={navigate}/>

      <Content padder>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </Content>

    </Container>
  }
}

Info.propTypes = {
  navigate: PropTypes.func.isRequired
}

Info.defaultProps = {
  navigate: () => {}
}

export default Info

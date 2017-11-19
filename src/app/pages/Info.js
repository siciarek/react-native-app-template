import React from 'react'
import PropTypes from 'prop-types'
import {Container, Content, Button, Text} from 'native-base'
import {Header} from '../../app/widgets'

class Info extends React.Component {

  render() {
    return <Container>
      <Header title="Info" navigate={this.props.navigation.navigate}/>

      <Content padder>
        <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?</Text>
      </Content>

    </Container>
  }
}

Info.propTypes = {
  navigate: PropTypes.func.isRequired
}

export default Info
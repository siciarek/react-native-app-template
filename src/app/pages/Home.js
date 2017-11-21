import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
  Button,
  Text,
} from 'native-base'
import {NavFooter, Header} from '../../app/widgets'
class Home extends React.Component {

  render() {
    const {navigate} = this.props.navigation

    return <Container>
      <Header title="Start" navigate={navigate}/>

      <Content padder>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </Content>

    </Container>
  }
}

Home.propTypes = {
  navigate: PropTypes.func.isRequired
}

Home.defaultProps = {
  navigate: () => {}
}

export default Home

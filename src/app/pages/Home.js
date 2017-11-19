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
      <Header title="Home" navigate={navigate}/>

      <Content padder>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </Content>

      <NavFooter navigate={navigate}/>

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

import React from 'react'
import PropTypes from 'prop-types'
import {Container, Content, Button, Text} from 'native-base'
import {NavFooter, Header} from '../../app/widgets'

class Contact extends React.Component {

  render() {
    const {navigate} = this.props.navigation

    return <Container>
      <Header title="Contact" navigate={navigate}/>

      <Content padder>
        <Text>Czesław Olak</Text>
        <Text>c.olak@example.com</Text>
        <Text>+48 987 654 321</Text>
        <Text>86-100 Świecie</Text>
        <Text>ul. Kwiatowa 13</Text>
      </Content>

      <NavFooter navigate={navigate} route="Contact"/>
    </Container>
  }
}

Contact.propTypes = {
  navigate: PropTypes.func.isRequired
}

Contact.defaultProps = {
  navigate: () => {}
}

export default Contact
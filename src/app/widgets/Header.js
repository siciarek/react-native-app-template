import React from 'react'
import PropTypes from 'prop-types'
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header as BaseHeader,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base'

const Header = ({title, navigate}) =>
  <BaseHeader>
    <Left>
      <Button transparent onPress={() => navigate('DrawerOpen')}>
        <Icon name="menu"/>
      </Button>
    </Left>
    <Body>
    <Title>{title}</Title>
    </Body>
    <Right/>
  </BaseHeader>

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
}

Header.defaultProps = {
  title: 'Application',
  navigate: () => {
  },
}

export default Header
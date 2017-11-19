import React from 'react'
import PropTypes from 'prop-types'
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base'

const menu = require('../../menu.json')

const NavFooter = ({navigate, route}) => {

  return <Footer>
    <FooterTab>
      {
        menu
        .filter(e => e.popular)
        .map((r, key) =>
          <Button key={key}
                  active={route === r.route}
                  vertical
                  onPress={() => navigate(r.route)}>
            <Icon name={r.icon}/>
            <Text>{r.label}</Text>
          </Button>)
      }
    </FooterTab>
  </Footer>
}

NavFooter.propTypes = {
  navigate: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
}

NavFooter.defaultProps = {
  navigate: () => {},
  route: 'Home',
}

export default NavFooter
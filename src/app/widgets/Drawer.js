import React from 'react'
import PropTypes from 'prop-types'
import {Container, Content, Text, List, ListItem, Icon, Left, Body, Right} from 'native-base'
import {Image, StatusBar} from 'react-native';

const menu = require('../../menu.json')

class Drawer extends React.Component {

  render() {

    const {navigate, state} = this.props.navigation

    return <Container>
      <Content>
        <Image
          source={{
            uri: 'http://ngstudentexpeditions.com/wp-content/uploads/2016/10/L-NationalGeographic_1370994cropped.jpg'
          }}
          style={{
            height: 120,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
        </Image>

        <List dataArray={menu}
              renderRow={(r, key) =>
                <ListItem icon button key={key} onPress={() => navigate(r.route)}>
                  <Left>
                    <Icon name={r.icon} style={{color: 'grey'}}/>
                  </Left>
                  <Body>
                    <Text>{r.label}</Text>
                  </Body>
                  <Right>
                  </Right>
                </ListItem>
              }
        />
      </Content>
    </Container>
  }
}

Drawer.propTypes = {
  navigate: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
}

Drawer.defaultProps = {
  navigate: () => {
  },
  route: 'Home',
}

export default Drawer
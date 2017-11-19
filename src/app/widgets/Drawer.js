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
            height: 150,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Image
            square
            style={{height: 80, width: 70}}
            source={{
              uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/img/logo.png',
            }}
          />
        </Image>

        <List dataArray={menu}
              renderRow={(r, key) =>
                <ListItem icon button key={key} onPress={() => navigate(r.route)}>
                  <Left>
                    <Icon name={r.icon} style={{color: '#888888'}}/>
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
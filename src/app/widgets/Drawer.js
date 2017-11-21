import React from 'react'
import PropTypes from 'prop-types'
import {Body, Container, Content, Icon, Left, List, ListItem, Right, Text} from 'native-base'
import {Image, StyleSheet} from 'react-native'

const topImageUri = 'http://ngstudentexpeditions.com/wp-content/uploads/2016/10/L-NationalGeographic_1370994cropped.jpg'
const menu = require('../../menu.json')
const styles = StyleSheet.create({
  image: {
    height: 120,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'grey',
  },
})

const Drawer = ({navigation: {navigate}}) =>
  <Container>
    <Content>
      <Image source={{ uri: topImageUri }} style={styles.image}/>
      <List dataArray={menu}
            renderRow={({page, icon, label}, key) =>
              <ListItem icon button key={key} onPress={() => navigate(page)}>
                <Left>
                  <Icon name={icon} style={styles.icon}/>
                </Left>
                <Body>
                <Text>{label}</Text>
                </Body>
                <Right>
                </Right>
              </ListItem>}
      />
    </Content>
  </Container>

Drawer.propTypes = {
  navigate: PropTypes.func.isRequired,
}

Drawer.defaultProps = {
  navigate: () => {
  },
}

export default Drawer
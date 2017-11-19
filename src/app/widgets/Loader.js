import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, Image} from 'react-native'

const Loader = ({spinner, message}) =>
  <View style={styles.container}>
    <Image source={spinner}/>
    <Text style={styles.text}>{message}</Text>
  </View>

Loader.propTypes = {
  spinner: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
}

Loader.defaultProps = {
  spinner: require('../../assets/Spinner.gif'),
  message: 'wait a while...',
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eca611'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Loader
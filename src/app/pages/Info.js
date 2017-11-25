import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet} from 'react-native'
import {H1, H2, Button, Container, Content, Text,} from 'native-base'
import {Header} from '../../app/widgets'

class Info extends React.Component {

  render() {
    const {navigate} = this.props.navigation

    return <Container>
      <Header title="Info" navigate={navigate}/>

      <Content padder>
        <H1 style={styles.mainHeader}>Apka z mapką</H1>

        <Text>Witam w aplikacji Apka z mapką. Jest to aplikacja demostracyjna
          do postu React Native VIII na blogu https://siciarek.blogspot.com.
          Aplikacja zawiera 5 ekranów, na które można się dostać wybierając
          odpowiednią pozycję z menu bocznego (kilkij w ikonkę na górnym pasku tytułowym).</Text>

        <H2 style={styles.header}>Info</H2>
        <Text>Główna strona aplikacji, właśnie na niej jesteś.</Text>

        <H2 style={styles.header}>Polska</H2>
        <Text>Mapa Polski, można przesuwać i przybliżać.</Text>

        <H2 style={styles.header}>Jesteś tutaj</H2>
        <Text>Mapa z zaznaczonym miejscem Twojego obecnego pobytu.
          Dane geolokacyjne pobierane bezpośrednio z urządzania.</Text>

        <H2 style={styles.header}>Dodaj marker</H2>
        <Text>Mapa na której można zaznaczyć dotknięte miejsce markerem.
          Marker można przesuwąć (staje się ruchomy po przytrzymaniu go palcem
          przez kilka sekund) i usunąć dotykając markera. Na tej mapie można mieć
          tylko jeden marker, kliknięcie w innym miejscu dodaje nowy marker
          jendocześnie usuwając stary.</Text>

        <H2 style={styles.header}>Utwórz sieć</H2>
        <Text>Tutaj można dodać wiele markerów, usuwać markery przez powtórne klinkęcie,
        Usunąć wszystkie markery, klikając w stopce na "Wymaż" oraz połączyć markery
        liniami (każdy z każdym) klikając na "Utwórz sieć".</Text>

        <Text style={styles.footer}>Życzę wygodnego użytkowania.</Text>

      </Content>
    </Container>
  }
}

const styles = StyleSheet.create({
  mainHeader: {
    fontWeight: 'bold',
    color: '#338',
  },
  header: {
    marginTop: 12,
    fontWeight: 'bold',
    color: '#338',
  },
  footer: {
    marginTop: 20,
    marginBottom: 50,
    fontStyle: 'italic',
  }
})

Info.propTypes = {
  navigate: PropTypes.func.isRequired
}

Info.defaultProps = {
  navigate: () => {
  }
}

export default Info

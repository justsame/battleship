import React from 'react';
import { View } from 'react-native';
import Header from './components/header'
import Footer from './components/footer'
import Gameboard from './components/gameboard'
import styles from './style/style'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Header />
        <Gameboard />
        <Footer />
      </View>
    )
  }

}
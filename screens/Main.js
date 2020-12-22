import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import TabNavigator from '../navigator/TabNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    return null;
  }
  componentDidMount() {}
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshotBeforeUpdate) {}
  static getDerivedStateFromError(error) {}
  componentDidCatch(error, info) {}
  componentWillUnmount() {}
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

export default Main;

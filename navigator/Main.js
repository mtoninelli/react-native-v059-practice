import React from 'react';
import { View, StyleSheet } from 'react-native';

import TabNavigator from '../navigator/TabNavigator';

import { MyUserContext } from '../context/UserContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: 'niki',
        age: 32,
        setUserState: (userState) => {
          const newUserState = Object.assign({}, this.state.user, userState); // merge old with new state for don't overwite the set function
          this.setState({ user: newUserState });
        },
      },
    };
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
      <MyUserContext.Provider value={this.state}>
        <View style={styles.container}>
          <TabNavigator />
        </View>
      </MyUserContext.Provider>
    );
  }
}

export default Main;

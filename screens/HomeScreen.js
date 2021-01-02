import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { MyUserContext } from '../context/UserContext';

class UserContext extends React.Component {
  static contextType = MyUserContext;
  render() {
    return (
      <MyUserContext.Consumer>
        {({ user }) => {
          // console.log('#$%^&*(*&^%$#$%^&*((*_____', user);
          return <Text>Context state:: {user.userName}</Text>;
        }}
      </MyUserContext.Consumer>
    );
  }
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = MyUserContext; // pass context to class
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
  //
  navigateToSettings = () => {
    this.props.navigation.navigate('Settings');
  };
  setStateName = (v) => {
    // change local state
    this.setState({ name: v });
    // change context value (that is the state in the provider Main.js)
    this.context.user.setUserState({ userName: v });
  };
  printState = () => {
    console.log(this.state);
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Text testID="t-username">Local state {this.state.name}</Text>
        <UserContext />
        <TextInput
          testID="t-input"
          value={this.state.name}
          placeholder={'Type your name'}
          onChangeText={(v) => this.setStateName(v)}
        />
        <Button title="Print state" onPress={this.printState} />
        <Button title="Go to Settings" onPress={this.navigateToSettings} />
      </View>
    );
  }
}

// HomeScreen.contextType = MyUserContext;

export default HomeScreen;

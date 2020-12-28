import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { MyUserContext } from '../context/UserContext';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = MyUserContext;
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
        <MyUserContext.Consumer>
          {({ user }) => (
            <>
              <Text>Home!</Text>
              <Text>Local state {this.state.name}</Text>
              <Text>Context state {user.userName}</Text>
              <TextInput
                value={this.state.name}
                placeholder={'Type your name'}
                onChangeText={(v) => {
                  this.setStateName(v);
                }}
              />
              <Button title="Print state" onPress={this.printState} />
              <Button
                title="Go to Settings"
                onPress={this.navigateToSettings}
              />
              <Text>MyUserContext state value: {user.userName}</Text>
            </>
          )}
        </MyUserContext.Consumer>
      </View>
    );
  }
}

// HomeScreen.contextType = MyUserContext;

export default HomeScreen;

import React from 'react';
import { Text, View } from 'react-native';
import LifecycleA from '../components/LifecycleA';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <LifecycleA />
      </View>
    );
  }
}

export default SettingsScreen;

import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import LifecycleB from './LifecycleB';

// https://www.youtube.com/watch?v=KDXZibVdiEI
// https://medium.com/@kartikag01/react-component-lifecycle-old-vs-new-32757aee5850

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});

const Square = () => {
  return <View style={styles.square}></View>;
};

class LifecycleA extends React.Component {
  constructor(props) {
    console.log('LifecycleA - constructor');
    // called when a component is created
    // (init state / bind listeners)
    super(props);
    this.state = {
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA - getDerivedStateFromProps');
    // used if you pass state from a parent component and you want to edit it
    // returns the new state or null
    return null;
  }
  componentDidMount() {
    // called only once when the component is mount
    // called after render() and after all the components childs inside are renders
    // (for ajax call, )
    console.log('LifecycleA - component did mount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // for performance optimisation
    console.log('LifecycleA - shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // called just before the DOM is going to be updated
    // (caputre some info from the prev dom)
    // return a value or null
    console.log('LifecycleA - getStapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshotBeforeUpdate) {
    // every time a component is updated
    console.log('LifecycleA - component did update');
  }
  static getDerivedStateFromError(error) {
    console.log('LifecycleB - getDerivedStateFromError', error);
  }
  componentDidCatch(error, info) {
    console.log('LifecycleB - componentDidCatch', error, info);
  }
  componentWillUnmount() {
    // remove listeners
    console.log('LifecycleA - component will Unmount');
  }
  //
  addCount = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      console.log('state.count updated', this.state)
    );
  };
  render() {
    console.log('LifecycleA - render');
    return (
      <View style={styles.container}>
        <Text>LifecycleA</Text>
        <Square />
        <Text testID="counterText">count: {this.state.count}</Text>
        <Button onPress={() => this.addCount()} title="add" />
        <LifecycleB />
      </View>
    );
  }
}

export default LifecycleA;

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
});

class LifecycleB extends React.Component {
  constructor(props) {
    console.log('LifecycleB - constructor');
    // called when a component is created
    // (init state / bind listeners)
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB - getDerivedStateFromProps');
    // used if you pass state from a parent component and you want to edit it
    // returns the new state or null
    return null;
  }
  componentDidMount() {
    // called only once when the component is mount
    // called after render() and after all the components childs inside are renders
    // (for ajax call, )
    console.log('LifecycleB - component did mount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // for performance optimisation
    console.log('LifecycleB - shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // called just before the DOM is going to be updated
    // (caputre some info from the prev dom)
    // return a value or null
    console.log('LifecycleB - getStapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshotBeforeUpdate) {
    // every time a component is updated
    console.log('LifecycleB - component did update');
  }
  static getDerivedStateFromError(error) {
    console.log('LifecycleB - getDerivedStateFromError', error);
  }
  componentDidCatch(error, info) {
    console.log('LifecycleB - componentDidCatch', error, info);
  }
  componentWillUnmount() {
    // remove listeners
    console.log('LifecycleB - component will Unmount');
  }
  render() {
    console.log('LifecycleB - render');
    return (
      <View style={styles.container}>
        <Text>LifecycleB</Text>
      </View>
    );
  }
}

export default LifecycleB;

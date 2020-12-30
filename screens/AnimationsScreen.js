import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

class AnimationsScreen extends React.Component {
  state = {
    animationOpacity: new Animated.Value(1),
    animationTranslation: new Animated.Value(0),
    animationScale: new Animated.Value(1),
    animationHeight: new Animated.Value(20),
    animationAbsolute: new Animated.Value(0),
    animationColor: new Animated.Value(0),
    animationRotate: new Animated.Value(0),
    animationSize: new Animated.Value(0),
  };
  animation1 = () => {
    Animated.timing(this.state.animationOpacity, {
      toValue: 0,
      duration: 500,
      // easing: Easing.back(5),
      // easing: Easing.bounce,
      // easing: Easing.elastic(3),
      // easing: Easing.bezier(0.06, 1, 0.86, 0.23),
    }).start(() => {
      Animated.timing(this.state.animationOpacity, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  };
  animation2 = () => {
    Animated.timing(this.state.animationTranslation, {
      toValue: 300,
      duration: 500,
    }).start();
    Animated.timing(this.state.animationScale, {
      toValue: 2,
      duration: 500,
    }).start();
  };
  animation3 = () => {
    Animated.timing(this.state.animationHeight, {
      toValue: 40,
      duration: 500,
    }).start();
  };
  animation4 = () => {
    Animated.timing(this.state.animationAbsolute, {
      toValue: 20,
      duration: 1000,
    }).start();
  };
  animation5 = () => {
    Animated.timing(this.state.animationColor, {
      toValue: 1,
      duration: 300,
    }).start(() => {
      Animated.timing(this.state.animationColor, {
        toValue: 0,
        duration: 300,
      }).start();
    });
  };
  animation6 = () => {
    Animated.timing(this.state.animationRotate, {
      toValue: 360,
      duration: 2000,
    }).start();
  };
  animation7 = () => {
    Animated.timing(this.state.animationSize, {
      toValue: 1,
      duration: 1000,
    }).start();
  };
  render() {
    const animatedStyles = {
      fadeOutFadeIn: {
        opacity: this.state.animationOpacity,
      },
      transform: {
        transform: [
          {
            translateY: this.state.animationTranslation,
          },
          {
            scaleX: this.state.animationScale,
          },
        ],
      },
      transformHeight: {
        height: this.state.animationHeight,
      },
      transformAbsolute: {
        top: this.state.animationAbsolute,
        right: this.state.animationAbsolute,
      },
      interpolateColor: {
        backgroundColor: this.state.animationColor.interpolate({
          inputRange: [0, 1],
          outputRange: ['rgb(255, 50, 50)', 'rgba(50, 255, 50, 0.5)'],
        }),
      },
      interpolateRotate: {
        transform: [
          {
            rotate: this.state.animationRotate.interpolate({
              inputRange: [0, 360],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      },
      interoplationSize: {
        width: this.state.animationSize.interpolate({
          inputRange: [0, 1],
          outputRange: ['5%', '50%'],
        }),
        height: this.state.animationSize.interpolate({
          inputRange: [0, 1],
          outputRange: ['2%', '50%'],
        }),
      },
    };
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text>Opacity</Text>
        <TouchableWithoutFeedback onPress={this.animation1}>
          <Animated.View style={[styles.box, animatedStyles.fadeOutFadeIn]} />
        </TouchableWithoutFeedback>
        <Text>Transform position and scale</Text>
        <TouchableWithoutFeedback onPress={this.animation2}>
          <Animated.View style={[styles.box, animatedStyles.transform]} />
        </TouchableWithoutFeedback>
        <Text>Transform height</Text>
        <TouchableWithoutFeedback onPress={this.animation3}>
          <Animated.View style={[styles.box, animatedStyles.transformHeight]} />
        </TouchableWithoutFeedback>
        <Text>Transform absolute position</Text>
        <TouchableWithoutFeedback onPress={this.animation4}>
          <Animated.View
            style={[
              styles.box,
              {
                top: 0,
                right: 0,
              },
              animatedStyles.transformAbsolute,
            ]}
          />
        </TouchableWithoutFeedback>
        <Text>Interpolate color</Text>
        <TouchableWithoutFeedback onPress={this.animation5}>
          <Animated.View
            style={[styles.box, animatedStyles.interpolateColor]}
          />
        </TouchableWithoutFeedback>
        <Text>Interpolate rotate</Text>
        <TouchableWithoutFeedback onPress={this.animation6}>
          <Animated.View
            style={[styles.box, animatedStyles.interpolateRotate]}
          />
        </TouchableWithoutFeedback>
        <Text>Interpolate width</Text>
        <TouchableWithoutFeedback onPress={this.animation7}>
          <Animated.View
            style={[
              {
                width: 20,
                height: 20,
                backgroundColor: 'red',
              },
              animatedStyles.interoplationSize,
            ]}
          />
        </TouchableWithoutFeedback>
        <Text>END</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
  },
});

export default AnimationsScreen;

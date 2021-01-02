import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

class Animations2Screen extends React.Component {
  state = {
    springScale: new Animated.Value(1),
    colorBgScroll: new Animated.Value(0),
    interpolate1: new Animated.Value(0),
  };
  animation1 = () => {
    // this.state.springScale.addListener((v) => console.log(v));
    Animated.spring(this.state.springScale, {
      toValue: 2,
      friction: 2,
      tension: 150,
    }).start(() => {
      Animated.timing(this.state.springScale, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  };
  animation2 = () => {
    Animated.loop(
      Animated.timing(this.state.springScale, {
        toValue: 2,
        duration: 500,
      })
    ).start();
  };
  animation3 = () => {
    Animated.timing(this.state.interpolate1, {
      toValue: 1,
      duration: 300,
    }).start(() => {
      Animated.timing(this.state.interpolate1, {
        toValue: 2,
        duration: 300,
      }).start();
    });
  };
  render() {
    const animatedStyles = {
      animateScale: {
        transform: [
          {
            scale: this.state.springScale,
          },
        ],
      },
      animateColor: {
        backgroundColor: this.state.colorBgScroll.interpolate({
          inputRange: [0, 3000],
          outputRange: ['rgb(255,255,255)', 'rgb(0,255,0)'],
        }),
      },
      interpolateTransform: {
        transform: [
          {
            translateY: this.state.interpolate1.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 300, 0],
              // extrapolate: 'clamp', // if toValue is out of the inputRange value, it doesn't extimate the next
              // extrapolate: 'identity',
              // extrapolateLeft: 'clamp',
              // extrapolateRight: 'clamp',
            }),
          },
        ],
      },
    };
    return (
      <View style={{ flex: 1, paddingVertical: 100 }}>
        <Text>START (scroll for change event)</Text>
        <ScrollView
          scrollEventThrottle={16} // 16fps
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.colorBgScroll,
                },
              },
            },
          ])}
        >
          <Animated.View style={[styles.content, animatedStyles.animateColor]}>
            <Text>Spring scale</Text>
            <TouchableWithoutFeedback onPress={this.animation1}>
              <Animated.View
                style={[styles.box, animatedStyles.animateScale]}
              />
            </TouchableWithoutFeedback>

            <Text>Spring scale loop</Text>
            <TouchableWithoutFeedback onPress={this.animation2}>
              <Animated.View
                style={[styles.box, animatedStyles.animateScale]}
              />
            </TouchableWithoutFeedback>

            <Text>interpolate custom</Text>
            <TouchableWithoutFeedback onPress={this.animation3}>
              <Animated.View
                style={[styles.box, animatedStyles.interpolateTransform]}
              />
            </TouchableWithoutFeedback>
          </Animated.View>
        </ScrollView>
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
  content: {
    height: 3000,
  },
});

export default Animations2Screen;

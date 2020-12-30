import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text>user</Text>
      </View>
    );
  }
}

export default UserScreen;

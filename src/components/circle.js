import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native';

// import styles from './styles';

export default class components extends Component {
  state = {};

  render() {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 15,
          height: 15,
          backgroundColor: 'black',
          borderRadius: 50
        }}
      />
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Button = ({ component }) => {
  return <View style={styles.buttonStyle}>{component}</View>;
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Button.propTypes = {
  component: PropTypes.element
};

Button.defaultProps = {
  component: null
};

export default Button;

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class LoadingScreen extends Component {
  static navigationOptions = {
    title: '',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispachToProps = {};

const Loading = connect(
  mapStateToProps,
  mapDispachToProps
)(LoadingScreen);

export default Loading;

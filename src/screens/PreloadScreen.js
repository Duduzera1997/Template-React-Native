import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';

import { checkLogin, changeName } from '../actions/AuthenticationActions';

class PreloadScreen extends Component {
  static navigationOptions = {
    title: 'Preload',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { checkLoginActions } = this.props;
    setTimeout(() => {
      checkLoginActions();
    }, 500);
  }

  componentDidUpdate() {
    const { auth } = this.props;
    switch (auth.status) {
      case 0:
        this.resetTo('Login');
        break;
      case 1:
        this.resetTo('Home');
        break;
      default:
        this.resetTo('Home');
        break;
    }
  }

  resetTo(route) {
    const { navigation } = this.props;
    const actionToDispatch = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: route })]
    });
    navigation.dispatch(actionToDispatch);
  }

  render() {
    const { auth } = this.props;
    return (
      <View style={styles.container}>
        <Text>{auth.status}</Text>
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
  return {
    auth: state.AuthenticationReducer
  };
};

const mapDispachToProps = {
  checkLoginActions: checkLogin,
  changeNameActions: changeName
};

const Preload = connect(
  mapStateToProps,
  mapDispachToProps
)(PreloadScreen);

export default Preload;

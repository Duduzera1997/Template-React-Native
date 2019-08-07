import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';

const background = require('../assets/bg.jpg');
const logo = require('../assets/kinsta.png');

class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  componentDidMount() {}

  signIn = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <ImageBackground source={background} style={styles.container}>
        <Image style={styles.logo} source={logo} />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#FFFFFF"
          placeholder="Digite seu nome"
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#FFFFFF"
          placeholder="Digite seu e-mail"
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#FFFFFF"
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={() => {}} style={styles.actionButton}>
          <Text style={styles.actionButtontext}>Fazer cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.signIn} style={styles.signButton}>
          <Text style={styles.signButtonText}>
            Já tem cadastro?
            {'\n'}
            Clique aqui
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  logo: {
    marginBottom: 30,
    height: '25%',
    resizeMode: 'contain'
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 17,
    marginBottom: 10
  },
  actionButton: {
    width: '90%',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButtontext: {
    color: '#FFFFFF',
    fontSize: 20
  },
  signButton: {
    width: '90%',
    height: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  signButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispachToProps = {};

const SignUp = connect(
  mapStateToProps,
  mapDispachToProps
)(SignUpScreen);

export default SignUp;

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  NativeModules,
  Dimensions,
  AsyncStorage,
  BackHandler,
} from 'react-native';
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  InputGroup,
  Label,
  Button,
  Grid,
  Col,
  Row,
} from 'native-base';
import {ImageBackground} from 'react-native';

import {Actions} from 'react-native-router-flux';
const int = () => {
  Actions.veri();
};

const up = () => {
  Actions.register();
};
const fff = () => {
  Actions.fffr();
};
const crt = () => {
  Actions.register();
};
// const mobileLogin = () => {
//     Actions.mobLogin()
// };

// const Constants = {
//     //Dev Parse keys
//     TWITTER_COMSUMER_KEY: "g6NX9bWD9XJaH83G3Fx541Vf5",
//     TWITTER_CONSUMER_SECRET: "T3WJmjMcCz1fYjnvKkuIOeIzQhhKv4aScVJL9jdah0rRgbuytf"
// }

class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require('./images/log.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.text1}>Login</Text>
          <Content>
            <Form style={{marginTop: 40}}>
              <Item floatingLabel>
                <Label>E-mail/Mobile.No.</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>

              <Text style={styles.text5} onPress={crt}>
                Create New Account{' '}
                <Text style={styles.text3} onPress={fff}>
                  Forgot Password
                </Text>
              </Text>

              {/* <Text style={styles.text3}>Create New Account            Forgot Password?</Text>   */}
              {/* <Text  style={styles.text3}>Forgot Password? </Text> */}

              {/* <Text style={styles.text4}>Forgot Password?</Text> */}
              <Button
                full
                rounded
                style={{
                  marginTop: 65,
                  marginLeft: 55,
                  marginRight: 55,
                  backgroundColor: '#007575',
                }}
                onPress={int}>
                <Text style={{color: 'white'}}>Sign In</Text>
              </Button>
              <Text style={styles.text2}>or Quick Sign in with</Text>
              <Grid>
                <Col size={60}>
                  <Image
                    resizeMode="contain"
                    style={styles.socialIconsGoogle}
                    source={require('./images/google.png')}
                  />
                </Col>
                <Col size={60}>
                  <Image
                    resizeMode="contain"
                    style={styles.socialIconsFacebook}
                    source={require('./images/fb.png')}
                  />
                </Col>
                <Col size={60}>
                  <Image
                    resizeMode="contain"
                    style={styles.socialIcons}
                    source={require('./images/in.png')}
                  />
                </Col>
              </Grid>
              {/* <Grid style={styles.gridStyles}>
                    
                    <Col size={60}>
                            
                                <Image resizeMode="contain" style={styles.socialIconsGoogle} source={require('./images/google.png')} />
                           
                        </Col>
                        <Col size={60}>
                           
                                <Image resizeMode="contain" style={styles.socialIconsFacebook} source={require('./images/fb.png')} />
                         
                        </Col>
                        <Col size={60}>
                            
                                <Image resizeMode="contain" style={styles.socialIcons} source={require('./images/in.png')} />
                           
                        </Col>
                        
                        
                    </Grid> */}
              <Text style={styles.text2}>
                New to Moodcafe?{' '}
                <Text style={styles.text4} onPress={up}>
                  Sign Up
                </Text>
              </Text>
            </Form>
          </Content>
        </View>
      </ImageBackground>
    );
  }
}
export default Login;
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: 'red',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  logo: {
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 2,
    marginBottom: 2,
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text1: {
    fontSize: 50,
    marginLeft: 14,
    marginBottom: 5,
    marginTop: 1,
    fontFamily: 'MontserratAlternates-ExtraLight',
  },
  text2: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 2,
    opacity: 0.6,
    color: 'black',
  },
  textDate: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 2,
    marginTop: 3,
    opacity: 0.6,
    color: 'grey',
  },
  text3: {
    fontSize: 15,
    marginTop: 12,
    color: '#007575',
    marginTop: 20,
    marginLeft: 70,
    textAlign: 'center',
  },
  socialIcons: {
    width: 70,
    height: 70,
    marginLeft: -37,
  },
  socialIconsFacebook: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  socialIconsGoogle: {
    width: 70,
    height: 70,
    marginLeft: 80,
  },

  text4: {
    fontSize: 15,
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 5,
    color: '#007575',
  },
  gridStyles: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //  alignItems:'center'
  },

  text5: {
    fontSize: 15,
    marginTop: 13,
    marginBottom: 0.2,
    color: '#007575',
    marginLeft: 2,
    textAlign: 'center',
  },
  error: {
    position: 'absolute',
    bottom: -14,
    marginLeft: 10,
    alignItems: 'center',
    color: 'red',
    fontSize: 12,
  },
});

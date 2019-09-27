import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {Component} from 'react';
import {Content, Form, Item, Input, Label, Button} from 'native-base';

import {Actions} from 'react-native-router-flux';
const verip = () => {
  Actions.Login();
};

class Pswr extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Item>
            <Text style={styles.text1}>Password Reset</Text>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('./images/for.png')}
            />
          </Item>
          <Content>
            <Form>
              <Item>
                floatingLabel style=
                {{
                  borderBottomColor: 'black',
                  marginLeft: 10,
                  marginRight: 10,
                }}
                > ><Label>Enter the new password</Label>
                <Input />
              </Item>
              <Item
                floatingLabel
                style={{
                  borderBottomColor: 'black',
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Label>Re-Enter the new password</Label>
                <Input />
              </Item>
              <Text />
              <Button
                full
                rounded
                style={{
                  marginTop: 65,
                  marginLeft: 55,
                  marginRight: 55,
                  backgroundColor: '#007575',
                }}
                onPress={verip}>
                <Text style={{color: 'white'}}>Verify</Text>
              </Button>
            </Form>
          </Content>
        </View>
      </ScrollView>
    );
  }
}
export default Pswr;
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#59cbbd',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: -1,
    marginBottom: 2,
    alignSelf: 'center',
  },
  bck: {
    width: 60,
    height: 70,
    marginLeft: -9,
    marginTop: -9,
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    paddingTop: 70,
  },
  text2: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: '#4682b4',
  },
  socialIcons: {
    width: 50,
    height: 50,
  },
  socialIconsFacebook: {
    width: 30,
    height: 30,
  },
  socialIconsGoogle: {
    width: 30,
    height: 30,
  },
  text4: {
    fontSize: 15,
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 5,
    color: 'white',
  },
  gridStyles: {
    margin: 15,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});

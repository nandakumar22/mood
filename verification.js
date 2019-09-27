
import { View,ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, NativeModules, Dimensions, AsyncStorage, BackHandler } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, InputGroup, Label, Button, Grid, Col } from 'native-base';
import { ImageBackground } from 'react-native'

import { Actions } from 'react-native-router-flux';
import OTPInputView from '@twotalltotems/react-native-otp-input'
const mst = () => {
  Actions.asm()
};
class Verify extends Component {
 
    render() {
        return (
          <ImageBackground source={require('./images/vrif.png')} style={{width: '100%', height: '100%'}}>

          <ScrollView>
<Text style={styles.text1}>Verification</Text>
<Image resizeMode="contain" style={styles.logo} source={require('./images/for.png')} />
<Text style={{textAlign:"center"}}>Enter the verification code we have ,{'\n'} sent you on your Mobile No.</Text>
<OTPInputView
    style={{width: '80%', height: 200,alignSelf:'center',borderColor:'black'}}
    pinCount={5}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
<Text style={{textAlign:"center", color:"#a3a3c2",marginTop:-90}}>If you did'nt recieve a code!   <Text  style={{fontWeight:'Extrabold',color:"black"}}>Resend</Text></Text>
<Button full rounded
                            style={{ marginTop: 45, marginLeft: 55, marginRight: 55,backgroundColor:'#00997a'}}onPress={mst} >
                            <Text style={{ color: 'white' }}>Verify</Text>
                        </Button>

</ScrollView>
</ImageBackground>

)
}}
export default Verify;


const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
    alignItems:'center',
   
    
    
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor:"#a3a3c2",
    marginTop:-70
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: -40,
    marginBottom: 2,
    alignSelf:"center"
},
text1: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: 'center',
    color: 'black',
    marginBottom: 25,
    marginTop:80,
    fontFamily:'MontserratAlternates-Light',
    

},
});
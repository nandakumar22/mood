import { View,ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, NativeModules, Dimensions, AsyncStorage, BackHandler } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, InputGroup, Label, Button, Grid, Col } from 'native-base';
import { ImageBackground } from 'react-native'

import { Actions } from 'react-native-router-flux';

const oo = () => {
    Actions.Login()
 };
// const mobileLogin = () => {
//     Actions.mobLogin()
// };

// const Constants = {
//     //Dev Parse keys
//     TWITTER_COMSUMER_KEY: "g6NX9bWD9XJaH83G3Fx541Vf5",
//     TWITTER_CONSUMER_SECRET: "T3WJmjMcCz1fYjnvKkuIOeIzQhhKv4aScVJL9jdah0rRgbuytf"
// }

class Register extends Component {
    
    render() {
        return (
            <ImageBackground source={require('./images/reg.png')} style={{width: '100%', height: '100%'}}>
<ScrollView>
            <View style={styles.container}>
              
                
                <Text style={styles.text1}>Hello</Text>
                <Text style={{marginLeft:18}}>Create an account to continue</Text>
                <Content>
                    <Form style={{marginTop:40}}>
                    <Item floatingLabel>
              <Label>Anonymous name</Label>
              <Input />
            </Item>    
            <Item floatingLabel>
              <Label>E-mail/Mobile.No.</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            <Col>
            <Text style={{alignContent:'center',alignSelf:'center',justifyContent:'center',marginTop:20}}>By Signing up.you agree to our </Text>
            <Text style={{alignContent:'center',alignSelf:'center',justifyContent:'center'}}>Terms & conditions            and Privacy policy</Text>  
              {/* <Text  style={styles.text3}>Forgot Password? </Text> */}
             </Col>
            
                        {/* <Text style={styles.text4}>Forgot Password?</Text> */}
                        <Button full rounded
                            style={{ marginTop: 65, marginLeft: 55, marginRight: 55,backgroundColor:'#00997a'}}onPress={oo} >
                            <Text style={{ color: 'white' }}>Sign Up</Text>
                        </Button>
                        <Text style={styles.text2}>or Quick Sign in with</Text>
                        <Grid>
                    
                    <Col size={60}>
                            
                                <Image resizeMode="contain" style={styles.socialIconsGoogle} source={require('./images/google.png')} />
                           
                        </Col>
                        <Col size={60}>
                           
                                <Image resizeMode="contain" style={styles.socialIconsFacebook} source={require('./images/fb.png')} />
                         
                        </Col>
                        <Col size={60}>
                            
                                <Image resizeMode="contain" style={styles.socialIcons} source={require('./images/in.png')} />
                           
                        </Col>
                        
                        
                    </Grid>
                        <Text style={styles.text5}>Already have an account? <Text  style={styles.text3}onPress={oo}>Sign in</Text></Text>
                    </Form>
                </Content>
              
            </View>
            </ScrollView>
            </ImageBackground>

        );
    }

 
    
   
  
       

}
export default Register;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
        borderColor: 'red'

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
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
        justifyContent: 'center'
    },
    text1: {
        fontSize: 50,
        fontWeight: "bold",
    marginLeft:14,
        marginBottom: 5,
        marginTop: 1,
        fontFamily:'MontserratAlternates-Light',
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 2,
        opacity: 0.6,
        color:'black',
        fontFamily:'notoserif',
    },
    textDate: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 2,
        marginTop: 3,
        opacity: 0.6,
        color: 'grey'
    },
    text3: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 12,
        color: '#00997a',
        marginTop:20
    },
    socialIcons: {
        width: 70,
        height: 70,
        marginLeft:-37
    },
    socialIconsFacebook: {
        width: 70,
        height: 70,
        alignSelf:"center",

    },
    socialIconsGoogle: {
        width: 70,
        height: 70,
        marginLeft:80
    },
    socialIconPhone: {
        width: 25,
        height: 25,
    },
    text4: {
        fontSize: 15,
        textAlign: 'right',
        marginTop: 5,
        marginBottom: 5,
        color: 'grey'
    },
    gridStyles: {
        margin: 15,
        marginTop: 15,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        


    },
    text5: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 13,
        marginBottom: 0.2,

    },
    error: {
        position: "absolute",
        bottom: -14,
        marginLeft: 10,
        alignItems: 'center',
        color: "red",
        fontSize: 12
    },
})

import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView,Alert, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Grid, Col } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux';
const sss= () => {
    Actions.Login()
  };
  const ver = () => {
    Actions.rep()
  };
class Forgot extends Component {
    static navigationOptions = {  
        title: "Forgot Pssword",  
        headerStyle: {  
            backgroundColor:'#00b0e6'
            
          
           

        },   
        //header TintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
         
           flex:0.8,
            fontSize:20,
            textAlign:'center',
            justifyContent:'center',
           alignItems:'center'
           
        },    
       
    }; 
    render() {
        return (
            <ImageBackground source={require('./images/FR.png')} style={{width: '100%', height: '100%'}}>

            <ScrollView style={styles.container}>
            <View >
            <TouchableOpacity activeOpacity = { .5 } onPress={sss}>
<Image resizeMode="contain" style={styles.bck} source={require('./images/back.png')} />
</TouchableOpacity>
             
<Text style={styles.text1}>Forgot Password?</Text>
<Image resizeMode="contain" style={styles.logo} source={require('./images/for.png')} />
<Text style={{fontSize:16,textAlign:'center'}}>Enter the E-mail adress or Mobilenumber </Text><Text style={{textAlign:'center',fontSize:16}}>associated with your account</Text>
<Text style={{textAlign:'center',color:'#808080',fontWeight:'bold',marginTop:14}}>We will send you a verification code to reset your password</Text>
                <Content>
                   
                    <Form>
                    <Item floatingLabel style={{borderBottomColor:'#007575',borderEndWidth:4}}>
              <Label>Enter your E-mail/Mobile.No.</Label>
              <Input borderRadius={10}/>
            </Item>
                        <Text>  </Text>
                        <Button full rounded
                            style={{ marginTop: 65, marginLeft: 55, marginRight: 55,backgroundColor:'#007575'}}onPress={ver} >
                            <Text style={{ color: 'white' }}>Send</Text>
                        </Button>
                    </Form>
                  
                </Content>
            
            </View>
            </ScrollView>
            </ImageBackground>

        );
    }
}
export default Forgot;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor:"#59cbbd",
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
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
    bck: {
        width: 60,
        height: 70,
        marginLeft:-9,
        marginTop:-9
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
        fontWeight:"bold"
    },
    text1: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center',
        color: 'black',
        marginBottom: 25,
        fontFamily:'MontserratAlternates-Light',
        

    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontWeight:"bold"
    

    },
    text3: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: "#4682b4"
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
        color: 'white'
    },
    gridStyles:{
        margin: 15,
        marginTop:5, 
        backgroundColor: 'white', 
        borderRadius: 100
    }
})

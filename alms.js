import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView,Image, NativeModules, Dimensions, AsyncStorage, BackHandler } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, InputGroup, Label, Button, Grid, Col,Row } from 'native-base';
import { ImageBackground } from 'react-native'

import { Actions } from 'react-native-router-flux';
const re = () => {
    Actions.nct()
 };
class Alms extends Component {

 render() {
        return (
           
            <ScrollView >
                <View style={{paddingTop:210}}>
                    <Text style={{fontSize:30,fontWeight:'bold',color:"black",paddingBottom:40,paddingLeft:10,marginRight:20}}>You're almost done</Text>
            <Item floatingLabel style={{borderBottomColor:"black",marginLeft:10,marginRight:10,}} >
            <Label >Enter your anonymous name</Label>
            <Input />
          </Item>
          
          <Button full rounded
                            style={{ marginTop: 75, marginLeft: 55, marginRight: 55,backgroundColor:'#00997a'}}onPress={re} >
                            <Text style={{ color: 'white' }}>Done</Text>
                        </Button>
                        </View>
                        </ScrollView>
                     
        )}
    }
    export default Alms;
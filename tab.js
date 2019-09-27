import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView, BackHandler,AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Grid, Col, Picker, DatePicker, Icon, Tabs, Tab, TabHeading } from 'native-base';
import { Actions } from 'react-native-router-flux';


class TabScreen extends Component {
   
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         pageNumber: 1,
    //         loading: false,
    //         profileData: {}
    //     }
    // }
    render() {
        return (
            <Container>

                <Tabs tabBarPosition="bottom">
                    <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}></TabHeading>}>
                        <Dashboard />
                    </Tab>
                    {this.state.profileData.profileImage ?
                        <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}></TabHeading>}>
                            <ViewProfile />
                        </Tab> :
                        <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}></TabHeading>}>
                            <ViewProfile />
                        </Tab>}

                </Tabs>
            </Container>
        );
    }

   
    }

export default TabScreen;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    profileStyle: {
        width: 120,
        height: 120,
        marginTop: 6,
        justifyContent: 'center',
        marginLeft: 100,
        marginRight: 100,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#fff'
    },
    text4: {
        fontSize: 15,
        textAlign: 'left',
        marginTop: 1,
        marginBottom: 4,
        color: 'blue'
    },
})

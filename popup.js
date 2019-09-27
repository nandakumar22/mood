/*This is an Example of PopuUp Dialog Example in React Native*/
import React, {Component} from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import {Right} from 'native-base';

export default class Popup extends Component {
  state = {
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false,
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Button
            title="Scale Animation Dialog"
            onPress={() => {
              this.setState({
                scaleAnimationDialog: true,
              });
            }}
          />
        </View>

        <Dialog
          onTouchOutside={() => {
            this.setState({scaleAnimationDialog: false});
          }}
          width={0.9}
          visible={this.state.scaleAnimationDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            console.log('onHardwareBackPress');
            this.setState({scaleAnimationDialog: false});
            return true;
          }}
          dialogTitle={<DialogTitle hasTitleBar={false} />}
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                this.setState({scaleAnimationDialog: false});
              }}
            //   key="button-1"
            />,
          ]}>
          <View>
            <Right>
              <Image
                resizeMode="contain"
                style={styles.wr}
                source={require('./images/cross-27169_960_720.png')}
              />
            </Right>
          </View>
          <Icon
            name=""
            style={styles.int}
            onPress={() => {
              this.setState({scaleAnimationDialog: false});
            }}
          />

          <DialogContent>
            <View>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('./images/pop.png')}
              />
              <View>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                  This user was previously
                </Text>

                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                  flagged by a listener stating
                </Text>

                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#a3a3c2',
                    paddingTop: 10,
                  }}>
                  He/she wanted a girlfriend
                </Text>

                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#a3a3c2',
                  }}>
                  and s doing timepass
                </Text>
              </View>
{/* <Button full rounded
                            style={{ marginTop: 65, marginLeft: 55, marginRight: 55,backgroundColor:'#007575'}} >
                        </Button> */}
              <View style={{marginLeft: 80, marginRight: 80,marginTop:20}}>
                <Button 
                  title="Ok"
                  color="#007575"
                  onPress={() => {
                    this.setState({scaleAnimationDialog: false});
                  }}
                key="button-1"
                />
              </View>
            </View>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: -10,
    marginBottom: 1,
    alignSelf: 'center',
  },
  wr: {
    width: 20,
    height: 20,
    marginLeft: 250,
    marginTop: -50,
  },
  int: {
    width: 20,
    height: 20,
    marginLeft: 280,
    marginTop: -50,
  },

});

import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {
  Container,
  Content,
  Card,
  Text,
  View,
  Button,
  Footer,
  FooterTab,
  Grid,
  Col,
  Right,
} from 'native-base';

const TTT = () => {
  Actions.mes();
};
const ddt = () => {
  Actions.Login();
};
const re = () => {
  Actions.req();
};
const pov = () => {
  Actions.pops();
};
const prf = () => {
  Actions.pro();
};
class Nochats extends Component {
  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <View>
            {/* <Header
        containerStyle={{backgroundColor:"#007575"}}
      leftComponent={  <Image resizeMode="contain" style={styles.bck} source={require('./images/back.png')} />}
     centerComponent={{ text: 'Messages', style: { color: '#fff',fontWeight:"bold",fontSize:24 } }}
      rightComponent={<Image resizeMode="contain" style={styles.search} source={require('./images/search.png')} />}
/> */}
            <Grid styles={styles.gridStyles}>
              <Col size={60}>
                <TouchableOpacity activeOpacity={0.5} onPress={ddt}>
                  <Image
                    resizeMode="contain"
                    style={styles.bck}
                    source={require('./images/back.png')}
                  />
                </TouchableOpacity>

                {/* <Icon name="back-arrow" style={{width:50,height:50}} /> */}
              </Col>
              <Col size={60}>
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    color: 'white',
                    paddingTop: 33,
                  }}>
                  Messages
                </Text>
              </Col>

              <Col size={60}>
                <Image
                  resizeMode="contain"
                  style={styles.search}
                  source={require('./images/search.png')}
                />
              </Col>
            </Grid>
          </View>
          <Card style={{paddingTop: 20, borderRadius: 10}}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('./images/nope.png')}
            />
            <Text style={{textAlign: 'center', fontSize: 25}}>No chats!</Text>
            <Text style={{textAlign: 'center', color: '#a3a3c2'}}>
              Please click on the + button{'\n'}
              to connect to a listener
            </Text>

            <Right>
              <Image
                resizeMode="contain"
                style={styles.plus}
                source={require('./images/flat-style-circle-add-2-512.png')}
              />
            </Right>
            <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
            </Text>
          </Card>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#fff'}}>
            <Button vertical>
              <TouchableOpacity activeOpacity={0.5} onPress={re}>
                <Image
                  resizeMode="contain"
                  style={styles.req}
                  source={require('./images/req.png')}
                />
                <Text style={{color: 'black', fontSize: 10}}>Requests</Text>
              </TouchableOpacity>
            </Button>

            <Button vertical>
              <TouchableOpacity activeOpacity={0.5} onPress={TTT}>
                <Image
                resizeMode="contain"
                style={styles.cht}
                source={require('./images/chats.png')}/>
                
              </TouchableOpacity>

              {/* <Icon  name="navigate" /> */}
              <Text style={{color: 'black'}}>Chats</Text>
            </Button>
            <Button vertical>
              <TouchableOpacity activeOpacity={0.5} onPress={pov}>
                <Image
                  resizeMode="contain"
                  style={styles.fd}
                  source={require('./images/feed.png')}
                />
              </TouchableOpacity>

              <Text style={{color: 'black'}}>Feed</Text>
            </Button>
            <Button vertical>
            <TouchableOpacity activeOpacity={0.5} onPress={prf}>

              <Image
                resizeMode="contain"
                style={styles.prf}
                source={require('./images/profile.png')}
              />
                            </TouchableOpacity>

              <Text style={{color: 'black'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default Nochats;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007575',
  },
  req: {
    width: 60,
    height: 60,
    marginBottom: -15,
  },
  gridStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //  alignItems:'center'
  },
  bck: {
    width: 70,
    height: 70,

    paddingTop: 95,
    tintColor: 'white',
  },
  cht: {
    width: 60,
    height: 60,
    marginBottom: -15,
  },
  fd: {
    width: 60,
    height: 60,
    marginBottom: -15,
  },
  prf: {
    width: 60,
    height: 60,
    marginBottom: -15,
  },

  search: {
    width: 60,
    height: 60,
    paddingLeft: 160,
    marginTop: 20,
    color: 'white',
    tintColor: 'white',
  },
  plus: {
    width: 80,
    height: 80,
    marginTop:90,
    marginLeft:200,
    paddingTop:100
  

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
});

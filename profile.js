import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {
  Form,
  Button,
  Grid,
  Item,
  Col,
  Container,
  Content,
  Card,
  Footer,
  FooterTab,
} from 'native-base';
class Profile extends Component {
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View style={{backgroundColor: '#add8e6', paddingBottom: 40}}>
            <Image
              source={require('./images/person.jpg')}
              style={styles.profileStyle}
            />
            <Text
              style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>
              Bhavya
            </Text>

            <Text style={styles.text5}>
              {' '}
              1233 <Text style={styles.text5}>1233 </Text>
            </Text>
            <Text style={styles.text3}>
              {' '}
              Mental health score{' '}
              <Text style={styles.text3}>ABCghghfgh ddfh </Text>
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              flex: 0.3,
              backgroundColor: '#ffe4e1',
            }}>
            <Grid styles={styles.gridStyles}>
              <Col size={80}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingTop: 15,
                    marginStart: 10,
                  }}>
                  Switch to user
                </Text>
              </Col>
              <Col size={80}>
                <Button
                  full
                  rounded
                  style={{
                    marginLeft: 40,
                    marginRight: 40,
                    backgroundColor: '#ffa500',
                    marginTop: 10,
                    marginEnd: 10,
                  }}>
                  <Text style={{color: 'black'}}>switch</Text>
                </Button>
              </Col>
            </Grid>
          </View>

          <View style={{marginTop: 60}}>
            <Grid styles={styles.gridStyles}>
              <Col size={15}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Image
                    resizeMode="contain"
                    style={styles.bell}
                    source={require('./images/bell.png')}
                  />
                </TouchableOpacity>

                {/* <Icon name="back-arrow" style={{width:50,height:50}} /> */}
              </Col>
              <Col size={60}>
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    color: '#808080',
                    marginTop: -30,
                  }}>
                  Snooze
                </Text>
                <Text style={{color: '#808080', fontSize: 9, paddingStart: 40}}>
                  This will stop a notification
                </Text>
              </Col>

              <Col size={60}>
                <Image
                  resizeMode="contain"
                  style={styles.toggle}
                  source={require('./images/toggle.png')}
                />
              </Col>
            </Grid>
          </View>
          <View
            style={{
              justifyContent: 'center',
              flex: 0.7,
              backgroundColor: '#e6f7ff',
              marginTop: 30,
              borderRadius: 30,
              marginStart: 15,
              marginEnd: 15,
            }}>
            <Grid styles={styles.gridStyles}>
              <Col size={20}>
                {/* <Text style={{fontSize:20,fontWeight:"bold",paddingTop:15,marginStart:10}}>Switch to user</Text> */}
                <TouchableOpacity activeOpacity={0.5}>
                  <Image
                    resizeMode="contain"
                    style={styles.mail}
                    source={require('./images/mil.png')}
                  />
                </TouchableOpacity>
              </Col>
              <Col size={80}>
                <Text style={{color: '#007575', fontSize: 20, paddingTop: 18}}>
                  E-mail
                </Text>
                <Text style={{color: '#808080'}}>bhavya@moodcafe.in</Text>
              </Col>
            </Grid>
            <Grid styles={styles.gridStyles}>
              <Col size={20}>
                {/* <Text style={{fontSize:20,fontWeight:"bold",paddingTop:15,marginStart:10}}>Switch to user</Text> */}
                <TouchableOpacity activeOpacity={0.5}>
                  <Image
                    resizeMode="contain"
                    style={styles.mail}
                    source={require('./images/ph.jpg')}
                  />
                </TouchableOpacity>
              </Col>
              <Col size={80}>
                <Text style={{color: '#007575', fontSize: 20, paddingTop: 18}}>
                  Phone No
                </Text>
                <Text style={{color: '#808080'}}>+91 987654321</Text>
              </Col>
            </Grid>
          </View>
        </View>
        <Footer>
          <FooterTab style={{backgroundColor: '#fff'}}>
            <Button vertical>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={styles.req}
                  source={require('./images/req.png')}
                />
                <Text style={{color: 'black', fontSize: 10}}>Requests</Text>
              </TouchableOpacity>
            </Button>
            <Button vertical>
              <Image
                resizeMode="contain"
                style={styles.cht}
                source={require('./images/chats.png')}
              />

              {/* <Icon  name="navigate" /> */}
              <Text style={{color: 'black'}}>Chats</Text>
            </Button>
            <Button vertical>
              <Image
                resizeMode="contain"
                style={styles.fd}
                source={require('./images/feed.png')}
              />
              <Text style={{color: 'black'}}>Feed</Text>
            </Button>
            <Button vertical>
              <Image
                resizeMode="contain"
                style={styles.prf}
                source={require('./images/profile.png')}
              />
              <Text style={{color: 'black'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  profileStyle: {
    width: 120,
    height: 120,
    marginTop: 6,
    marginBottom: 6,
    justifyContent: 'center',
    marginLeft: 120,
    marginRight: 100,
    borderRadius: 100,
  },
  text3: {
    fontSize: 15,
    color: '#007575',
  },
  gridStyles: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffe4e1',
    justifyContent: 'space-around',
    marginTop: 80,
  },
  bell: {
    height: 40,
    width: 40,
    marginTop: -30,
    marginStart: 10,
  },
  mail: {
    height: 40,
    width: 40,
    paddingTop: 80,
    marginStart: 10,
  },
  ph: {
    height: 40,
    width: 40,
    paddingTop: 80,
    marginStart: 10,
  },
  toggle: {
    width: 85,
    height: 85,
    marginTop: -50,
    marginLeft: 60,
  },
  text5: {
    fontSize: 15,
    marginTop: 18,
    marginBottom: 3,
    color: '#007575',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
  req: {
    width: 60,
    height: 60,
    marginBottom: -15,
  },
});

import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from 'react-native-elements';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  View,
  Button,
  Left,
  Footer,
  FooterTab,
  Body,
  Grid,
  Col,
  Right,
} from 'native-base';
const ddd = () => {
  Actions.nct();
};
const re = () => {
  Actions.req();
};

class Msg extends Component {
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
                <TouchableOpacity activeOpacity={0.5} onPress={ddd}>
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
          <View>
            <Card style={{paddingTop: 20, borderRadius: 10}}>
              <CardItem style={{borderRadius: 10}}>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                    }}
                  />
                  <Body>
                    <Text>Moody</Text>
                    <Text note style={{color: 'red'}}>
                      03hr:20min
                    </Text>
                  </Body>
                </Left>
                <Right>
                  {/* <Icon name="correct" /> */}
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                    }}
                  />
                  <Body>
                    <Text>User1</Text>
                    <Text note style={{color: 'red'}}>
                      03hr:10min
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Text>1:04PM</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                    }}
                  />
                  <Body>
                    <Text>User 2 </Text>
                    <Text note style={{color: 'red'}}>
                      02hr:50min
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Text>12:20PM</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                    }}
                  />
                  <Body>
                    <Text>User 3</Text>
                    <Text note style={{color: 'red'}}>
                      02hr:40min
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Text>11:30M</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                    }}
                  />
                  <Body>
                    <Text>User 4</Text>
                    <Text note style={{color: 'red'}}>
                      02hr:30min
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Text>10:46AM</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                    }}
                  />
                  <Body>
                    <Text>User 5</Text>
                    <Text note style={{color: '007575'}}>
                      02hr:10
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Text>10:20AM</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                    }}
                  />
                  <Body>
                    <Text style={{color: '007575'}}>user 6</Text>
                    <Text note>02hr:05min</Text>
                  </Body>
                </Left>
                <Right>
                  <Text>Wed</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                    }}
                  />
                  <Body>
                    <Text>User 7</Text>
                    <Text note style={{color: '007575'}}>
                      02hr:01min
                    </Text>
                  </Body>
                </Left>
                <Right>
                  <Text>Wed</Text>
                </Right>
              </CardItem>
            </Card>
          </View>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#fff'}}>
            <Button vertical>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={styles.req}
                  source={require('./images/req.png')}
                />
                <Text style={{color: 'black', fontSize: 10}}>Messages</Text>
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
export default Msg;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007575',
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
  req: {
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
});

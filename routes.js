import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from './login';
import Register from './register';
import Forgot from './forgot';
import Verify from './verification';
import Msg from './msg';
import TabScreen from './tab.js';
import Alms from './alms.js';
import Pswr from './pswr';
import Nochats from './nochats';
import Requests from './requests';
import Popup from './popup';
import Profile from './profile';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Login" initial={true} component={Login} hideNavBar={true} />

      <Scene key="register" component={Register} hideNavBar={true} />
      <Scene key="fffr" component={Forgot} hideNavBar={true} />
      <Scene key="veri" component={Verify} hideNavBar={true} />
      <Scene key="asm" component={Alms} hideNavBar={true} />
      <Scene key="rep" component={Pswr} hideNavBar={true} />
      <Scene key="nct" component={Nochats} hideNavBar={true} />
      <Scene key="req" component={Requests} hideNavBar={true} />
      <Scene key="pops" component={Popup} hideNavBar={true} />
      <Scene key="pro" component={Profile} hideNavBar={true} />


      <Scene key="tabs" hideNavBar={true} component={TabScreen} />

      <Scene key="mes" component={Msg} hideNavBar={true} />
    </Scene>
  </Router>
);

export default Routes;

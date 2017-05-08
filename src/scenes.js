import React from 'react';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Actions } from 'react-native-router-flux';
import NavigationDrawer from './components/NavigationDrawer';
import Main from './containers/Main';
import Login from './containers/Auth/Login';

export const scenes = Actions.create(
  <Scene key="modal" component={Modal} >
    <Scene key="root" hideNavBar={true} >
      <Scene key="tabbar" component={NavigationDrawer} >
        <Scene key="home" tabs={true}>
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene initial key="main" component={Main} />
        </Scene>
      </Scene>
    </Scene>
  </Scene>
);
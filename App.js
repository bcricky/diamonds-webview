/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import {SafeAreaView} from 'react-native';

import { WebView } from 'react-native-webview';



const App = () => {

  return (
      <SafeAreaView style={{flex:1, backgroundColor: '#9ac43a'}}>
        <WebView source={{ uri: 'http://diamonds.lndo.site/video/world-cup-trivia-bruce-klau' }} style={{flex:1}}/>
      </SafeAreaView>
  );
};


export default App;

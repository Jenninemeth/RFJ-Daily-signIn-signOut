import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { CheckBox, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';


import { MonoText } from '../components/StyledText';
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const data = useState([
    {value: '18109'},
    {value: '22565'}, 
  ]);

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Please read through and answer all questions daily. You must sign in at the beginning of your work day and out at the end. Failure to do so will involve disciplinary actions by your supervisor.</Text>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.welcomeContainer}>
        <Text style={styles.headerText}>Job Number</Text>
            <Dropdown style={{ width: 600, marginLeft: 100 }}
              label='Choose one'
              data={data} 
          />
        </View>

        <View style={styles.welcomeContainer}>
        <Text>I am </Text>
            <Dropdown style={{ width: 600, marginLeft: 100 }}
              label='Signing In'
              data={data} 
          /><Text> for the day.</Text>
        </View>

        <View style={styles.inputContainer}>

          <Text style={styles.headerText}>First Name</Text>  
          <TextInput
            placeholder="First Name"
            style={styles.input}
          />
          <View style={styles.space}></View>

          <Text style={styles.headerText}>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            style={styles.input}
          />
          <View style={styles.space}></View>

          <Text style={styles.headerText}>Confirmation</Text>
          <View style={styles.space}></View>
          <Text style={styles.getStartedText}>Did you complete all necessary COVID-19 protocols to enter the job-site?</Text>
        
        </View>

        <View style={styles.space}></View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>

        <View style={styles.getStartedContainer}>
         
          

          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Hello World hello
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

 
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  header:{
    height: 60,
    padding: 15,
    marginHorizontal: -20,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  headerText: {
    color: 'darkslateblue',
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    color: 'black',
    borderColor: 'darkslateblue',
    borderWidth: 1,
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  space: {
    marginTop:15,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  dropDown: {
    marginLeft: -10,
    borderColor: 'darkslateblue',
    borderWidth: 1,
    padding: 10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

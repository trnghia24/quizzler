import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import {color} from 'react-native-reanimated';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;

  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreText}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image source = {{
            uri: 'https://miro.medium.com/max/1400/1*6hSpI2drZ3mb_FIagCVQpw.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')}
        style= {styles.button}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Result

const styles = StyleSheet.create({
  banner: {
      height: 300,
      width: 300,
  },
  bannerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 40,
    height:'100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
  },
})

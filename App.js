import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button,TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useFonts } from 'expo-font';

export default function App(props) {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/Inter-Black.ttf'),
  });
  const { onPress, title = 'Save' } = props;
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey there hello</Text>
      {/* <Button title="Show Toast" onPress={showToast} /> */}
      <StatusBar style="light" />
      {/* <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
    </View>
  );

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  function showToast() {
    alert('Year Begins')
  }

}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    fontFamily:'Inter-Black',
    elevation: 3,
    backgroundColor: '#80808052',
  },
  camera:{
    width:"70%",
    height:"400px",
    marginBottom:"100px "
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Inter-Black', 
    alignItems: 'center',
    justifyContent: 'center',
    gap:'10px'
  },
  text:{
    fontFamily:'Inter-Black'
  }
});

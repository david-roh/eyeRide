import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { detectFaces } from 'react-native-vision-camera-face-detector';
import { Worklets } from 'react-native-worklets-core';

export default function FaceDetectionCamera() {
  const device = useCameraDevice('front');
  const [faces, setFaces] = useState([]);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      console.log({ status });
    })();
  }, [device]);

  const handleFacesDetection = Worklets.createRunInJsFn((result) => {
    console.log('detection result', result);
    setFaces(result.faces);
  });

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    detectFaces(
      frame,
      handleFacesDetection, {
        mode: 'fast',
        detectLandmarks: 'none',
        runClassifications: 'none',
        minDetectionInterval: 100,
        tracking: true,
      }
    );
  }, [handleFacesDetection]);

  return (
    <View style={{ flex: 1 }}>
      {!!device ? (
        <Camera style={StyleSheet.absoluteFill} device={device} frameProcessor={frameProcessor} />
      ) : (
        <Text>No Device</Text>
      )}
      {faces.map((face, index) => {
        const eyesShut =
          face.rightEyeOpenProbability < 0.4 &&
          face.leftEyeOpenProbability < 0.4;
        return (
          <View style={styles.faces} key={index}>
            <Text style={styles.faceDesc}>
              Eyes Shut: {eyesShut.toString()}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  faces: {
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  faceDesc: {
    fontSize: 20,
  },
});
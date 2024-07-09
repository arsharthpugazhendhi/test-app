import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-svg';
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';
import { useSelector } from 'react-redux';
import { validateArray } from '../utils/helper';
import { ROUTE_KEYS } from '../utils/routeKeys';

const BarCodeScanner = () => {
  const camera = useRef(null);
  const device = useCameraDevice('back');

  const [showCamera, setShowCamera] = useState(false);
  const [permission, setPermission] = useState("");

  const navigation: any = useNavigation();

  const products = useSelector((state) => state?.cart?.products);

  async function getPermission() {
    const permissionStatus = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permissionStatus}`);
    setPermission(permissionStatus);
    if (permissionStatus === 'denied') {
      await Linking.openSettings();
    }
  }

  useEffect(() => {
    getPermission();
  }, []);

  useEffect(() => {
    if (permission === 'granted') {
      setShowCamera(true);
    } else {
      setShowCamera(false);
    }
  }, [permission]);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'code-128'],
    onCodeScanned: (codes) => {
      if (codes[0]?.value) {
        const matchingProduct = validateArray(products) && products.find((product: { gtin: string }) => product?.gtin === codes[0]?.value);
        if (matchingProduct) {
          navigation.navigate(ROUTE_KEYS.ProductDetail, { productData: matchingProduct });
        }
      }
    },
  });

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      {showCamera && (
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
      )}
    </View>
  );
};

export default BarCodeScanner;

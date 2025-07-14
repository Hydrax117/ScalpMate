import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import splashImage from "./../../assets/splash_screen_image.png";
const { width, height } = Dimensions.get("window");

const SplashScreen = ({ navigation }: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.replace("Home");
      }, 3000);
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={splashImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* <View style={styles.overlay}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.logo}>ScalpMate</Text>
          </Animated.View>
        </View> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: { fontSize: 36, fontWeight: "bold", color: "#4B9CD3" },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: height * 0.1,
  },
});

export default SplashScreen;

import React from "react";
import { View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function ImageSlider() {
  const images = [
    require("../Sources/couscous.jpg"),
    require("../Sources/felfel.jpg"),
    require("../Sources/mlukhiya.jpg"),
    require("../Sources/ojja.jpg"),
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {images.map((img, index) => (
          <Image key={index} source={img} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 250, // fixed height for all images
  },
  image: {
    width: width,        // full screen width
    height: 250,         // same height as container
    resizeMode: "cover", // fills without distortion
  },
});

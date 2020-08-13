import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import ImageSwiper from "@freakycoder/react-native-image-swiper";

const staticImages = [
  {
    uri:
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1555149385-c50f336e28b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
  },
];

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ImageSwiper
          imageHeight={700}
          images={staticImages}
          onSwipeTop={() => alert("onSwipeTop")}
          onSwipeBottom={() => alert("onSwipeBottom")}
        />
      </SafeAreaView>
    </View>
  );
};
export default App;

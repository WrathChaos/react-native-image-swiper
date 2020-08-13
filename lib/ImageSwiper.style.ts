import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from "react-native";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

interface Style {
  container: ViewStyle;
}

export const _imageStyle = (
  imageHeight = ScreenHeight,
  imageWidth = ScreenWidth,
) => ({
  width: imageWidth,
  height: imageHeight,
});

export default StyleSheet.create<Style>({
  container: {},
});

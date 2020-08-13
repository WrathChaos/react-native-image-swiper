import * as React from "react";
import { Image, ScrollView } from "react-native";
/**
 * ? Local Imports
 */
import { _imageStyle } from "./ImageSwiper.style";

export interface IImage {
  uri?: string;
  url?: string;
  URL?: string;
  URI?: string;
  asset?: any;
}

interface IProps {
  onSwipeTop?: any;
  onSwipeBottom?: any;
  images: IImage[];
  imageWidth?: number;
  imageHeight?: number;
  ImageComponent: any;
}

interface IState {}

export default class ImageSwiper extends React.Component<IProps, IState> {
  handleSwipeGestures = (e, item) => {
    const { onSwipeBottom, onSwipeTop } = this.props;
    if (e.nativeEvent.contentOffset.y < 0) {
      onSwipeBottom && onSwipeBottom(item);
    } else {
      onSwipeTop && onSwipeTop(item);
    }
  };

  uriHandler = (image) => ({
    uri: image.uri || image.URL || image.url || image.URI,
  });

  render() {
    const {
      images,
      imageWidth,
      imageHeight,
      ImageComponent = Image,
    } = this.props;
    return (
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        {...this.props}
      >
        {images &&
          images.map((image: IImage, index: number) => {
            const imageSource = image.asset
              ? image.asset
              : this.uriHandler(image);
            return (
              <ScrollView
                key={index}
                onScrollEndDrag={(e) => this.handleSwipeGestures(e, image)}
              >
                <ImageComponent
                  style={_imageStyle(imageHeight, imageWidth)}
                  source={imageSource}
                  {...this.props}
                />
              </ScrollView>
            );
          })}
      </ScrollView>
    );
  }
}

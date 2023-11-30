import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const widthBaseScale = width / 414;
const heightBaseScale = height / 896;
function normalize(size: any, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: any) => {
  return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: any) => {
  return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size: any) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: any) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: any) => {
  return widthPixel(size);
};
const theme = {
  sizes: {
    xs: 10,
    s: 12,
    m: 16,
    l: 18,
    xl: 25,
    xxl: 32,
    96: 96,
  },
  sizeActivity: {
    xs: 10,
    s: 14,
    m: 18,
    mm: 20,
    l: 24,
    xl: 28,
    xxl: 32,
  },
  spacing: {
    s: 8,
    m: 13,
    l: 20,
    xl: 30,
    xxl: 40,
    xxxl: 70,
  },
  radius: {
    max: 50,
    mid: 30,
    min: 18,
    xmin: 12,
  },
  border: {
    thin: 1,
    thick: 3,
  },
};
export {
  width,
  height,
  theme,
  pixelSizeHorizontal,
  pixelSizeVertical,
  fontPixel,
  widthPixel,
  heightPixel,
};

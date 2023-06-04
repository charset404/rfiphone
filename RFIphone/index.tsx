/**
 * The function RFIphone returns a responsive font size value based on the height of the device screen.
 * @param {number} value - The font size value that needs to be converted to a responsive font size
 * using the react-native-responsive-fontsize library.
 * @returns The function `RFIphone` returns a responsive font size value using the `RFValue` function
 * from the `react-native-responsive-fontsize` library. The returned value depends on the height of the
 * device's screen. If the height is equal to the iPhone 14 height (852), the function returns the
 * `RFValue` value with a custom base font size of 730. Otherwise, it returns the default RFValue.
 */

import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const height = Dimensions.get('window').height;

export function RFIphone(value: number) {
  const iphoneFourteenHeight = 852;

  if (height === iphoneFourteenHeight) {
    return RFValue(value, 730);
  } else {
    return RFValue(value);
  }
}

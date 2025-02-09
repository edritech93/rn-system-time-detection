import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-system-time-detection' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RnSystemTimeDetection = NativeModules.RnSystemTimeDetection
  ? NativeModules.RnSystemTimeDetection
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function checkTime(): Promise<boolean> {
  if (Platform.OS === 'ios') {
    return Promise.resolve(true);
  } else {
    return RnSystemTimeDetection.checkTime();
  }
}

export function checkZone(): Promise<boolean> {
  if (Platform.OS === 'ios') {
    return Promise.resolve(true);
  } else {
    return RnSystemTimeDetection.checkZone();
  }
}

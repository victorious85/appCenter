import { useCallback } from 'react';
import {AppState, BackHandler} from 'react-native';
import { useComponentDidMount, useComponentWillUnmount } from './life-cycle';

export const useSyncEventWithComponent = (eventEmitter, eventName, eventHandler) => {
  useComponentDidMount(() => {
    eventEmitter.addEventListener(eventName, eventHandler);
  });

  useComponentWillUnmount(() => {
    eventEmitter.removeEventListener(eventName, eventHandler);
  });
};

export const useAppState = callback => {
  let oldAppState;
    console.log('useAppState ');
  const handleAppStateChange = useCallback(
    nextAppState => {
      nextAppState === 'active' && oldAppState === 'background' && callback();
      oldAppState = nextAppState;
    },
    [callback],
  );

  useSyncEventWithComponent(AppState, 'change', handleAppStateChange);
};

export const useAppBackground = callback =>
  useSyncEventWithComponent(
    AppState,
    'change',
    nextAppState => nextAppState === 'background' && typeof callback === 'function' && callback(),
  );

export const useSkipBackButtonAction = () => {
  useSyncEventWithComponent(
    BackHandler,
    'hardwareBackPress',
    useCallback(() => {
      BackHandler.exitApp();
      return true;
    }, []),
  );
};

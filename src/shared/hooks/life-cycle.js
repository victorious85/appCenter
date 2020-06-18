import { useEffect, useState, useLayoutEffect } from 'react';

export const useComponentDidMount = callback => {
  useEffect(callback, []);
};

export const useComponentDidUpdate = (callback, memo) => {
  const [firstEntrance, setFirstEntrance] = useState(true);

  useEffect(() => {
    if (firstEntrance) {
      setFirstEntrance(false);
      return;
    }
    callback();
  }, memo);
};

export const useComponentWillUnmount = callback => {
  useEffect(() => callback, []);
};

export const useComponentDidMountSync = callback => {
  useLayoutEffect(callback, []);
};

export const useComponentDidUpdateSync = (callback, memo) => {
  const [firstEntrance, setFirstEntrance] = useState(true);

  useLayoutEffect(() => {
    if (firstEntrance) {
      setFirstEntrance(false);
      return;
    }
    callback();
  }, memo);
};

export const useComponentWillUnmountSync = callback => {
  useLayoutEffect(() => callback, []);
};

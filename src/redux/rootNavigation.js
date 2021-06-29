import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  console.log('back');
  navigationRef.current?.goBack();
}

import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const {height} = Dimensions.get('window');

export default function bottomSheet(props) {
  const refRBSheet = props.refRBSheet;
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={height}
        openDuration={props.height}
        customStyles={{
          container: {
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            padding: 15,
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        {props.component()}
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({});

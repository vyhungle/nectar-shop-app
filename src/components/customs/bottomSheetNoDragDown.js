import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

// const {height} = Dimensions.get('window');

export default function bottomSheet(props) {
  const refRBSheet = props.refRBSheet;
  return (
    <View>
      <RBSheet
        animationType="none"
        ref={refRBSheet}
        openDuration={200}
        closeOnDragDown={false}
        closeOnPressMask={true}
        height={props.height}
        customStyles={{
          container: {
            // height: props.height,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            // padding: 20,
            paddingBottom: 0,
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        }}>
        {props.component(refRBSheet)}
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({});

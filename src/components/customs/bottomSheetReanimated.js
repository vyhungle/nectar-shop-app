import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';

export default function BottomSheetReanimated(props) {
  const sheetRef = props.refRBSheet;
  const renderContent = () => props.component(sheetRef);
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[450, 300, 0]}
      borderRadius={10}
      renderContent={renderContent()}
    />
  );
}

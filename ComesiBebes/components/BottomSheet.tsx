import React, { forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, Text, touchableOpacity View } from 'react-native'
import { BottomSheetModal, BottomSheetView, bottomSheetbackdrop, useBottomSheetModal } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/ionicons';
import { Link  } from 'expo-router';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], [])
  const renderBackdrop = useCallback((props: any) =>
  <bottomSheetbackdrop apperarsOnIndex={0} disapearsOnIndex={-1} {...props}/>, [])
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal 
    ref={ref} 
    snapPoints={snapPoints}
    backdropComponent={renderBackdrop}
    overDragresistanceFactor={0}
    >
      <BottomSheetView style={styles.contentContainer}>
          <Text>BottomSheet</Text>
      </BottomSheetView>
    </BottomSheetModal>
  )
});

export default BottomSheet

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    height: '100%',
  },
});
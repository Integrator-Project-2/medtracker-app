import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, ViewBase } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SelectInput } from '../SelectInput';
import DateInput from '../DateInput';
import { theme } from '@/global/styles/theme';
import { BottomSheetContainer, BottomSheetViewContainer, Container } from './styles';
import { PrimaryButton } from '../PrimaryButton';

export const BottomSheet = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.31)' }}>
        <BottomSheetModalProvider>
            <BottomSheetContainer>
                <Button
                    onPress={handlePresentModalPress}
                    title="Present Modal"
                    color="black"
                />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                <Text>Filters</Text>
                <BottomSheetViewContainer>
                  <SelectInput 
                    label='Filter by doctor'
                    options={['Dr. Drake Ramoray', 'Dr. Mitchell', 'Dr. Michael']}
                    borderColor={theme.colors.lightBlue}
                  />

                  <Container>
                    <DateInput 
                      width={148}
                      label='Sort by perid'
                    />
                    
                    <DateInput 
                      width={148}
                      label='Invisible text'
                      color='transparent'
                    />
                  </Container>

                  <Container>
                    <PrimaryButton 
                      text='Reset'
                      bgColor={theme.colors.lightNavy}
                      width={148}
                      height={52}
                      onPress={() => console.log('Reset')} 
                      textColor={theme.colors.navy}
                    />

                    <PrimaryButton 
                      text='Reset'
                      bgColor={theme.colors.navy}
                      width={148}
                      height={52}
                      onPress={() => console.log('Reset')} 
                    />
                  </Container>
                </BottomSheetViewContainer>
              </BottomSheetModal>
            </BottomSheetContainer>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
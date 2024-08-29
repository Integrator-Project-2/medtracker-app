import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from '@/global/styles/theme';
import * as Notifications from 'expo-notifications';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      Alert.alert("Notificação Recebida", notification.request.content.body ?? '');
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
      Alert.alert("Notificação Clicada", response.notification.request.content.body ?? '');
    });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="authentication" options={{ headerShown: false }} />
        <Stack.Screen name="selectMedication" options={{ headerShown: false }} />
        <Stack.Screen name="createReminder" options={{ headerShown: false }} />
        <Stack.Screen name="medicationStockReminder" options={{ headerShown: false }} />
        <Stack.Screen name="takeMedicationReminder" options={{ headerShown: false }} />
        <Stack.Screen name="reminderConfirmation" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

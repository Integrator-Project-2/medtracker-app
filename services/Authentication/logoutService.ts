import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import NotificationService from "@/services/Notifications/localNotificationService";

export async function logOut(navigate: () => void) {
    try {
        await SecureStore.deleteItemAsync('authToken');
        await SecureStore.deleteItemAsync('refreshToken');

        await AsyncStorage.removeItem('expoPushToken');

        await NotificationService.cancelAllReminders();
        
        // Navegação após logout
        navigate();

        Alert.alert('Logout', 'Você foi desconectado com sucesso.');
    } catch (error) {
        console.error('Erro ao realizar logout:', error);
        Alert.alert('Erro', 'Não foi possível realizar o logout.');
    }
}

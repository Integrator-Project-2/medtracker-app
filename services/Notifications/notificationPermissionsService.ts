import axios from 'axios';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api';

export async function requestNotificationPermissions(patientId: number) {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== 'granted') {
            Alert.alert(
                'Permissões de Notificação',
                'Para receber notificações, você precisa conceder permissões. Deseja ajustar as configurações?',
                [
                    {
                        text: 'Não',
                        style: 'cancel',
                    },
                    {
                        text: 'Ir para Configurações',
                        onPress: () => Linking.openSettings(),
                    },
                ]
            );
            return;
        }
    }

    try {
        const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
        if (!projectId) {
            console.error('Project ID is missing.');
            return;
        }

        const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId });

        
        const storedToken = await AsyncStorage.getItem('expoPushToken');
        if (storedToken === token) {
            return;
        }

     
        await AsyncStorage.setItem('expoPushToken', token);

        console.log(`Novo token: ${token}`);

      
        await api.post(`/update_expo_token/${patientId}/`, {
            expo_push_token: token
        });

        console.log('Token atualizado com sucesso.');

    } catch (error) {
        console.error(error);
    }
}

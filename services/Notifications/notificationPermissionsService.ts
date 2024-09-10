import axios from 'axios';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePatient } from '@/contexts/PatientContext'; 
import { api } from '../api';


export async function requestNotificationPermissions() {
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

        // Verifica se o token já foi salvo anteriormente
        const storedToken = await AsyncStorage.getItem('expoPushToken');
        if (storedToken === token) {
            return;
        }

        // Salva o novo token no armazenamento local
        await AsyncStorage.setItem('expoPushToken', token);

        console.log(`Novo token: ${token}`);

        const { patient } = usePatient();
        const patientId = patient?.id;
        if (!patientId) {
            console.error('Patient ID is not available.');
            return;
        }

        await api.post(`/update_token/${patientId}`, {
            expo_push_token: token
        });

        console.log('Token atualizado com sucesso.');

    } catch (error) {
        console.error(error);
    }
}

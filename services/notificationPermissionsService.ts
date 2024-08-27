import axios from 'axios';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para solicitar permissões de notificação e enviar o token
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

        // verifica se o token ja foi salvo anteriormente
        const storedToken = await AsyncStorage.getItem('expoPushToken');
        if (storedToken === token) {
            return;
        }

        // salva o novo token no armazenamento local
        await AsyncStorage.setItem('expoPushToken', token);

        console.log(`novo token:${token}`);

        const patientId = 1;
        const authToken = 'YOUR-TOKEN';

        const response = await axios.post(`http://10.0.2.2:8001/api/pacients/${patientId}/update_token/`, {
            "expo_push_token": token
        }, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Response:', response.data);

    } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Houve um problema ao enviar o token de notificação.');
    }
}

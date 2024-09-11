import { Reminder } from '@/types/Reminder';
import * as Notifications from 'expo-notifications';
import { fetchMedicationsById } from '@/services/Medications/medicationService';
import { Medication } from '@/types/Medication';

class NotificationService {
    async scheduleReminder(reminder: Reminder): Promise<void> {
        const { medication, remind_time, frequency_per_day, frequency_hours, reminder_type, day, id } = reminder;

        if (id === undefined) {
            throw new Error('ID do lembrete é obrigatório.');
        }

        let medicationName = '';

        if (typeof medication === 'number') {
            const medicationData: Medication | null = await fetchMedicationsById(medication);

            if (medicationData) {
                medicationName = medicationData.name;
            } else {
                throw new Error(`Medicamento não encontrado para o ID: ${medication}`);
            }
        } else if (typeof medication === 'object' && medication.name) {
            medicationName = medication.name;
        }

        const remindTime = new Date(`${day}T${remind_time}`);

        if (reminder_type === 'daily reminder' && frequency_per_day === 1) {
            await this.scheduleDailyReminder(medicationName, remindTime, id);
        } else if (reminder_type === 'daily reminder' && frequency_per_day && frequency_hours) {
            await this.scheduleFrequentReminder(medicationName, remindTime, frequency_per_day, frequency_hours, id);
        } else if (reminder_type === 'unique reminder') {
            await this.scheduleUniqueReminder(medicationName, remindTime, id);
        }
    }

    private async scheduleDailyReminder(medication: string, remindTime: Date, reminderId: number): Promise<void> {
        const notificationId = `reminder-${reminderId}`;

        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Daily Reminder',
                body: `It's time to take your medication: ${medication}.`,
                data: {
                    reminderId,
                },
            },
            trigger: {
                hour: remindTime.getHours(),
                minute: remindTime.getMinutes(),
                repeats: true,
            },
            identifier: notificationId, // define um identificador único
        });

        console.log(`Lembrete diário agendado com sucesso com o ID ${notificationId}.`);
    }

    private async scheduleFrequentReminder(
        medication: string,
        remindTime: Date,
        frequencyPerDay: number,
        frequencyHours: number,
        reminderId: number
    ): Promise<void> {
        const interval = frequencyHours * 60 * 60 * 1000;
        const notificationId = `reminder-${reminderId}`;

        for (let i = 0; i < frequencyPerDay; i++) {
            const notifyTime = new Date(remindTime.getTime() + i * interval);

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Frequent Reminder',
                    body: `It's time to take your medication: ${medication}.`,
                    data: {
                        reminderId,
                    },
                },
                trigger: {
                    hour: notifyTime.getHours(),
                    minute: notifyTime.getMinutes(),
                    repeats: true,
                },
                identifier: `${notificationId}-${i}`, 
            });

            console.log(`Lembrete frequente agendado com o ID ${notificationId}-${i}.`);
        }

        console.log(`Lembretes frequentes agendados (${frequencyPerDay} vezes por dia).`);
    }

    private async scheduleUniqueReminder(medication: string, remindTime: Date, reminderId: number): Promise<void> {
        const notificationId = `reminder-${reminderId}`;

        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Unique Reminder',
                body: `It's time to take your medication: ${medication}.`,
                data: {
                    reminderId,
                },
            },
            trigger: {
                date: remindTime,
            },
            identifier: notificationId, 
        });

        console.log(`Lembrete único agendado com o ID ${notificationId}.`);
    }

    async cancelReminder(reminderId: number): Promise<void> {
        try {
            
            const allScheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
            console.log(`Total de notificações agendadas encontradas: ${allScheduledNotifications.length}`);

            const notificationsToCancel = allScheduledNotifications.filter(notification => {
                console.log(`Checando notificação: ${notification.identifier}, Dados: ${JSON.stringify(notification.content.data)}`);
                return notification.content.data?.reminderId === reminderId;
            });

            console.log(`Notificações a cancelar: ${notificationsToCancel.length}`);

            for (const notification of notificationsToCancel) {
                await Notifications.cancelScheduledNotificationAsync(notification.identifier);
                console.log(`Notificação com ID ${notification.identifier} cancelada com sucesso.`);
            }

            if (notificationsToCancel.length === 0) {
                console.log('Nenhuma notificação encontrada para cancelar com o ID fornecido.');
            } else {
                console.log(`Total de ${notificationsToCancel.length} notificações canceladas.`);
            }
        } catch (error) {
            console.error('Erro ao cancelar lembretes:', error);
        }
    }

    async cancelAllReminders(): Promise<void> {
        try {
            const allScheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
            console.log(`Total de notificações agendadas encontradas: ${allScheduledNotifications.length}`);

            for (const notification of allScheduledNotifications) {
                await Notifications.cancelScheduledNotificationAsync(notification.identifier);
                console.log(`Notificação com ID ${notification.identifier} cancelada com sucesso.`);
            }

            console.log('Todas as notificações foram canceladas.');
        } catch (error) {
            console.error('Erro ao cancelar todas as notificações:', error);
        }
    }
}

export default new NotificationService();

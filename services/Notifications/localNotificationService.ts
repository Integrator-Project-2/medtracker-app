import { Reminder } from '@/types/Reminder';
import * as Notifications from 'expo-notifications';
import { fetchMedicationsById } from '@/services/Medications/medicationService';
import { Medication } from '@/types/Medication';

class NotificationService {
    async scheduleReminder(reminder: Reminder): Promise<void> {
        const { medication, remind_time, frequency_per_day, frequency_hours, reminder_type, day } = reminder;

        let medicationName = '';

        if (typeof medication === 'number') {
            const medicationData: Medication | null = await fetchMedicationsById('', medication);

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
            await this.scheduleDailyReminder(medicationName, remindTime);
        } else if (reminder_type === 'daily reminder' && frequency_per_day && frequency_hours) {
            await this.scheduleFrequentReminder(medicationName, remindTime, frequency_per_day, frequency_hours);
        } else if (reminder_type === 'unique reminder') {
            await this.scheduleUniqueReminder(medicationName, remindTime);
        }
    }

    private async scheduleDailyReminder(medication: string, remindTime: Date): Promise<void> {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Daily Reminder',
                body: `It's time to take your medication: ${medication}.`,
            },
            trigger: {
                hour: remindTime.getHours(),
                minute: remindTime.getMinutes(),
                repeats: true,
            },
        });
        console.log('Lembrete diário agendado com sucesso.');
    }

    private async scheduleFrequentReminder(
        medication: string,
        remindTime: Date,
        frequencyPerDay: number,
        frequencyHours: number
    ): Promise<void> {
        const interval = frequencyHours * 60 * 60 * 1000;

        for (let i = 0; i < frequencyPerDay; i++) {
            const notifyTime = new Date(remindTime.getTime() + i * interval);

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Frequent Reminder',
                    body: `It's time to take your medication: ${medication}.`,
                },
                trigger: {
                    hour: notifyTime.getHours(),
                    minute: notifyTime.getMinutes(),
                    repeats: true,
                },
            });
        }
        console.log(`Lembretes frequentes agendados (${frequencyPerDay} vezes por dia).`);
    }

    private async scheduleUniqueReminder(medication: string, remindTime: Date): Promise<void> {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Unique Reminder',
                body: `It's time to take your medication: ${medication}.`,
            },
            trigger: {
                date: remindTime,
            },
        });

        console.log('Lembrete único agendado com sucesso.');
    }

    async cancelReminder(reminderId: number): Promise<void> {
        try {
            const allScheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();
            const notificationId = `reminder-${reminderId}`;

            for (const notification of allScheduledNotifications) {
                if (notification.content.body && notification.content.body.includes(notificationId)) {
                    await Notifications.cancelScheduledNotificationAsync(notification.identifier);
                    console.log(`Notificação com ID ${notification.identifier} cancelada com sucesso.`);
                }
            }
        } catch (error) {
            console.error('Erro ao cancelar lembretes:', error);
        }
    }
}

export default new NotificationService();

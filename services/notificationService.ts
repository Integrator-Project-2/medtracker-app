import * as Notifications from 'expo-notifications';

export interface Reminder {
    medication: string;
    remindTime: Date;
    frequencyPerDay?: number;
    frequencyHours?: number;
    reminderType?: 'daily reminder' | 'unique reminder';
    day: Date;
}

class NotificationService {
    async scheduleReminder(reminder: Reminder): Promise<void> {
        const { medication, remindTime, frequencyPerDay, frequencyHours, reminderType, day } = reminder;

        if (reminderType === 'daily reminder' && frequencyPerDay === 1) {
            await this.scheduleDailyReminder(medication, remindTime);
        } else if (reminderType === 'daily reminder' && frequencyPerDay && frequencyHours) {
            await this.scheduleFrequentReminder(medication, remindTime, frequencyPerDay, frequencyHours);
        } else if (reminderType === 'unique reminder') {
            await this.scheduleUniqueReminder(medication, remindTime, day);
        }
    }

    private async scheduleDailyReminder(medication: string, remindTime: Date): Promise<void> {
        const identifier = await Notifications.scheduleNotificationAsync({
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
    }

    private async scheduleFrequentReminder(
        medication: string,
        remindTime: Date,
        frequencyPerDay: number,
        frequencyHours: number
    ): Promise<void> {
        const interval = frequencyHours * 60 * 60 * 1000; // Converte horas para milissegundos

        for (let i = 0; i < frequencyPerDay; i++) {
            const notifyTime = new Date(remindTime.getTime() + i * interval);
            console.log(notifyTime)
            
            const identifier = await Notifications.scheduleNotificationAsync({
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
    }

    private async scheduleUniqueReminder(medication: string, remindTime: Date, day: Date): Promise<void> {
        const identifier = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Unique Reminder',
                body: `It's time to take your medication: ${medication}.`,
            },
            trigger: {
                date: new Date(day.setHours(remindTime.getHours(), remindTime.getMinutes())),
            },
        });
    }
}

export default new NotificationService();

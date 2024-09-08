import { Reminder } from '@/types/Reminder';
import * as Notifications from 'expo-notifications';
import { fetchMedicationsById } from '@/services/medicationService'; 
import { Medication } from '@/types/Medication';

class NotificationService {
    async scheduleReminder(reminder: Reminder): Promise<void> {
        const { medication, remind_time, frequency_per_day, frequency_hours, reminder_type, day } = reminder;

        let medicationName = '';

        if (typeof medication === 'number') {
            console.log(`Buscando medicamento com ID: ${medication}`);
            const medicationData: Medication | null = await fetchMedicationsById('', medication);
            
            if (medicationData) {
                medicationName = medicationData.name; // Assume que a resposta tem um campo 'name'
                console.log(`Nome do medicamento encontrado: ${medicationName}`);
            } else {
                console.log(`Nenhum medicamento encontrado para o ID: ${medication}`);
                throw new Error(`Medicamento não encontrado para o ID: ${medication}`);
            }
        } else if (typeof medication === 'object' && medication.name) {
            medicationName = medication.name;
            console.log(`Nome do medicamento já disponível: ${medicationName}`);
        }

        
        const remindTime = new Date(`${day}T${remind_time}`);
        console.log(`Data e hora do lembrete: ${remindTime}`);

        if (reminder_type === 'daily reminder' && frequency_per_day === 1) {
            console.log(`Agendando lembrete diário para: ${medicationName}`);
            await this.scheduleDailyReminder(medicationName, remindTime);
        } else if (reminder_type === 'daily reminder' && frequency_per_day && frequency_hours) {
            console.log(`Agendando lembretes frequentes (${frequency_per_day} vezes por dia a cada ${frequency_hours} horas) para: ${medicationName}`);
            await this.scheduleFrequentReminder(medicationName, remindTime, frequency_per_day, frequency_hours);
        } else if (reminder_type === 'unique reminder') {
            console.log(`Agendando lembrete único para: ${medicationName}`);
            await this.scheduleUniqueReminder(medicationName, remindTime);
        }
    }

    private async scheduleDailyReminder(medication: string, remindTime: Date): Promise<void> {
        console.log(`Agendando lembrete diário para o horário: ${remindTime}`);
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
        console.log(`Intervalo entre lembretes: ${interval / (60 * 60 * 1000)} horas`);

        for (let i = 0; i < frequencyPerDay; i++) {
            const notifyTime = new Date(remindTime.getTime() + i * interval);
            console.log(`Agendando lembrete frequente para o horário: ${notifyTime}`);
            
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
      
        console.log(`Data e hora ajustadas para o lembrete único: ${remindTime}`);

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
}

export default new NotificationService();

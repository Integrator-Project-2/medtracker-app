import { Reminder } from "./Reminder";

export interface ReminderRecord {
    id?: number
    reminder: Reminder;
    date: string
    remind_time: string
    taken: boolean

}

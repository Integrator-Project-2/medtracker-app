import { format } from 'date-fns';

export const formatTime = (timeString: string) => {
    try {
        const [hours, minutes] = timeString.split(':').map(Number);
        if (isNaN(hours) || isNaN(minutes)) {
            throw new Error("Invalid time format");
        }
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    } catch (error) {
        console.error("Error formatting time:", error);
        return "00:00";
    }
};

export const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            console.error("Invalid date string:", dateString);
            return "Invalid Date";
        }
        return format(date, "EEE, MMM d");
    } catch (error) {
        console.error("Error formatting date:", error);
        return "Invalid Date";
    }
};
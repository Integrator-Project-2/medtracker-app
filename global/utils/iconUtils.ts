export const getIconName = (form: string) => {
    switch (form) {
        case 'tablet':
            return 'tablet';
        case 'capsule':
            return 'pill';
        case 'solution':
            return 'solution';
        case 'liquid':
            return 'liquid';
        case 'drops':
            return 'drops';
        case 'injectable':
            return 'injection';
    }
};
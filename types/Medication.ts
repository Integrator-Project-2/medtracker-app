// Define o tipo para a medicação
export interface Medication {
    id: number;
    name: string;
    pharmaceutical_form: 'tablet' | 'capsule' | 'solution' | 'liquid' | 'drops' | 'injectable';
    amount?: string | null;
    low_stock?: boolean
};

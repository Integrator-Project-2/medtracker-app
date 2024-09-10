interface Patient {
    id?: number;
    cpf: string;
    user: User;
    gender: 'M' | 'F' | 'NB';
    height?: number;
    weight?: number;
    allergies_and_observations?: string;
}
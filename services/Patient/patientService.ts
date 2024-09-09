import api from '../api'; 


export const getPatientData = async (patientId: number): Promise<Patient> => {
    const url = `/patients-service/${patientId}/`; 

    try {
        const response = await api.get<Patient>(url);
        return response.data;
    } catch (error) {
        console.error("Erro ao carregar os dados do paciente:", error);
        throw new Error("Não foi possível carregar os dados do paciente.");
    }
};

export const updatePatientData = async (patientId: number, updatedData: Partial<Patient>): Promise<void> => {
    const url = `/patients-service/${patientId}/`; 

    try {
        console.log("Atualizando dados:", updatedData); 
        await api.patch(url, updatedData); 
    } catch (error) {
        console.error("Erro ao atualizar os dados:", error);
        throw new Error("Não foi possível atualizar os dados.");
    }
};

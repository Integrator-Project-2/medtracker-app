import { theme } from "@/global/styles/theme";
import { NameInput } from "../NameInput";
import { InputContainer } from "./styles";
import { SelectInput } from "../SelectInput";
import DateInput from "../DateInput";
import { View } from "react-native";
import Subtitle from "../Subtitle";
import IntegerInput from "../IntegerInput";
import { TextArea } from "../TextArea";
import { FormButtonContainer } from "@/global/styles/globalStyles";
import { PrimaryButton } from "../PrimaryButton";
import { useState } from "react";
import { updatePatientData } from "@/services/Patient/patientService";
import { AddressInput } from "../AddressInput";
import { PhoneNumberInput } from "../PhoneNumber";
import { format, parseISO } from 'date-fns';
import { EmailInput } from "../EmailInput";

interface ProfileInfoFormProps {
    initialData: Patient | null;
    patientId: number;
    onCancel: () => void;
}

export function ProfileInfoForm({ initialData, patientId, onCancel }: ProfileInfoFormProps) {

    const formatDateForDisplay = (date: Date): string => {
        return format(date, 'yyyy-MM-dd');
    };

    const toDate = (date: string | Date): Date => {
        if (typeof date === 'string') {
            return parseISO(date);
        }
        return date;
    };

    const [formData, setFormData] = useState({
        user: {
            id: initialData?.user?.id || 0,
            name: initialData?.user?.name || '',
            email: initialData?.user?.email || '',
            address: initialData?.user?.address || '',
            phone: initialData?.user?.phone || '',
            birth_date: toDate(initialData?.user?.birth_date || new Date())
        },
        gender: initialData?.gender || 'M',
        height: initialData?.height ? Number(initialData.height) : 0,
        weight: initialData?.weight ? Number(initialData.weight) : 0,
        allergies_and_observations: initialData?.allergies_and_observations || ''
    });

    const handleInputChange = (field: string, value: string | number | Date) => {
        if (field === 'gender' || field === 'allergies_and_observations') {
            if (typeof value === 'string') {
                setFormData((prevData) => ({
                    ...prevData,
                    [field]: value
                }));
            }
        } else if (field === 'height' || field === 'weight') {
            const numericValue = typeof value === 'number' ? value : parseFloat(value as string);
            setFormData((prevData) => ({
                ...prevData,
                [field]: !isNaN(numericValue) ? numericValue : 0
            }));
        } else if (field === 'birth_date') {
            const dateValue = (value instanceof Date) ? value : new Date(value);
            setFormData(prevData => ({
                ...prevData,
                user: {
                    ...prevData.user,
                    birth_date: dateValue
                }
            }));
        } else {
            if (typeof value === 'string' || typeof value === 'number') {
                setFormData((prevData) => ({
                    ...prevData,
                    user: {
                        ...prevData.user,
                        [field]: value
                    }
                }));
            }
        }
    };

    const handleSubmit = async () => {
        try {
            const modifiedData: any = { user: {} };

            if (formData.user.name !== initialData?.user.name) {
                modifiedData.user.name = formData.user.name;
            }
            if (formData.user.address !== initialData?.user.address) {
                modifiedData.user.address = formData.user.address;
            }
            if (formData.user.phone !== initialData?.user.phone) {
                modifiedData.user.phone = formData.user.phone;
            }

            if (formData.user.email !== initialData?.user.email) {
                modifiedData.user.email = formData.user.email;
            }

            const initialBirthDate = initialData?.user.birth_date ? toDate(initialData.user.birth_date) : null;
            const formattedCurrentBirthDate = formatDateForDisplay(formData.user.birth_date);
            const formattedInitialBirthDate = initialBirthDate ? formatDateForDisplay(initialBirthDate) : null;

            if (formattedCurrentBirthDate !== formattedInitialBirthDate) {
                modifiedData.user.birth_date = formattedCurrentBirthDate;
            }

            if (formData.gender !== initialData?.gender) {
                modifiedData.gender = formData.gender;
            }
            if (formData.height !== initialData?.height) {
                modifiedData.height = formData.height;
            }
            if (formData.weight !== initialData?.weight) {
                modifiedData.weight = formData.weight;
            }
            if (formData.allergies_and_observations !== initialData?.allergies_and_observations) {
                modifiedData.allergies_and_observations = formData.allergies_and_observations;
            }

            if (Object.keys(modifiedData).length === 1 && Object.keys(modifiedData.user).length === 0) {
                alert("No changes detected.");
                return;
            }

            await updatePatientData(patientId, modifiedData);
            alert("Dados atualizados com sucesso!");
            onCancel();

        } catch (error) {
            console.error("Erro ao atualizar os dados:", error);
            alert("Erro ao atualizar os dados.");
        }
    };

    return (
        <>
            <NameInput
                value={formData.user.name}
                label="Name"
                labelColor={theme.colors.lightPurple}
                onChange={(value) => handleInputChange('name', value)}
            />

            <InputContainer>
                <SelectInput
                    label="Gender"
                    labelColor={theme.colors.lightPurple}
                    options={[
                        { value: 'F', label: 'Female' },
                        { value: 'M', label: 'Male' },
                        { value: 'NB', label: 'Non-Binary' }
                    ]}
                    selectedValue={formData.gender}
                    width={130}
                    onChange={(selectedValue) => handleInputChange('gender', selectedValue)}
                />

                <DateInput
                    label="Date of Birth"
                    labelColor={theme.colors.lightPurple}
                    value={formData.user.birth_date}
                    width={126}
                    color={theme.colors.darkBlue}
                    onChange={(date) => handleInputChange('birth_date', date)}
                />
            </InputContainer>

            <EmailInput
                label="Email"
                value={formData.user.email}
                labelColor={theme.colors.lightPurple}
                onChange={(value) => handleInputChange('email', value)}
            />

            <PhoneNumberInput
                label="Phone Number"
                value={formData.user.phone}
                onChange={(value) => handleInputChange('phone', value)}
            />

            <AddressInput
                label="Address"
                value={formData.user.address}
                onChange={(value) => handleInputChange('address', value)}
            />

            <View style={{ alignItems: "flex-start", width: "100%" }} >
                <Subtitle
                    text="Additional Information"
                    color={theme.colors.navy}
                    size={16}
                />
            </View>
            <InputContainer>
                <IntegerInput
                    label="Height"
                    value={formData.height}
                    width={140}
                    labelColor={theme.colors.lightPurple}
                    onChange={(value) => handleInputChange('height', value)}
                />

                <IntegerInput
                    label="Weight"
                    value={formData.weight}
                    width={140}
                    labelColor={theme.colors.lightPurple}
                    onChange={(value) => handleInputChange('weight', value)}
                />
            </InputContainer>

            <TextArea
                label="Allergies and observations"
                value={formData.allergies_and_observations}
                labelColor={theme.colors.lightPurple}
                onChange={(value) => handleInputChange('allergies_and_observations', value)}
            />

            <FormButtonContainer row marginTop={20}>
                <PrimaryButton
                    text='Cancel'
                    bgColor={theme.colors.lightNavy}
                    textColor={theme.colors.navy}
                    onPress={onCancel}
                    width={148}
                    height={52}
                />

                <PrimaryButton
                    text='Confirm'
                    bgColor={theme.colors.navy}
                    onPress={handleSubmit}
                    width={148}
                    height={52}
                />
            </FormButtonContainer>
        </>
    );
}

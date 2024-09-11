import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { View } from "react-native";
import { theme } from "@/global/styles/theme";
import { updatePatientData } from "@/services/Patient/patientService";
import { NameInput } from "../NameInput";
import { InputContainer } from "./styles";
import { SelectInput } from "../SelectInput";
import DateInput from "../DateInput";
import Subtitle from "../Subtitle";
import IntegerInput from "../IntegerInput";
import { TextArea } from "../TextArea";
import { FormButtonContainer } from "@/global/styles/globalStyles";
import { PrimaryButton } from "../PrimaryButton";
import { AddressInput } from "../AddressInput";
import { PhoneNumberInput } from "../PhoneNumber";
import CpfInput from "../CpfInput";
import { EmailInput } from "../EmailInput";

interface ProfileInfoFormProps {
    initialData: Patient | null;
    patientId: number;
    onCancel: () => void;
    onSuccess: () => void;
}

export function ProfileInfoForm({ initialData, patientId, onCancel, onSuccess}: ProfileInfoFormProps) {
    const methods = useForm<Patient>({
        defaultValues: {
            user: {
                id: initialData?.user?.id || 0,
                name: initialData?.user?.name || '',
                email: initialData?.user?.email || '',
                address: initialData?.user?.address || '',
                phone: initialData?.user?.phone || '',
                birth_date: initialData?.user?.birth_date || '',
            },
            gender: initialData?.gender || 'M',
            height: initialData?.height !== undefined ? initialData.height : 0,
            weight: initialData?.weight !== undefined ? initialData.weight : 0,
            allergies_and_observations: initialData?.allergies_and_observations || '',
            cpf: initialData?.cpf || '',
        }
    });

    const { handleSubmit, control, formState: { isSubmitting, errors } } = methods;

    const onSubmit = async (data: Patient) => {
        console.log("Form data:", data);

        try {
            const modifiedData: any = { user: {} };


            if (data.user.name !== initialData?.user.name) {
                modifiedData.user.name = data.user.name;
            }
            if (data.user.address !== initialData?.user.address) {
                modifiedData.user.address = data.user.address;
            }
            if (data.user.phone !== initialData?.user.phone) {
                modifiedData.user.phone = data.user.phone;
            }
            if (data.user.email !== initialData?.user.email) {
                modifiedData.user.email = data.user.email;
            }
            if (data.user.birth_date !== initialData?.user.birth_date) {
                modifiedData.user.birth_date = data.user.birth_date;
            }
            if (data.gender !== initialData?.gender) {
                modifiedData.gender = data.gender;
            }
            if (data.height !== initialData?.height) {
                modifiedData.height = data.height;
            }
            if (data.weight !== initialData?.weight) {
                modifiedData.weight = data.weight;
            }
            if (data.allergies_and_observations !== initialData?.allergies_and_observations) {
                modifiedData.allergies_and_observations = data.allergies_and_observations;
            }
            if (data.cpf !== initialData?.cpf) {
                modifiedData.cpf = data.cpf;
            }

            if (Object.keys(modifiedData).length === 0) {
                alert("No changes detected.");
                return;
            }

            await updatePatientData(patientId, modifiedData);
            alert("Data updated Successfuly!");
            onSuccess();
            onCancel();
        } catch (error) {
            console.error("Erro ao atualizar os dados:", error);
            alert("Error while updating data.");
        }
    };

    return (
        <FormProvider {...methods}>
           <Controller
                name="user.name"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                    <NameInput
                        value={field.value}
                        label="Name"
                        onChange={field.onChange}
                        error={errors.user?.name?.message}
                    />
                )}
            />

            <InputContainer>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <SelectInput
                            label="Gender"
                            options={[
                                { value: 'F', label: 'Female' },
                                { value: 'M', label: 'Male' },
                                { value: 'NB', label: 'Non-Binary' }
                            ]}
                            selectedValue={field.value}
                            width={130}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    name="user.birth_date"
                    control={control}
                    render={({ field }) => (
                        <DateInput
                            label="Date of Birth"
                            value={field.value ? new Date(field.value) : new Date()}
                            width={126}
                            color={theme.colors.darkBlue}
                            onChange={(date) => field.onChange(date ? date.toISOString().split('T')[0] : '')}
                        />
                    )}
                />
            </InputContainer>

            <Controller
                name="user.email"
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Invalid email format'
                    }
                }}
                render={({ field }) => (
                    <EmailInput
                        label="Email"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.user?.email?.message}
                    />
                )}
            />

            <Controller
                name="cpf"
                control={control}
                rules={{
                    required: 'CPF is required',
                    pattern: {
                        value: /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/,
                        message: 'Invalid CPF format'
                    }
                }}
                render={({ field }) => (
                    <CpfInput
                        label="Cpf"
                        placeholder="000.000.000-00"
                        value={field.value}
                        onChangeText={field.onChange}
                        error={errors.cpf?.message}
                    />
                )}
            />

            <Controller
                name="user.phone"
                control={control}
                rules={{ required: 'Phone number is required' }}
                render={({ field }) => (
                    <PhoneNumberInput
                        label="Phone Number"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.user?.phone?.message}
                    />
                )}
            />

            <Controller
                name="user.address"
                control={control}
                rules={{ required: 'Address is required' }}
                render={({ field }) => (
                    <AddressInput
                        label="Address"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.user?.address?.message}
                    />
                )}
            />

            <View style={{ alignItems: "flex-start", width: "100%" }} >
                <Subtitle
                    text="Additional Information"
                    color={theme.colors.navy}
                    size={16}
                />
            </View>

            <InputContainer>
                <Controller
                    name="height"
                    control={control}
                    render={({ field }) => (
                        <IntegerInput
                            label="Height"
                            value={Math.floor(field.value || 0)}
                            width={140}

                            onChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    name="weight"
                    control={control}
                    render={({ field }) => (
                        <IntegerInput
                            label="Weight"
                            value={Math.floor(field.value || 0)}
                            width={140}
                            onChange={field.onChange}
                        />
                    )}
                />
            </InputContainer>

            <Controller
                name="allergies_and_observations"
                control={control}
                render={({ field }) => (
                    <TextArea
                        label="Allergies and observations"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
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
                    onPress={handleSubmit(onSubmit)}
                    width={148}
                    height={52}
                    disabled={isSubmitting}
                />
            </FormButtonContainer>

        </FormProvider>
    );
}

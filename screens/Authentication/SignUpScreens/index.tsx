import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "expo-router";
import { Container, FormButtonContainer, FormContainer, Header } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";
import Title from "@/components/Title";
import SignUpForm from "./signUpForm";

import { registerPatient } from "@/services/Patient/createPatientService";
import { PrimaryButton } from "@/components/PrimaryButton";
import CompleteSignUpForm from "./completeSignUpForm";

export default function AuthenticationScreen() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const methods = useForm<Patient>({
        defaultValues: {
            user: {
                name: '',
                email: '',
                phone: '',
                address: '',
                birth_date: '',
            },
            cpf: '',
            gender: 'M',
        },
    });

    async function onSubmit(data: Patient) {
        if (step === 2) {
            try {
                const birthDate = new Date(data.user.birth_date);
                const formattedBirthDate = !isNaN(birthDate.getTime())
                    ? birthDate.toISOString().split("T")[0]
                    : data.user.birth_date;

                const formattedData = {
                    ...data,
                    user: {
                        ...data.user,
                        birth_date: formattedBirthDate,
                        password: data.user.password,
                    },
                };

                const response = await registerPatient(formattedData);

                if (response.status === 201) {
                    router.push('/signIn');
                }
            } catch (error) {
                console.error("Erro no cadastro:", error);
            }
        }
    }

    return (
        <FormProvider {...methods}>
            <Container>
                <Header>
                    <Title text='Sign Up' color={theme.colors.navy} size={24} />
                </Header>

                <FormContainer>
                    {step === 1 && <SignUpForm />}
                    {step === 2 && <CompleteSignUpForm />}
                </FormContainer>

                <FormButtonContainer>
                    {step === 1 && (
                        <PrimaryButton
                            text="Next"
                            bgColor={theme.colors.navy}
                            width={316}
                            height={52}
                            onPress={() => setStep(2)}
                        />
                    )}

                    {step === 2 && (
                        <PrimaryButton
                            text="Complete Sign Up"
                            bgColor={theme.colors.navy}
                            width={316}
                            height={52}
                            onPress={methods.handleSubmit(onSubmit)}
                        />
                    )}
                </FormButtonContainer>
            </Container>
        </FormProvider>
    );
}

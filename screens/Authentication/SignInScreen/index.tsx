import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';
import { Container, FormButtonContainer, FormContainer, Header } from '@/global/styles/globalStyles';
import { theme } from '@/global/styles/theme';
import Title from '@/components/Title';
import { PrimaryButton } from '@/components/PrimaryButton';
import SignInForm from './signInForm';
import { signInUserService } from '@/services/Authentication/signInService';


export default function SignInScreen() {
    const methods = useForm<UserCredentials>();
    const router = useRouter();

    async function onSubmit(data: UserCredentials) {
        try {
            const response = await signInUserService(data);
            if (response.status === 200) {
                router.push('/(tabs)');
            } else {
                console.error('Falha no login:', response);
               
            }
        } catch (error) {
            console.error('Erro no login:', error);
        }
    }

    return (
        <FormProvider {...methods}>
            <Container>
                <Header>
                    <Title text="Sign In" color={theme.colors.navy} size={24} />
                </Header>

                <FormContainer>
                    <SignInForm />
                </FormContainer>

                <FormButtonContainer>
                    <PrimaryButton
                        text="Sign In"
                        bgColor={theme.colors.navy}
                        width={316}
                        height={52}
                        onPress={methods.handleSubmit(onSubmit)}
                    />
                </FormButtonContainer>
            </Container>
        </FormProvider>
    );
}

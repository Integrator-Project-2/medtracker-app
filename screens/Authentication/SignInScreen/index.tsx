import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';
import { Container, FormButtonContainer, FormContainer, Header, ErrorText } from '@/global/styles/globalStyles';
import { theme } from '@/global/styles/theme';
import Title from '@/components/Title';
import { PrimaryButton } from '@/components/PrimaryButton';
import SignInForm from './signInForm';
import { signInUserService } from '@/services/Authentication/signInService';

export default function SignInScreen() {
    const methods = useForm<UserCredentials>();
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function onSubmit(data: UserCredentials) {
        try {
            const response = await signInUserService(data);
            if (response.status === 200) {
                router.push('/(tabs)');
            } else if (response.status === 400) {
                setErrorMessage('User does not exist.');
            } else if (response.status === 401) {
                setErrorMessage('Email or password may be incorrect.'); 
            } else {
                console.error('Login failed:', response);
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred while logging in. Please try again.');
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
                    {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
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

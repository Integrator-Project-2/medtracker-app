import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';
import { Container, FormButtonContainer, FormContainer, Header, ErrorText } from '@/global/styles/globalStyles';
import { theme } from '@/global/styles/theme';
import Title from '@/components/Title';
import { PrimaryButton } from '@/components/PrimaryButton';
import SignInForm from './signInForm';
import { signInUserService } from '@/services/Authentication/signInService';
import { Image } from 'react-native';


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

                    <PrimaryButton
                        text="Sign in with Google"
                        bgColor="transparent"
                        width={316}
                        height={52}
                        textColor="#4D80F9"
                        icon={
                            <Image source={require('@/assets/images/devicon_google.png')} style={{ marginRight: 10 }} />
                        }
                        border="1px solid #4D80F9"
                        onPress={() => console.log('Button Pressed')}
                    />

                </FormButtonContainer>
            </Container>
        </FormProvider>
    );
}

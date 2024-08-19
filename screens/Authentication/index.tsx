import { PrimaryButton } from "@/components/PrimaryButton";
import { theme } from "@/global/styles/theme";
import { useRouter, useLocalSearchParams } from "expo-router";
import Title from "@/components/Title";
import { Image } from 'react-native';
import { Container, FormButtonContainer, FormContainer, Header } from "@/global/styles/globalStyles";
import Divider from "@/components/Divider";
import SignUpForm from "./signUpForm";
import CompleteSignUpForm from "./completeSignUpForm";
import SignInForm from "./signInForm";
import { useState, useEffect } from "react";

export default function AuthenticationScreen() {
    const params = useLocalSearchParams<{ step?: string }>();
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (params.step) {
            setStep(parseInt(params.step, 10));
        }
    }, [params.step]);

    const router = useRouter();

    function handleSignUpComplete() {
        setStep(3);
    }

    function handleSignIn() {
        router.push('/(tabs)');
    }

    return (
        <Container>
            <Header>
                <Title text={step === 1 || step === 2 ? 'Sign Up' : 'Sign In'} color={theme.colors.navy} size={24} />
            </Header>

            <FormContainer>
                {step === 1 && <SignUpForm key='signUpForm'/>}
                {step === 2 && <CompleteSignUpForm key='completeSignUpForm' />}
                {step === 3 && <SignInForm  key='signIpForm' />}
            </FormContainer>

            <FormButtonContainer>
                {step === 1 && (
                    <PrimaryButton
                        text="Sign Up"
                        bgColor={theme.colors.navy}
                        width={316}
                        height={52}
                        onPress={() => setStep(2)}
                    />
                )}

                {step === 2 && (
                    <PrimaryButton
                        text="Sign Up"
                        bgColor={theme.colors.navy}
                        width={316}
                        height={52}
                        onPress={handleSignUpComplete}
                    />
                )}

                {step === 3 && (
                    <PrimaryButton
                        text="Sign In"
                        bgColor={theme.colors.navy}
                        width={316}
                        height={52}
                        onPress={handleSignIn}
                    />
                )}

                {(step === 1 || step === 3) && <Divider />}

                {step === 1 && (
                    <PrimaryButton
                        text="Sign up with Google"
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
                )}

                {step === 3 && (
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
                )}

            </FormButtonContainer>
        </Container>
    );
}

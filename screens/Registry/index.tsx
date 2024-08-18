import { EmailInput } from "@/components/EmailInput";
import { NameInput } from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";
import { PrimaryButton } from "@/components/PrimaryButton";
import { theme } from "@/global/styles/theme";
import { useRouter } from "expo-router";
import Title from "@/components/Title";
import { Image } from 'react-native';
import { Container, Header } from "@/global/styles/globalStyles";
import { FormButtonContainer, FormContainer } from "./styles";
import Divider from "@/components/Divider";


export default function RegistryScreen() {
    const router = useRouter();

    function handlePress() {
        router.push('/(tabs)');
    }

    return (
        <Container>
            <Header>
                <Title text='Sign Up' color={theme.colors.navy} size={24}/>
            </Header>

            <FormContainer>
                <NameInput label='Name' placeholder='John Doe' />
                <EmailInput label='Email' placeholder="johndoe@email.com" />
                <PasswordInput label='Password' placeholder='********' />
            </FormContainer>

            <FormButtonContainer>
                <PrimaryButton
                    text="Sign Up"
                    bgColor={theme.colors.navy}
                    width={316}
                    height={52}
                    onPress={handlePress}
                />
                
                <Divider />

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
            </FormButtonContainer>
        </Container>
    )

}
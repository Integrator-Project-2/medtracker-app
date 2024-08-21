import MenuButton from "@/components/MenuButton";
import { Appbar } from "react-native-paper";
import { ScrollView } from "react-native";
import { ProfileContainer } from "@/components/ProfileInfoForm/styles";
import { ProfileInfoContainer } from "./styles";
import AvatarComponent from "@/components/Avatar";
import { ProfileInfoText } from "@/components/ProfileInfoText";
import { ProfileInfoForm } from "@/components/ProfileInfoForm";
import { useState } from "react";


export function ProfileScreen() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const menuOptions = [
        {
            label: 'Option 1',
            onPress: () => {
                setIsFormVisible(true); 
            }
        },
        {
            label: 'Option 2',
            onPress: () => {
                setIsFormVisible(false);
            }
        }
    ];

    return (
        <ProfileContainer>
            <Appbar.Header mode="center-aligned">
                <Appbar.BackAction onPress={() => setIsFormVisible(false)} />
                <Appbar.Content title="Profile" />
                <MenuButton 
                    options={menuOptions}
                    iconColor="black"
                />
            </Appbar.Header>

            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <ProfileInfoContainer>
                    <AvatarComponent
                        photoUrl={'assets/images/profile-picture.png'}
                        name="Michael Scott"
                        size={70}
                    />

                    {isFormVisible ? (
                        <ProfileInfoForm /> // Renderiza o formulário se isFormVisible for true
                    ) : (
                        <ProfileInfoText /> // Caso contrário, renderiza o texto padrão
                    )}

                </ProfileInfoContainer>
            </ScrollView>
        </ProfileContainer>
    )
}
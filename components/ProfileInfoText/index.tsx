import { View } from "react-native";
import { ProfileInfo } from "../ProfileInfo";
import { InfoRow, TextInfoContainer } from "./styles";
import Subtitle from "../Subtitle";
import { theme } from "@/global/styles/theme";

export function ProfileInfoText() {
    return (
        <>
            <TextInfoContainer>
                <ProfileInfo 
                    label="Name"
                    value="Pamela Halpert"
                />

                <InfoRow>
                    <ProfileInfo 
                        label="Gender"
                        value="Female"
                    />

                    <ProfileInfo 
                        label="Date of birth"
                        value="09-20-2003"
                    />
                </InfoRow>

                <ProfileInfo 
                    label="Email"
                    value="pamelahalpert@email.com"
                />

                <ProfileInfo 
                    label="Phone Number"
                    value="(00) 0000-0000"
                />

                <ProfileInfo 
                    label="Address"
                    value="Street 1, New avenue, City"
                />

                <View style={{ alignItems: "flex-start", width: "100%" }} >
                    <Subtitle 
                        text="Additional Information"
                        color={theme.colors.navy}
                        size={16}
                    />
                </View>

                <InfoRow>
                    <ProfileInfo 
                        label="Height"
                        value="165cm"
                    />

                    <ProfileInfo 
                        label="Weight"
                        value="60kg"
                    />
                </InfoRow>

                <ProfileInfo 
                    label="Allergies and observations"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
                />
            </TextInfoContainer>
        </>
    )
}
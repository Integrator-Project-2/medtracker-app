import { View } from "react-native";
import { ProfileInfo } from "../ProfileInfo";
import { InfoRow, TextInfoContainer } from "./styles";
import Subtitle from "../Subtitle";
import { theme } from "@/global/styles/theme";

interface ProfileInfoTextProps {
    data: Patient | null;
}

const genderMap: Record<string, string> = {
    M: 'Male',
    F: 'Female',
    NB: 'Non-Binary'
};

export function ProfileInfoText({ data }: ProfileInfoTextProps) {
    if (!data) {
        return null;
    }

    return (
        <TextInfoContainer>
            <ProfileInfo
                label="Name"
                value={data.user.name || "N/A"}
            />

            <InfoRow>
                <ProfileInfo
                    label="Gender"
                    value={genderMap[data.gender] || "N/A"}
                />

                <ProfileInfo
                    label="Date of birth"
                    value={data.user.birth_date ? new Date(data.user.birth_date + 'T00:00:00').toLocaleDateString() : "N/A"}
                />

            </InfoRow>

            <ProfileInfo 
                label="Email"
                value={data.user.email || "N/A"}
            />

            <ProfileInfo
                label="Phone Number"
                value={data.user.phone || "N/A"}
            />

            <ProfileInfo
                label="Address"
                value={data.user.address || "N/A"}
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
                    value={data.height ? `${data.height} cm` : "N/A"}
                />

                <ProfileInfo
                    label="Weight"
                    value={data.weight ? `${data.weight} kg` : "N/A"}
                />
            </InfoRow>

            <ProfileInfo
                label="Allergies and observations"
                value={data.allergies_and_observations || "N/A"}
            />
        </TextInfoContainer>
    );
}

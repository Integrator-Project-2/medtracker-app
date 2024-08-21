import { theme } from "@/global/styles/theme";
import { LabelComponent } from "../Label";
import { InfoContainer, TextInfo } from "./styles";

interface ProfileInfoProps {
    label: string;
    value: string;
}

export function ProfileInfo({ label, value }: ProfileInfoProps){
    return (
        <InfoContainer>
            <LabelComponent 
                text={label}
                fontSize={13}
                color={theme.colors.lightPurple}
            />

            <TextInfo>{value}</TextInfo>
        </InfoContainer>
    )
}
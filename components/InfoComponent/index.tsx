import { LabelComponent } from "../Label";
import { Container, StyledText } from "./styles";

interface InfoComponentProps {
    label: string;
    data: string;
}

export function InfoComponent({ label, data }: InfoComponentProps) {
    return (
        <Container>
            <LabelComponent text={label}/>
            <StyledText>{data}</StyledText>
        </Container>
    )
}
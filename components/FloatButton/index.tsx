import { useRouter } from "expo-router";
import { StyledFloatingButton, Container } from "./style";

export default function FloatingButton(){
    const router = useRouter();

    function handlePress() {
        router.push('/selectMedication')
    }
    return (
        <Container> 
            <StyledFloatingButton
                icon="plus"
                color="white"
                onPress={handlePress}/>
        </Container>
    )
}
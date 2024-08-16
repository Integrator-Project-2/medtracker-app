import { StyledFloatingButton, Container } from "./style";

export default function FloatingButton(){
    return (
        <Container>  
            <StyledFloatingButton
                icon="plus"
                color="white"
                onPress={() => {

                    console.log('Botão flutuante pressionado');
                }}/>
        </Container>
    )
}
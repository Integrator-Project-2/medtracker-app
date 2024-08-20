import { FilterIcon } from "@/assets/images/svg/FilterIcon";
import CardComponent from "@/components/Card";
import Title from "@/components/Title";
import { theme } from "@/global/styles/theme";
import { PaperProvider } from "react-native-paper";
import { FilterButton, FilterButtonText } from "./styles";
import { Container, Header, ListContainer } from "@/global/styles/globalStyles";

// esse array será removido quando for implementada a integração com o backend
const cardData = [
    {
        title: "Dermatologist",
        subtitle: "Dr. John Doe",
        additionalInfoPrimary: "Mon, 23 Nov",
        iconName: "prescription",
        bgColor: theme.colors.cardLightColor,
        width: 316,
    },
    {
        title: "Cardiologist",
        subtitle: "Dr. Jane Smith",
        additionalInfoPrimary: "Tue, 24 Nov",
        iconName: "prescription",
        bgColor: theme.colors.cardLightColor,
        width: 316,
    },
    {
        title: "Pediatrician",
        subtitle: "Dr. Emily Davis",
        additionalInfoPrimary: "Wed, 25 Nov",
        iconName: "prescription",
        bgColor: theme.colors.cardLightColor,
        width: 316,
    },
];



export function Prescriptions() {
    return (
        <PaperProvider theme={theme}>
            <Container>
                <Header>
                    <Title 
                        text="Prescriptions"
                    />
                    <FilterButton>
                        <FilterIcon />
                        <FilterButtonText>
                            Filters
                        </FilterButtonText>
                    </FilterButton>
                </Header>

                <ListContainer>
                    {cardData.map((card, index) => (
                        <CardComponent
                            key={index}
                            title={card.title}
                            subtitle={card.subtitle}
                            subTitlefontSize={11}
                            titlefontSize={13}
                            additionalInfoPrimaryfontSize={11}
                            additionalInfoPrimary={card.additionalInfoPrimary}
                            iconName={card.iconName}
                            bgColor={card.bgColor}
                            downloadButton
                            width={card.width}
                        />
                    ))}
                </ListContainer>
            </Container>

                

        </PaperProvider>
    )
}
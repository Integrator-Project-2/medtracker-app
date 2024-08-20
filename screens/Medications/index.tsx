import CardComponent from "@/components/Card";
import Search from "@/components/Search";
import Title from "@/components/Title";
import { Container, Header, ListContainer } from "@/global/styles/globalStyles";
import { theme } from "@/global/styles/theme";

const cardData = [
    {
        title: "Aspirine",
        subtitle: "Tablet",
        additionalInfoPrimary: "Amount",
        additionalInfoSecondary: "10",
        iconName: "tablet",
        height: 120,
        border: true,
        additionalInfoSecondaryColor: theme.colors.lightBlue,
        additionalInfoPrimaryColor: theme.colors.lightPurple,
        menuOptions: [
            { label: 'Option 1', onPress: () => console.log('Option 1 pressed') },
            { label: 'Option 2', onPress: () => console.log('Option 2 pressed') }
        ],
    },
    {
        title: "Amoxicilina",
        subtitle: "1 capsule 50 mg",
         height: 120,
        iconName: "pill",
        border: true,
        menuOptions: [
            { label: 'Option 1', onPress: () => console.log('Option 1 pressed') },
            { label: 'Option 2', onPress: () => console.log('Option 2 pressed') }
        ],
    },
    {
        title: "Amoxicilina",
        subtitle: "1 capsule 50 mg",
        height: 120,
        iconName: "pill",
        border: true,
        menuOptions: [
            { label: 'Option 1', onPress: () => console.log('Option 1 pressed') },
            { label: 'Option 2', onPress: () => console.log('Option 2 pressed') }
        ],
    },
];

export function MedicationsScreen() {
    return (
        <Container>
            <Header>
                <Title 
                    text="Medications"
                />
            </Header>

            <Search />
            
            <ListContainer>
                {cardData.map((card, index) => (
                    <CardComponent
                        key={index} // Use um ID único, se disponível
                        title={card.title}
                        subtitle={card.subtitle}
                        additionalInfoPrimary={card.additionalInfoPrimary}
                        additionalInfoSecondary={card.additionalInfoSecondary}
                        iconName={card.iconName}
                        height={card.height}
                        border={card.border}
                        additionalInfoSecondaryColor={card.additionalInfoSecondaryColor}
                        additionalInfoPrimaryColor={card.additionalInfoPrimaryColor}
                        menuOptions={card.menuOptions}
                    />
                ))}
            </ListContainer>

        </Container>
    )
}
import { FilterIcon } from "@/assets/images/svg/FilterIcon";
import CardComponent from "@/components/Card";
import Title from "@/components/Title";
import { theme } from "@/global/styles/theme";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { FilterButton, FilterButtonText } from "./styles";

// esse array será removido quando for implementada a integração com o backend
const cardData = [
    {
        title: "Dermatologist",
        subtitle: "Dr. John Doe",
        additionalInfoPrimary: "Mon, 23 Nov",
        iconName: "prescription",
        bgColor: theme.colors.cardLightColor,
        width: 350,
    },
    {
        title: "Cardiologist",
        subtitle: "Dr. Jane Smith",
        additionalInfoPrimary: "Tue, 24 Nov",
        iconName: "prescription",
        bgColor: theme.colors.cardLightColor,
        width: 350,
    },
    {
        title: "Pediatrician",
        subtitle: "Dr. Emily Davis",
        additionalInfoPrimary: "Wed, 25 Nov",
        iconName: "prescription",
        bgColor: theme.colors.cardLightColor,
        width: 350,
    },
];



export function Prescriptions() {
    return (
        <PaperProvider theme={theme}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white"
                }}
            >

                <Title 
                    text="Prescriptions"
                />
                <FilterButton>
                    <FilterIcon />
                    <FilterButtonText>
                        Filters
                    </FilterButtonText>
                </FilterButton>

                {cardData.map((card, index) => (
                    <CardComponent
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        additionalInfoPrimary={card.additionalInfoPrimary}
                        iconName={card.iconName}
                        bgColor={card.bgColor}
                        downloadButton
                        width={card.width}
                    />
                ))}

            </View>
        </PaperProvider>
    )
}
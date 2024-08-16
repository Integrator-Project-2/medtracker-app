import CardComponent from "@/components/Card";
import { theme } from "@/global/styles/theme";
import { View } from "react-native";
import { IconButton, PaperProvider } from "react-native-paper";


export default function Cards() {
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
        <CardComponent
          title="Aspirine"
          subtitle="Tablet"
          additionalInfoPrimary="Amount"
          additionalInfoSecondary="10"
          iconName="tablet"
          height={120}
          border
          additionalInfoSecondaryColor={theme.colors.lightBlue}
          additionalInfoPrimaryColor={theme.colors.lightPurple}
          menuOptions={[
            { label: 'Option 1', onPress: () => console.log('Option 1 pressed') },
            { label: 'Option 2', onPress: () => console.log('Option 2 pressed') }
          ]}
        />

        <CardComponent
          title="Amoxicilina"
          subtitle="1 capsule 50 mg"
          additionalInfoPrimary="10:00"
          iconName="pill"
          border
          menuOptions={[
            { label: 'Option 1', onPress: () => console.log('Option 1 pressed') },
            { label: 'Option 2', onPress: () => console.log('Option 2 pressed') }
          ]}
        />

        <CardComponent
          title="Dipirona"
          subtitle="1 capsule 50 mg"
          additionalInfoPrimary="12:30"
          iconName="injection"
          bgColor={theme.colors.navy}
          titleColor={theme.colors.white}
          subtitleColor={theme.colors.white}
          additionalInfoPrimaryColor={theme.colors.white}
        />
        
        <CardComponent
          title="Dermatologist"
          subtitle="Dr. John Doe"
          additionalInfoPrimary="Mon, 23 Nov"
          iconName="prescription"
          bgColor={theme.colors.cardLightColor}
          dowloadButton
          width={350}
        />

      </View>
    </PaperProvider>
  );
}

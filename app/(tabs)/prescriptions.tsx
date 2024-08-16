import CardComponent from "@/components/Card";
import { theme } from "@/global/styles/theme";
import { View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IconButton, PaperProvider } from "react-native-paper";

export default function Cards() {
  return (
    <PaperProvider theme={theme}>

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
      }}
      >  
        <CardComponent
        title="Aspirine"
        subtitle="Tablet"
        icon={<MaterialCommunityIcons
              name="pill"
              size={24}
              color={theme.colors.lightBlue}
        />} 
          additionalInfoPrimary="Amount"
          additionalInfoSecondary="10"
        height={120}
        border={true}
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
        icon={<MaterialCommunityIcons
          name="pill"
          size={24}
          color={theme.colors.lightBlue}
          />} 
          additionalInfoPrimary="10:00"
          border={true}
        menuOptions={[
          { label: 'Option 1', onPress: () => console.log('Option 1 pressed') },
          { label: 'Option 2', onPress: () => console.log('Option 2 pressed') }
        ]}
      />
        <CardComponent
        title="Dermatologist"
        subtitle="Dr. John Doe"
        icon={<FontAwesome5
          name="notes-medical"
          size={24}
          color={theme.colors.lightBlue}
    />} 
        additionalInfoPrimary="Mon, 23 Nov"
        bgColor={theme.colors.cardLightColor}
        button={<IconButton icon="download" iconColor={theme.colors.lightBlue} onPress={() => {}} />
      }
      />

        <CardComponent
        title="Dipirona"
        subtitle="1 capsule 50 mg"
        icon={<MaterialCommunityIcons
          name="pill"
          size={24}
          color="white" />} 
        additionalInfoPrimary="12:30"
        bgColor={theme.colors.navy}
        titleColor={theme.colors.white}
        subtitleColor={theme.colors.white}
        additionalInfoPrimaryColor={theme.colors.white}
        />
  
    </View>
    </PaperProvider>
  );
}

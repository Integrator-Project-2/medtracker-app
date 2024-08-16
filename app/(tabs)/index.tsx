import { CardButton } from "@/components/CardButton";
import { View } from "react-native";

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 10
            }}
        >
            <CardButton
                title="My prescpriptions"
                description="Check your medical prescriptions"
                iconName="notes-medical"
                iconLib="font-awesome"
            />

            <CardButton
                title="My medications"
                description="Check all your medications"
                iconName="pills"
                iconLib="fontisto"
            />
        </View>
    )
}
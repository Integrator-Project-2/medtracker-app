import { InputRadio } from "@/components/InputRadio";
import IntegerInput from "@/components/IntegerInput";
import { useState } from "react";
import { View } from "react-native";

export default function CreateReminder() {
    const [checkedValue, setCheckedValue] = useState('takeMyMedications');

    const handlePress = (value: string) => {
        setCheckedValue(value);
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 10
            }}>
            <InputRadio
                text="Take my medications"
                selected={checkedValue === 'takeMyMedications'}
                value="takeMyMedications"
                onPress={handlePress}
            />

            <InputRadio
                text="Manage medication stock"
                selected={checkedValue === 'manageMedicationStock'}
                value="manageMedicationStock"
                onPress={handlePress}
            />
            <IntegerInput label="Amount" width={160}/>
            <IntegerInput label="Times a day" width={316}/>

        </View>
    )
}
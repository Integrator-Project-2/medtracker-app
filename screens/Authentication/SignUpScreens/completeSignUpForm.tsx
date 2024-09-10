import { useFormContext, Controller } from "react-hook-form";
import { AddressInput } from "@/components/AddressInput";
import CpfInput from "@/components/CpfInput";
import DateInput from "@/components/DateInput";
import { PhoneNumberInput } from "@/components/PhoneNumber";
import { SelectInput } from "@/components/SelectInput";

export default function CompleteSignUpForm() {
    const { control } = useFormContext();

    return (
        <>
            <Controller
                name="user.birth_date"
                
                control={control}
                render={({ field }) => (
                    <DateInput
                        label="Date of birth"
                        width={316}
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                    <SelectInput
                        label="Gender"
                        options={[
                            { value: 'F', label: 'Female' },
                            { value: 'M', label: 'Male' },
                            { value: 'NB', label: 'Non-Binary' }
                        ]}
                        selectedValue={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <Controller
                name="user.address"
                control={control}
                render={({ field }) => (
                    <AddressInput
                        label="Address"
                        placeholder="Av. Independencia, Centro"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                    <CpfInput
                        label="Cpf"
                        placeholder="000.000.000-00"
                        value={field.value}
                        onChangeText={field.onChange}
                    />
                )}
            />
            <Controller
                name="user.phone"
                control={control}
                render={({ field }) => (
                    <PhoneNumberInput
                        label="Phone Number"
                        placeholder="(00) 0000-0000"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
        </>
    );
}

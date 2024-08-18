import { AddressInput } from "@/components/AddressInput";
import CpfInput from "@/components/CpfInput";
import DateInput from "@/components/DateInput";
import { PhoneNumberInput } from "@/components/PhoneNumber";
import { SelectInput } from "@/components/SelectInput";

export default function CompleteSignUpForm() {
    return (
        <>
            <DateInput label='Date of birth' width={316} />
            <SelectInput
                label="Gender"
                options={['Female', 'Male', 'Non-Binary']} />
            <AddressInput label='Address' placeholder="Av. Independencia, Centro"/>
            <CpfInput label='Cpf' placeholder="000.000.000-" />
            <PhoneNumberInput label='Phone Number' placeholder='(00) 0000-0000' />
        </>
    )
}
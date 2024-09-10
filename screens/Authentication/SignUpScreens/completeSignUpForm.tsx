import { useFormContext, Controller } from "react-hook-form";
import { AddressInput } from "@/components/AddressInput";
import CpfInput from "@/components/CpfInput";
import DateInput from "@/components/DateInput";
import { PhoneNumberInput } from "@/components/PhoneNumber";
import { SelectInput } from "@/components/SelectInput";

interface FormErrors {
    user?: {
        birth_date?: {
            message?: string;
        };
        address?: {
            message?: string;
        };
        phone?: {
            message?: string;
        };
    };
    cpf?: {
        message?: string;
    };
    gender?: {
        message?: string;
    };
}

export default function CompleteSignUpForm() {
    const { control, formState: { errors } } = useFormContext<Patient>();

    return (
        <>
            <Controller
                name="user.birth_date"
                control={control}
                rules={{
                    required: 'Date of birth is required',
                    validate: value => {
                        const date = new Date(value);
                        return !isNaN(date.getTime()) || 'Invalid date format';
                    }
                }}
                render={({ field }) => {
                    const dateValue = field.value ? new Date(field.value) : new Date();

                    return (
                        <DateInput
                            label="Date of birth"
                            width={316}
                            value={dateValue} 
                            onChange={(date) => {
                                field.onChange(date ? date.toISOString().split('T')[0] : '');
                            }}
                            error={errors.user?.birth_date?.message}
                        />
                    );
                }}
            />
            <Controller
                name="gender"
                control={control}
                rules={{
                    required: 'Gender is required'
                }}
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
                        error={errors.gender?.message}  
                    />
                )}
            />
            <Controller
                name="user.address"
                control={control}
                rules={{
                    required: 'Address is required'
                }}
                render={({ field }) => (
                    <AddressInput
                        label="Address"
                        placeholder="Av. Independencia, Centro"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.user?.address?.message} 
                    />
                )}
            />
            <Controller
                name="cpf"
                control={control}
                rules={{
                    required: 'CPF is required',
                    pattern: {
                        value: /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/,
                        message: 'Invalid CPF format'
                    }
                }}
                render={({ field }) => (
                    <CpfInput
                        label="Cpf"
                        placeholder="000.000.000-00"
                        value={field.value}
                        onChangeText={field.onChange}
                        error={errors.cpf?.message} 
                    />
                )}
            />
            <Controller
                name="user.phone"
                control={control}
                rules={{
                    required: 'Phone number is required',
                }}
                render={({ field }) => (
                    <PhoneNumberInput
                        label="Phone Number"
                        placeholder="(00) 0000-0000"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.user?.phone?.message}  
                    />
                )}
            />
        </>
    );
}

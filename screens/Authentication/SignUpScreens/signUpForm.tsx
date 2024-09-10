import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { EmailInput } from "@/components/EmailInput";
import { NameInput } from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";

export default function SignUpForm() {
    const { control } = useFormContext();

    return (
        <>
            <Controller
                name="user.name"
                control={control}
                render={({ field }) => (
                    <NameInput
                        label='Name'
                        placeholder="John Doe"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <Controller
                name="user.email"
                control={control}
                render={({ field }) => (
                    <EmailInput
                        label='Email'
                        placeholder="johndoe@email.com"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <Controller
                name="user.password"
                control={control}
                render={({ field }) => (
                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        value={field.value}
                        onChangeText={field.onChange}
                    />
                )}
            />

        </>
    );
}

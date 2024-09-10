import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { EmailInput } from "@/components/EmailInput";
import { NameInput } from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";

export default function SignUpForm() {
    const { control, formState: { errors } } = useFormContext<Patient>();

    return (
        <>
            <Controller
                name="user.name"
                control={control}
                rules={{
                    required: 'Name is required',
                    minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters long'
                    }
                }}
                render={({ field }) => (
                    <NameInput
                        label='Name'
                        placeholder="John Doe"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.user?.name?.message}
                    />
                )}
            />
            <Controller
                name="user.email"
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address'
                    }
                }}
                render={({ field }) => (
                    <EmailInput
                        label='Email'
                        placeholder="johndoe@email.com"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.user?.email?.message}
                    />
                )}
            />
            <Controller
                name="user.password"
                control={control}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                    }
                }}
                render={({ field }) => (
                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        value={field.value}
                        onChangeText={field.onChange}
                        error={errors.user?.password?.message}
                    />
                )}
            />
        </>
    );
}

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { EmailInput } from '@/components/EmailInput';
import PasswordInput from '@/components/PasswordInput';

interface SignInFormValues {
    email: string;
    password: string;
}

export default function SignInForm() {
    const { control, formState: { errors } } = useFormContext<SignInFormValues>();

    return (
        <>
            <Controller
                name="email"
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
                        error={errors.email?.message} 
                    />
                )}
            />
            <Controller
                name="password"
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
                        label='Password'
                        placeholder='********'
                        value={field.value}
                        onChangeText={field.onChange}
                        error={errors.password?.message}
                    />
                )}
            />
        </>
    );
}

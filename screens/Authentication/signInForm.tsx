import { EmailInput } from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";

export default function SignInForm() {
    return (
        <>
            <EmailInput label='Email' placeholder="johndoe@email.com" />
            <PasswordInput label='Password' placeholder='********' />
        </>
    )
}
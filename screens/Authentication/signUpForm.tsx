import { EmailInput } from "@/components/EmailInput";
import { NameInput } from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";

export default function SignUpForm() {
    return (
        <>
            <NameInput label='Name' placeholder='John Doe' />
            <EmailInput label='Email' placeholder="johndoe@email.com" />
            <PasswordInput label='Password' placeholder='********' />
        </>
    )
}
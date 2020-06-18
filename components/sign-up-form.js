import Stack from './stack'
import FormButton from './form-button'
import { signUp } from '../firebase/auth'
import SocialSignInButton from './social-sign-in-button'
import TextBody from './text-body'
import { NameInput } from '../redux/containers/name-input'
import { EmailInput } from '../redux/containers/email-input'
import { PasswordInput } from '../redux/containers/pass-input'
import NavItem from './nav-item'

const handleSubmit = async (name, email, pass, setSubmitting) => {
  setSubmitting(true)
  const response = await signUp(name, email, pass)
  console.log(response)
  setSubmitting(false)
}

const SignUpForm = ({
  name,
  email,
  pass,
  isSubmitting,
  setSubmitting,
  children
}) => {
  return (
    <div className="p-4 flex flex-col justify-center mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <Stack>
        <SocialSignInButton platform="google" />
        <SocialSignInButton platform="facebook" />
        <TextBody className="mx-auto">OR</TextBody>
        <NameInput
          ph="Your Name"
          className="border py-2 pl-2 focus:border-blue-500"
        />
        <EmailInput
          ph="E-mail address"
          className="border py-2 pl-2 focus:border-blue-500"
        />
        <PasswordInput
          password
          ph="Password"
          className="border py-2 pl-2 focus:border-blue-500"
        />
        <Stack row gap={3} className="justify-center">
          <TextBody>Have an account?</TextBody>
          <NavItem className="font-bold hover:underline" href="/sign-in">
            Sign In
          </NavItem>
        </Stack>
        <FormButton
          isLoading={isSubmitting}
          onClick={() => handleSubmit(name, email, pass, setSubmitting)}
        >
          Sign Up
        </FormButton>
      </Stack>
    </div>
  )
}

export default SignUpForm

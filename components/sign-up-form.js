import FormButton from './form-button'
import { signUp } from '../firebase/auth'
import { Formik, Form, ErrorMessage } from 'formik'
import Stack from './stack'
import Input from './input'
import TextBody from './text-body'
import NavItem from './nav-item'
import SocialSignInButton from './social-sign-in-button'

const SignUpForm = ({ setEmailVerificationSent }) => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validate={(values) => {
      const errors = {}
      if (!values.name) {
        errors.name = 'Required'
      } else if (!values.email) {
        errors.email = 'Required'
      } else if (!values.password) {
        errors.password = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }
      return errors
    }}
    onSubmit={async (values, { setSubmitting }) => {
      await signUp(
        values.name,
        values.email,
        values.password,
        setEmailVerificationSent
      )
      setSubmitting(false)
    }}
  >
    {({ errors, isSubmitting }) => (
      <Form>
        <Stack>
          <SocialSignInButton platform="google" />
          <SocialSignInButton platform="facebook" />
          <TextBody className="mx-auto">OR</TextBody>
          <Input
            className={`border-2 py-2 pl-2 focus:border-blue-500 ${
              errors.name && 'border-red-500'
            }`}
            ph="Your Name"
            name="name"
            type="name"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 font-bold"
          />
          <Input
            className={`border-2 py-2 pl-2 focus:border-blue-500 ${
              errors.email && 'border-red-500'
            }`}
            ph="E-mail Address"
            name="email"
            type="email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 font-bold"
          />
          <Input
            className={`border-2 py-2 pl-2 focus:border-blue-500 ${
              errors.password && 'border-red-500'
            }`}
            ph="Password"
            name="password"
            type="password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 font-bold"
          />
          <FormButton isLoading={isSubmitting}>Sign Up</FormButton>
          <Stack row gap={3} className="justify-center">
            <TextBody>Have an account?</TextBody>
            <NavItem className="font-bold" href="/sign-in">
              Sign In
            </NavItem>
          </Stack>
        </Stack>
      </Form>
    )}
  </Formik>
)

export default SignUpForm

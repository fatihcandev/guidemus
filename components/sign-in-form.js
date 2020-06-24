import FormButton from './form-button'
import { signIn, signUp } from '../firebase/auth'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Stack from './stack'
import TextBody from './text-body'
import NavItem from './nav-item'
import SocialSignInButton from './social-sign-in-button'
import Alert from './alert'
import { useState } from 'react'

const SignInForm = () => {
  const [error, setError] = useState(null)

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
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
        const response = await signIn(values.email, values.password)
        response && setError(response)
        setSubmitting(false)
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <Stack>
            <SocialSignInButton platform="google" />
            <SocialSignInButton platform="facebook" />
            <TextBody className="mx-auto">OR</TextBody>
            <Field
              className={`rounded-md bg-gray-100 focus:outline-none focus:bg-white py-3 border-2 py-2 pl-2 
            focus:border-blue-500 ${errors.email && 'border-red-500'}`}
              placeholder="E-mail Address"
              name="email"
              type="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 font-bold"
            />
            <Field
              className={`rounded-md bg-gray-100 focus:outline-none focus:bg-white py-3 border-2 py-2 pl-2 
            focus:border-blue-500 ${errors.password && 'border-red-500'}`}
              placeholder="Password"
              name="password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 font-bold"
            />
            <FormButton isLoading={isSubmitting}>Sign In</FormButton>
            <Stack row gap={3} className="justify-center">
              <TextBody>Don't have an account?</TextBody>
              <NavItem className="font-bold" href="/sign-up">
                Sign Up
              </NavItem>
            </Stack>
          </Stack>
          {error && <Alert type="error" message={error} />}
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm

import Stack from './stack'
import FormButton from './form-button'
import TextBody from '../components/text-body'
import { signUp } from '../firebase/auth'
import { useState } from 'react'

const handleSubmit = async (email, pass, setSubmitting) => {
  setSubmitting(true)
  const response = await signUp(email, pass)
  alert(response)
  setSubmitting(false)
}

const Form = ({ email, pass, children }) => {
  const [isSubmitting, setSubmitting] = useState(false)
  return (
    <Stack>
      {children}
      <FormButton
        isLoading={isSubmitting}
        onClick={() => handleSubmit(email, pass, setSubmitting)}
      >
        Sign Up
      </FormButton>
    </Stack>
  )
}

export default Form

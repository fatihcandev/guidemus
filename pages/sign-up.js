import { initializeStore } from '../redux/store'
import { SignUpFormContainer } from '../redux/containers/sign-up-form'
import { useState } from 'react'
import SignUpImage from '../components/sign-up-image'

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [isEmailVerificationSent, setEmailVerificationSent] = useState(false)

  return (
    <div className="min-h-screen flex">
      <SignUpImage />
      <SignUpFormContainer
        isSubmitting={isSubmitting}
        setSubmitting={setSubmitting}
      />
    </div>
  )
}

export function getServerSideProps() {
  const reduxStore = initializeStore()
  return { props: { initialReduxState: reduxStore.getState() } }
}

export default SignUp

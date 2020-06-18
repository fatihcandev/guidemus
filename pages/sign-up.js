import { initializeStore } from '../redux/store'
import { SignUpFormContainer } from '../redux/containers/sign-up-form'
import { useState } from 'react'
import SignUpImage from '../components/sign-up-image'
import VerificationSent from '../components/verification-sent'

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [isEmailVerificationSent, setEmailVerificationSent] = useState(false)

  return (
    <div className="min-h-screen flex">
      <SignUpImage />
      <div className="p-4 flex flex-col justify-center mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        {isEmailVerificationSent ? (
          <VerificationSent />
        ) : (
          <SignUpFormContainer
            isSubmitting={isSubmitting}
            setSubmitting={setSubmitting}
            setEmailVerificationSent={setEmailVerificationSent}
          />
        )}
      </div>
    </div>
  )
}

export function getServerSideProps() {
  const reduxStore = initializeStore()
  return { props: { initialReduxState: reduxStore.getState() } }
}

export default SignUp

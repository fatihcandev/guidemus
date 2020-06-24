import { useState } from 'react'
import VerificationSent from '../components/verification-sent'
import SignUpForm from '../components/sign-up-form'
import cn from 'classnames'
import styles from '../styles/sign-up-img.module.css'

const SignUp = () => {
  const [isEmailVerificationSent, setEmailVerificationSent] = useState(false)

  return (
    <div className="min-h-screen flex">
      <div
        className={cn('hidden md:flex md:w-1/4 lg:w-1/3 xl:w-1/2', styles.img)}
      />
      <div className="p-4 flex flex-col justify-center mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        {isEmailVerificationSent ? (
          <VerificationSent />
        ) : (
          <SignUpForm setEmailVerificationSent={setEmailVerificationSent} />
        )}
      </div>
    </div>
  )
}

export default SignUp

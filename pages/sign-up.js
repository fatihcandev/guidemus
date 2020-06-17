import signUpImg from '../public/ball-shaped-blur-close-up-focus-346885.jpg?webp'
import Image from '../components/image'
import { initializeStore } from '../redux/store'
import { EmailInput, FormContainer } from '../redux/containers/email-input'
import { PasswordInput } from '../redux/containers/pass-input'
import TextBody from '../components/text-body'
import Stack from '../components/stack'
import SocialSignInButton from '../components/social-sign-in-button'
import NavItem from '../components/nav-item'
import { lazyLoad } from '../lazy-load/lazy-load-image'
import { useEffect } from 'react'

const SignUp = () => {
  useEffect(() => {
    lazyLoad()
  })

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex md:w-1/4 lg:w-1/3 xl:w-1/2">
        <Image
          src={signUpImg}
          dataSrc={signUpImg.src}
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-center mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <FormContainer>
          <SocialSignInButton platform="google" />
          <SocialSignInButton platform="facebook" />
          <TextBody className="mx-auto">OR</TextBody>
          <EmailInput ph="E-mail address" className="border py-2 pl-2" />
          <PasswordInput password ph="Password" className="border py-2 pl-2" />
          <Stack row gap={3} className="justify-center">
            <TextBody>Have an account?</TextBody>
            <NavItem className="font-bold hover:underline" href="/sign-in">
              Sign In
            </NavItem>
          </Stack>
        </FormContainer>
      </div>
    </div>
  )
}

export function getServerSideProps() {
  const reduxStore = initializeStore()
  return { props: { initialReduxState: reduxStore.getState() } }
}

export default SignUp

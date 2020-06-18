import VerificationSentImage from './verification-sent-image'
import Stack from './stack'
import TextBody from './text-body'
import NavItem from './nav-item'

const VerificationSent = () => (
  <Stack>
    <VerificationSentImage />
    <TextBody className="text-xl text-center">
      Thanks! Now, we need you to verify your e-mail address. Please check your
      inbox.
    </TextBody>
    <NavItem className="text-xl text-center font-bold" href="/sign-in">
      Go to sign in
    </NavItem>
  </Stack>
)

export default VerificationSent

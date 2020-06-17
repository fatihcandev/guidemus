import Button from './button'
import Google from './icons/google'
import Facebook from './icons/facebook'
import Stack from './stack'
import TextBody from './text-body'

const SocialSignInButton = ({ platform }) => (
  <Button
    className={`py-3 rounded-md text-white font-bold ${
      platform === 'google' ? 'bg-google' : 'bg-facebook'
    }`}
  >
    {platform === 'google' ? (
      <Stack row>
        <Google />
        <TextBody>Continue with Google</TextBody>
      </Stack>
    ) : (
      <Stack row>
        <Facebook />
        <TextBody>Continue with Facebook</TextBody>
      </Stack>
    )}
  </Button>
)

export default SocialSignInButton

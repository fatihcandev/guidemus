import Image from './image'
import signUpImg from '../public/ball-shaped-blur-close-up-focus-346885.jpg?webp'

const SignUpImage = () => (
  <div className="hidden md:flex md:w-1/4 lg:w-1/3 xl:w-1/2">
    <Image src={signUpImg} dataSrc={signUpImg.src} className="object-cover" />
  </div>
)

export default SignUpImage

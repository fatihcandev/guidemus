import Header from './header'
import TextBody from './text-body'
import Stack from './stack'
import NavItem from './nav-item'

const LandingNav = () => (
  <Header>
    <Stack row>
      <NavItem href="/sign-in">Sign In</NavItem>
      <NavItem href="/sign-up">Sign Up</NavItem>
      <NavItem href="/about">About</NavItem>
    </Stack>
  </Header>
)

export default LandingNav

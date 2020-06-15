import Header from './header'
import TextBody from './text-body'
import Stack from './stack'
import NavItem from './nav-item'

const LandingNav = () => (
  <Header>
    <Stack row gap={16}>
      <NavItem
        href="/sign-in"
        className="py-2 px-3 border border-blue-500 rounded-md transition-colors duration-300 text-blue-500
        hover:bg-blue-500 hover:text-white"
      >
        Sign In
      </NavItem>
      <NavItem
        href="/sign-up"
        className="py-2 px-3 bg-blue-500 rounded-md transition-colors duration-300 hover:bg-blue-700"
      >
        Sign Up
      </NavItem>
      <NavItem href="/about">About</NavItem>
    </Stack>
  </Header>
)

export default LandingNav
